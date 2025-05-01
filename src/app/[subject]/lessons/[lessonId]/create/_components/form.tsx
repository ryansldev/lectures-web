"use client"

import { Progress } from "@/components/progress";
import { Button } from "@/components/button";

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from "next/link";
import type { SubjectEnumKey } from "@/enums/translate-subject";
import { useNote } from "@/stores/useNote";
import { Textarea } from "@/components/textarea";
import { useEffect, useRef } from "react";
import { Separator } from "@radix-ui/themes";

interface CreateNoteFormProps {
  subject: SubjectEnumKey;
  lessonId: number;
}

export function CreateNoteForm({
  subject,
  lessonId
}: CreateNoteFormProps) {
  const { drafts, changeDraft, clear } = useNote()

  const router = useRouter()

  const searchParams = useSearchParams()

  const pathname = usePathname()

  const step = Number(searchParams.get('step') ?? 1);

  const STEPS = [
    {
      title: "Explique com palavras simples",
      description: "Descreva esse conceito como se estivesse ensinando para uma criança de 12 anos."
    },
    {
      title: "Onde você sentiu dificuldade?",
      description: "Identifique partes confusas ou difíceis de explicar."
    },
    {
      title: "Simplifique e crie analogias",
      description: "Crie exemplos, comparações ou analogias para facilitar a compreensão."
    },
    {
      title: "Monte a explicação final",
      description: "Com base nas etapas anteriores, reescreva uma versão ainda mais clara da lição."
    },
  ]

  const totalSteps = STEPS.length
  
  const position = step - 1

  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(data: FormData) {
    const draft = data.get("draft") as string;
    changeDraft(draft, step)
    if(step === totalSteps) {
      clear()
    }
    formRef.current?.getElementsByTagName("a")?.[1]?.click()
  }

  useEffect(() => {
    if(drafts.length !== step) {
      router.push(`${pathname}?step=${drafts.length > 0 ? drafts.length : 1}`)
    }
  }, [])

  return (
    <form ref={formRef} action={handleSubmit} method="POST" className="flex flex-col gap-4 w-full">
      <Progress value={(step/totalSteps) * 100} />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl">{STEPS[position].title}</h1>
          <p className="text-neutral-400">{STEPS[position].description}</p>
        </div>
        <div className="flex gap-2">
          <Textarea className="flex-1 resize-none" placeholder="Digite aqui" name="draft" defaultValue={drafts[position - 1] ?? ""} />
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href={`${step === 1 ? `/${subject}/lessons/${lessonId}` : `${pathname}/?step=${step-1}`}`}>
            <Button type="button" className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300">
              Voltar
            </Button>
          </Link>
          <Button type="submit">
            {step !== totalSteps ? "Próxima etapa" : "Finalizar"}
          </Button>
          <Link
            className="hidden"
            href={`${step !== totalSteps ? `${pathname}?step=${step+1}` : `/${subject}/lessons/${lessonId}`}`}
          />
        </div>
      </div>
    </form>
  )
}