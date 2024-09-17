"use client"

import Gun from "gun"

export const db = typeof window !== "undefined" ? Gun(window.location.origin + "/gun") : Gun()

