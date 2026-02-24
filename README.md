# 🐶 Canine Guard

A Smart Stray Dog Bite Reporting & Early Response System built using Firebase and Cloud Functions.

Canine Guard enables citizens to report stray dog bite incidents in real time, helping authorities respond faster and monitor high-risk zones.

---

## 🚀 Features

- 🔐 Firebase Authentication (secure user access)
- 📍 Real-time GPS location capture
- 🌍 Reverse Geocoding using OpenStreetMap
- 🗺 Location-based incident reporting
- ☁️ Firebase Cloud Functions backend
- 🔔 Admin verification protection
- 🛡 AuthGuard route protection
- 📊 Structured Firestore data storage

---

## 🧠 Problem It Solves

Stray dog bite incidents often go unreported or are reported late.  
This system enables real-time reporting with exact location data, allowing:

- Faster response
- Data-driven decision making
- Risk hotspot monitoring
- Citizen-authority collaboration

---

## 🏗 Tech Stack

Frontend:
- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Web SDK

Backend:
- Firebase Cloud Functions (Node.js)
- Firebase Admin SDK
- OpenStreetMap Reverse Geocoding API

Database:
- Firebase Firestore

Hosting:
- Firebase Hosting

---

## 📁 Project Structure
canine-guard/
│
├── index.html
├── report.html
├── auth-guard.js
├── firebase-config.js
├── firebase.json
│
├── functions/
│ ├── index.js
│ ├── package.json
│
└── README.md

---

## 🔄 How It Works (System Flow)

1. User logs in via Firebase Authentication
2. User submits dog bite incident
3. System captures GPS coordinates
4. Cloud Function performs reverse geocoding
5. Address is attached to incident report
6. Report stored securely in Firestore

---

## 🔐 Security

- Firebase Authentication ensures authorized access
- No hardcoded private keys exposed
- Cloud Functions use secure Firebase credentials
- Proper Firestore rule-based access control

---

## 📌 Future Improvements

- AI-based hotspot prediction
- Admin dashboard analytics
- Real-time alert notifications
- Image upload support
- ML-powered incident clustering

---

## 👨‍💻 Author

Developed as part of a Smart City / Safety Monitoring concept project.

---
## 📸 Screenshots

### Incident Reporting Page


## ⭐ If You Like This Project

Give it a star on GitHub ⭐
