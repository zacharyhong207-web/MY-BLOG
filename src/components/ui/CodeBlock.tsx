"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface Props {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock = ({ code, language = "bash", title = "Terminal" }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>
          <span className="ml-2 text-xs font-mono text-zinc-400">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          {copied ? <Check className="text-emerald-400" size={12} /> : <Copy size={12} />}
          <span>{copied ? "已复制" : "复制"}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};
