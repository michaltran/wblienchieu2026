function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function doPost(e) {
  var out = (obj) =>
    ContentService.createTextOutput(JSON.stringify(obj))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");

  try {
    if (!e || !e.postData || !e.postData.contents)
      return out({ ok: false, message: "No payload" });

    var payload = JSON.parse(e.postData.contents);

    // Honeypot
    if (payload.company) return out({ ok: false, message: "Spam detected" });
    if (!payload.consent)
      return out({ ok: false, message: "Consent required" });

    // Validate required ratings
    var qs = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];
    qs.forEach(function (k) {
      var v = payload.ratings && payload.ratings[k];
      if (!(v >= 1 && v <= 5)) throw new Error("Invalid rating: " + k);
    });

    var props = PropertiesService.getScriptProperties();
    var SHEET_ID = props.getProperty("SHEET_ID");
    var ADMIN_EMAIL = props.getProperty("ADMIN_EMAIL");
    if (!SHEET_ID) throw new Error("Missing SHEET_ID in Script Properties");
    if (!ADMIN_EMAIL) ADMIN_EMAIL = "";

    var lock = LockService.getScriptLock();
    lock.waitLock(20000);

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var responses = ensureSheet_(ss, "RESPONSES", getHeaders_());
    ensureReport_(ss);

    var submissionId = "KS-" + Utilities.getUuid().slice(0, 8).toUpperCase();
    var now = new Date();

    var row = buildRow_(now, submissionId, payload);
    responses.appendRow(row);

    lock.releaseLock();

    // Emails
    var respondentEmail = (payload.email || "").trim();
    if (respondentEmail) {
      sendRespondentEmail_(respondentEmail, submissionId, now, payload);
    }
    if (ADMIN_EMAIL) {
      sendAdminEmail_(ADMIN_EMAIL, submissionId, now, payload, ss.getUrl());
    }

    return out({ ok: true, submissionId: submissionId });
  } catch (err) {
    try {
      LockService.getScriptLock().releaseLock();
    } catch (e2) {}
    return out({ ok: false, message: String(err) });
  }
}

function getHeaders_() {
  return [
    "Timestamp",
    "SubmissionId",
    "Name",
    "Phone",
    "Email",
    "AgeGroup",
    "Gender",
    "VisitDate",
    "VisitType",
    "Department",
    "WaitingTime",
    "Booked",
    "Q1_Reception",
    "Q2_StaffAttitude",
    "Q3_DoctorExplain",
    "Q4_WaitTime",
    "Q5_Facilities",
    "Q6_Procedure",
    "Q7_Pharmacy",
    "Q8_Overall",
    "Best",
    "Improve",
    "Suggest",
    "UserAgent",
    "Source",
  ];
}

function ensureSheet_(ss, name, headers) {
  var sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    sh.setFrozenRows(1);
  }
  return sh;
}

function ensureReport_(ss) {
  var sh = ss.getSheetByName("REPORT");
  if (!sh) sh = ss.insertSheet("REPORT");
  if (sh.getLastRow() > 0) return;

  sh.getRange("A1").setValue("BÁO CÁO KHẢO SÁT HÀI LÒNG");
  sh.getRange("A3").setValue("Tổng lượt khảo sát");
  sh.getRange("B3").setFormula("=COUNTA(RESPONSES!B:B)-1");

  sh.getRange("A5").setValue("Điểm trung bình");
  sh.getRange("A6").setValue("Tiếp đón & hướng dẫn");
  sh.getRange("B6").setFormula("=AVERAGE(RESPONSES!M:M)");
  sh.getRange("A7").setValue("Thái độ nhân viên");
  sh.getRange("B7").setFormula("=AVERAGE(RESPONSES!N:N)");
  sh.getRange("A8").setValue("Bác sĩ giải thích");
  sh.getRange("B8").setFormula("=AVERAGE(RESPONSES!O:O)");
  sh.getRange("A9").setValue("Thời gian chờ");
  sh.getRange("B9").setFormula("=AVERAGE(RESPONSES!P:P)");
  sh.getRange("A10").setValue("Cơ sở vật chất");
  sh.getRange("B10").setFormula("=AVERAGE(RESPONSES!Q:Q)");
  sh.getRange("A11").setValue("Quy trình thủ tục");
  sh.getRange("B11").setFormula("=AVERAGE(RESPONSES!R:R)");
  sh.getRange("A12").setValue("Nhà thuốc");
  sh.getRange("B12").setFormula("=AVERAGE(RESPONSES!S:S)");
  sh.getRange("A13").setValue("Hài lòng chung");
  sh.getRange("B13").setFormula("=AVERAGE(RESPONSES!T:T)");

  sh.getRange("D5").setValue("Thống kê theo hình thức");
  sh.getRange("D6").setFormula(
    "=QUERY(RESPONSES!I:I,\"select I, count(I) where I is not null group by I label count(I) 'Số lượt'\",1)"
  );

  sh.getRange("D12").setValue("Thống kê theo khoa/phòng");
  sh.getRange("D13").setFormula(
    "=QUERY(RESPONSES!J:J,\"select J, count(J) where J is not null group by J label count(J) 'Số lượt'\",1)"
  );

  sh.autoResizeColumns(1, 8);
}

function buildRow_(now, submissionId, p) {
  var r = p.ratings || {};
  return [
    now,
    submissionId,
    p.name || "",
    p.phone || "",
    p.email || "",
    p.ageGroup || "",
    p.gender || "",
    p.visitDate || "",
    p.visitType || "",
    p.department || "",
    p.waitingTime || "",
    p.booked ? "Có" : "Không",
    r.q1,
    r.q2,
    r.q3,
    r.q4,
    r.q5,
    r.q6,
    r.q7,
    r.q8,
    p.best || "",
    p.improve || "",
    p.suggest || "",
    p.userAgent || "",
    p.source || "web",
  ];
}

function sendRespondentEmail_(to, submissionId, now, p) {
  var subject =
    "Xác nhận đã gửi khảo sát hài lòng người bệnh — " + submissionId;
  var r = p.ratings || {};
  var body =
    "Cảm ơn Quý khách đã gửi khảo sát.\n\n" +
    "Mã khảo sát: " +
    submissionId +
    "\n" +
    "Thời gian: " +
    now +
    "\n\n" +
    "Điểm hài lòng chung: " +
    r.q8 +
    "/5\n\n" +
    "Hotline hỗ trợ: 0905453677\n" +
    "TRUNG TÂM Y TẾ KHU VỰC LIÊN CHIỂU\n\n" +
    "Lưu ý: Nội dung xác nhận mang tính thông báo, không thay thế tư vấn y tế.";
  MailApp.sendEmail(to, subject, body);
}

function sendAdminEmail_(to, submissionId, now, p, sheetUrl) {
  var subject = "Có khảo sát mới — " + submissionId;
  var body =
    "Có khảo sát mới.\n\n" +
    "Mã: " +
    submissionId +
    "\n" +
    "Thời gian: " +
    now +
    "\n" +
    "Khoa/phòng: " +
    (p.department || "") +
    "\n" +
    "Hình thức: " +
    (p.visitType || "") +
    "\n" +
    "Sheet: " +
    sheetUrl +
    "\n\n" +
    "Chi tiết:\n" +
    JSON.stringify(p, null, 2);
  MailApp.sendEmail(to, subject, body);
}
