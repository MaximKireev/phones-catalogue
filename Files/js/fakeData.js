
let API_url = 'https://maximkireev.github.io/phones-catalogue/Files/api'



 export async function getAllPhones (obj = {}){

 let phonesArray = await fetch(`${API_url}/phones.json`).
then(response => response.json())

//Функция обработки параметров цены "от" т "до"
    function priceSearch(el) {
        if (obj.from !== 0 && obj.to !== 0) {
            return Number(el.price) >= obj.from && (Number(el.price) <= obj.to);
        }
        else if (obj.from !== 0 && obj.to === 0) {
            return Number(el.price) >= obj.from
        }
        else if (obj.from === 0 && obj.to !== 0) {
            return Number(el.price) <= obj.to
        }
        else {
            return Number(el.price) >0
        }
    }
    function brandSearch(elem) {
        if (obj.brands.length === 0) {
            return elem
        }
        else {
            return obj.brands.indexOf(elem.brand) !== -1
        }


    }

    function osSearch(elem) {
      if (obj.os.length === 0) {
      return elem
      }
      else {
          return obj.os.indexOf(elem.os) !== -1
      }


    }

    if(Object.keys(obj).length !== 0){
        return phonesArray.filter(elem => elem.brand.toLowerCase().includes(obj.globalSearchValue))
            .filter(el => priceSearch(el))
            .filter(brand => brandSearch(brand))
            .filter(os => osSearch(os))}

    else{return phonesArray}
};

export async function getOnePhone (phone) {

        let phoneData =  await fetch(`https://maximkireev.github.io/phones-catalogue/Files/api/phones/${phone}.json`).then(response => response.json());
    if(!phone){return}

        return phoneData



    /*return {
        "rating": "4",
        "additionalFeatures": "Front Facing 1.3MP Camera",
        "android": {
            "os": "Android 2.2",
            "ui": "Dell Stage"
        },
        "availability": [
            "T-Mobile"
        ],
        "battery": {
            "standbyTime": "",
            "talkTime": "",
            "type": "Lithium Ion (Li-Ion) (2780 mAH)"
        },
        "camera": {
            "features": [
                "Flash",
                "Video"
            ],
            "primary": "5.0 megapixels"
        },
        "connectivity": {
            "bluetooth": "Bluetooth 2.1",
            "cell": "T-mobile HSPA+ @ 2100/1900/AWS/850 MHz",
            "gps": true,
            "infrared": false,
            "wifi": "802.11 b/g"
        },
        "description": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around. Android\u2122 2.2-based tablet with over-the-air upgrade capability for future OS releases.  A vibrant 7-inch, multitouch display with full Adobe\u00ae Flash 10.1 pre-installed.  Includes a 1.3 MP front-facing camera for face-to-face chats on popular services such as Qik or Skype.  16 GB of internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in touch with the world around you.  Connect on your terms. Save with 2-year contract or flexibility with prepaid pay-as-you-go plans",
        "display": {
            "screenResolution": "WVGA (800 x 480)",
            "screenSize": "7.0 inches",
            "touchScreen": true
        },
        "hardware": {
            "accelerometer": true,
            "audioJack": "3.5mm",
            "cpu": "nVidia Tegra T20",
            "fmRadio": false,
            "physicalKeyboard": false,
            "usb": "USB 2.0"
        },
        "id": "dell-streak-7",
        "images": [
            "img/phones/dell-streak-7.0.jpg",
            "img/phones/dell-streak-7.1.jpg",
            "img/phones/dell-streak-7.2.jpg",
            "img/phones/dell-streak-7.3.jpg",
            "img/phones/dell-streak-7.4.jpg"
        ],
        "name": "Dell Streak 7",
        "sizeAndWeight": {
            "dimensions": [
                "199.9 mm (w)",
                "119.8 mm (h)",
                "12.4 mm (d)"
            ],
            "weight": "450.0 grams"
        },
        "storage": {
            "flash": "16000MB",
            "ram": "512MB"
        }
    }*/

}