import type { SubjectEnumKey } from "@/enums/translate-subject";
import { CreateNoteForm } from "./_components/form";

interface CreateNotePageProps {
  params: Promise<{
    subject: SubjectEnumKey;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: CreateNotePageProps) {
  const { lessonId, subject } = await params;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col w-full h-full max-w-[60dvw] items-center justify-center gap-4">
        <CreateNoteForm lessonId={Number(lessonId)} subject={subject} />
      </div>
    </div>
  )
}