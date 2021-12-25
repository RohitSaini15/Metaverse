import Avatar from "./Avatar";
import { useMoralis } from "react-moralis";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="relative sticky top-0 z-50 bg-black shadow-sm p-5 border-b-2 border-pink-700 text-pink-500 grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
      <div className="h-24 w-24 relative mx-auto hidden lg:inline-grid">
        <img
          className="object-cover rounded-full"
          src="https://i.pinimg.com/originals/d5/74/97/d574978a47ffd961b434cb5cd75f3dd2.jpg"
        />
      </div>

      <div className="col-span-4 text-left lg:text-center">
        <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
          <Avatar logoutOnPress />
        </div>
        <h1 className="text-3xl">Welcome to the Metaverse</h1>
        <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
        <ChangeUsername />
      </div>
    </div>
  );
}

export default Header;
