import React from "react";
import engIcon from "../../images/abc-block.png";
import hifzIcon from "../../images/quran.png";
import banIcon from "../../images/clipboard.png";
import moktobIcon from "../../images/yes.png";
import abobIcon from "../../images/hotel-building.png";
import dlscIcon from "../../images/school-material.png";
import { HomeIcon } from "@heroicons/react/24/outline";
const Facilities = () => {
  return (
    <div
      className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10"
      style={{
        backgroundImage:
          'url("https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png")',
      }}
    >
      <h2 className="container mb-12 text-center text-3xl font-bold">
        Facilities
      </h2>
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white border ">
        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-rose-800 text-white">
		  <img
              className="h-32 w-32 rounded-full object-cover object-center"
              src={banIcon}
              alt="icon image"
            />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            বাংলা মাধ্যম
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Team BrainEdge education is a bunch of highly focused, energetic set
            of people.
          </p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-rose-800 text-white">
            <img
              className="h-32 w-32 rounded-full object-cover object-center"
              src={engIcon}
              alt="icon image"
            />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            ইংলিশ ভার্সন
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Know where you stand and what next to do to succeed .
          </p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-rose-800 text-white">
           <img
              className="h-32 w-32 rounded-full object-cover object-center"
              src={moktobIcon}
              alt="icon image"
            />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">মক্তব</p>
          <p className="mt-2 text-sm text-slate-500">
            Professional Advice for higher education abroad and select the top
            institutions worldwide.
          </p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-rose-800 text-white">
		  <img
              className="h-32 w-32 rounded-full object-cover object-center"
              src={hifzIcon}
              alt="icon image"
            />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            হিফজুল কুরআন
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Yet another year ! Yet another jewel in our crown!
          </p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-rose-800 text-white">
		  <img
              className="h-32 w-32 rounded-full object-cover object-center"
              src={abobIcon}
              alt="icon image"
            />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            আবাসিক/অনাবাসিক
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Get Topic-Wise Tests, Section- Wise and mock tests for your
            preparation.
          </p>
        </div>
        <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-rose-800 text-white">
		  <img
              className="h-32 w-32 rounded-full object-cover object-center"
              src={dlscIcon}
              alt="icon image"
            />
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            ডে লং স্কুলিং
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Visa process by helping you create the necessary documentation
          </p>
        </div>
      </div>
      <div className="w-full   bg-rose-800 py-10 px-20 flex justify-between items-center">
        <p className=" text-white">
          {" "}
          <span className="text-4xl font-medium">
            Still Confused ?
          </span> <br />{" "}
          <span className="text-lg">
            Book For Free Career Consultation Today !{" "}
          </span>
        </p>
        <button className="px-5 py-3  font-medium text-white hover:bg-green-500 duration-150  bg-green-400">
          Learn More{" "}
        </button>
      </div>
    </div>
  );
};

export default Facilities;
