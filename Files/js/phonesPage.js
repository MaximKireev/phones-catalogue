import {Header} from './header.js'
import {Footer} from "./footer.js";
import {PhonesCatalog} from './phonesCatalog.js';
import {getAllPhones, getOnePhone} from "./fakeData.js";
import {PhoneDetails} from './phoneDetails.js';
import {Component} from "./Component.js";
import {Search} from "./search.js";

export let shoppingCartItems = [];

export class PhonesPage extends Component{
    constructor(element, props, state) {
        super(element, props, state)
        this.state = {
            getPhones: getAllPhones(),
            currentSelectedPhone: null,
            phoneForDetails: getOnePhone(123),

        };
        this.render();

         }

    render(){
        this.element.innerHTML = `

  <Header>
    <ShoppingCart></ShoppingCart>
  </Header>
            <div class="wrapper">
            <div class="modal-screen">
            </div>
            <div class="modal-message"> 
            <a href="#" class="closebtn">×</a>
            <h2 class="modal-header">Message</h2>
            <p class="message-text">This item is already in your cart. If you want to order several pieces, then change the quantity by clicking "+" in the basket</p>
            </div>
  ${!this.state.currentSelectedPhone?
            `
        <Search></Search>
        <main class = 'main'>
        
        <PhonesCatalog></PhonesCatalog>
            </main>`:
            `<PhoneDetails></PhoneDetails>`}
   

  
</div>
<Footer></Footer>
        `
        let modal = document.querySelector('.modal-screen');
        let modalMessage = document.querySelector('.modal-message');
        let closebtn = document.querySelector('.closebtn');
       
        document.addEventListener('click', function (e){

            if(e.target === modal || e.target === closebtn) {
                modal.style.visibility = 'hidden';
                modalMessage.style.visibility = 'hidden';
            }

        })

        new Header (document.querySelector('Header'), {
            cartItems: shoppingCartItems
        });
        new Footer (document.querySelector('Footer'));

        new PhoneDetails (document.querySelector('PhoneDetails'),
            {phone: this.state.phoneForDetails,
                onBack: ()=>{this.state.currentSelectedPhone = null; this.render(); },
                addToCart: (obj)=> {
                    if(shoppingCartItems.find( item => item.uniqueId === obj.uniqueId)){
                        modal.style.visibility = 'visible';
                        modalMessage.style.visibility = 'visible';
                    }
                    else {
                        shoppingCartItems.push(obj);
                        this.render();
                    }},
            currentPhone: this.state.currentSelectedPhone}
        );
        new Search(document.querySelector('Search'),
            {globalSearchValue: (str)=>{
                this.state.getPhones = getAllPhones(str);
                    this.render();
                }});
        new PhonesCatalog (document.querySelector('PhonesCatalog'),
            {phones: this.state.getPhones,

                isPhoneSelected: (phoneName)=>{
                    this.state.currentSelectedPhone = phoneName;
                    this.render();

                },
                addToCart: (obj)=> {

                    if(shoppingCartItems.find( item => item.uniqueId === obj.uniqueId)){
                        modal.style.visibility = 'visible';
                        modalMessage.style.visibility = 'visible';
                        }
                    else {

                        shoppingCartItems.push(obj);
                        this.render();

                    }


                    },

                });
    }

}