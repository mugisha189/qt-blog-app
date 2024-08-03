import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurNews = () => {
  return (
    <div className="w-full bg-white p-8 lg:px-[4%] flex flex-col gap-y-6">
      <div className="flex w-full mx-auto max-w-[700px] flex-col gap-y-3">
        <p className="text-primary  font-medium text-center">OUR NEWS</p>
        <p className="text-black font-semibold text-xl text-center">
          Our Latest News
        </p>
        <p className="text-gray-700 text-sm text-center ">
          Exciting Update: Real Ministries celebrates its second graduation for
          the 2020-2023 intake. Students have successfully completed their
          National Exams, marking a significant milestone in their tech journey.
          Congratulations to the graduates who are now poised to make their mark
          in the world of innovation!
        </p>
      </div>
      {/* <div className="grid lg:grid-cols-2 w-full mx-auto max-w-[1200px] gap-[4%] ">
        <div className="flex  flex-col w-full lg:aspect-[5/4] border gap-y-4 p-4 rounded-md">
          <Image
            src={imageUrl(mainNews?.image ?? "") ?? img2}
            className=" h-full object-cover lg:aspect-auto aspect-video"
            width={1000}
            height={1000}
            objectFit="cover"
            alt="main-article"
          />
          <h1 className=" sm:text-2xl text-xl font-bold">
            {mainNews?.title ?? ""}
          </h1>
          <span className=" opacity-70 mt-5">
            {new Date(mainNews?.createdAt ?? "").toDateString()}
          </span>
        </div>
        <div className="flex flex-col w-full gap-11 gap-y-2">
          {news.map((_new) => (
            <NewsCard news={_new} key={_new.id} />
          ))}
        </div>
      </div> */}
      <div className="w-full flex justify-center items-center">
        <Link
          to="/news"
          className="px-6 w-fit lg:translate-y-0 items-center gap-x-4 translate-y-20 space-x-12 py-4 rounded-lg bg-purpleColor mx-auto text-white text-lg flex justify-between"
        >
          Read More of Our News
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default OurNews;
