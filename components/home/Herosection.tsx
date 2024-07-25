import Image from "next/image";
import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaProjectDiagram,
  FaRProject,
  FaTeamspeak,
  FaTwitter,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const herosection = () => {
  return (
    <div className="h-[85vh] lg:h-[70vh] relative flex flex-col justify-center items-center ">
      <div
        className="absolute inset-0 
                    bg-gray-800 opacity-80 
                    z-5"
      ></div>
      <Image
        src="/building.jpg"
        width={500}
        height={500}
        alt="Picture of a building"
        className="h-full w-full"
      />
      <section className="container absolute top-0 z-10 mx-auto px-5 pt-12">
        <div className="   lg:flex justify-between mb-5 py-5 work-sans-regular text-base lg:text-xl">
          <p className="text-white ">
            For any kind of query or project you want to start with us
          </p>
          <p className="text-white">Calll +553434343 or Chat Now</p>
        </div>
        <div className="mb-5 lg:mb-10">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl text-white unbounded-medium capitalize">
            <span className="lg:mb-10 inline-block">
              Shape your dream with{" "}
            </span>
            <br />
            <span className="lg:mb-10 inline-block">
              the help of expert{" "}
              <span className="bg-orange-300 px-3">Builders</span>
            </span>
            <br />
            and stay safe always.
          </h2>
        </div>
        <div className="mb-5  lg:mb-20 space-x-5">
          <button className="bg-orange-300 text-white w-36 py-2 ">
            Learn More
          </button>
          <button className="text-white w-36 py-2 border border-white ">
            Our Works
          </button>
        </div>
        <div className="flex flex-wrap flex-col lg:flex-row justify-between">
          <div className="flex items-center">
            <FaProjectDiagram className="text-white text-2xl  lg:text-5xl mr-5" />
            <div>
              <p className="text-white">Completed Projects</p>
              <h2 className="text-white text-2xl">123</h2>
            </div>
          </div>
          <div className="flex items-center">
            <FaTeamspeak className="text-white text-2xl lg:text-5xl mr-5" />
            <div>
              <p className="text-white">Total Clients</p>
              <h2 className="text-white text-2xl">123</h2>
            </div>
          </div>
          <div className="flex items-center">
            <FaPerson className="text-white text-2xl  lg:text-5xl mr-5" />
            <div>
              <p className="text-white">Our Members</p>
              <h2 className="text-white text-2xl">123</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden text-white absolute z-10 right-0 lg:flex flex-col space-y-20 sm:border-l-2 border-white h-full justify-center px-5">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </section>
    </div>
  );
};

export default herosection;
