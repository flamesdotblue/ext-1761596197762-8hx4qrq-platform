import React from 'react';
import { Home, Users, Calendar, Video, Store, Bell, MessageCircle, Search, Settings, User } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-md bg-white text-indigo-700 font-black">
                  CT
                </div>
              </div>
              <span className="hidden sm:block text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-amber-600">ChurchTrendz</span>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
              <Search size={18} className="text-slate-500" />
              <input
                className="w-56 bg-transparent text-sm placeholder-slate-400 focus:outline-none"
                placeholder="Search churches, ministers, events"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-slate-600">
            <NavIcon Icon={Home} label="Feed" active />
            <NavIcon Icon={Users} label="Groups" />
            <NavIcon Icon={Calendar} label="Events" />
            <NavIcon Icon={Video} label="Live" />
            <NavIcon Icon={Store} label="Marketplace" />
          </nav>

          <div className="flex items-center gap-2">
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <Bell size={18} />
              <span className="absolute -right-1 -top-1 inline-flex items-center justify-center rounded-full bg-amber-500 px-1.5 text-[10px] font-semibold leading-4 text-white">3</span>
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <MessageCircle size={18} />
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-amber-600 px-3.5 py-2 text-white text-sm font-medium shadow hover:opacity-95">
              <User size={16} />
              Sign In
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <Settings size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavIcon({ Icon, label, active }) {
  return (
    <button
      className={`group relative inline-flex flex-col items-center justify-center rounded-lg px-3 py-1.5 transition ${
        active ? 'text-indigo-600' : 'hover:text-slate-900'
      }`}
    >
      <Icon size={20} />
      <span className="pointer-events-none absolute -bottom-6 hidden rounded-md bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-white shadow-sm group-hover:block">
        {label}
      </span>
    </button>
  );
}
