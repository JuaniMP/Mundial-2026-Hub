import { Link, useLocation } from 'react-router-dom';
import { Compass, Landmark, Trophy, Layers } from 'lucide-react';

const BottomNavBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Experience', path: '/', icon: Compass },
    { name: 'Stadiums', path: '/stadiums', icon: Landmark },
    { name: 'Superpolla', path: '/superpolla', icon: Trophy },
    { name: 'Album', path: '/album', icon: Layers },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-3xl bg-[#fbfbe2] shadow-[0_-8px_30px_rgb(0,0,0,0.04)] shadow-2xl">
      <div className="flex justify-around items-center px-4 pt-3 pb-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-[#004e34] text-white rounded-2xl px-5 py-2.5 scale-110 shadow-lg shadow-[#004e34]/20'
                  : 'text-[#465f88] opacity-80 hover:opacity-100'
              }`}
            >
              <Icon size={20} className={isActive ? 'mb-1 fill-current' : 'mb-1'} />
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.1em]">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
