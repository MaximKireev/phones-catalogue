import {getAllPhones} from "./fakeData.js"
import {Component} from "./Component.js";

export class Search extends  Component{
    constructor(element, props) {
        super(element, props)

        this.render()
    }
    render(){
        let uniqueBrandItems = [];
        this.props.phones.forEach(el => uniqueBrandItems.push(el.brand) )



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
            <li class="os_search_item"><input type="checkbox" id = "iOS" class="os_input"><label for="iOS" class="os_label">iOS</label></li>
            <li class="os_search_item"><input type="checkbox" id = "android" class="os_input"><label for="android" class="os_label">Android</label></li>
            <li class="os_search_item"><input type="checkbox" id = "other" class="os_input"><label for="other" class="os_label">Other</label></li>
           
        </ul>
        `
        let searchObject = {
            globalSearchValue: '',
            from: 0,
            to: 0,
            brands: [],
            os: []
        };

        let from = document.querySelector('.from');
        let to = document.querySelector('.to');
        let brandItems = document.querySelectorAll('.brand_item');
        let osInputs = document.querySelectorAll('.os_input');
        let gSearch = document.querySelector('.global_search');

        //???????????????????? ??????????
        gSearch.addEventListener('input', (e)=>{
            searchObject.globalSearchValue = e.target.value.toLowerCase();

            this.props.globalSearch(searchObject)
        })
        //???????????? ???????? ???????????? ???? ?????????? from
        from.addEventListener('change', ()=>{
            searchObject.from = Number(from.value);
            this.props.globalSearch(searchObject)
        })
        //???????????? ???????? ???????????? ???? ?????????? to
        to.addEventListener('change', ()=>{
            searchObject.to = Number(to.value);
            this.props.globalSearch(searchObject)

        })
        //???????????????? ?????????????? ???? ?????????????????? ???????????? Search by brand:

        for(let brand of brandItems){
            brand.addEventListener('click', ()=>{
                if(brand.checked === true){
                    gSearch.value = '';
                    if(!searchObject.brands.includes(brand.nextElementSibling.innerText)){
                    searchObject.brands.push(brand.nextElementSibling.innerText);
                    this.props.globalSearch(searchObject)
                    }
                }
                else if (brand.checked === false) {
                    searchObject.brands = searchObject.brands.filter(item => item !== brand.nextElementSibling.innerText);
                    this.props.globalSearch(searchObject);
                }
                else {return}

            })
        }
        //?????????? ???????????????????????? ?????????????? ?? ???????????? ????????????????????
        for(let os of osInputs){
            os.addEventListener('change', ()=>{
                if(os.checked === true){
                    if(!searchObject.os.includes(os.nextElementSibling.innerText)){
                    searchObject.os.push(os.nextElementSibling.innerText);
                    this.props.globalSearch(searchObject)
                    }
                }
                else if (os.checked === false) {
                    searchObject.os = searchObject.os.filter(item => item !== os.nextElementSibling.innerText);
                    this.props.globalSearch(searchObject);
                }

            else {return}

            })

        }

    }


}