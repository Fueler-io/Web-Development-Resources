import { supabase } from '../utils/supabase'

type Resource = {
  id: number;
  inserted_at: string;
  updated_at: string;
  name: string;
  link: string;
  tag: string;
}

export const fetchAllResources = async () => {
  const { data, error, count,} = await supabase
  .from<Resource>('resources')
  .select(`
    id, 
    name, 
    link, 
    tag
  `, { count: 'exact' })
  
  return {data, count, error};
}
  
