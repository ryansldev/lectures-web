import { twMerge } from "tailwind-merge"

import * as ProgressPrimitive from '@radix-ui/react-progress'

type ProgressProps = ProgressPrimitive.ProgressProps & {}

export function Progress({ className, value, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root className={twMerge("h-1 rounded-xl bg-neutral-800", className)} {...props}>
      <ProgressPrimitive.Indicator
        className="h-full bg-atom-800 transition-all duration-300 rounded-xl"
        style={{ width: `${value}%` }}
      />
    </ProgressPrimitive.Root>
  )
}