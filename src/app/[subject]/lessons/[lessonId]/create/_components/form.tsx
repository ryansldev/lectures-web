"use client"

import { Progress } from "@/components/progress";
import { Button } from "@/components/button";

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { SubjectEnumKey } from "@/enums/translate-subject";
import { useNote } from "@/stores/useNote";
import { useEffect, useRef, useState } from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import type { JSONContent } from "@tiptap/react";

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

  const [content, setContent] = useState<JSONContent>(drafts[position] || drafts[position - 1] || "");

  function handleChangeDraft() {
    const draft = content;
    changeDraft(draft, position)
    if(step === totalSteps) {
      clear()
    }
  }

  async function handleSubmit() {
    handleChangeDraft()
    formRef.current?.getElementsByTagName("a")?.[1]?.click()
  }

  function onBack() {
    handleChangeDraft()
    formRef?.current?.getElementsByTagName("a")?.[0]?.click()
  }

  useEffect(() => {
    if(drafts.length === 0) {
      router.push(`${pathname}?step=1`)
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
        <div className="flex flex-col gap-2" onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}>
          <SimpleEditor setContent={setContent} content={content} />
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button onClick={onBack} type="button" className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300">
            Voltar
          </Button>
          <a href={`${step === 1 ? `/${subject}/lessons/${lessonId}` : `${pathname}/?step=${step-1}`}`} />
          <Button type="submit">
            {step !== totalSteps ? "Próxima etapa" : "Finalizar"}
          </Button>
          <a
            className="hidden"
            href={`${step !== totalSteps ? `${pathname}?step=${step+1}` : `/${subject}/lessons/${lessonId}`}`}
          />
        </div>
      </div>
    </form>
  )
}