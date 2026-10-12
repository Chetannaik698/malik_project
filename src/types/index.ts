import type { ArtKind } from '../components/ui/Art'

export type Category = {
  id: string
  title: string
  text: string
  art: ArtKind
  span: string
}

export type Product = {
  id: string
  name: string
  brand: string
  cat: string
  specs: string[]
  price: string
  rating?: number
  ratingsCount?: number | string
  image?: string
  art?: ArtKind
}
