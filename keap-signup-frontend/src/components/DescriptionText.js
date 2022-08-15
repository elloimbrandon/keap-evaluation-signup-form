const DescriptionText = () => {
  return (
    <div className="flex flex-col items-center w-screen m-auto mt-3 pt-8 bg-Blue sm:h-[36%] md:w-[620px] md:h-[360px] md:items-start md:rounded-l-2xl">
      <h2
        className="font-roboto text-white mb-2 sm:text-mobile-h2 md:text-desktop-h2 md:ml-20 md:mt-10 md:mb-3
        "
      >
        Sign up to get tips
      </h2>
      <div className="container flex flex-col items-center md:items-start pl-5 pr-5 pb-7">
        <p className="container flex-row w-[320px] md:w-[80%] font-open-sans text-white sm:text-mobile-body md:text-desktop-body md:ml-16">
          Capture leads automatically through built-in landing pages, and
          automatically add them to your contacts with advanced segmentation.
        </p>
        <p className="font-open-sans font-extrabold text-white ml-16 mt-8 underline decoration-4 underline-offset-4 text-desktop-body leading-4 sm:invisible md:visible">
          Learn more
        </p>
      </div>
    </div>
  );
};

export default DescriptionText;
