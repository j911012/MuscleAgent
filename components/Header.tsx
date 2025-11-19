"use client";

import { CircleUser, Bell, Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-red-900/40 bg-[#050509]/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        {/* left: logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-[4px_4px_10px_#020306,-3px_-3px_8px_#1a0b10]">
            <span className="text-sm font-bold text-slate-50">MA</span>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-slate-50 tracking-wide">
              MuscleAgent
            </span>
          </div>
        </div>

        {/* right: icons */}
        <div className="flex items-center gap-3 text-slate-300">
          <HeaderIcon>
            <CircleUser />
          </HeaderIcon>
          <HeaderIcon notify>
            <Bell />
          </HeaderIcon>
          <HeaderIcon>
            <Settings />
          </HeaderIcon>
        </div>
      </div>
    </header>
  );
};

export const HeaderIcon = ({
  children,
  notify = false,
}: {
  children: React.ReactNode;
  notify?: boolean;
}) => {
  return (
    <button className="relative flex h-8 w-8 items-center justify-center rounded-2xl bg-[#090b10] shadow-[4px_4px_10px_#020306,-3px_-3px_8px_#151827] hover:bg-[#0c0f17] transition">
      {children}
      {notify && (
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
      )}
    </button>
  );
};
