import { createClient } from '@supabase/supabase-js'
import Poem from '../../Pages/Poetry/models/poem'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL')
}

if (!supabaseAnonKey) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getPoetry(): Promise<Poem[]> {
  const { data, error } = await supabase
    .from('Poetry')
    .select('title, text, year')

  if (error) {
    console.error('Error fetching poetry data:', error)
    throw new Error('Could not fetch poetry data.')
  }

  // Guard against null data before calling .map()
  if (!data) {
    return []
  }

  return data.map((poem) => new Poem(poem.title, poem.year, poem.text))
}