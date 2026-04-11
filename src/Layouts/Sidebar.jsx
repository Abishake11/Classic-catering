import { MENU } from "../utils/Contants";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const SideMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* 🔹 Overlay (Mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`
          bg-[#903728] h-full w-56 z-50
          fixed md:static top-0 left-0
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          shrink-0
        `}
      >
        {/* 🔹 Close Button (Mobile) */}
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 🔹 Menu */}
        <div className="flex flex-col ">
          {MENU.map((item, index) => {
            const isActive = location.pathname === item.link;
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => {
                  navigate(item.link);
                  setOpen(false); // close on mobile
                }}
                className={`flex items-center w-full px-6 py-3 text-[15px] rounded-md transition-colors
                  ${
                    isActive
                      ? "bg-[#903728] text-[#FCF8E3] font-medium "
                      : "text-white hover:bg-gray-50"
                  }
                `}
              >
                {Icon && <Icon className="w-4 h-4 mr-4" />}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default SideMenu;