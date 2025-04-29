export enum TranslateSubjectEnum {
  physics = "Física",
  chemistry = "Química",
  math = "Matemática"
}

export type SubjectEnumKey = keyof typeof TranslateSubjectEnum;
