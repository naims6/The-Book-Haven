import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";

const MobileNavMenu = ({
  lists,
  isMenuOpen,
  setIsMenuOpen,
  handleLogoutUser,
  userInfo,
  mobileNavMenuRef,
}) => {
  const [startX, setStartX] = useState(0);

  const handleNavTouchStart = (e) => {
    // console.log(e.touches[0].clientX);
    setStartX(e.touches[0].clientX);
  };

  const handleNavTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      setIsMenuOpen(false);
    }
  };
  return (
    <div
      onTouchStart={handleNavTouchStart}
      onTouchMove={handleNavTouchMove}
      ref={mobileNavMenuRef}
      className={`lg:hidden fixed w-full max-w-[300px] bg-[#FFF7EE] ${
        isMenuOpen ? "left-0" : "-left-[90%]"
      }  top-0 h-screen z-20 flex flex-col transition-all duration-300 `}
    >
      {/* header of menu */}
      <div className="flex justify-between items-center pt-8 px-8">
        <h2 className="text-2xl font-medium">TOY BAZAAR</h2>
        <span onClick={() => setIsMenuOpen(false)} className="cursor-pointer">
          <RxCross1 size={18} />
        </span>
      </div>
      {/* middle of menu*/}
      <ul className="flex-1 space-y-2 pt-6 w-full">{lists}</ul>
      {/* end  of menu*/}
      <div className="flex justify-between items-center gap-4 px-8 py-8 w-full overflow-hidden">
        {userInfo ? (
          <>
            {" "}
            <div className="w-full">
              <button
                onClick={handleLogoutUser}
                className="btn btn-secondary w-full"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="w-full">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/auth/login"
                className="btn btn-secondary w-full"
              >
                Login
              </Link>
            </div>
            <div className="w-full">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/auth/signup"
                className="btn bg-gray-900 w-full text-white"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileNavMenu;
