import React, { useEffect, useState } from 'react';
import { Users, CloudRain, Calendar, Clock, MapPin } from 'lucide-react';
import { stadiumService } from '../services/api';
import StatCard from '../components/StatCard';

const Stadiums = () => {
  const [stadium, setStadium] = useState(null);

  useEffect(() => {
    stadiumService.getAll().then(stadiums => {
      if (stadiums && stadiums.length > 0) {
        setStadium(stadiums[0]);
      }
    });
  }, []);

  if (!stadium) return <div>Loading...</div>;

  return (
    <div className="space-y-12">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-2">
          {stadium.name}
        </h1>
        <p className="font-body text-secondary text-lg">
          {stadium.city}, {stadium.country} • Capacity: {stadium.capacity.toLocaleString()}
        </p>
      </header>

      <section className="relative w-full h-[500px] rounded-xl overflow-hidden bg-surface-container-low flex items-center justify-center shadow-2xl">
        <img
          src={stadium.imageUrl}
          alt={stadium.name}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 bg-surface/80 backdrop-blur-2xl p-8 rounded-xl flex flex-col items-center shadow-lg border border-outline-variant/15 w-11/12 max-w-2xl">
          <span className="font-label uppercase tracking-widest text-primary text-sm font-bold mb-6">Stadium Showcase</span>
          <div className="flex items-center justify-between w-full gap-4">
             <div className="flex flex-col items-center w-full">
                <p className="font-body text-center text-on-surface leading-relaxed">
                  {stadium.description}
                </p>
             </div>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant/15 w-full flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <Calendar className="text-tertiary mb-1" size={20} />
              <span className="font-body text-sm font-medium text-on-surface">Matchday Ready</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="text-tertiary mb-1" size={20} />
              <span className="font-body text-sm font-medium text-on-surface">{stadium.city}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/15 flex flex-col h-full min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline text-2xl font-bold text-primary">Seating & Availability</h2>
            <button className="bg-surface-container-high text-on-secondary-container px-4 py-2 rounded-md font-body text-sm font-medium hover:bg-surface-variant transition-colors">
              View Details
            </button>
          </div>
          <div className="relative w-full flex-grow bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwj_bCo2xPiDxyvLJI9zo_yI6G-FiZHGJEXGl_X0CrZDq49hcie5w0bm_bMn8gmoRvFNKIl3uWGAw3h0PtR3eymELqmJ7ay5eP_7JGTf90c7QCsoTR5f6uWV7QcVxazyuF8X3V5qW-ULNHt8oxBAwbSCMyurqdd6ntclniYShtQqlCcC6rPOd-ltyarfTbVlT7ZOUzzXoIZOwYSweMEneBQzMHMxlf43BfdutjX0Kfj4PFhK7BzpsBhwYbUP3gl9RFNVbCnE5-qrg" alt="Heatmap" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent"></div>
            <div className="z-10 bg-surface/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-outline-variant/20">
              <p className="font-body text-sm font-medium text-on-surface text-center">Interactive Seating Map</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <StatCard
            title="Capacity"
            value={stadium.capacity.toLocaleString()}
            subtitle="85% Sold Out"
            icon={Users}
            progress={85}
            color="tertiary"
          />
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-6 shadow-lg text-on-primary flex-grow flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <CloudRain className="text-on-primary" size={24} />
              <h3 className="font-headline text-lg font-bold">Matchday Forecast</h3>
            </div>
            <div>
              <p className="font-headline text-5xl font-extrabold mb-1">24°C</p>
              <p className="font-body text-sm opacity-80">Partly cloudy, low humidity. Perfect conditions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stadiums;
