import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps extends ComponentProps<"textarea"> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea className={twMerge("disabled:opacity-40 bg-neutral-800 rounded-xs p-10 focus:outline-hidden focus:border-b-1 border-atom-500", className)} {...props} />
  )
}