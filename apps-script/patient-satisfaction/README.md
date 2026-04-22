# Patient Satisfaction Survey - Backend Setup

1.  **Create Google Sheet**

    - Create a new Google Sheet.
    - Copy the `SHEET_ID` from the URL.

2.  **Create Apps Script Project**

    - Go to [script.google.com](https://script.google.com/home).
    - New Project.
    - Copy contents of `Code.gs` and `appsscript.json` (Show manifest file in settings to edit `appsscript.json`).

3.  **Project Settings**

    - File > Project Properties > Script Properties.
    - Add Row: `SHEET_ID` = `<your_sheet_id>`
    - Add Row: `ADMIN_EMAIL` = `trungtamytelienchieu@danang.gov.vn` (or your email)

4.  **Deploy as Web App**

    - Deploy > New Deployment.
    - Select type: Web app.
    - Description: "v1".
    - Execute as: **Me** (your account).
    - Who has access: **Anyone** (important for frontend communication).
    - Click Deploy.
    - Copy the **Web App URL**.

5.  **Frontend Config**
    - Paste the Web App URL into `VITE_SURVEY_ENDPOINT` in your frontend environment variables (or directly in `src/lib/api/surveyApi.ts` for testing).
