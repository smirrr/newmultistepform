"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/personalDetails');  // This will navigate to /about/page.tsx
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-[4rem] font-bold text-[#90ee90] mb-10">Welcome ! Lets get Started,</p>
        <button className="h-[45px] px-5 bg-[#00008b] text-white text-base font-semibold rounded-md border-2 border-transparent hover:bg-white hover:text-[#00008b] hover:border-[#00008b] transition-colors duration-300"
        onClick={handleClick}>Click here to go to the form</button>
      </main>
      
    </div>
  );
}
