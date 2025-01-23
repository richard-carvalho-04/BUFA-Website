import React from "react";
import { StickyScroll } from "../ui/StickyScroll";

const content = [
  {
    title: " Why Join Us",
    description:
      "BUFA aims to empower aspiring football players by providing opportunities to connect, learn and grow.",
    content: (
      <div
        className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/images/bufa.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    // ),bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]
    )
  },
  {
    title: "Professional Coaching by AFC/AIFF Certified Coaches",
    description:
      "At BUFA, our training is led by highly qualified coaches certified by the Asian Football Confederation (AFC) and the All India Football Federation (AIFF). Their expertise ensures professional guidance, tailored techniques, and a pathway for players to reach their full potential.",
    content: (
      <div
        className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/images/mateensir.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    // ),bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]
    )
  },
  {
    title: "Certified by AIFF as Elite",
    description:
      " Recognized by the All India Football Federation (AIFF), BUFA holds the prestigious Elite certification. This distinction highlights our commitment to excellence, top-tier coaching, and adherence to the highest standards in football training and development.",
    content: (
      <div className=" w-full h-full flex items-center justify-center text-white">
        <img
          src="/images/star3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Stepping into the Indian Youth League",
    description:
      "BUFA is proud to announce its participation in the prestigious Indian Youth League. A journey of passion, dedication, and excellence begins as our team gears up to compete and shine at the national level. With a commitment to nurturing young talent, this marks a significant milestone in our academy's legacy. Let's create history together!", 
   content: (
      <div className=" w-full h-full flex items-center justify-center text-white">
        <img
          src="/images/indianyouthleague.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "The Future of Football: Rising Star in Action",
    description:
      "Embodying passion and determination, our young talent takes the field with unparalleled energy and drive. This image captures the essence of youth, grit, and the unwavering spirit to excel. As we step into new arenas, our rising star symbolizes hope and the promising future of football",
    content: (
      <div className=" w-full h-full flex items-center justify-center text-white">
      <img
        src="/images/mainplayer.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo" />
    </div>
    ),
  },
];
export function Sticky() {
  return (
    (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
  );
}
