
import {Component} from "./Component.js";
import {shoppingCartItems} from './phonesPage.js'


export class ShoppingCart extends Component{
    constructor(element, props, state) {

        super (element, props)

    this.render();

    }
    render(){

        this.element.innerHTML = `

<ul class="shopping-cart-small">
    <li><a href="#" class="header-cart"> Cart <span class="badge">${this.props.selectedItems.length}</span></a></li>
  </ul>
  
      <div class="shopping-cart-container">
      <div class="background"><div class="close-cart"><span>X</span></div></div>
  <div class="shopping-cart">
    <div class="shopping-cart-header">
      <img src="img/iconfinder_icon-ios7-cart_211708.svg" width="30px" height="30px"><span class="badge">${this.props.selectedItems.length}</span>
      <div class="shopping-cart-total">
        <span class="lighter-text">Total:</span>
        <span class="main-color-text">$ ${this.props.selectedItems.reduce((sum, current) => {return sum + current.price}, 0)}</span>
      </div>
    </div> 
  
    <!--end shopping-cart-header -->
${           this.props.selectedItems.length < 1 ? 
            `
              <p class="no_items"><h2>Your shopping cart is empty</h2></p>
    <img src="img/empty_shopping_cart.png" class="img_empty_cart" alt="Empty cart">
            `:
            `<ul class="shopping-cart-items">
    ${this.props.selectedItems.map((item, number) => `<li class="clearfix">
        <p class="item_number" >${number+1}</p>
        <img src="${item.img}" width="80px" height="80px" alt="item1" />
        <span class="item-name" data-name = '${item.phoneName}'>${item.phoneName}</span>
        <span class="item-price">${item.price}</span>
        <div class="qty_items_container">
        <button class="minus">-</button>
        <div class="qty_items">1</div>
        <button class="plus">+</button>
</div>
                <button class="del" data-num = '${number}'>Remove</button>

      </li>`).join('')}
    </ul>
    <a href="#" class="button_buy">Buy!</a>`}
    
  </div> <!--end shopping-cart -->
</div>
`

        let link = document.querySelector('.header-cart');
        let cart = document.querySelector('.shopping-cart');
        let minus = document.querySelector('.minus');
        let plus = document.querySelector('.plus');
        let qty_items = document.querySelector('.qty_items');
        let cartBGC = document.querySelector('.background');
        let closeCart = document.querySelector('.close-cart');



            if(shoppingCartItems.length>0) {
                let value = +qty_items.innerHTML
                minus.addEventListener('click', (e)=>{
                    qty_items.innerHTML = --value;

                })
                plus.addEventListener('click', (e)=>{
                    qty_items.innerHTML = ++value;
                })
            }



        link.addEventListener('click', ()=>{
            if(cart.style.display === "block"){
                return
                }
                else {
                cart.style.display = "block";
                cartBGC.style.display = "block";
            }


            })
        closeCart.addEventListener('click', ()=>{
            if(cart.style.display === "block"){
                cart.style.display = "none";
                cartBGC.style.display = "none";
            }
        


        })
        cart.addEventListener('click', (e)=>{
            let target = e.target.classList.contains('del');
            if(!target) {return}

            shoppingCartItems.splice(e.target.dataset.num,1);
            this.render()


        })


    };


}