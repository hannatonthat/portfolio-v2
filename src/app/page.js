import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <h1 className="">Hi, I&apos;m Hanna!</h1>
      <h3 className="">Mechatronics Engineering @ University of Waterloo</h3>
      <h2 className="">Recently...</h2>
      <ul className="list-disc list-inside">
        <li>Backend Developer & Data Engineer for Privy Council Office</li>
        <li></li>
        <li></li>
      </ul>
      <h1 className="">About</h1>
      <div className="flex  gap-8">
        <div className="flex flex-col justify-center">
          <p className="">Passionate about software development, AI/ML, and robotics, I&apos;m currently studying Mechatronics Engineering at the University of Waterloo.</p>
          <p className="">I&apos;m always eager to meet like-minded individuals and discuss exciting projects. Feel free to reach out!</p>
        </div>
        <div className="rounded-full shadow-xl">
          <Image
          src="/assets/profile.png"
          alt=""
          width="400"
          height="400"
          className="rounded-full"
        />
        </div>
      </div>
    </section>
  )
}
