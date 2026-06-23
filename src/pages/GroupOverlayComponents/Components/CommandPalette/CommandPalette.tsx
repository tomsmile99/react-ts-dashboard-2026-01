import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Search } from "lucide-react";

export type CommandItem = {
  id: string;
  title: string;
  description?: string;
  onSelect: () => void;
};

type CommandPaletteProps = {
  open: boolean;
  commands: CommandItem[];
  onClose: () => void;
};

export function CommandPalette({
  open,
  commands,
  onClose,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    if (!query) return commands;

    return commands.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [commands, query]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((prev) =>
          Math.min(prev + 1, filteredCommands.length - 1)
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }

      if (event.key === "Enter") {
        event.preventDefault();

        const item = filteredCommands[selectedIndex];

        if (item) {
          item.onSelect();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredCommands, selectedIndex, onClose, open]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedIndex(0);
  }, [query]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute w-full max-w-2xl px-4 -translate-x-1/2 left-1/2 top-24">
        <div className="overflow-hidden bg-white border shadow-2xl rounded-3xl border-slate-200 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-slate-700">
            <Search size={20} className="text-slate-400" />

            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาเมนู..."
              className="w-full bg-transparent outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div className="max-h-[400px] overflow-y-auto p-2">
            {filteredCommands.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  item.onSelect();
                  onClose();
                }}
                className={`
                  w-full rounded-xl px-4 py-3 text-left transition
                  ${
                    selectedIndex === index
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                `}
              >
                <div className="font-medium">
                  {item.title}
                </div>

                {item.description && (
                  <div className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </div>
                )}
              </button>
            ))}

            {filteredCommands.length === 0 && (
              <div className="p-6 text-center text-slate-500">
                ไม่พบข้อมูล
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}