"use client"
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-rows-[10px_1fr_10px] min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] overflow-y-auto">
      <main className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start lg:bg-white 
        bg-cover bg-center bg-[url('/illustration.svg')] lg:bg-none backdrop-blur-lg lg:backdrop-blur-none">
          <div className="flex flex-col gap-8 absolute inset-0 backdrop-blur-xs bg-white/80">
        
            <div className="flex flex-row w-full h-auto justify-between">
              <div className="text-sky-900 break-words font-bold content-center flex-1 flex flex-col justify-around gap-4">
                <div className="font-bold text-[60px] text-sky-800 md:self-center">{'AFYA cares for you'}</div>
                <div className=" leading-10 text-[20px]">
                  {`A platform that enables physicians to securely 
                  send patients prescriptions, keep patients medication records, 
                  provide easy access to quality medications, help patients to adhere to prescriptions 
                  and provide general health advise`}
                </div>
                <button className="text-[18px] text-white bg-[#458FF6] w-fit self-center py-4 px-5 rounded-[30px]">Subscribe Today</button>
              </div>
              <Image
                className="flex-1 lg:block hidden"
                aria-hidden
                src="/illustration.svg"
                alt="File icon"
                width={500}
                height={500}
              />
              {/* <div className="text-gray-700 text-[20px]">An e-phamacy designed to serve You</div> */}
            </div>
          </div>
        {/* <div className="flex flex-col justify-center w-full h-auto bg-[url('/hero-bg-home.jpg')] bg-cover bg-center">
          <div className="text-sky-800 text-[50px] break-words font-bold content-center">
            <div>Your medication,</div>{' '}
            <div>sorted and delivered</div>
          </div>
          <div className="text-gray-700 text-[20px]">An e-phamacy designed to serve You</div>
        </div> */}

        {/* <div className="flex gap-8 flex-wrap w-full flex-row items-center content-center justify-between">
          <div className="flex-1">
          <Image
              aria-hidden
              src="/home-carousel.png"
              alt="File icon"
              width={600}
              height={600}
            />
          </div>
          <div className="flex-1 w-full h-full flex-row content-center justify-end text-start">
            <div className="text-sky-800 text-[40px] break-words font-bold px-28">We’ll sort your meds by date and time</div>
          </div>
        </div> */}
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
