import { useTranslation } from "react-i18next";

import { MdDownload } from "react-icons/md";

function Hero() {
  const { t } = useTranslation("global");

  const CVPath = "/davidlucca_CV.pdf";


  return (
    <div className="md:px-6 mL:px-4 mM:px-2 mS:px-0">
      <div className="hero py-12 mM:py-8 mS:py-4">
        <div className="xl:max-w-[90vw] 2xl:max-w-[80vw] z-0 flex items-center justify-center gap-4 p-4 flex-col xl:flex-row xl:space-x-10">
          <img src="/davidlucca.jpg" className=" rounded-full shadow-2xl" />
          <div className="text-left px-4 mL:px-0 mM:px-0 mS:px-0 pt-10 m-0 p-0">
            <h3 className="text-white  mS:text-base mM:text-lg md:text-2xl text-xl font-bold px-3 py-2 rounded-xl w-fit bg-[#333333]/50">
              {t("about.emoji")}
            </h3>
            <div className="py-6  md:text-2xl text-lg space-y-3">
              <p>{t("about.desc1")}</p>
              <p>{t("about.desc2")}</p>
              <p>{t("about.desc3")}</p>
            </div>
            <div>
              <button>
                <a
                  href={CVPath}
                  target="_blank"
                  className="text-left flex space-x-1 items-center hover:opacity-70 transition-opacity duration-100"
                >
                  <h1 className="text-white  text-xl flex space-x-1 font-bold px-4 py-2 rounded-xl bg-[#333333]/50">
                    <p>{t("about.cv")}</p>
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
