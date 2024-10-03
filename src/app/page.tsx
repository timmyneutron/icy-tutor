import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[rgb(0,0,200)] to-[rgb(0,0,50)] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Coming Soon!
        </h1>
        <h3 className="text-2xl font-extrabold tracking-tight text-white">
          <span className={"text-[rgb(150,150,255)]"}>IcyTutor</span> is an AI-powered ISEE and SSAT Test Prep App
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://www.erblearn.org/families/isee-by-erb"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">ISEE</h3>
            <div className="text-lg">
              Official ISEE Website
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://www.ssat.org"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">SSAT</h3>
            <div className="text-lg">
              Official SSAT Website
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
