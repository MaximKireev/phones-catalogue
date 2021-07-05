import {Component} from "./Component.js";



export class PhonesCatalog extends Component{
    constructor(element, props, state) {
        super (element, props, state)

        this.render()
    }

    render(){
        if(!this.element) {return}
        this.element.innerHTML = `<ul class="phones-list">

     ${this.props.phones.map((phone, elem) => `
       
     <li class = 'phone-item' >
     ${phone.isBestseller? `<fieldset class = "promo_marker">`: `<fieldset class = "promo_marker normal">`}
     ${phone.isBestseller? `<span class = 'bestseller'>Bestseller</span>` : `<span class = 'bestseller hidden'>Bestseller</span>`}
             <div class="item-wrapper">
        <a href="#" class = 'details-link'><h2 class="item-name">${phone.name}</h2></a>
        <a href="#" class = 'image' ><img src="${phone.imageUrl}" width = 150 height = 150 alt="phone image"></a>

        <p class="description">${phone.snippet}</p>
        <button class="btn_details">More details</button>
        <button class="add" data-number = ${elem}>Add to cart</button>
        </div>
        </fieldset>
      </li>
         
        `).join('')}
     
     
      
    </ul>`
            //Передача в пропсы ID устройства для перехода из карточки товара на страницу с деталями товара.
        this.element.addEventListener('click', (e)=>{
            let delegateTarget = e.target.classList.contains('item-name');
            if(!delegateTarget) {return}


            let model = this.props.phones.find(item => item.name == e.target.innerText? item.id: false)
            
            this.props.isPhoneSelected(model.id);
        });

        //добавить телефон в корзину
        let btnsAdd = document.querySelectorAll('.add');
        for (const btnAdd of btnsAdd) {
        btnAdd.addEventListener('click', (e)=>{
            const searchValue = e.target.closest('.item-wrapper').querySelector('.item-name').innerText;

            let user = this.props.phones.find(item => (item.name === searchValue))

            this.props.addToCart({
                img: user.imageUrl,
                phoneName: user.name,
                price: 200,
                uniqueId: e.target.dataset.number});
        })
        }
    }
}