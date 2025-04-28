'use client'

import Image, { type ImageProps } from "next/image";

interface LogoProps extends Partial<ImageProps>{}

export function Logo(props: LogoProps) {
  return (
    <div>
      <Image src="/atom.png" alt="Atom" width={props.width ?? 48} height={props.height ?? 48} quality={props.quality ?? 100} {...props} />
    </div>
  )
}