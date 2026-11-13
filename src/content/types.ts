export type MathStep = {
  id: string
  title: string
  /** Plain-language reason this step is needed */
  why: string
  /** Optional LaTeX formula introduced or applied at this step */
  formula?: string
  /** Optional LaTeX showing the calculation on this example */
  calculation?: string
  /** Extra teaching notes after the calculation */
  notes?: string
}

export type Example = {
  id: string
  title: string
  /** Problem statement; may include LaTeX wrapped in $...$ or $$...$$ */
  prompt: string
  goal: string
  steps: MathStep[]
}

export type Section = {
  id: string
  title: string
  summary: string
  examples: Example[]
}

export type Chapter = {
  id: string
  number: number
  title: string
  description: string
  /** Textbook exercise range shown on the course outline (e.g. "1.4–1.14"). */
  exercises?: string
  sections: Section[]
}

export type Course = {
  id: string
  brand: string
  title: string
  subtitle: string
  topic: string
  chapters: Chapter[]
}
