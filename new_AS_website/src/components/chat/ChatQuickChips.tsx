import React, { useMemo } from 'react';

interface ChipItem {
  label: string;
  query: string;
}

interface ChatQuickChipsProps {
  onSelectChip: (query: string) => void;
  pathname?: string;
}

export const ChatQuickChips: React.FC<ChatQuickChipsProps> = ({ onSelectChip, pathname = '' }) => {
  const chips: ChipItem[] = useMemo(() => {
    const p = pathname.toLowerCase();

    if (p.includes('/careers')) {
      return [
        { label: '💼 Open roles', query: 'Are you hiring remote engineers?' },
        { label: '🛠️ Tech stack', query: 'What technologies does Autoflow Solutions use?' },
        { label: '📝 How to apply', query: 'How does the application process work?' }
      ];
    }
    if (p.includes('/services') || p.includes('/lead-handling') || p.includes('/workflow-automation')) {
      return [
        { label: '🎯 Lead Handling', query: 'How does the Lead Handling package work?' },
        { label: '🔄 CRM Sync', query: 'What CRM integrations do you support?' },
        { label: '🤖 Digital Workers', query: 'Tell me about AI Task Execution' },
        { label: '💰 Pricing', query: 'What are your standard package prices?' }
      ];
    }
    if (p.includes('/case-studies')) {
      return [
        { label: '🏥 Clinic OS', query: 'Tell me about the Yap Chan Kor clinic case study' },
        { label: '🚗 Fleet & Booking', query: 'How did Rent A Car in Kenya use AI?' },
        { label: '🌾 Agtech AI', query: 'Tell me about the STEM Agro farm intelligence build' },
        { label: '📑 Tax Automation', query: 'How did the accounting practice save time?' }
      ];
    }
    if (p.includes('/roi') || p.includes('/audit')) {
      return [
        { label: '⏱️ Time savings', query: 'How is automation ROI calculated?' },
        { label: '🔍 Process audit', query: 'Can Autoflow Solutions audit our workflows?' },
        { label: '📅 Book a call', query: 'How do I book a strategy call?' }
      ];
    }

    // Default / Homepage chips
    return [
      { label: '⚡ What we do', query: 'What services does Autoflow Solutions offer?' },
      { label: '📈 Case studies', query: 'What results have your clients achieved?' },
      { label: '💰 Pricing tiers', query: 'What are your standard package prices?' },
      { label: '📅 Book a call', query: 'How do I book a discovery call?' }
    ];
  }, [pathname]);

  return (
    <div className="af-chat-chips-container" role="toolbar" aria-label="Quick inquiry options">
      {chips.map((chip) => (
        <button
          key={chip.label}
          type="button"
          className="af-chat-chip"
          onClick={() => onSelectChip(chip.query)}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
};
