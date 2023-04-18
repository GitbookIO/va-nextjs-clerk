import { SignOutButton, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Link from "next/link";

export default function Header() {

    const user = useUser()

    return (
        <header className='flex p-6 shadow-md items-center space-x-4'>
            <h1 className="flex-1">Your application</h1>
            <SignedOut>
                <div>
                    <Link className="btn-primary" href="sign-in">
                            Sign in
                    </Link>
                </div>
            </SignedOut>
            <SignedIn>
                <p className="flex-initial">You&apos;re signed in as <strong>{user.user?.fullName}</strong></p>
                <div className="flex-initial">
                    <SignOutButton>
                    <button className='btn-primary'>
                        Sign out
                    </button>
                    </SignOutButton>
                </div>
            </SignedIn>
        </header>
    );
}