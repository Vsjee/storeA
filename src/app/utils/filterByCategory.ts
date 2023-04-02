import { IProduct } from '../types';

export function filterByCategory(
  data: IProduct[],
  category: string
): IProduct[] {
  return data.filter((items) => items.category === category);
}
