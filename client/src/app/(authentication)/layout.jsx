import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="fixed left-0 top-0 p-6">
        <Link href="/">
          <img
            src="/svg/icon/home.svg"
            alt="home-icon.svg"
            width={30}
            height={30}
          />
        </Link>
      </div>
      {children}
    </main>
  );
}
