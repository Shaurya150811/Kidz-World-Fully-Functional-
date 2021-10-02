var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var book1Add = document.getElementById("book1");
var book2Add = document.getElementById("book2");
var book3Add = document.getElementById("book3");
var book4Add = document.getElementById("book4");
var book5Add = document.getElementById("book5");
var book6Add = document.getElementById("book6");
var game1Add = document.getElementById("game1");
var game2Add = document.getElementById("game2");
var game3Add = document.getElementById("game3");
var game4Add = document.getElementById("game4");
var craft1Add = document.getElementById("craft1");
var craft2Add = document.getElementById("craft2");
var craft3Add = document.getElementById("craft3");
var craft4Add = document.getElementById("craft4");
var addButtons = document.getElementsByClassName("button");
var items=[
{
name: "This was our pact",
quantity: 0,
dollars: 7,
cents: 49,
},
{
name: "The famous five",
quantity: 0,
dollars: 4,
cents: 59,
},
{
name: "Matlida",
quantity: 0,
dollars: 6,
cents: 80,
},
{
name: "Harry Potter",
quantity: 0,
dollars: 10,
cents: 0,
},
{
name: "For Young Readers",
quantity: 0,
dollars: 7,
cents: 29,
},
{
name: "Wimpy Kid - DIY",
quantity: 0,
dollars: 4,
cents: 99,
},
{
name: "Dart Board",
quantity: 0,
dollars: 17,
cents: 49,
},
{
name: "Connect 4",
quantity: 0,
dollars: 19,
cents: 99,
},
{
name: "Jenga",
quantity: 0,
dollars: 20,
cents: 99,
},
{
name: "Monopoly",
quantity: 0,
dollars: 19,
cents: 49,
},
{
name: "Bookmarks",
quantity: 0,
dollars: 12,
cents: 49,
},
{
name: "Birthday card",
quantity: 0,
dollars: 19,
cents: 99,
},
{
name: "Stuffed toys",
quantity: 0,
dollars: 15,
cents: 99,
},
{
name: "Dream catcher drawing",
quantity: 0,
dollars: 18,
cents: 49,
},
];

function updateCart(){
    let cart = 0;
    for (index = 0; index < items.length; index++){
        cart = cart + items[index].quantity;
    }
    cartValue.innerHTML = cart;
}
​

 for (let i = 0; i < addButtons.length; i++){
    addButtons[i].onclick = (e) => {
        items[i].quantity++;
        updateCart();
        };
}

var finalDollars = 0;
var finalcents = 0;

function updatePrice() {
    let totalPriceInCents = 0;
    for(index = 0;index < items.length; index++){
      totalPriceInCents = totalPriceInCents + items[index].quantity * (items[index].dollars * 100 + items[index].cents );
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
     finalCents = totalPriceInCents % 100;
}
​​
var whatsappLink =
"https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";
​
function updateWhatsappLink() {
for(let index = 0;index < item.length;index++);{
    if (items[index].quantity != 0) {
         whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;
         }
}
whatsappLink +=
 "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}   

cartButton.onclick = () => {
updatePrice();
updateWhatsappLink();
window.open(whatsappLink, "_blank");
}
    