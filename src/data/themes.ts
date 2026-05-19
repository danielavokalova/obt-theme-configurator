export type Theme = {
  id: string
  name: string
  primary: string
  secondary: string
  surface: string
}

export const THEMES: Theme[] = [
  {
    id: 'gol-orange',
    name: 'GOL Orange',
    primary: '#E25813',
    secondary: '#1A365D',
    surface: '#EBF8FF',
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    primary: '#0D9488',
    secondary: '#0C4A6E',
    surface: '#F0FDFA',
  },
  {
    id: 'corporate-navy',
    name: 'Corporate Navy',
    primary: '#2563EB',
    secondary: '#1E293B',
    surface: '#F1F5F9',
  },
  {
    id: 'sunset-magenta',
    name: 'Sunset Magenta',
    primary: '#DB2777',
    secondary: '#581C87',
    surface: '#FDF4FF',
  },
  {
    id: 'eco-travel',
    name: 'Eco Travel',
    primary: '#65A30D',
    secondary: '#365314',
    surface: '#F7FEE7',
  },
  {
    id: 'luxury-gold',
    name: 'Luxury Gold',
    primary: '#CA8A04',
    secondary: '#171717',
    surface: '#FAFAFA',
  },
]
