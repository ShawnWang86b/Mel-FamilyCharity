import Link from "next/link";
import Image from "next/image";
import HeroImage from "../public/hero.webp";
import { AppLogo } from "../components/AppLogo";
import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <div className="max-w-[1000px] m-auto py-10 flex flex-col gap-5 items-center">
      <AppLogo />
      <h1 className="font-bold text-lg">ABOUT US</h1>
      <p>
        VR1Family Charity Aid Services started off as a small not for profit
        organization, founded in June 2019 by a group3 of 5 volunteers in a
        garage in Mallacoota, Australia (thanks to the generous garage space
        that was given by the4 parents of a founding volunteer member). Their
        focus was to provide immediate humanitarian assistance and5 improve the
        lives of people facing economic, social, and health challenges in the
        immediate aftermath of natural6 calamities in their local community.
        Their common belief was that every person deserved a chance to thrive7
        irrespective of their personal circumstances.
      </p>
      <div className="relative">
        <div>
          <Image src={HeroImage} height={600} width={800} />
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-5">
          <Link href="/post/new" className="btn  w-[400px]">
            Admin portal
          </Link>
          <Link href="/post/help" className="btn w-[400px]">
            Need help?
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="pb-2">OUR SOCIAL MEDIA</div>
        <div className="flex gap-2 text-2xl">
          <div className="cursor-pointer">
            <Link href="https://twitter.com/">
              <BsTwitter />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://www.facebook.com/">
              <BsFacebook />
            </Link>
          </div>

          <div className="cursor-pointer">
            <Link href="https://www.instagram.com/">
              <BsInstagram />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://www.github.com/">
              <BsGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
