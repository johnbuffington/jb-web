import { 
  Noto_Serif,
  Noto_Serif_Display,
  Noto_Sans,
  Noto_Sans_Display,
  Noto_Sans_Mono
} from "next/font/google";

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: 'swap'
});

export const notoSerifDisplay = Noto_Serif_Display({
  style: [ "normal", "italic" ],
  subsets: ["latin"],
  display: 'swap'
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: 'swap'
});

export const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  display: 'swap'
});

export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: 'swap'
});
