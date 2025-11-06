// Centralized Firebase initialization with SSR-safe analytics helpers
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";

// Note: Firebase web config values are not secrets and can be shipped to the client.
// You may optionally move these to environment variables prefixed with NEXT_PUBLIC_*
// if you prefer (e.g., NEXT_PUBLIC_FIREBASE_API_KEY, etc.).
const firebaseConfig = {
  apiKey: "AIzaSyBDC2gAGukmEpQGEAvaB__k7DTDbbzegrg",
  authDomain: "sunshare-c24f4.firebaseapp.com",
  projectId: "sunshare-c24f4",
  // storageBucket in Firebase typically ends with .appspot.com; please double-check in the console
  // If uploads fail, verify the bucket name and update here accordingly.
  storageBucket: "sunshare-c24f4.firebasestorage.app",
  messagingSenderId: "744801609997",
  appId: "1:744801609997:web:81e9f7decd191f123ea844",
  measurementId: "G-KL47ZY833K",
};

export const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Lazy, client-only analytics initialization to avoid SSR/window issues
export async function getAnalyticsIfSupported() {
  if (typeof window === "undefined") return null;
  try {
    const { isSupported, getAnalytics } = await import("firebase/analytics");
    const supported = await isSupported();
    if (!supported) return null;
    return getAnalytics(app);
  } catch (err) {
    // Silently ignore analytics load errors; app should work without analytics
    return null;
  }
}

export type { Analytics } from "firebase/analytics";
