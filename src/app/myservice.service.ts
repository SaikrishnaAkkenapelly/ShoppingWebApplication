import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  totalitems = require('../assets/fruitsdata.json');
  shoppingcart=[];
  totalprice=0;
  
  add(product)
  {
    let value=true;
    for(let i =0;i<this.shoppingcart.length;i++)
    {
      if(this.shoppingcart[i].name==product.name)
      {
        this.shoppingcart[i].quantity++;
        value=false;
      }
    }
    if(value==true)
    {
      this.shoppingcart.push(product);
    }
    this.totalprice+=product.price;
    return this.shoppingcart;
  }
  remove(product)
  {
    let index=this.shoppingcart.indexOf(product);
    if(index>-1){
      this.totalprice -= product.price*product.quantity;
      this.shoppingcart.splice(index,1);
    }
    return this.shoppingcart;
  }

  removeone(product)
  {
    let index=this.shoppingcart.indexOf(product);
    if(index>-1){
      if(product.quantity>1){
        this.totalprice -= product.price;
        product.quantity -= 1;
      }else{
        this.remove(product);
      }
    }
    return this.shoppingcart;
  }
}
