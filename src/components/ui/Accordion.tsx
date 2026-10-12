import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({ id, title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${id}`}
          id={`accordion-button-${id}`}
          className="w-full py-4 text-left flex items-center justify-between gap-4 text-base font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer"
        >
          <span className="text-balance">{title}</span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 text-neutral-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-neutral-900 dark:text-neutral-100' : ''
            }`}
            strokeWidth={1.5}
          />
        </button>
      </h3>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-button-${id}`}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
        }`}
      >
        <div className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {children}
        </div>
      </div>
    </div>
  );
}

export interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
