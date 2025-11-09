"use client";
import React from "react";

export default function TopicSelector({ topics, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3 my-6">
      {topics.map((t) => (
        <button
          key={t.key}
          onClick={() => onSelect(t.key)}
          className="border border-gray-600 p-3 rounded hover:bg-gray-900 transition"
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
