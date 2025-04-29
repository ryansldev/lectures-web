import { Box, Card, type BoxProps, type CardProps } from "@radix-ui/themes";

type CardRootProps = BoxProps & {}

export function CardRoot(props: CardRootProps) {
  return (
    <Box className="bg-neutral-800 p-2 rounded-xl border border-neutral-700 text-neutral-300 hover:border-neutral-600 transition-colors select-none cursor-pointer" {...props} />
  )
}

type CardContentProps = CardProps & {}

export function CardContent(props: CardContentProps) {
  return (
    <Card {...props} />
  )
}
