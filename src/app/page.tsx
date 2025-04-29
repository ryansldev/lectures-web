'use client'
import { CardContent, CardRoot } from "@/components/card";
import { Logo } from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <Logo className="w-20 h-20" />

      <CardRoot>
        <CardContent asChild>
          <div className="p-4">
            <h1 className="font-bold">Lições de Física</h1>
          </div>
        </CardContent>
      </CardRoot>
    </div>
  );
}
