"use client";

import { useEffect } from "react";
import { getAnalyticsIfSupported } from "@/lib/firebase";

// Mount-only component to initialize Firebase Analytics on the client
export default function FirebaseAnalytics() {
  useEffect(() => {
    getAnalyticsIfSupported();
  }, []);
  return null;
}
