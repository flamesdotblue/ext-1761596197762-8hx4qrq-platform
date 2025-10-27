import React, { useState } from 'react';
import { PlusCircle, Send, Video, Calendar } from 'lucide-react';

export default function Composer() {
  const [value, setValue] = useState('');

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=CT&backgroundType=gradientLinear&fontFamily=Georgia`}
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Share a testimony, prayer, or devotional..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-300 focus:bg-white"
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Action icon={Video} label="Go Live" color="text-rose-600" bg="bg-rose-50" />
              <Action icon={Calendar} label="Create Event" color="text-emerald-600" bg="bg-emerald-50" />
              <Action icon={PlusCircle} label="Add Media" color="text-indigo-600" bg="bg-indigo-50" />
            </div>
            <button
              disabled={!value.trim()}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white shadow ${
                value.trim() ? 'bg-gradient-to-r from-indigo-600 to-amber-600 hover:opacity-95' : 'bg-slate-300 cursor-not-allowed'
              }`}
            >
              <Send size={16} /> Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Action({ icon: Icon, label, color, bg }) {
  return (
    <button className={`inline-flex items-center gap-2 rounded-full ${bg} px-3 py-1.5 text-xs font-medium ${color} hover:opacity-90`}>
      <Icon size={16} />
      {label}
    </button>
  );
}
