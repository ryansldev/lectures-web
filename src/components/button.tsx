import { Button as RadixButton, type ButtonProps as RadixButtonProps } from "@radix-ui/themes";
import { twMerge } from "tailwind-merge";

type ButtonProps = RadixButtonProps & {}

export function Button({ className, ...props }: ButtonProps) {
  return <RadixButton className={twMerge("flex gap-2 items-center justify-center bg-atom-800 text-neutral-950 rounded-xl px-5 py-2 cursor-pointer hover:bg-atom-700 transition-colors", className)} {...props} />
}
