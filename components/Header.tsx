"use client";

import { CircleUser, Bell, Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-red-800 bg-[#212121]">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        {/* left: logo */}
        <div className="flex items-center gap-2">
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
    <button
      className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#212121] shadow-[5px_5px_10px_#111111,-5px_-5px_10px_#323232]
    hover:shadow-[inset_5px_5px_10px_#111111,inset_-5px_-5px_10px_#323232] hover:translate-y-[1px]
    transition-all duration-200 cursor-pointer"
    >
      {children}
      {notify && (
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
      )}
    </button>
  );
};
