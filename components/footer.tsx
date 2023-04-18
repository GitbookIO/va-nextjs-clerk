import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-6 items-center">
            <p>Find out more on <Link href="https://gitbook.com" className="text-pink-500 underline hover:no-underline">GitBook.com</Link></p>
        </footer>
    );
}