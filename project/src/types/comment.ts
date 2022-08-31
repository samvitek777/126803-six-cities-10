export type User = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
  token: string
}

export type Comment = {
  comment: string
  date: string
  id: number
  rating: number
  user: User | undefined
}

export type AddComment = {
  hotelId: number
  comment: string
  rating: number
}

export type Comments = Comment[];

export type Rating = {
  star: number,
  title: string
}
