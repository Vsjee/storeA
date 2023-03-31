import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../types';

@Pipe({
  name: 'filterData',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: IProduct[], searchText: string): IProduct[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText)
      );
    });
  }
}
