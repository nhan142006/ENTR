function loadOrders(){

let container=document.getElementById("orders")

container.innerHTML=""

let orders=JSON.parse(localStorage.getItem("orders")||"[]")

orders.forEach((o,index)=>{

let div=document.createElement("div")

div.className="orderCard"

let totalPrice=0
let totalQty=0

let html=`<h3>${o.table}</h3>`

o.items.forEach(i=>{

let itemTotal=i.price*i.qty

totalPrice+=itemTotal
totalQty+=i.qty

html+=`
${i.qty}x ${i.name} ${i.size} = ${itemTotal}k <br>
`

})

html+=`

<hr>

Total drinks: ${totalQty}<br>
Total price: ${totalPrice}k<br><br>

<button onclick="done(${index})">DONE</button>

`

div.innerHTML=html

container.appendChild(div)

})

}

function done(i){

let orders=JSON.parse(localStorage.getItem("orders")||"[]")

orders.splice(i,1)

localStorage.setItem("orders",JSON.stringify(orders))

loadOrders()

}

loadOrders()

setInterval(loadOrders,1000)