import { useTranslation } from "react-i18next";

import { MdDownload } from "react-icons/md";
import CV from "../../assets/davidlucca_CV.pdf";

function Hero() {
  const { t } = useTranslation("global");

  return (
    <div className="md:px-6 px-4 mM:px-2 mS:px-0">
      <div className="hero py-12 mM:py-8 mS:py-4  ">
        <div className="hero-content flex-col xl:flex-row xl:space-x-10">
          <img src="/me.jpg" className=" rounded-full shadow-2xl" />
          <div className="text-left px-4 mS:px-0 pt-10 m-0 p-0">
            <h3 className="text-white mS:text-base mM:text-lg md:text-2xl text-xl font-bold px-3 py-2 rounded-xl w-fit bg-[#333333]/50">
              🧐 About me
            </h3>
            <div className="py-6 md:text-xl text-lg space-y-3">
              <p>{t("hero.desc1")}</p>
              <p>{t("hero.desc2")}</p>
              <p>{t("hero.desc3")}</p>
              <p>{t("hero.desc4")}</p>
            </div>
            <div>
              <button>
                <a
                  href={CV}
                  download="davidlucca_cv.pdf"
                  className="text-left flex space-x-1 items-center hover:opacity-70 transition-opacity duration-100"
                >
                  <h1 className="text-white text-xl flex space-x-1 font-bold px-4 py-2 rounded-xl bg-[#333333]/50">
                    <p>Baixar CV</p>
                    <MdDownload className="text-3xl" />
                  </h1>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
