'use client'

import Image, { type ImageProps } from "next/image";

interface LogoProps extends Partial<ImageProps>{}

export function Logo(props: LogoProps) {
  return (
    <div className={props.className}>
      <Image src="/atom.png" alt="Atom" width={512} height={512} quality={props.quality ?? 100} {...props} />
    </div>
  )
}