// Firebase ist optional: ohne Umgebungsvariablen läuft Apple Guide vollständig mit dem lokalen Katalog.
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useEffect, useState } from "react";

export const VERSION = "2.0";

export const firebaseConfigured = Boolean(process.env.PROJECTID && process.env.APIKEY);

let db = null;
if (firebaseConfigured) {
  const app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp({
        apiKey: process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,
        experimentalForceLongPolling: true,
        useFetchStreams: false,
      });
  db = app.firestore();
}

// Punkte aus Firestore (Sammlung "products": { name, points }) überschreiben die Katalogwerte, wenn der Name übereinstimmt.
export function usePointsOverride() {
  const [overrides, setOverrides] = useState(null);
  useEffect(() => {
    if (!db) return;
    let cancelled = false;
    db.collection("products")
      .get()
      .then((snap) => {
        if (cancelled) return;
        const map = {};
        snap.forEach((doc) => {
          const data = doc.data();
          const points = parseInt(data.points, 10);
          if (data.name && !Number.isNaN(points)) map[String(data.name).trim().toLowerCase()] = points;
        });
        setOverrides(map);
      })
      .catch(() => setOverrides(null));
    return () => {
      cancelled = true;
    };
  }, []);
  return overrides;
}

export function applyOverrides(devices, overrides) {
  if (!overrides) return devices;
  return devices.map((d) => {
    const p = overrides[d.name.trim().toLowerCase()];
    return p === undefined ? d : { ...d, points: Math.max(0, Math.min(100, p)) };
  });
}

export const getProduct = async (id) => {
  if (!db) return null;
  const product = await db.collection("products").doc(id).get();
  return product.exists ? product.data() : null;
};

export default db;
