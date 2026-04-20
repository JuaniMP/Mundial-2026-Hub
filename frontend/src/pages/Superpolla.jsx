import React, { useEffect, useState } from 'react';
import { Target, Trophy as TrophyIcon, Share2 } from 'lucide-react';
import { userService } from '../services/api';

const Superpolla = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const currentUser = {
    name: "Elena M.",
    team: "Team Canada",
    rank: 1248,
    points: 45920,
    accuracy: 68.4
  };

  useEffect(() => {
    userService.getLeaderboard().then(setLeaderboard);
  }, []);

  return (
    <div className="space-y-12">
      <header className="flex flex-col gap-2">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tight text-on-surface">Superpolla</h1>
        <p className="font-body text-on-surface-variant text-lg">Predict, compete, and claim your spot in the global gallery.</p>
      </header>

      {/* User Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 shadow-xl flex flex-col justify-between min-h-[240px]">
          <div className="relative z-10 flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-on-primary/20 shadow-lg font-headline font-bold text-primary">EM</div>
              <div>
                <h2 className="font-headline font-bold text-2xl text-on-primary tracking-tight">{currentUser.name}</h2>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-surface-container-lowest/10 text-on-primary font-label text-xs uppercase tracking-widest backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> {currentUser.team}
                </span>
              </div>
            </div>
            <button className="text-on-primary/80 hover:text-on-primary transition-colors">
              <Share2 size={24} />
            </button>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-end justify-between mt-8">
            <div>
              <p className="font-label text-sm text-on-primary-container uppercase tracking-widest mb-1">Global Rank</p>
              <div className="flex items-baseline gap-2">
                <span className="font-headline font-extrabold text-5xl text-on-primary tracking-tighter">{currentUser.rank.toLocaleString()}</span>
                <span className="font-label text-sm text-primary-fixed-dim">↑ 12</span>
              </div>
            </div>
            <div className="text-right sm:text-left">
              <p className="font-label text-sm text-on-primary-container uppercase tracking-widest mb-1">Total Points</p>
              <span className="font-headline font-bold text-3xl text-on-primary">{currentUser.points.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex-1 bg-surface-container-low rounded-xl p-6 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Accuracy</span>
              <Target className="text-secondary" size={20} />
            </div>
            <div className="font-headline font-bold text-3xl text-on-surface">{currentUser.accuracy}%</div>
            <div className="mt-2 w-full bg-surface-variant rounded-full h-1.5">
              <div className="bg-secondary h-1.5 rounded-full" style={{ width: `${currentUser.accuracy}%` }}></div>
            </div>
          </div>
          <div className="flex-1 bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-center shadow-sm border border-outline-variant/15">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Next Milestone</span>
              <TrophyIcon className="text-tertiary" size={20} />
            </div>
            <div className="font-body text-sm text-on-surface mb-1">Top 1,000 Global</div>
            <div className="font-headline font-bold text-xl text-primary">2,100 pts away</div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="flex flex-col gap-8">
        <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">Global Rankings</h2>
        <div className="flex flex-col gap-3">
           {leaderboard.length > 0 ? (
             leaderboard.map((user, index) => (
               <div key={user.id} className="group flex items-center justify-between p-4 pl-6 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-300 border border-transparent hover:border-outline-variant/10 shadow-sm">
                  <div className="flex items-center gap-6">
                    <span className="font-headline font-bold text-xl text-on-surface-variant w-8 text-center">{index + 1}</span>
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-secondary">
                      {user.username.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-base text-on-surface">{user.username}</h3>
                      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant flex items-center gap-1.5 mt-0.5">
                        {user.favoriteTeam || 'Global Fan'}
                      </span>
                    </div>
                  </div>
                  <div className="font-headline font-semibold text-lg text-on-surface tracking-tight">
                    {user.points.toLocaleString()}
                  </div>
               </div>
             ))
           ) : (
             <div className="text-center py-12 text-on-surface-variant">No leaderboard data available yet.</div>
           )}
        </div>
      </section>
    </div>
  );
};

export default Superpolla;
