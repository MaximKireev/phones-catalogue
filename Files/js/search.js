import {PhonesPage} from "./phonesPage.js";
import {getAllPhones} from "./fakeData.js"
import {Component} from "./Component.js";

export class Search extends  Component{
    constructor(element, props) {
        super(element, props)

        this.render()
    }
    render(){
        let uniqueBrandItems = [];
        [...getAllPhones()].forEach(el => uniqueBrandItems.push(el.brand) )



        this.element.innerHTML = `
        <aside class = 'aside'> Sort by:</aside>
        <input type="text" class="global_search" placeholder="Global search...">
        <section class="price_search"><p>Price</p>
        <input type="number" class="from" placeholder="Od">
        <span> - </span>
        <input type="number" class="to" placeholder="Do">
        </section>
         <ul class="brand_search"><p>Search by brand:</p>
         ${
            Array.from(new Set(uniqueBrandItems)).map((el, item)=> 
             ` <li class = 'brand_item'>
            <input type="checkbox" class = 'brand_item' id = "item_${item}">
            <label for="item_${item}">${el}</label></li>`).join("")}
           
          

        </ul>
        <ul class="os_search"><p>Search by OS:</p>
            <li class="os_search_item"><input type="checkbox" id = "iOS"><label for="iOS">iOS</label></li>
            <li class="os_search_item"><input type="checkbox" id = "android"><label for="android">Android</label></li>
            <li class="os_search_item"><input type="checkbox" id = "other"><label for="other">Other</label></li>
           
        </ul>
        `
        let gSearch = document.querySelector('.global_search');
        gSearch.addEventListener('input', (e)=>{

            if(e.target.value.length > 2){
                this.props.globalSearchValue(e.target.value)
            }
        })

    }


}