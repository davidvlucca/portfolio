import { useTypewriter, Cursor } from "react-simple-typewriter";

import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation("global");

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React Developer",
      "Web Developer",
      "Front-End Developer",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div className="md:px-16 px-8 mM:px-6 mS:px-4">
      <div className="py-12 mM:py-8 mS:py-4">
        <h3 className="text-white md:text-3xl text-xl mM:text-base font-bold px-3 py-1 rounded-xl w-fit bg-[#333333]/50">
          {t("intro.emoji")}
        </h3>
        <h1 className="text-left pt-3 4xl:text-9xl md:text-8xl text-6xl mM:text-5xl font-extrabold">
          David Lucca
        </h1>
        <p className="text-left font-normal md:text-4xl text-2xl mM:text-xl">
          <span>
            {text}
            <Cursor />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Intro;
