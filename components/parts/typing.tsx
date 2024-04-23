"use client";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({
  text, classNames }: {
    text: string[], classNames: string
  }) => {
  return (
    <TypeAnimation
      sequence={text}
      className={`${classNames}`}
      speed={5}
      cursor={false}
      repeat={Infinity}
    />
  )
}

export default TypingAnimation;
