import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";
import {FormType} from "./types/form.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: ProductType[] = [
    {
      image: 'mac-red.png',
      title: 'Макарун с малиной',
    },
    {
      image: 'mac-yellow.png',
      title: 'Макарун с манго',
    },
    {
      image: 'mac-white.png',
      title: 'Макарун с ванилью',
    },
    {
      image: 'mac-green.png',
      title: 'Макарун с фисташками',
    },
  ];

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

  public formValues: FormType = {
    title: '',
    name: '',
    phone: ''
  }

  protected companyPhone: string = '+375(29) 368 - 98 - 68';
  protected companyInstUrl: string = 'https://www.instagram.com/theBestMacaroonsInTheWorld/'

  protected showPresent: boolean = false;

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
    this.activeMenu()
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.title = product.title.toUpperCase();

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
}
