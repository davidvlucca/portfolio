

// z-index: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   max-width: 80rem/* 1280px */;
//   gap: 1rem/* 16px */;

// .hero {
//   display: grid;
//   width: 100%;
//   place-items: center;
//   background-size: cover;
//   background-position: center;
// }

function Intro() {
  return (
    <div className=" md:px-16 px-8 mM:px-6 mS:px-4 ">
      <div className="py-12 mM:py-8 mS:py-4">
        <h3 className="text-white md:text-3xl text-xl mM:text-base font-bold px-3 py-1 rounded-xl w-fit bg-[#333333]/50">
          👋 Hey!
        </h3>
        <h1 className="text-left pt-3 md:text-8xl text-6xl mM:text-5xl font-extrabold">David Lucca</h1>
        <p className="text-left font-normal md:text-4xl text-2xl mM:text-xl">Front-End Developer</p>
      </div>
      {/* <div className="flex space-x-5 align-middle  items-center ">
        <a
          href={CV}
          download="davidlucca_cv.pdf"
          className="text-left flex space-x-1 items-center hover:opacity-70 transition-opacity duration-300"
        >
          <p className=" font-medium text-2xl ">Baixar CV</p>
          <MdDownload className="text-3xl" />
        </a>
        <a
          href="https://wa.me/968038514"
          target="_blank"
          className="text-left flex flex-row space-x-3  rounded-lg items-center hover:bg-green-600 transition-colors duration-300 "
        >
          <ImWhatsapp className="text-2xl" />
          <p className="text-xl font-medium">Vamos conversar</p>
        </a>
      </div> */}
      {/* <div className="card md:max-w-[60rem] md:flex md:align-middle md:place-items-center md:justify-center md:items-center bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn rounded btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Intro;
