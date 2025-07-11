// assessment-system/data.js

module.exports = [
  // Sample Dataset 1: Health & Fitness Assessment (as_hr_02)
  {
    "session_id": "session_001",
    "accuracy": 80,
    "assessmentResultId": "-OK76ANqAq9pvKSl3ZoN",
    "assessment_id": "as_hr_02",
    "bodyCompositionData": {
      "AGR": "1.687",
      "Age": "43",
      "BFC": "29.754",
      "BMI": "33.145",
      "BMR": "2054.217",
      "FM": "33.027",
      "FMI": "9.862",
      "HeightM": "184.091",
      "LM": "77.973",
      "LMI": "23.283",
      "M_Age": "48",
      "WHGR": "0.564",
      "WHR": "0.926"
    },
    "exercises": [
      {
        "id": 235,
        "name": "Jog test",
        "setList": [
          {
            "time": 61
          }
        ]
      }
    ],
    "finalPainScore": "pending",
    "gender": "male",
    "height": 183,
    "initialPainScore": 0,
    "initialVAS": 0,
    "isLandmarksUploaded": false,
    "laterPainScore": "pending",
    "reportLink": "https://storage.googleapis.com/allycare-prod.appspot.com/fWOr2t8S94e0BIIlcUKkh7m629d2/GthcXa9eHlfnU2BGIIerrAoDZMH2/-OK76AihRKe9xdHFWjuY.pdf?...",
    "reportsDataId": "-OK76BS5l9VB-QMbIOEo",
    "timeElapsed": 193,
    "timestamp": 1740671597044,
    "vitalsMap": {
      "vitals": {
        "bp_dia": 82,
        "bp_sys": 124,
        "heart_rate": 75,
        "oxy_sat_prcnt": 96,
        "resp_rate": 21
      },
      "wellness_score": 84
    },
    "weight": 111
  },

  // Sample Dataset 2: Cardiac Assessment (as_card_01)
  {
    "session_id": "session_002",
    "accuracy": 17,
    "assessmentResultId": "-OTafA4SqUgE6Y5xrqiI",
    "assessment_id": "as_card_01",
    "bodyCompositionData": {
      "AGR": "0.90",
      "BFC": "-0.90",
      "BMI": "9.51",
      "BMR": "995.39",
      "FM": "-0.18",
      "FMI": "-0.09",
      "LM": "20.18",
      "LMI": "9.60",
      "M_Age": "15",
      "WHGR": "0.37",
      "WHR": "1.01"
    },
    "exercises": [
      {
        "id": 235,
        "name": "Jog test",
        "setList": [
          {
            "time": 47
          }
        ]
      }
    ],
    "finalPainScore": "pending",
    "gender": "male",
    "height": 145,
    "initialPainScore": 0,
    "initialVAS": 0,
    "isLandmarksUploaded": false,
    "laterPainScore": "pending",
    "reportLink": "https://firebasestorage.googleapis.com/v0/b/rootallyai.appspot.com/o/reports%2FW2g8IThefhPc3SNAv46x2TT3hOB3%2FzHSezoe7w3exoakaC4dGGMneB0u2%2Fgugh_7713.pdf?...",
    "timeElapsed": 67,
    "timestamp": 1750848025493,
    "vitalsMap": {
      "vitals": {
        "bp_dia": 75,
        "bp_sys": 110,
        "heart_rate": 66,
        "oxy_sat_prcnt": 95,
        "resp_rate": 19
      },
      "wellness_score": 84
    },
    "weight": 20
  }
];
