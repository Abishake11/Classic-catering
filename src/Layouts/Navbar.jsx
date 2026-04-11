import { Menu, Bell } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-[#903728] border-b border-gray-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-50">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        
        {/* 🔹 Mobile Menu Button */}
        <button className="md:hidden" onClick={onMenuClick}>
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* 🔹 Brand */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-white">
            Classic Catering
          </span>
          <span className="text-[11px] text-white">
            For every occasion
          </span>
        </div>
      </div>

      {/* RIGHT SECTION */}

    </header>
  );
};

export default Navbar;