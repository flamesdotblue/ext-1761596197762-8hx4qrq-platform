import React from 'react';
import HeaderNav from './components/HeaderNav';
import Sidebar from './components/Sidebar';
import Composer from './components/Composer';
import Feed from './components/Feed';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <HeaderNav />
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-24 pb-12">
          <aside className="hidden lg:block lg:col-span-3">
            <Sidebar />
          </aside>
          <main className="col-span-1 lg:col-span-6 space-y-6">
            <Composer />
            <Feed />
          </main>
          <aside className="hidden xl:block lg:col-span-3">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-slate-800">Upcoming Events</h3>
                <p className="mt-1 text-sm text-slate-600">Discover services, conferences, and ministry programs.</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start justify-between rounded-lg border border-slate-100 p-3 hover:bg-slate-50">
                    <div>
                      <p className="font-medium">Sunday Worship Service</p>
                      <p className="text-slate-500">This Sunday • 10:00 AM</p>
                    </div>
                    <button className="ml-3 rounded-full bg-indigo-600 px-3 py-1 text-white text-xs font-medium hover:bg-indigo-700">RSVP</button>
                  </li>
                  <li className="flex items-start justify-between rounded-lg border border-slate-100 p-3 hover:bg-slate-50">
                    <div>
                      <p className="font-medium">Youth Fellowship Night</p>
                      <p className="text-slate-500">Fri • 7:00 PM</p>
                    </div>
                    <button className="ml-3 rounded-full bg-indigo-600 px-3 py-1 text-white text-xs font-medium hover:bg-indigo-700">RSVP</button>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
                <h3 className="font-semibold text-slate-800">Go Live This Week</h3>
                <p className="mt-1 text-sm text-slate-600">Stream sermons, worship, and devotionals right from ChurchTrendz.</p>
                <button className="mt-3 w-full rounded-lg bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600">Start Live Stream</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
