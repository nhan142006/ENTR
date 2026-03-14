import { db } from "./firebase.js";

import {
collection,
onSnapshot,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const ordersDiv=document.getElementById("orders");

onSnapshot(collection(db,"orders"),(snapshot)=>{

ordersDiv.innerHTML="";

snapshot.forEach((d)=>{

let o=d.data();
let id=d.id;

let total=0;
let count=0;

let html=`<h3>${o.table}</h3>`;

o.items.forEach(i=>{

let price=i.price*i.qty;

total+=price;
count+=i.qty;

html+=`${i.qty}x ${i.name} ${i.size} = ${price}k<br>`;

});

html+=`
<hr>
Total drinks: ${count}<br>
Total price: ${total}k<br><br>
<button onclick="done('${id}')">DONE</button>
`;

let card=document.createElement("div");
card.className="orderCard";
card.innerHTML=html;

ordersDiv.appendChild(card);

});

});

async function done(id){

await deleteDoc(doc(db,"orders",id));

}

window.done=done;
