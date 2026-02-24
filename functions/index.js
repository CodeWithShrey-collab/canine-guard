const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

admin.initializeApp();
const db = admin.firestore();

exports.fillAreaIfMissing = onDocumentCreated(
  "incidents/{incidentId}",
  async (event) => {
    const snap = event.data;
    if (!snap) return;

    const data = snap.data();
    if (!data.latitude || !data.longitude) return;
    if (data.area) return; // already filled

    const lat = data.latitude;
    const lon = data.longitude;

    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=14&addressdetails=1`;
      const response = await fetch(url, {
        headers: { "User-Agent": "CanineGuard/1.0" },
      });
      const json = await response.json();

      const area =
        json.address?.neighbourhood ||
        json.address?.suburb ||
        json.address?.city ||
        "Unknown";

      await db.collection("incidents").doc(event.params.incidentId).update({
        area,
      });

      console.log(
        `Area filled for incident ${event.params.incidentId}: ${area}`
      );
    } catch (err) {
      console.error("Error fetching area:", err);
    }
  }
);
