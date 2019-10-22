import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart=this.myservice.shoppingcart;
  price=this.myservice.totalprice;
  searchdata;
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
  }

  removefromcart(product)
  {
    this.cart=this.myservice.remove(product);
    this.price=this.myservice.totalprice;
  }

  add(product)
  {
    this.cart=this.myservice.add(product);
  this.price=this.myservice.totalprice;
  }

  removeone(product)
  {
    this.cart=this.myservice.removeone(product);
    this.price=this.myservice.totalprice;
  }

}
