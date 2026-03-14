
let cart=[]

function renderMenu(){

let container=document.getElementById("menu")

menu.forEach(cat=>{

let title=document.createElement("h2")
title.innerText=cat.category

container.appendChild(title)

let grid=document.createElement("div")
grid.className="menuGrid"

cat.items.forEach(item=>{

let card=document.createElement("div")
card.className="menuCard"

let html=`
<h3>${item.name}</h3>
<p>${item.price}k</p>
`

if(item.size){

html+=`
<select class="size">
<option value="M">M</option>
<option value="L">L (+3k)</option>
</select>
`

}

html+=`

<div class="qtyBox">
<button class="minus">-</button>
<span class="qty">1</span>
<button class="plus">+</button>
</div>

<button class="addBtn">Add</button>
`

card.innerHTML=html

let qty=1

card.querySelector(".plus").onclick=()=>{

qty++
card.querySelector(".qty").innerText=qty

}

card.querySelector(".minus").onclick=()=>{

if(qty>1){
qty--
card.querySelector(".qty").innerText=qty
}

}

card.querySelector(".addBtn").onclick=()=>{

let size=card.querySelector(".size")?.value || ""

let price=item.price

if(size==="L") price+=3

cart.push({
name:item.name,
qty:qty,
price:price,
size:size
})

renderCart()

}

grid.appendChild(card)

})

container.appendChild(grid)

})

}

function renderCart(){

let c=document.getElementById("cart")
c.innerHTML=""

let totalPrice=0
let totalQty=0

cart.forEach((i,index)=>{

let itemTotal=i.price*i.qty

totalPrice+=itemTotal
totalQty+=i.qty

c.innerHTML+=`

<div class="cartItem">

${i.qty}x ${i.name} ${i.size}

= ${itemTotal}k

<button onclick="removeItem(${index})">❌</button>

</div>

`

})

c.innerHTML+=`

<hr>

<b>Total drinks:</b> ${totalQty}<br>
<b>Total price:</b> ${totalPrice}k

`

}

function removeItem(i){

cart.splice(i,1)
renderCart()

}

import { db } from "./firebase.js";
import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function sendOrder(){

if(cart.length===0){
alert("Cart is empty");
return;
}

let table=document.getElementById("table").value;

await addDoc(collection(db,"orders"),{
table:table,
items:cart,
time:new Date()
});

alert("Order sent!");

cart=[];
renderCart();

}

window.sendOrder = sendOrder;



renderMenu()