import Image from "next/image";

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">

        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Indraneel Sarode
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full stack developer
            </span>
            <p className="my-2 max-w-xl font-light tracking-tighter">
              Hi, I am a tech enthusiast
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <Image
            
              src="/neel.jpeg" // Correct path relative to the 'public' folder
              alt="Indraneel Sarode's profile"
              width={400} // Provide width in pixels
              height={400} // Provide height in pixels
              className="rounded-full"
            />
          </div>
        </div>


      </div>
    </div>
  );
}