export interface SurveyPayload {
  name?: string;
  phone?: string;
  email?: string;
  ageGroup?: string;
  gender?: string;
  visitDate: string;
  visitType: string; // BHYT, Dịch vụ, Cấp cứu, Khác
  department: string;
  waitingTime: string;
  booked: boolean;
  ratings: {
    q1: number; // Tiếp đón
    q2: number; // Thái độ
    q3: number; // Bác sĩ
    q4: number; // Chờ khám
    q5: number; // Cơ sở vật chất
    q6: number; // Quy trình
    q7: number; // Nhà thuốc
    q8: number; // Hài lòng chung
  };
  best?: string;
  improve?: string;
  suggest?: string;
  consent: boolean;
  // Anti-spam
  company?: string; // Honeypot
  userAgent?: string;
}

export interface SurveyResponse {
  ok: boolean;
  submissionId?: string;
  message?: string;
}

// Config via env or hardcoded for now (User needs to set this)
const ENDPOINT = import.meta.env.VITE_SURVEY_ENDPOINT || "";

export async function submitSurvey(payload: SurveyPayload): Promise<SurveyResponse> {
  if (!ENDPOINT) {
    console.warn("VITE_SURVEY_ENDPOINT not set. Mocking success for demo.");
    await new Promise(r => setTimeout(r, 1500));
    return { ok: true, submissionId: "DEMO-" + Math.floor(Math.random()*10000) };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        ...payload,
        userAgent: navigator.userAgent
      }),
      // mode: "no-cors" is NOT used because we handle CORS properly in GAS with doOptions
      // but if GAS is restricting it, we might need text/plain content type trick
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      }
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Survey submit error:", error);
    return { ok: false, message: "Network error" };
  }
}
