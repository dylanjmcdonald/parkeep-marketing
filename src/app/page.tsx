import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full justify-center items-center min-h-screen p-6 bg-main bg-cover bg-no-repeat bg-center">
      <main className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/logo.svg"
          alt="Parkeep logo"
          width={180}
          height={38}
          priority
        />

        <div className="text-sm">Beta access coming soon.</div>
      </main>
    </div>
  );
}
