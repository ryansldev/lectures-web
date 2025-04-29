'use client'
import { CardContent, CardRoot } from "@/components/card";
import { Logo } from "@/components/logo";
import { TranslateSubjectEnum, type SubjectEnumKey } from "@/enums/translate-subject";
import Link from "next/link";

const SUBJECTS = ["physics", "chemistry", "math"]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 max-w-[400px] mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Logo className="w-20 h-20" />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Feynman Universe</h1>
          <p className="leading-relaxed text-neutral-300 font-regular">
            Explore o cosmos do conhecimento explicando conceitos complexos com palavras simples
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 w-full items-center justify-start">
        {SUBJECTS.map((subject) => (
          <CardRoot className="flex-1 min-w-[49%]" key={subject}>
            <CardContent asChild>
              <Link href={`/${subject}`}>
                <div className="p-4">
                  <h1 className="font-bold">Lições de {TranslateSubjectEnum[subject as SubjectEnumKey]}</h1>
                </div>
              </Link>
            </CardContent>
          </CardRoot>
        ))}
      </div>
    </div>
  );
}
