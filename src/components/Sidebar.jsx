import React from 'react';
import { Home, Users, Calendar, Video, Store, BookOpen, Music } from 'lucide-react';

const links = [
  { icon: Home, label: 'News Feed', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Users, label: 'Groups', color: 'text-violet-600', bg: 'bg-violet-50' },
  { icon: Calendar, label: 'Events', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Video, label: 'Live', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: Store, label: 'Marketplace', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: BookOpen, label: 'Devotionals', color: 'text-sky-600', bg: 'bg-sky-50' },
  { icon: Music, label: 'Gospel Music', color: 'text-fuchsia-600', bg: 'bg-fuchsia-50' },
];

export default function Sidebar() {
  return (
    <div className="sticky top-24 space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600">Browse</h3>
        <ul className="space-y-1">
          {links.map((item) => (
            <li key={item.label}>
              <button className="group flex w-full items-center gap-3 rounded-xl p-2 hover:bg-slate-50">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                  <item.icon size={18} />
                </span>
                <span className="text-sm font-medium text-slate-800">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-white p-5 shadow-sm">
        <h4 className="font-semibold text-slate-800">Build your Ministry Page</h4>
        <p className="mt-1 text-sm text-slate-600">Share sermons, events, and updates with your congregation.</p>
        <button className="mt-3 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">Create Page</button>
      </div>
    </div>
  );
}
