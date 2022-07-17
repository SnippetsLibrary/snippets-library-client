type T_PostAuthor = {
  _id: string
  alias: string
}

export interface I_PostPayload {
  title: string
  subtitle: string
  text?: string
}

export interface I_CurrentPost {}

export interface I_Post extends I_PostPayload {
  _id: string
  author: T_PostAuthor
  tags: Array<string>
  id: string
  upvotes: number
  downvotes: number
}

export interface I_PostData {
  docs: I_Post[]
}
