import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSideBar />
    </>
  );
}

export default Sidebar;

function DesktopSidebar() {
  return (
    <div className="bg-[#88D66C] p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/l1.png" alt="logo" className="hidden md:block" />
          <img src="/m1.png" alt="logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to={"/"} className="flex gap-1">
            <Home size={"24"} className="text-black" />
            <span className="font-bold hidden md:block text-black">Home</span>
          </Link>
          <Link to={"/favourites"} className="flex gap-1">
            <Heart size={"24"} className="text-black" />
            <span className="font-bold hidden md:block text-black">
              Favourites
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

function MobileSideBar() {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-[#88D66C] z-10 p-2 sm:hidden">
      <Link to={"/"} className="flex gap-1">
        <Home size={"24"} className="cursor-pointer" />
        <span className="font-bold hidden md:block">Home</span>
      </Link>
      <Link to={"/favourites"} className="flex gap-1">
        <Heart size={"24"} className="cursor-pointer" />
        <span className="font-bold hidden md:block">Favourites</span>
      </Link>
    </div>
  );
}
