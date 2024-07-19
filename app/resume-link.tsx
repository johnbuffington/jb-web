import Image from "next/image";
import { notoSansDisplay } from "./fonts";
import downloadIcon from "./download.svg";

export default function ResumeLink() {
  return (
    <a className={`${notoSansDisplay.className} mt-16 px-5 py-4 text-lg inline-block font-medium tracking-wide nowrap uppercase rounded-lg border-4 bg-yellow-400 text-yellow-900 border-yellow-500 border-8 hover:bg-yellow-500 hover:border-yellow-600 hover:text-yellow-900 active:bg-yellow-600 active:text-yellow-950 active:border-yellow-600 transition ease-in-out hover:scale-110 duration-200`}
      href="./resume.pdf" target="_blank">
      <svg viewBox="0 0 24 24" className="h-5 pr-2 inline relative bottom-px fill-yellow-900">
        <path xmlns="http://www.w3.org/2000/svg" d="M12.033,19.011a3.489,3.489,0,0,0,2.475-1.024l3.919-3.919-2.121-2.121-2.782,2.782L13.5,0l-3,0,.024,14.709L7.76,11.947,5.639,14.068l3.919,3.919A3.487,3.487,0,0,0,12.033,19.011Z"/>
        <path xmlns="http://www.w3.org/2000/svg" d="M21,16v5H3V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z"/>
      </svg>
      Download My Resume
    </a>
  );
}

