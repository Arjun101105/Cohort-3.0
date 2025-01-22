import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center text-4xl w-screen h-screen">
      <div>
     <h1>Todo Application</h1> 
     <br/>
     <div className="flex flex-col justify-center items-center">
     <Link href="/signup">Sign Up</Link>
     <br/>
     <Link href="/signin">Sign In</Link>
     </div>
    </div>
    </div>
  );
}
