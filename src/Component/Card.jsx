import { Link } from "react-router-dom";
import UseButton from "./Button";

export const Card = () => {
  return (
    <>
      <section className="flex items-center h-screen">
        <div className="bg-[#0E0E10]/80 backdrop-blur-sm p-4 border-2 mx-auto border-[#1C1C21] rounded-[26px]">
          <div className="w-[318px] h-[416px] text-center pt-16 rounded-xl text-[#B8B8B8]">
            <div className="">
              <div className="size-32 mx-auto mb-6 rounded-full bg-[#161616]">
                <img src="img/Avator.svg" alt="" />
                {/* <img src="/src/img/LongDog.gif" alt="" /> */}
              </div>
              <div className="mb-9">
                <h1 className="text-3xl text-center font-bold pb-2">
                  Hey Guy!
                </h1>
                <code className="text-xl">Welcome to my website</code>
              </div>
              <div className="relative">
                <Link to={"/onboarding"}>
                  <UseButton text="Get Started" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
