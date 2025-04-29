import { Button } from "@/components/button";
import { MOCKED_LESSONS } from "@/consts/mocked-lessons";
import { MOCKED_NOTES } from "@/consts/mocked-notes";
import { TranslateSubjectEnum, type SubjectEnumKey } from "@/enums/translate-subject";
import { ChevronRight, PlusIcon } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface LessonPageProps {
  params: Promise<{
    subject: SubjectEnumKey;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId, subject } = await params;

  const notes = MOCKED_NOTES[lessonId.toString() as keyof typeof MOCKED_NOTES] ?? undefined;
  const lesson = MOCKED_LESSONS.find((lesson) => lesson.id === Number(lessonId))

  if(!lesson) return

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col w-full h-full max-w-[60dvw] justify-center gap-4">
        {notes.map((note, key) => (
          <>
            <div className="flex flex-col gap-1">
              <span className="text-[14px] flex gap-0 items-center text-neutral-500">
              Lições de {TranslateSubjectEnum[subject]} <ChevronRight className="w-3 h-3" />
              Volume {MOCKED_LESSONS.indexOf(lesson) + 1}: {lesson.title}
              </span>
              <h1 className="text-2xl">
                Capítulo {key+1}: {" "}
                {note.title}
              </h1>
            </div>
            <div key={note.id} className="w-full bg-neutral-900 rounded-xl pt-3">
              <Markdown remarkPlugins={[remarkGfm]}>
                {note.content}
              </Markdown>
            </div>
          </>
        ))}
        <Button className="bg-transparent text-neutral-500 hover:bg-transparent">
          <PlusIcon />
        </Button>
      </div>
    </div>
  )
}