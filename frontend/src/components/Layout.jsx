import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';

const Layout = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <TopNavBar />
      <main className="pt-24 md:pt-32 px-4 md:px-8 max-w-screen-2xl mx-auto w-full">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
};

export default Layout;
