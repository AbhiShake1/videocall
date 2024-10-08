"use client"

import Gun from "gun"
import { useEffect, useState } from "react";

export const db = typeof window !== "undefined" ? Gun(window.location.origin + "/gun") : Gun()

export function useDb<T>(table: string): [T[], Pick<ReturnType<typeof db.get>, "set">] {
  const [data, setData] = useState<Record<string, T>>({});
  const handler = db.get(table)
  useEffect(() => {
    handler.map().on((data) => setData(p => ({ ...p, [data._["#"]]: data })));
  }, []);
  return [Object.values(data), handler];
}


