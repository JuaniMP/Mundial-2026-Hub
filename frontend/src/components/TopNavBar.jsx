import { Link, useLocation } from 'react-router-dom';
import { Bell, UserCircle } from 'lucide-react';

const TopNavBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Experience', path: '/' },
    { name: 'Stadiums', path: '/stadiums' },
    { name: 'Superpolla', path: '/superpolla' },
    { name: 'Album', path: '/album' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbfbe2]/80 backdrop-blur-xl border-b border-stone-200/10">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black text-[#004e34] tracking-tighter uppercase font-headline">
            FIFA World Cup 2026
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-headline tracking-tight text-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#004e34] font-bold border-b-2 border-[#004e34] pb-1'
                    : 'text-[#465f88] font-medium hover:bg-[#465f88]/5 pb-1'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#004e34]">
          <button className="hover:bg-[#465f88]/5 transition-colors duration-300 p-2 rounded-full active:scale-95">
            <Bell size={24} />
          </button>
          <button className="hover:bg-[#465f88]/5 transition-colors duration-300 p-2 rounded-full active:scale-95">
            <UserCircle size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
