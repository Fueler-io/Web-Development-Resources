export type CardDetails = {
  name: string,
  link: string,
  tag: string,
  image: string,
  description: string,
  inserted_at: string,
  updated_at: string,
}


export interface ItemProps {
  item: CardDetails
}