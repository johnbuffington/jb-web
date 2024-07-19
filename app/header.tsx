import { notoSansMono, notoSerifDisplay } from "./fonts";

export default function Header() {
  return (
    <header className={"overflow-x-visibletext-nowrap"}>
      <h1 className={`${notoSerifDisplay.className} px-5 font-black tracking-tight leading-loose sm:leading-loose md:leading-loose italic text-4xl sm:text-5xl md:text-6xl whitespace-nowrap`}>
        John Buffington
      </h1>
      <h2 className={`${notoSansMono.className} px-5 text-emerald-800 font-semibold text-xl sm:text-2xl md:text-3xl tracking-widest leading-none sm:leading-10 text-nowrap uppercase`}>
        Full Stack Engineer
      </h2>
    </header>
  );
}