import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
    <main className="flex justify-center place-items-center content-center fixed top-1/3 left-0 h-48 w-full">
        <SignIn path="/sign-in" routing="path" afterSignInUrl="/api/visitor-auth" signUpUrl="/sign-up" />
    </main>
);
export default SignInPage;