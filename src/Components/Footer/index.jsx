import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className="">
      <div className="bg-red flex items-center w-full  p-4 justify-between bg-neutral text-neutral-content	">
        <div>
          <p className=" text-sm">Copyright © 2024 - All right reserved</p>
        </div>
        <div className="flex flex-row space-x-3">
          <a
            href="https://www.linkedin.com/in/davidvlucca/"
            target="_blank"
            className="hover:opacity-70 transition-opacity duration-300 "
          >
            <RxLinkedinLogo className="w-7 h-auto" />
          </a>
          <a
            href="https://github.com/davidvlucca"
            target="_blank"
            className="hover:opacity-70 transition-opacity duration-300 "
          >
            <RxGithubLogo className="w-7 h-auto" />
          </a>
          <a
            href="https://wa.me/968038514"
            target="_blank"
            className="hover:opacity-70 transition-opacity duration-300 "
          >
            <IoLogoWhatsapp className="w-7 h-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
