import React, { useEffect, useState } from 'react';
import { Landmark, Trophy, LayoutDashboard } from 'lucide-react';
import { matchService } from '../services/api';
import MatchCard from '../components/MatchCard';
import { Link } from 'react-router-dom';

const Experience = () => {
  const [nextMatch, setNextMatch] = useState(null);

  useEffect(() => {
    matchService.getAll().then(matches => {
      if (matches && matches.length > 0) {
        setNextMatch(matches[0]);
      }
    });
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-[1rem] overflow-hidden group min-h-[400px]">
        <div className="absolute inset-0 bg-surface-container-highest z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiIMYdM6-PbXJI8K0dRF2iUv_cxCAb-auD5ug2oeud28B0JYmRhTpCC95XS4emTnWScf_XR9eC9ZbTBZj1gkYdLAZ4__BUUfiDUQfcbVlWenaCB19kxsnVOPOfmyFJmhCXg7fSLEswe6Qsh78MQmzj26BvlcJCmL78ac_3Cq69D9ZyPM9RgOwJRv6H45OVgQOTYyFzo6k--aE6ZAOB8qDPQFcOHWUIoWO8PSp8slA4rn0iqjLa69KuKI0TeU6yZnNWEgGHVap88q8"
            alt="Stadium Hero"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="w-full md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label text-sm uppercase tracking-widest text-on-background font-bold">Upcoming Fixture</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary tracking-tighter leading-none mb-4 uppercase">
              El Gran<br/>Comienzo
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              The opening match of the 2026 FIFA World Cup. Witness history as the host nations take center stage.
            </p>
          </div>
          {nextMatch && <MatchCard match={nextMatch} />}
        </div>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/stadiums" className="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-6 flex flex-col justify-end min-h-[300px] border border-outline-variant/15 shadow-sm hover:shadow-lg transition-all duration-300">
           <div className="absolute inset-0 z-0">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfE5Vb07Lq20RL2Swb3E-l6mzOGewnk7TfeWxz1us0c3BulSAU0XByUDvYHfCm4Prb8co-SeSwmQSSa1sqbPkzLbwqmCqC9fTaa1Ma3pJ3LA4KJhgz6fASTerBk3-zoJ72copmi2GQgcJ-QdRoaSAYXy-Ou7xhSVRI2NvVVxKKE7lysro6UHrJRf0CMCQo-qECVSzI7im4UXKmtYNwZ6FeUj80F0eeSHrFJheEVkspSFx_pTQJZTCzTs78t_OsS-nOAeebiSn2Z64" alt="Stadiums" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
           </div>
           <div className="relative z-10">
             <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mb-4 text-secondary">
               <Landmark size={20} />
             </div>
             <h3 className="font-headline font-bold text-2xl text-on-background mb-2">Stadiums</h3>
             <p className="font-body text-sm text-on-surface-variant">Explore the 16 architectural marvels across North America.</p>
           </div>
        </Link>

        <Link to="/superpolla" className="group relative overflow-hidden rounded-xl bg-surface-container-low p-6 flex flex-col justify-between min-h-[300px] border border-outline-variant/15 shadow-sm hover:shadow-lg transition-all duration-300">
           <div className="flex justify-between items-start">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
               <Trophy size={20} />
             </div>
             <span className="font-label text-xs uppercase tracking-widest text-primary font-bold bg-primary/5 px-2 py-1 rounded-sm">Live</span>
           </div>
           <div>
             <h3 className="font-headline font-bold text-2xl text-on-background mb-2">Superpolla</h3>
             <p className="font-body text-sm text-on-surface-variant mb-4">Make your predictions. Climb the global leaderboard.</p>
             <div className="bg-surface-container-lowest rounded-md p-3 flex justify-between items-center border border-outline-variant/10">
               <span className="font-label text-xs uppercase text-secondary">Current Rank</span>
               <span className="font-headline font-bold text-lg text-primary">#4,209</span>
             </div>
           </div>
        </Link>

        <Link to="/album" className="group relative overflow-hidden rounded-xl bg-secondary-container/20 p-6 flex flex-col justify-between min-h-[300px] border border-outline-variant/15 shadow-sm hover:shadow-lg transition-all duration-300">
           <div className="flex justify-between items-start">
             <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
               <LayoutDashboard size={20} />
             </div>
           </div>
           <div>
             <h3 className="font-headline font-bold text-2xl text-on-background mb-2">Digital Album</h3>
             <p className="font-body text-sm text-on-surface-variant mb-4">Collect, trade, and complete your digital sticker album.</p>
             <div className="w-full bg-surface-container-highest rounded-full h-2 mb-2 overflow-hidden">
               <div className="bg-secondary h-2 rounded-full" style={{ width: '45%' }}></div>
             </div>
             <div className="flex justify-between font-label text-xs text-on-surface-variant">
               <span>Completion</span>
               <span className="font-bold">45%</span>
             </div>
           </div>
        </Link>
      </section>
    </div>
  );
};

export default Experience;
