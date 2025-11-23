"use client";

import { CircleUser, Bell, Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-white/10 bg-[#18181b]">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-semibold tracking-wide text-slate-50">
              MuscleAgent
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-slate-300">
          <HeaderIcon>
            <CircleUser className="h-5 w-5" />
          </HeaderIcon>
          <HeaderIcon notify>
            <Bell className="h-5 w-5" />
          </HeaderIcon>
          <HeaderIcon>
            <Settings className="h-5 w-5" />
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
      type="button"
      className="
        relative flex h-10 w-10 items-center justify-center
        rounded-full
        border border-white/10
        bg-[#262626]
        text-slate-200
        transition-colors duration-150
        hover:bg-[#2f2f2f]
        hover:text-slate-50
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-red-500/60
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#18181b] cursor-pointer
      "
    >
      {children}
      {notify && (
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
      )}
    </button>
  );
};
