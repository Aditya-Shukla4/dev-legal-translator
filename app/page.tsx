"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SnippetBlock from "../components/SnippetBlock";
import PolicyOutput from "../components/PolicyOutput";

import cookies from "../data/cookies.json";
import privacy from "../data/privacy.json";
import dataDelete from "../data/data-delete.json";
import logging from "../data/logging.json";

export default function Home() {
  const topics = [
    { key: "cookies", label: "Cookies Consent" },
    { key: "privacy", label: "Privacy Policy" },
    { key: "delete", label: "Data Delete / Export" },
    { key: "logging", label: "Secure Logging" },
  ];

  const [selected, setSelected] = useState<string | null>(null);
  const [policyValues, setPolicyValues] = useState({
    appName: "",
    contactEmail: "",
  });

  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar topics={topics} selected={selected} onSelect={setSelected} />
      <main className="flex-1 p-8 pl-[190px] max-w-[900px]">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3">
          Dev Legal Translator 🚀
        </h1>
        <p className="text-gray-400 leading-relaxed mb-6">
          Convert compliance → Code, fast.
        </p>

        {selected === "cookies" && (
          <>
            <h2 className="text-2xl font-semibold">{cookies.title}</h2>
            <p className="text-gray-300 mt-2">{cookies.why}</p>
            <ul className="list-disc ml-6 my-4">
              {cookies.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {cookies.snippets.map((s, i) => (
              <SnippetBlock key={i} label={s.label} code={s.code} />
            ))}
          </>
        )}

        {selected === "privacy" && (
          <>
            <h2 className="text-2xl font-semibold">{privacy.title}</h2>
            <p className="text-gray-300 mt-2">{privacy.why}</p>
            {privacy.inputs.map((input) => (
              <input
                key={input.key}
                placeholder={input.label}
                className="w-full p-2 bg-black border border-gray-600 rounded my-2"
                onChange={(e) =>
                  setPolicyValues({
                    ...policyValues,
                    [input.key]: e.target.value,
                  })
                }
              />
            ))}
            <PolicyOutput template={privacy.template} values={policyValues} />
          </>
        )}

        {selected === "delete" && (
          <>
            <h2 className="text-2xl font-semibold">{dataDelete.title}</h2>
            <p className="text-gray-300 mt-2">{dataDelete.why}</p>
            <ul className="list-disc ml-6 my-4">
              {dataDelete.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {dataDelete.snippets.map((s, i) => (
              <SnippetBlock key={i} label={s.label} code={s.code} />
            ))}
          </>
        )}

        {selected === "logging" && (
          <>
            <h2 className="text-2xl font-semibold">{logging.title}</h2>
            <p className="text-gray-300 mt-2">{logging.why}</p>
            <ul className="list-disc ml-6 my-4">
              {logging.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {logging.snippets.map((s, i) => (
              <SnippetBlock key={i} label={s.label} code={s.code} />
            ))}
          </>
        )}
      </main>
    </div>
  );
}
