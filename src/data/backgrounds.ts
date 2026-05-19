export type BackgroundOption = {
  id: string
  name: string
  type: 'image' | 'animated' | 'clean'
  imageUrl?: string
}

export const BACKGROUNDS: BackgroundOption[] = [
  {
    id: 'clouds',
    name: 'Mraky',
    type: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'palms',
    name: 'Palmy s mořem',
    type: 'image',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'animated',
    name: 'Animované pozadí',
    type: 'animated',
  },
  {
    id: 'clean',
    name: 'Čisté / Bez pozadí',
    type: 'clean',
  },
]
