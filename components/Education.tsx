// import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Timeline } from "@/components/ui/Timeline";

export function Education() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white-100  text-xs md:text-3xl font-normal mb-8">
            Enrolled for Master&apos;s Programme in Artificial Intelligence.
          </p>
          <p className="text-white-800  text-xs md:text-2xl font-normal mb-8">
            NSUT, Delhi
            </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-white-100  text-xs md:text-3xl font-normal mb-8">
          Enrolled for Bachelor&apos;s Programme in CSE.
          </p>
          <p className="text-white-800  text-xs md:text-2xl font-normal mb-8">
            AKTU, Ghaziabad
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700  text-xs md:text-3xl">
            <IoIosArrowForward /> Secured 8.1 CGPA in B.Tech.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "School Log",
      content: (
        <div>
          <p className="text-white-100  text-xs md:text-3xl font-normal mb-4">
            Completed both 10th and 12th.
          </p>
          <p className="text-white-800  text-xs md:text-2xl font-normal mb-4">
            Saraswati Shishu Mandir Senior Secondaary School, Gorakhpur
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700  text-xs md:text-3xl">
            <IoIosArrowForward /> Scored 9.4 CGPA in 10th
            </div>
            <div className="flex gap-2 items-center text-neutral-700  text-xs md:text-3xl">
            <IoIosArrowForward /> Scored 81% in 12th
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="education">
      <Timeline data={data} />
    </div>
  );
}
