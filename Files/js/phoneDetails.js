import {Component} from "./Component.js";

export class PhoneDetails extends Component{
    constructor(element, props, state) {
        super(element, props, state)
        this.render();
    }
    render(){

        let phone = this.props.phone
        let currentPhone = this.props.currentPhone;
        console.log(currentPhone)
        if(!this.element) {return}



        this.element.innerHTML = `
<div class="gallery-container">
<h1 class="phone_name">${phone.id}</h1>
<button class="back_to_main">Back to main menu</button>
<section class="phone-left-menu">
  <h2>Phone rating</h2>
  <div class="rating_container" data-total-value = '${phone.rating}'>
  <div class="rating_item" data-item-value = '5'>★</div>
  <div class="rating_item" data-item-value = '4'>★</div>
  <div class="rating_item" data-item-value = '3'>★</div>
  <div class="rating_item" data-item-value = '2'>★</div>
  <div class="rating_item" data-item-value = '1'>★</div>
</div>
  <ul class="advantages-list">
  <h2>Main advantages</h2>
  <li class="advantages-item">Phone OS: <b class="adv-value">${phone.android.os}</b></li>
  <li class="advantages-item">Phone battery: <b class="adv-value">${phone.battery.type}</b></li>
  <li class="advantages-item">Weight: <b class="adv-value">${phone.weight}</b></li>
  <li class="advantages-item">Phone storage: <b class="adv-value">${phone.storage.ram}</b></li>
  <li class="advantages-item">Bluetooth: <b class="adv-value">${phone.connectivity.bluetooth}</b></li>
  </ul>
</section>
  <div class="bf-container" ><img class="largeImg" src="Files/img/phones/${currentPhone}.0.jpg" alt="Large image" width = '400px' height="400px"></div>

  <ul class="small-img-list">
    <li>
      <a href="#" class = 'image_item' title="Image_item"><img class = 'small_photo' src="Files/img/phones/${currentPhone}.0.jpg" width = '100px' height="100px"></a>
    </li>
    <li>
      <a href="#" class = 'image_item' title="Image_item"><img class = 'small_photo' src="Files/img/phones/${currentPhone}.1.jpg" width = '100px' height="100px"></a>
    </li>
    <li>
      <a href="#" class = 'image_item' title="Image_item"><img class = 'small_photo' src="Files/img/phones/${currentPhone}.2.jpg" width = '100px' height="100px"></a>
    </li>
    <li>
      <a href="#" class = 'image_item' title="Image_item"><img class = 'small_photo' src="Files/img/phones/${currentPhone}.3.jpg" width = '100px' height="100px"></a>
    </li>
    <li>
      <a href="#" class = 'image_item' title="Image_item"><img class = 'small_photo' src="Files/img/phones/${currentPhone}.4.jpg" width = '100px' height="100px"></a>
    </li>
  </ul>
  <section class="phone-right-menu">
  <p class="price">799 <span>Eur</span></p>
  <p class="availability">Доступен</p>
  <button type="button" class="add-to-cart">В корзину!</button>
</section>
  </div>
`
        let btnAdd =  document.querySelector('.add-to-cart');
        let btnBack = document.querySelector('.back_to_main');
        let list = document.querySelectorAll('.image_item');
        let smallPhotos = document.querySelectorAll('.small_photo');
        let bigPhoto = document.querySelector('.largeImg');
        btnBack.addEventListener('click', ()=>{
            this.props.onBack()
        });
        btnAdd.addEventListener('click', ()=>{
            this.props.addToCart({img: phone.images[0], phoneName: phone.id, price: 200});
        })
        for(const item of list){
            item.addEventListener('click', (e)=>{
                let eventTarget = e.target.closest('.image_item');
                if(!eventTarget) {return}
                bigPhoto.src = e.target.src
            })
        }
        for(const photo of smallPhotos){
            photo.addEventListener('error', (e)=>{
                e.target.src = "Files/img/noImage.jpg"
            })
        }
    }
}