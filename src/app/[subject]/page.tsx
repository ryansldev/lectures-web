import { Button } from "@/components/button";
import { CardContent, CardRoot } from "@/components/card";
import { MOCKED_LESSONS } from "@/consts/mocked-lessons";
import { TranslateSubjectEnum, type SubjectEnumKey } from "@/enums/translate-subject";
import { Sparkles } from "lucide-react";
import Link from "next/link";

interface SubjectPageProps {
  params: Promise<{
    subject: SubjectEnumKey;
  }>;
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subject } = await params;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col w-full h-full max-w-[60dvw] items-center justify-center gap-4">
        <div className="w-full flex justify-between">
          <h1 className="text-4xl font-bold flex-1">Lições de {TranslateSubjectEnum[subject]}</h1>
          <Button className="">
            <Sparkles className="w-4 h-4" /> Nova lição
          </Button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {MOCKED_LESSONS.map((lesson) => (
            <CardRoot className="flex-1 min-w-[49%]" key={lesson.id}>
              <CardContent asChild>
                <Link href={`/${subject}/lessons/${lesson.id}`}>
                  <div className="p-4">
                    <span className="text-[14px] font-medium text-neutral-500">
                      Lição #{MOCKED_LESSONS.indexOf(lesson) + 1}
                    </span>
                    <h1 className="font-bold text-2xl">
                      {lesson.title}
                    </h1>
                  </div>
                </Link>
              </CardContent>
            </CardRoot>
          ))}
        </div>
      </div>
    </div>
  )
}