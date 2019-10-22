import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

   items = this.myservice.totalitems;
  cart=this.myservice.shoppingcart;
  price=this.myservice.totalprice;
  searchdata;
  
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
  }

  addToCart(product)
  {
    this.cart = this.myservice.add(product);
    this.price = this.myservice.totalprice;
  }
}
