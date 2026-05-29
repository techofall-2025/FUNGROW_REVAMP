"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, items.length);
  }, [items]);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = (index + 1) % items.length;
        buttonRefs.current[nextIndex]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex = (index - 1 + items.length) % items.length;
        buttonRefs.current[prevIndex]?.focus();
        break;
      case "Home":
        e.preventDefault();
        buttonRefs.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        buttonRefs.current[items.length - 1]?.focus();
        break;
      case "Escape":
        if (openIndex === index) {
          setOpenIndex(null);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-btn-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-300 bg-zinc-900 overflow-hidden ${
              isOpen
                ? "border-brand-green/40 shadow-[0_0_20px_rgba(0,200,83,0.06)] bg-zinc-900/90"
                : "border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900"
            }`}
          >
            <h3 className="m-0">
              <button
                ref={(el) => { buttonRefs.current[index] = el; }}
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans font-medium text-base md:text-lg text-white hover:text-brand-green transition-colors focus:outline-none focus:text-brand-green focus:bg-zinc-800/20"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-brand-green" : ""
                  }`}
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                maxHeight: isOpen ? "300px" : "0px",
                opacity: isOpen ? 1 : 0
              }}
              className="transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="px-6 pb-6 text-sm md:text-base leading-relaxed text-gray-400 border-t border-zinc-800/40 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
