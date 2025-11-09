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
    <div className="border border-gray-700 rounded-lg p-4 my-6 bg-[#0d0d0d]">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-gray-200">{label}</span>
        <button
          onClick={copy}
          className="text-xs px-2 py-1 rounded border border-gray-600 hover:bg-gray-800"
        >
          Copy
        </button>
      </div>

      <pre className="text-sm overflow-x-auto whitespace-pre p-3 rounded bg-black border border-gray-800">
        {code}
      </pre>
    </div>
  );
}
