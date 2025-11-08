"use client";
import { useState } from "react";
import TopicSelector from "../components/TopicSelector";
import SnippetBlock from "../components/SnippetBlock";
import cookies from "../data/cookies.json";
import privacy from "../data/privacy.json";
import PolicyOutput from "../components/PolicyOutput";
import dataDelete from "../data/data-delete.json";

export default function Home() {
  const topics = [
    { key: "cookies", label: "Cookies Consent" },
    { key: "privacy", label: "Privacy Policy" },
    { key: "delete", label: "Data Delete / Export" },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  const [policyValues, setPolicyValues] = useState({
    appName: "",
    contactEmail: "",
  });

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Dev Legal Translator 🚀</h1>
      <p className="text-gray-400 mt-1">Convert compliance → Code, fast.</p>

      <TopicSelector topics={topics} onSelect={setSelected} />

      {/* Cookies Topic */}
      {selected === "cookies" && (
        <>
          <h2 className="text-2xl font-semibold mt-6">{cookies.title}</h2>
          <p className="text-gray-300 mt-2">{cookies.why}</p>

          <ul className="list-disc ml-6 my-4">
            {cookies.checklist.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {cookies.snippets.map(
            (s: { label: string; code: string }, i: number) => (
              <SnippetBlock key={i} label={s.label} code={s.code} />
            )
          )}
        </>
      )}

      {/* Privacy Topic */}
      {selected === "privacy" && (
        <>
          <h2 className="text-2xl font-semibold mt-6">{privacy.title}</h2>
          <p className="text-gray-300 mt-2">{privacy.why}</p>

          {privacy.inputs.map((input: { key: string; label: string }) => (
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

      {/*Delete API */}
      {selected === "delete" && (
        <>
          <h2 className="text-2xl font-semibold mt-6">{dataDelete.title}</h2>
          <p className="text-gray-300 mt-2">{dataDelete.why}</p>

          <ul className="list-disc ml-6 my-4">
            {dataDelete.checklist.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {dataDelete.snippets.map(
            (s: { label: string; code: string }, i: number) => (
              <SnippetBlock key={i} label={s.label} code={s.code} />
            )
          )}
        </>
      )}
    </div>
  );
}
