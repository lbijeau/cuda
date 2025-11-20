# Google Apps Script Setup

## Instructions

1. Create a new Google Sheet for data collection
2. Name it "Amphibian Road Crossings - Phase 1 Data"
3. Tools → Script editor
4. Copy `google-apps-script.js` into the script editor
5. Save and deploy as web app
6. Copy the deployment URL
7. Update `APPS_SCRIPT_URL` in both `field-form/field-form.js` and `detail-form/detail-form.js`

## Endpoints

- `POST ?action=submit` - Submit field observations
- `GET ?action=getPatrols&observer=name` - Fetch patrols for observer
- `POST ?action=update` - Update patrol details
