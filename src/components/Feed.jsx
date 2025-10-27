import React from 'react';
import { ThumbsUp, Heart, Share2, Bookmark, MessageCircle } from 'lucide-react';

const demoPosts = [
  {
    id: 1,
    author: 'Grace Chapel',
    handle: '@gracechapel',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Grace%20Chapel&backgroundType=gradientLinear',
    time: '2h',
    content:
      '“Let everything that has breath praise the Lord.” Join us for worship this Sunday as we continue our series on Psalms. #Worship #Psalms150',
    media: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    author: 'Youth Alive',
    handle: '@youthalive',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Youth%20Alive&backgroundType=gradientLinear',
    time: '5h',
    content:
      'Testimony Night was incredible! God is moving among our teens. Drop a prayer or encouragement below for our students.',
    media: null,
  },
  {
    id: 3,
    author: 'Kingdom Creatives',
    handle: '@kingdomcreatives',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Kingdom%20Creatives&backgroundType=gradientLinear',
    time: '1d',
    content:
      'New devotional: Walking by Faith, Not by Sight. A 5-minute read to encourage your week.',
    media: 'https://images.unsplash.com/photo-1518131678677-a2ac5bc3c38a?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Feed() {
  return (
    <div className="space-y-4">
      {demoPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function PostCard({ post }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-slate-900 leading-tight">{post.author}</h4>
              <p className="text-xs text-slate-500">{post.handle} • {post.time}</p>
            </div>
            <button className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">Faith • Uplifting</button>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-800">{post.content}</p>
          {post.media && (
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-100">
              <img src={post.media} alt="media" className="h-auto w-full object-cover" />
            </div>
          )}
          <div className="mt-4 grid grid-cols-4 gap-2">
            <Action icon={ThumbsUp} label="Amen" />
            <Action icon={Heart} label="Blessed" />
            <Action icon={MessageCircle} label="Praying" />
            <Action icon={Share2} label="Share" />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span>128 reactions • 34 comments</span>
            <button className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700">
              <Bookmark size={14} /> Save
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function Action({ icon: Icon, label }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
      <Icon size={16} /> {label}
    </button>
  );
}
