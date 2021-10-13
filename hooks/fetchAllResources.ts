import { supabase } from '../utils/supabase';
import { Resource } from './types';

export const fetchAllResources = async () => {
  const { data, error} = await supabase
  .from<Resource>('resources')
  .select(`*`, { count: 'exact' })
  return {data, error};
}
  
