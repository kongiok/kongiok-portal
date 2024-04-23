import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import ProfileImg from "@/public/assets/capybara_profile-sm.png";
import dynamic from "next/dynamic";
import { LinkType } from "@/lib/types";

const TypingEffect = dynamic(() => import("@/components/parts/typing.tsx").then(component => component.default as React.FC), {
  loading: () => <p>Loading...</p>,
  ssr: false
})



export default function Home() {
  const SocialIcons: LinkType[] = [{
    href: "https://github.com/kongiok",
    label: "GitHub",
    icon: "ri:github-fill",
  }, {
    href: "https://www.instagram.com/kongiok.tw",
    label: "Instagram",
    icon: "ri:instagram-line",
  }, {
    href: "https://press.kongiok.tw",
    label: "Giok Press",
    icon: "",
  }];
  const HeroSection = () => {
    return (
      <section className="h-[70vh] w-full bg-primary border flex flex-col-reverse sm:flex-row justify-evenly items-center">
        {/* Left Part */}
        <div className="flex flex-col flex-1 justify-center items-center bg-neutral">
          <h1 className="text-4xl font-bold">Hello! I'm
          </h1>
          <TypingEffect text={["Ong Kong Giok", 1000, "A Software Engineer", 1000]} classNames="mt-4 text-4xl sm:text-5xl text-on-primary font-mono font-bold " />
          {/* Option Section */}
          <div className="mt-5 flex flex-row border">
            {SocialIcons.map((icon, index) => (
              <Link key={index} href={icon.href} >
                {icon.label}
                {!icon.icon ? "" :
                  typeof icon.icon === "string" ? <Icon icon={icon.icon} /> :
                    ""}
              </Link>
            ))}
          </div>
        </div>
        {/* Right Part */}
        <div className="flex flex-col flex-1 justify-center items-center">
          <Image src={ProfileImg} alt="Hero Image" width={500} height={500} className="max-w-44 rounded-full drop-shadow-lg" />
        </div>
      </section>
    )
  };
  return (
    <main className="min-h-dvh min-w-dvw">
      <HeroSection />
    </main>
  );
}
