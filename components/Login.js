import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <div className="z-50 absolute flex flex-col justify-center items-center w-full h-4/6 space-y-4">
        <img
          className="h-[150px] w-[150px] rounded-full"
          src="https://i.pinimg.com/originals/d5/74/97/d574978a47ffd961b434cb5cd75f3dd2.jpg"
        />

        <button
          onClick={() => authenticate()}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login with Metaverse
        </button>
      </div>

      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Login;
