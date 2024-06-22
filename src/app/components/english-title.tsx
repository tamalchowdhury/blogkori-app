import { merriweather } from "../lib/utils";

export function EnglishTitle({ children, className = "" }) {
  return (
    <h1
      className={`text-[28px] md:text-[38px] font-bold leading-tight ${merriweather.className} ${className}`}
    >
      {children}
    </h1>
  )
}
