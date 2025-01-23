import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  const session = useSession();


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {session.status === 'authenticated' ? "Logout": "Sign-in"}
    </div>
  );
}
