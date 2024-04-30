export type Course = {
  id: string
  title: string
  subtitle: string
  description: string
  coverImageUrl: string
}

export const EmptyCourse = (): Course => ({
  id: "", title: "", subtitle: "", description: "",
  coverImageUrl: ""
})

// --- Interface ---------------------------------------------------------------
export type TableHeaders = {
  title: string
  description: string
}
