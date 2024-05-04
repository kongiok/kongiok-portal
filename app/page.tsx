'use client';
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProfileImg from "@/public/assets/capybara_profile-sm.png";
import { LinkType } from "@/lib/types";
import { type IconType } from "react-icons";
import { MdOpenInFull, MdOutlineIosShare } from "react-icons/md";
import { FaTimes, FaMinus, FaIdCard, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { BsFileEarmarkRichtextFill } from "react-icons/bs";
import gradient from "@/styles/gradient.module.css";


export default function Home() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <main className="md:border-4 md:border-on-neutral md:rounded-lg border-0 flex flex-col md:relative w-[95dvw] h-[95dvh]">
      {/* Toolbar */}
      <Toolbar />
      {/* Container */}
      <div className="basis-full flex flex-row justify-center items-center">
        <Phone SocialIcons={SocialIcons} FunctionIcons={AppIcons} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  )
}

const AppIcons: LinkType[] = [
  {
    href: "/about",
    label: "About Me",
    icon: FaIdCard,
    classes: ""
  }
];

const SocialIcons: LinkType[] = [
  {
    href: "https://github.com/kongiok",
    label: "GitHub",
    icon: FaGithubSquare,
  }, {
    href: "https://www.instagram.com/kongiok.tw",
    label: "Instagram",
    icon: FaInstagramSquare,
  }, {
    href: "https://press.kongiok.tw",
    label: "Giok Press",
    icon: BsFileEarmarkRichtextFill,
  }
];

const Phone = ({ SocialIcons, FunctionIcons }: { SocialIcons: LinkType[], FunctionIcons: LinkType[] }) => (
  <section className="self-center w-11/12 aspect-[9/19.5] max-w-sm border-4 border-on-neutral rounded-2xl grid place-items-center bg-on-neutral z-0">
    {/* Phone Screen */}
    <div className={`w-[98%] h-[98%] pt-8 px-4 border-4 border-on-neutral rounded-xl bg-neutral z-20 relative ${gradient["yellow-bottom-left-red"]} grid place-items-start`}>
      {/* Topbar: Contains Camera & Speaker  */}
      <div className="absolute top-0 left-1/2 h-8 w-40 transform -translate-x-1/2 bg-on-neutral rounded-b-xl flex flex-row justify-center items-center">
        <span className="w-16 h-3 bg-black/70 rounded-full -mt-2">
        </span>
        <span className="w-4 h-4 -mt-2 ml-3 bg-black/70 rounded-full"></span>
      </div>
      {/* Main Section */}
      <div className="w-full grid grid-cols-4 row-auto place-items-center">
        {FunctionIcons.map((icon, index) => (
          <Link
            href={icon.href} key={index}
            aria-label={icon.label} title={icon.label}
            className={`w-16 h-16 m-2 rounded-2xl bg-white grid place-items-center active:bg-white/70 ${icon.classes && icon.classes} after:content-[${icon.label}]`}>
            {typeof icon.icon === 'string' ? <span className={icon.icon} title={icon.label} /> : icon.icon &&
              <icon.icon className="text-4xl" />}
          </Link>))}
      </div>
      {/* Bottom: Apps  */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-24 bg-white/40 backdrop-blur-md rounded-2xl flex flex-row justify-center items-center">
        {SocialIcons.map((icon, index) => (
          <Link href={icon.href} key={index}
            aria-label={icon.label} title={icon.label}
            className="w-16 h-16 m-2 rounded-2xl bg-white grid place-items-center active:bg-white/70">
            {typeof icon.icon === 'string' ? <span className={icon.icon} title={icon.label} /> : icon.icon &&
              <icon.icon className="text-4xl" />}
          </Link>))}
      </div>
    </div>
  </section>
)

const Toolbar = () => (
  <aside className="basis-10 p-1 border-0 md:border-b-4 border-on-neutral flex flex-row justify-center md:justify-evenly items-center ">
    {/* Window Control Button Group */}
    <div className="hidden justify-start md:flex">
      {/* Exit Button */}
      <button className="group w-6 aspect-square m-1 rounded-full bg-red-500"
        onClick={() => alert('拜託不要啦，再待一下嘛 >///<')}
      >
        <FaTimes className="m-auto w-11/12 aspect-square fill-on-neutral invisible group-hover:visible" />
      </button>
      {/* Minimize Button */}
      <button className="group w-6 aspect-square m-1 bg-yellow-500 rounded-full">
        <FaMinus className="m-auto w-11/12 aspect-square fill-on-neutral invisible group-hover:visible" />
      </button>
      {/* Full Screen Button */}
      <button className=" group w-6 aspect-square m-1 bg-green-500 rounded-full">
        <MdOpenInFull className="m-auto w-10/12 h-10/12 fill-on-neutral invisible group-hover:visible" />
      </button>
    </div>
    {/* Search Bar */}
    <input type="text"
      className="flex-grow max-w-[50vw] border-2 border-on-neutral rounded-full w-full h-8 text-xl bg-neutral/70 text-on-neutral text-center font-mono placeholder:text-on-neutral/90 focus:placeholder:text-on-neutral/50"
      placeholder="me.kongiok.tw"
    />
    {/* Tool Button Group */}
    <div className="hidden justify-end md:flex">
      <button aria-label="Share this link" title="Copy Link to Clipboard"
        className="m-1 w-7 aspect-square transition-colors ease-in-out duration-100  rounded-full hover:bg-on-neutral/30"
        onClick={() => {
          navigator.clipboard.writeText('me.kongiok.tw')
          toast.success('已複製連結!!')
        }}
      >
        <MdOutlineIosShare className="m-auto text-xl aspect-auto" />
      </button>
      <Link aria-label="About Me" title="About Me"
        href="/about"
        className="m-1 w-7 aspect-square transition-colors ease-in-out duration-100  rounded-full hover:bg-on-neutral/10 active:brightness-50 grid place-items-center">
        <FaIdCard className="m-auto text-center text-xl aspect-auto" />
      </Link>
      <Link aria-label="Way to Blog" title="Access Giok Press"
        href={"https://press.kongiok.tw"}
        className="m-1 w-7 aspect-square transition-colors ease-in-out duration-100  rounded-full hover:bg-on-neutral/30 grid place-items-center">
        <BsFileEarmarkRichtextFill className="m-auto text-xl aspect-auto" />
      </Link>
    </div>
  </aside>
)
