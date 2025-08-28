import { Work_Sans, Eczar } from "next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular, Medium, SemiBold, Bold
  variable: "--font-work-sans",
});

export const eczar = Eczar({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
  variable: "--font-eczar",
});
