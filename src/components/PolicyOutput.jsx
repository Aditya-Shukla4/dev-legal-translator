"use client";
import React from "react";

export default function PolicyOutput({ template, values }) {
  let text = template;
  Object.keys(values).forEach((key) => {
    text = text.replace(`{{${key}}}`, values[key] || "");
  });

  const copy = () => navigator.clipboard.writeText(text);

  return (
    <div className="border border-gray-700 rounded p-3 my-4">
      <button
        onClick={copy}
        className="text-sm px-2 py-1 border border-gray-600 rounded hover:bg-gray-800 mb-3"
      >
        Copy Policy
      </button>
      <pre className="whitespace-pre-wrap text-sm">{text}</pre>
    </div>
  );
}
