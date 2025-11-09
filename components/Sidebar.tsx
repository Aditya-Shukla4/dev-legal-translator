"use client";

interface Topic {
  key: string;
  label: string;
}

interface SidebarProps {
  topics: Topic[];
  selected: string | null;
  onSelect: (key: string) => void;
}

export default function Sidebar({ topics, selected, onSelect }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-full w-[160px] bg-[#111] border-r border-neutral-800 p-5 shadow-xl">
      <h2 className="font-bold text-lg mb-4">Topics</h2>

      <div className="flex flex-col gap-2">
        {topics.map((t) => (
          <button
            key={t.key}
            onClick={() => onSelect(t.key)}
            className={`px-3 py-2 rounded text-left transition border text-sm ${
              selected === t.key
                ? "bg-purple-600 border-purple-500 text-white"
                : "bg-neutral-900 border-neutral-700 text-gray-300 hover:bg-neutral-800"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
