import {SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </button>
        </SignUpButton>
      </SignedOut>
      <UserButton/>
      <SignedIn>
        <SignOutButton>
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Signout
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}
