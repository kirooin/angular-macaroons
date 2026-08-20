import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";
import {FormType} from "./types/form.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count: number = 0;
  priceCart: number = 0;

  constructor(private productsService: ProductsService,
              private cartService: CartService,) {
  }

  public products: ProductType[] = [];

  public formValues: FormType = {
    title: '',
    name: '',
    phone: ''
  }

  protected companyPhone: string = '375293689868';
  protected companyInstUrl: string = 'https://www.instagram.com/theBestMacaroonsInTheWorld/'

  protected showPresent: boolean = true;

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.formValues.title = product.title.toUpperCase();
    this.count++
    this.priceCart += product.price;
    this.scrollTo(target)
    alert(product.title + ' добавлен в корзину!');
  }

  public createOrder(): void {
    if (!this.formValues.title) {
      alert('Выберите макарун')
      return
    }
    if (!this.formValues.name) {
      alert('Заполните имя')
      return
    }
    if (!this.formValues.phone) {
      alert('Заполните номер телефона')
      return
    }

    //ajax
    alert('Благодарим за заказ')

    this.formValues = {
      title: '',
      name: '',
      phone: ''
    }
  }

  protected menuIsOpen: boolean = false;

  protected activeMenu(): void {
    this.menuIsOpen = !this.menuIsOpen
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
    this.count = this.cartService.count

  }
}
