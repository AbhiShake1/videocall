"use client";

import { useState } from "react";

import { useDb } from "@/db";

export function LatestPost() {
  const [name, setName] = useState("");
  const [posts, postHandler] = useDb<{ name: string }>("postss");

  return (
    <div className="w-full max-w-xs">
      {posts ? (
        <div>{Object.values(posts).map(p => p.name).join(", ")}</div>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postHandler.set({ name })
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
