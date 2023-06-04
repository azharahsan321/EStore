import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() from: string = '';
  @Input() product: any;
  public fromAdmin: boolean = false;

  ngOnInit() {
    if (this.from == 'adminMyProducts') {
      this.fromAdmin = true;
    }
  }

}
