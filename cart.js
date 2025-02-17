const product = [
    {
        id: 0,
        image: 'img/abaya1.jpg',
        title: 'Modern Abayas',
        price: 120,
    },
    {
        id: 1,
        image: 'img/abaya22.jpg',
        title: 'Modern Abayas',
        price: 60,
    },
    {
        id: 2,
        image: 'img/abaya3.jpg',
        title: 'Modern Abayas',
        price: 230,
    },
    {
        id: 3,
        image: 'img/hijab1.jpg',
        title: 'Premium Hijab Collection',
        price: 100,
    },
    {
        id: 4,
        image: 'img/hijab2.jpg',
        title: 'Premium Hijab Collection',
        price: 100,
    },
    {
        id: 5,
        image: 'img/hijab3.jpg',
        title: 'Premium Hijab Collection',
        price: 100,
    },
    {
        id: 6,
        image: 'img/slide1.jpg',
        title: 'Lavenders Collection',
        price: 100,
    },
    {
        id: 7,
        image: 'img/slide4.jpg',
        title: 'Lavenders Collection',
        price: 100,
    },
    {
        id: 8,
        image: 'img/slide7.jpg',
        title: 'Lavenders Collection',
        price: 100,
    },
    {
        id: 9,
        image: 'img/simple2.jpg',
        title: 'Casual Collection',
        price: 100,
    },
    {
        id: 10,
        image: 'img/simple5.jpg',
        title: 'Casual Collection',
        price: 100,
    },
    {
        id: 11,
        image: 'img/simple3.jpg',
        title: 'Casual Collection',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];


function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }


    
}
