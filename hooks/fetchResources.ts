import { supabase } from '../utils/supabase'
import { Resource } from './types';


export const fetchResources = async ({queryKey}: any) => {
  const { data, error} = await supabase
  .from<Resource>('resources')
  .select(`*`)
  .filter("tag", "eq", queryKey[1])
  .range(0, 6)
  return {data, error};
}
  
