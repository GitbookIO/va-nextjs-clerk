import { SignOutButton, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Link from "next/link";

export default function Header() {

    const user = useUser()

    return (
        <header className='flex p-6 shadow-md items-center space-x-4'>
            <h1 className="flex-1 text-lg font-bold">Your application</h1>
            <SignedOut>
                <div>
                    <Link className="inline-block rounded-md font-semibold p-3
                        bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white drop-shadow-md
                        hover:from-red-400 hover:via-pink-500 hover:to-purple-400 hover:drop-shadow
                        focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-opacity-100 focus:drop-shadow-none" href="sign-in">
                            Sign in
                    </Link>
                </div>
            </SignedOut>
            <SignedIn>
                <p className="flex-initial">You&apos;re signed in as <strong>{user.user?.fullName}</strong></p>
                <div className="flex-initial">
                    <SignOutButton>
                    <button className='rounded-md font-semibold p-3
                        bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white drop-shadow-md
                        hover:from-red-400 hover:via-pink-500 hover:to-purple-400 hover:drop-shadow
                        focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-opacity-100 focus:drop-shadow-none'>
                        Sign out
                    </button>
                    </SignOutButton>
                </div>
            </SignedIn>
        </header>
    );
}