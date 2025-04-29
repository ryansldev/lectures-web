import { Box, Card, type BoxProps, type CardProps } from "@radix-ui/themes";
import { twMerge } from "tailwind-merge";

type CardRootProps = BoxProps & {}

export function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <Box className={twMerge("bg-neutral-900 p-2 rounded-xl border border-neutral-800 text-neutral-300 hover:border-atom-200 transition-colors select-none cursor-pointer", className)} {...props} />
  )
}

type CardContentProps = CardProps & {}

export function CardContent(props: CardContentProps) {
  return (
    <Card {...props} />
  )
}
