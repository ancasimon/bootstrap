console.log("Hi Simon Bootstrap");

//8 ducks
//5 to be male; 3 female
//5 to be rubber; 3 to be real
//pick 3 colors

const ducks = [
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regina',
        imageUrl: 'https://i.ebayimg.com/images/g/RU4AAOSwJthZ4LaX/s-l640.jpg'
    },
    {
        color: 'orange',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'baby',
        diet: 'Goldfish',
        age: 3,
        featherNum: 0,
        name: 'Luke',
        imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1008/9936/Orange-Rubber-Duck-Schanables-3__74604.1568643639.jpg?c=2&imbypass=on'
    },
    {
        color: 'pink',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'social butterfly',
        diet: 'Nutella',
        age: 5,
        featherNum: 0,
        name: 'Rosie',
        imageUrl: 'https://store.nationalww2museum.org/media/catalog/product/cache/1/image/720x868/9df78eab33525d08d6e5fb8d27136e95/20118.jpg'
    },
    {
        color: 'blue',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'single',
        diet: 'fish',
        age: 1,
        featherNum: 1000,
        name: 'Swiper',
        imageUrl: 'https://www.allaboutbirds.org/guide/assets/photo/60021841-480px.jpg'
    },
    {
        color: 'pink',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'grandpa',
        diet: 'anything',
        age: 8,
        featherNum: 500,
        name: 'Star',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdl15R-Hb2oUtGXBVjlQidzbJl59bfM5GYqxJZ9YFRvIMfuYY&s'
    },
    {
        color: 'orange',
        isRubber: false,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'friendliest duck',
        diet: 'worms',
        age: 2,
        featherNum: 2000,
        name: 'Happy',
        imageUrl: 'https://www.capeandislands.org/sites/wcai/files/201711/15321161786_c54b04293d_b.jpg'
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'committed',
        diet: 'breadcrumbs',
        age: 4,
        featherNum: 0,
        name: 'Spidey',
        imageUrl: 'https://i.ebayimg.com/images/g/3O4AAOSwH4xZ4MiD/s-l640.jpg'
    },
    {
        color: 'pink',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'committed',
        diet: 'just liquids',
        age: 6,
        featherNum: 0,
        name: 'Prissy',
        imageUrl: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/788220_01'
    }
];

console.log(ducks);

const printToDom = (elementID, textToPrint) => {
    const selectedDiv = document.getElementById(elementID);
    selectedDiv.innerHTML = textToPrint;
};


const duckBuilder = (arrayOfThings) => {
    let domString = '';
    for (let i=0; i < arrayOfThings.length; i++) {
        // domString += '<div class="ducks">';
        // domString += `<h4>${arrayOfThings[i].name}</h4>`;
        // domString += '</div>';

        domString += '<div class="col-md-6 col-lg-4">';
        domString += '<div class="card">';
        domString += `  <img src="${arrayOfThings[i].imageUrl}" class="card-img-top" alt="...">`;
        domString += '  <div class="card-body">';
        domString += `      <h5 class="card-title">${arrayOfThings[i].name}</h5>`;
        domString += `      <p class="card-text">${arrayOfThings[i].socialStatus}</p>`;
        domString += `      <p class="card-text">${arrayOfThings[i].diet}</p>`;
        domString += '  </div>';
        domString += '</div>';
        domString += '</div>';
    };
    printToDom('ducksList', domString);
};

//You can make a single function using the button ID : 
const choseColor = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for (let i=0; i < ducks.length; i++) {
            if (ducks[i].color === buttonId) {
                selectedDucks.push(ducks[i]);
            }
        }
        duckBuilder(selectedDucks);
    };

// const choseBlue = () => {
//     console.log("blue!");
//     const blueDucks = [];
//     for (let i=0; i < ducks.length; i++) {
//         if (ducks[i].color === 'blue') {
//             blueDucks.push(ducks[i]);
//         };
//     };
//     duckBuilder(blueDucks);
// };

// const chosePink = () => {
//     console.log("pink!");
//     const pinkDucks = [];
//     for (let i=0; i < ducks.length; i++) {
//         if (ducks[i].color === 'pink') {
//             pinkDucks.push(ducks[i]);
//         };
//     };
//     duckBuilder(pinkDucks);
// };

// const choseOrange = () => {
//     console.log("orange!");  
//     const orangeDucks = [];
//     for (let i=0; i < ducks.length; i++) {
//         if (ducks[i].color === 'orange') {
//             orangeDucks.push(ducks[i]);
//         };
//     };
//     duckBuilder(orangeDucks);
// };

const choseFemale = () => {
    console.log("female!");  
};

const choseMale = () => {
    console.log("male!");  
};

const choseGender = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for (let i=0; i < ducks.length; i++) {
            if (ducks[i].gender === buttonId) {
                selectedDucks.push(ducks[i]);
            }
        }
        duckBuilder(selectedDucks);
    };



const choseRubber = () => {
    const selectedDucks = [];
    for (let i=0; i < ducks.length; i++) {
            if (ducks[i].isRubber) {
                selectedDucks.push(ducks[i]);
            }
        }
        duckBuilder(selectedDucks);
    };

const events = () => {
    document.getElementById('blue').addEventListener('click', choseColor);
    document.getElementById('pink').addEventListener('click', choseColor);
    document.getElementById('orange').addEventListener('click', choseColor);
    document.getElementById('female').addEventListener('click', choseGender);
    document.getElementById('male').addEventListener('click', choseGender);
    document.getElementById('rubber').addEventListener('click', choseRubber);
};

const init = () => {
    duckBuilder(ducks); 
    events();
};

init();

//filter by: color, rubber, gender
//3 buttons one for each color