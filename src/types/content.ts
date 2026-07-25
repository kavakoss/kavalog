export interface GearFrontmatter {
  title: string
  category: string
  type: string
  brand: string
  price: string
  rating: number
  date: string
  image?: string
  tags: string[]
  [key: string]: unknown
}

export interface RecipeFrontmatter {
  title: string
  brewer: string
  grinder: string
  champion?: string
  grindSetting: string
  ratio: string
  temperature: string
  brewTime: string
  date: string
  dose: string
  water: string
  image?: string
  tags: string[]
  [key: string]: unknown
}

export interface ReviewFrontmatter {
  title: string
  roaster: string
  origin: string
  process: string
  variety: string
  roastLevel: string
  rating: number
  date: string
  image?: string
  tags: string[]
  [key: string]: unknown
}
