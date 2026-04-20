import React, { useEffect, useState } from 'react';
import { Star, PackageOpen, ArrowRight } from 'lucide-react';
import { albumService } from '../services/api';

const Album = () => {
  const [stickers, setStickers] = useState([]);
  const stats = {
    completion: 64,
    count: 432,
    total: 678,
    golden: 12
  };

  useEffect(() => {
    albumService.getStickers().then(setStickers);
  }, []);

  return (
    <div className="space-y-12">
      {/* Progress Section */}
      <section className="flex flex-col md:flex-row gap-12 items-end justify-between bg-surface-container-low rounded-[2rem] p-8 lg:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-primary-container/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="flex-1 z-10 w-full">
          <p className="font-label text-sm uppercase tracking-[0.1em] text-secondary mb-2">Season 2026</p>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight mb-8">The Collection</h1>
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex justify-between items-baseline">
              <span className="font-headline text-2xl font-bold text-on-surface">{stats.completion}% Complete</span>
              <span className="font-label text-sm text-secondary">{stats.count} / {stats.total} Stickers</span>
            </div>
            <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden flex shadow-inner">
              <div className="h-full bg-primary" style={{ width: '35%' }}></div>
              <div className="h-full bg-secondary" style={{ width: '20%' }}></div>
              <div className="h-full bg-tertiary" style={{ width: '9%' }}></div>
            </div>
          </div>
        </div>
        <div className="z-10 flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-2xl shadow-sm min-w-[200px]">
          <Star className="text-primary mb-2 fill-current" size={32} />
          <span className="font-headline text-3xl font-bold text-primary">{stats.golden}</span>
          <span className="font-label text-xs uppercase tracking-wider text-secondary mt-1">Golden Stickers</span>
        </div>
      </section>

      {/* Pack Opening Module */}
      <section className="relative bg-gradient-to-br from-surface-container-high to-surface-container rounded-[2.5rem] p-10 lg:p-16 flex flex-col items-center justify-center min-h-[400px]">
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="flex justify-center items-center h-48 w-full relative">
            <div className="absolute w-40 h-56 bg-gradient-to-br from-primary to-primary-container rounded-xl shadow-xl flex flex-col items-center justify-center p-4 border border-white/10 z-20">
               <span className="font-headline text-white font-bold text-xl tracking-wide uppercase">Standard Pack</span>
               <span className="text-primary-fixed text-xs tracking-widest uppercase mt-1">5 Stickers</span>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <button className="bg-primary text-on-primary font-headline font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:-translate-y-1 transition-all duration-300">
              Open 3 Packs
            </button>
            <p className="font-label text-sm text-secondary">You have 8 unopened packs</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="flex flex-col gap-8">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="font-headline text-3xl font-extrabold text-primary">Recent Acquisitions</h2>
            <p className="font-body text-secondary mt-2 text-lg">Sorted by rarity and date added.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-label uppercase text-sm font-bold tracking-wider hover:text-primary-container transition-colors">
            View All Gallery <ArrowRight size={18} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
           {stickers.map(sticker => (
             <div key={sticker.id} className={`rounded-2xl p-3 flex flex-col shadow-sm border border-outline-variant/15 bg-surface-container-lowest hover:shadow-md transition-all`}>
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-3 relative">
                  <img src={sticker.imageUrl} alt={sticker.name} className="w-full h-full object-cover" />
                  {sticker.rarity === 'GOLD' && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full">GOLD</div>
                  )}
                </div>
                <h3 className="font-headline text-sm font-bold text-on-surface truncate">{sticker.name}</h3>
                <p className="font-label text-[10px] text-secondary uppercase tracking-wider mt-0.5">{sticker.category}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Album;
