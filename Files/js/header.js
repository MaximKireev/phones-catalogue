import {ShoppingCart} from './shoppingCart.js'
import {Component} from "./Component.js";


export class Header extends Component{
    constructor(element, props) {
        super(element, props)
        this.render()
        new ShoppingCart(document.querySelector('ShoppingCart'),
            {selectedItems: this.props.cartItems})

    }

render(){
    this.element.innerHTML = `
<header>
<div class="main-menu-container">
  <ul class="main-menu">
    <li class="about"><a href="#">Home</a></li>
    <li class="phones"><a href="#">Phones</a></li>
    <li class="tv"><a href="#">TVs</a></li>
  </ul>
  <ShoppingCart></ShoppingCart>
  </div>
</header>`
}}