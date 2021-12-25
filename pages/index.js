import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-[100%] bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
