import UseButton from "../Component/Button";

const Home = () => {
  return (
    <>
      <section className="bg-[url(/img/bg.svg)] bg-cover bg-right p-2 relative overflow-hidden">
        {/* header */}

        <div className="w-full mx-auto hover:scale-105 duration-700 fixed top-5 z-10 hidden lg:block">
          <header className="p-4 rounded-full max-w-[350px] mx-auto backdrop-blur-xl bg-[#1C1C21]/60 overflow-hidden">
            <div className="flex justify-between px-8">
              <a
                href="#"
                className="text-lg text-[#E3E3E3] hover:text-red-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  // eslint-disable-next-line react/no-unknown-property
                  class="size-8"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </a>

              <a
                href="#profile"
                className="text-lg text-[#E3E3E3] hover:text-blue-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#work"
                className="text-lg text-[#E3E3E3] hover:text-green-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
              </a>
              <a
                href="#location"
                className="text-lg text-[#E3E3E3] hover:text-orange-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </header>
        </div>

        <div className="w-full mx-auto hover:scale-105 duration-700 fixed bottom-5 z-10 block lg:hidden">
          <header className="p-4 rounded-full max-w-[350px] mx-auto backdrop-blur-xl bg-[#1C1C21]/60 overflow-hidden">
            <div className="flex justify-between px-8">
              <a
                href="#"
                className="text-lg text-[#E3E3E3] hover:text-red-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  // eslint-disable-next-line react/no-unknown-property
                  class="size-8"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </a>

              <a
                href="#profile"
                className="text-lg text-[#E3E3E3] hover:text-blue-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#work"
                className="text-lg text-[#E3E3E3] hover:text-green-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
              </a>
              <a
                href="#location"
                className="text-lg text-[#E3E3E3] hover:text-orange-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </header>
        </div>

        {/* <div className="flex flex-col w-full hover:scale-105 duration-700 fixed top-5 z-10">
          <header className="container max-w-[400px] mx-auto p-4 rounded-full backdrop-blur-xl bg-[#1C1C21]/60">
            <div className="flex justify-between px-8">
              <a
                href="#"
                className="text-lg text-[#E3E3E3] hover:text-red-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  // eslint-disable-next-line react/no-unknown-property
                  class="size-8"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </a>

              <a
                href="#profile"
                className="text-lg text-[#E3E3E3] hover:text-blue-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#work"
                className="text-lg text-[#E3E3E3] hover:text-green-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
              </a>
              <a
                href="#location"
                className="text-lg text-[#E3E3E3] hover:text-orange-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </header>
        </div> */}

        {/* home */}
        <section className="w-full mx-auto mt-44 overflow-hidden">
          <div className="container pb-52 mx-auto text-white text-center">
            <h1 className="text-6xl lg:text-8xl text-[#E3E3E3] font-bold">
              Code with purpose,<br></br>Design with passion
            </h1>
            <p className="text-lg mt-8 text-[#E3E3E3]">
              Lorem Ipsum, is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </section>

        {/* profile */}
        <div className="profile mb-24 overflow-hidden"  id="profile">
          <h1 className="text-4xl font-bold text-white text-center pb-14">
            About Me
          </h1>
          <section className="container mb-8 flex flex-wrap w-full md:w-[1100px] mx-auto overflow-hidden">
            <div className="w-[100%] md:w-[28%] mx-auto">
              <img src="/img/kk.jpeg" className="min-w-[100%] rounded-2xl" />
            </div>

            <div className="flex flex-col gap-y-3 w-[100%] md:w-[70%] h-fit bg-[#0E0E10]/80 backdrop-blur-sm p-4 border-2 border-[#1C1C21] rounded-[26px] text-xl text-white">
              <h1 className="text-3xl font-bold px-6 pt-4">
                Hello, I'm{" "}
                <span className="text-yellow-500">Khine Lynn Htwan</span>
              </h1>
              <p className="px-6 pb-2 font-light text-justify">
                A creative designer with 6 years and UI/UX designer with 3 years
                of experience working in various design environments. Throughout
                my career, I have had the opportunity to collaborate with
                talented individuals and work on exciting projects that have
                allowed me to grow both personally and professionally.
              </p>

              <p className=" relative bg-[#121214] backdrop-blur-sm p-6 rounded-[26px] text-xl text-white">
                <h1 className="font-bold text-2xl pb-2">
                  Proficiency in Tools Design & Development Software Expertise
                </h1>
                <li className="text-justify">
                  <span className="text-yellow-500 font-semibold">
                    Graphic Design:
                  </span>{" "}
                  <span className="font-light">
                    Photoshop, Illustrator, InDesign, After Effect.
                  </span>
                </li>
                <li className="text-justify">
                  <span className="text-yellow-500 font-semibold">
                    UI/UX Design:
                  </span>{" "}
                  <span className="font-light">
                    Adobe XD, Figma, LottieFiles, Framer.
                  </span>{" "}
                </li>
                <li className="text-justify">
                  <span className="text-yellow-500 font-semibold">
                    Development:
                  </span>{" "}
                  <span className="font-light">
                    HTML, CSS, Javascript, Tailwinds, React.
                  </span>
                </li>
              </p>
              {/* <div className="hidden md:block  w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-[#121214] rotate-45 absolute -bottom-[230px]"></div> */}
            </div>
          </section>
        </div>

        {/* Work */}

        <section
          id="work"
          className="container flex flex-col mb-20 mx-auto overflow-hidden"
        >
          <h1 className="text-4xl font-bold text-white text-center pb-14">
            A Look at My Professional Journey
          </h1>
          <div className="buttons text-nowrap flex justify-left md:justify-center gap-x-4 overflow-scroll pb-4">
            <UseButton text="Graphic Design & Motion" fontSize="18px" />
            <UseButton text="" fontSize="18px" />
            <UseButton text="" fontSize="18px" />
          </div>

          <div className="flex flex-col w-auto mx-auto gap-y-3 h-fit bg-[#0E0E10]/80 backdrop-blur-sm p-4 border-2 border-[#1C1C21] rounded-[26px] text-xl text-white">
            {/* 1 */}
            <div className="bg-[#121214] flex flex-wrap justify-center gap-x-8 backdrop-blur-sm p-4 rounded-[26px] text-xl text-white">
              <div className="border-b-2 border-[#3b3b3b] text-center pb-2 block xl:hidden">
                <h1 className="text-2xl font-semibold">
                  Senior Graphic Designer @ ILBC International School
                </h1>
                <span className="text-xl font-light">(Present)</span>
              </div>

              <div className="border-r-2 border-[#3b3b3b] pr-8 last:block hidden xl:block">
                <h1 className="text-2xl font-semibold ">
                  Senior Graphic Designer @ <br />
                  ILBC International School
                </h1>
                <span className="text-xl font-light">(Present)</span>
              </div>

              <ul className="font-light pb-2 sm:pt-2">
                <li className="">
                  - Lead the design team and creative projects
                </li>
                <li className="">
                  - Design social media graphics, flyers, and event materials
                </li>
                <li className="">
                  - Manage large-format printing, including vinyl and banners
                </li>
                <li className="">
                  - Collaborate with marketing and academic teams on campaigns
                </li>
                <li className="">
                  - Guide junior designers and provide creative direction
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div className="bg-[#121214] flex flex-wrap flex-row-reverse justify-center gap-x-8 backdrop-blur-sm p-4 rounded-[26px] text-xl text-white">
              <div className="border-b-2 border-[#3b3b3b] text-center pb-2 block xl:hidden">
                <h1 className="text-2xl font-semibold">
                  Junior Graphic Designer @ MiBaYeik Design Studio
                </h1>
                <span className="text-xl font-light">(2017-2018)</span>
              </div>

              <div className="border-l-2 border-[#3b3b3b] pl-8 last:block hidden xl:block">
                <h1 className="text-2xl font-semibold ">
                  Junior Graphic Designer @ <br />
                  MiBaYeik Design Studio
                </h1>
                <span className="text-xl font-light">(2017-2018)</span>
              </div>

              <ul className="font-light text-left list-inside pb-2 sm:pt-2 last:block hidden">
                <li className="">
                  - Lead the design team and creative projects
                </li>
                <li className="">
                  - Design social media graphics, flyers, and event materials
                </li>
                <li className="">
                  - Manage large-format printing, including vinyl and banners
                </li>
                <li className="">
                  - Collaborate with marketing and academic teams on campaigns
                </li>
                <li className="">
                  - Guide junior designers and provide creative direction
                </li>
              </ul>

              <ul className="font-light text-right pb-2 sm:pt-2 block">
                <li className="">
                  Lead the design team and creative projects -
                </li>
                <li className="">
                  Design social media graphics, flyers, and event materials -
                </li>
                <li className="">
                  Manage large-format printing, including vinyl and banners -
                </li>
                <li className="">
                  Collaborate with marketing and academic teams on campaigns -
                </li>
                <li className="">
                  Guide junior designers and provide creative direction -
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className="bg-[#121214] flex flex-wrap justify-center gap-x-8 backdrop-blur-sm p-4 rounded-[26px] text-xl text-white">
              <div className="border-b-2 border-[#3b3b3b] text-center pb-2 block xl:hidden">
                <h1 className="text-2xl font-semibold">
                  Junior Graphic Designer @ MiBaYeik Design Studio
                </h1>
                <span className="text-xl font-light">(2017-2018)</span>
              </div>

              <div className="border-r-2 border-[#3b3b3b] pr-8 last:block hidden xl:block">
                <h1 className="text-2xl font-semibold ">
                  Junior Graphic Designer @ <br />
                  MiBaYeik Design Studio
                </h1>
                <span className="text-xl font-light">(2017-2018)</span>
              </div>

              <ul className="font-light pb-2 sm:pt-2">
                <li className="">
                  - Lead the design team and creative projects
                </li>
                <li className="">
                  - Design social media graphics, flyers, and event materials
                </li>
                <li className="">
                  - Manage large-format printing, including vinyl and banners
                </li>
                <li className="">
                  - Collaborate with marketing and academic teams on campaigns
                </li>
                <li className="">
                  - Guide junior designers and provide creative direction
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Location */}

        <div className="location overflow-hidden">
          <h1 className="text-4xl font-bold text-white text-center pb-14">
            Get in Touch
          </h1>
          <section
            id="location"
            className="container flex flex-wrap w-full md:w-[1100px] mx-auto overflow-hidden"
          >
            <div className="w-[100%] md:w-[45%] mx-auto">
              <img
                src="/img/contact.png"
                className="min-w-[100%] rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-y-3 w-[100%] h-fit md:w-[50%] bg-[#0E0E10]/80 backdrop-blur-sm p-8 border-2 border-[#1C1C21] rounded-[26px] text-white">
              <div className="flex justify-between">
                <a href="">
                  <img src="/img/github.svg" alt="" className="size-16" />
                </a>
                <a href="">
                  <img src="/img/linkedin.svg" alt="" className="size-16" />
                </a>
                <a href="">
                  <img src="/img/github.svg" alt="" className="size-16" />
                </a>
                <a href="">
                  <img src="/img/github.svg" alt="" className="size-16" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* footer */}
      <div className="bg-[#1C1C21] text-center text-md text-[#9A9A9A] p-2 overflow-hidden">
        Developed by Khine Lynn Htwan
      </div>
    </>
  );
};

export default Home;
