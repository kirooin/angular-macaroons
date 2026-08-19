import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductsService {

  constructor() {
  }

  getProducts(): ProductType[] {
    return [
      {
        image: 'mac-red.png',
        title: 'Макарун с малиной',
        price: 1.70
      },
      {
        image: 'mac-yellow.png',
        title: 'Макарун с манго',
        price: 1.70
      },
      {
        image: 'mac-white.png',
        title: 'Макарун с ванилью',
        price: 1.70
      },
      {
        image: 'mac-green.png',
        title: 'Макарун с фисташками',
        price: 1.70
      },
    ]
  }
}
