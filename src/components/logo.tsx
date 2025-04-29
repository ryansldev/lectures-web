'use client'

import Image, { type ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface LogoProps extends Partial<ImageProps>{}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={twMerge("", className)}>
      <Image priority={true} src="/atom.png" alt="Atom" width={512} height={512} quality={props.quality ?? 100} {...props} />
    </div>
  )
}