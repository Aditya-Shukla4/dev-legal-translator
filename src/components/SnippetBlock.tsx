"use client";
import React from "react";

export default function SnippetBlock({
  label,
  code,
}: {
  label: string;
  code: string;
}) {
  const copy = () => navigator.clipboard.writeText(code);

  return (
    <div className="border border-gray-700 rounded p-3 my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{label}</span>
        <button
          onClick={copy}
          className="text-sm px-2 py-1 border border-gray-600 rounded hover:bg-gray-800"
        >
          Copy
        </button>
      </div>
      <pre className="text-sm whitespace-pre-wrap">{code}</pre>
    </div>
  );
}
