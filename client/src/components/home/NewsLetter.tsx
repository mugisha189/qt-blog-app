import { FaArrowRight } from "react-icons/fa";
import images from "../../utils/constants/image";

const NewsLetter = () => {
  return (
    <div className="w-full bg-white p-1 space-y-8 mb-20 lg:translate-y-0 translate-y-32 ">
      <div className="w-full md:flex-row flex-col gap-y-6 flex items-center">
        <div className="basis-1/2  space-y-3 pl-10">
          <p className="text-primary font-medium text-base">OUR NEWS LETTER</p>
          <p className="text-black font-semibold text-lg ">
            Subscribe To Our Daily News Letter
          </p>
          <p className="text-gray-700 text-sm">
            Stay Informed with the QT Blog. Get the latest blog updates,
            achievements, and insights delivered directly to your inbox.
            Don&apos;t miss out !
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className=" border outline-none text-sm rounded-2xl px-4 py-2 bg-gray-100"
            />
            <button className="bg-primary px-20 py-2.5 text-xs text-white rounded-xl flex items-center gap-2">
              <p className="capitalize">Submit</p>
              <FaArrowRight />
            </button>
            {/* <Button
              text="Subscribe Now"
              icon={<FaArrowRight />}
              className=" px-11 w-fit space-x-12 py-4 rounded-lg bg-purpleColor mx-auto sm:mx-0 text-white text-lg flex justify-between"
            /> */}
          </form>
        </div>
        <div className="flex w-1/2 justify-end pr-6">
          <div className="flex relative justify-end aspect-[4/5] max-w-[400px] sm:w-10/12 w-full">
            <img
              src={images.authBg}
              alt="student image"
              className=" rounded-lg"
            />
            <div className="absolute aspect-[4/6] overflow-hidden md:max-w-[150px] max-w-[300px] lg:max-w-[300px] w-1/2 md:w-full border-2 rounded-2xl border-white top-1/2 -translate-x-1/2 -translate-y-1/2 left-0">
              <img
                src={images.authBg}
                alt="student image"
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
