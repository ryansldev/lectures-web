import { TranslateSubjectEnum, type SubjectEnumKey } from "@/enums/translate-subject";

interface SubjectPageProps {
  params: Promise<{
    subject: SubjectEnumKey;
  }>;
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subject } = await params;
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Lições de {TranslateSubjectEnum[subject]}</h1>
    </div>
  )
}