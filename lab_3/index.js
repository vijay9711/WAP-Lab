const data = [
  {
    id:1,
    name:"Node js",
    price: 1200,
    stock: 20
  },
  {
    id:2,
    name:"Angular js",
    price: 1200,
    stock: 20
  },
  {
    id:3,
    name:"Vue js",
    price: 1200,
    stock: 20
  }
]

const userData = [
  {
    id:1,
    name:"Node js",
    price: 1200,
    total: 20,
    quantity: 3
  },
  {
    id:2,
    name:"Angular js",
    price: 1200,
    total: 20,
    quantity: 3
  },
]

window.onload = () => {
  data.map(data => {
    addData(data,"product");
  })
  userData.map(data => {
    addData(data, "user");
  })
}

function addData(data, type) {
  console.log(data);
  let tableId = type == 'user' ? 'yourProductList' : 'productList';
  let table = document.getElementById(tableId);
  let button = document.createElement("button");
  let img = document.createElement("img");
  img.src = '../assets/cart.png';
  img.alt = "cart";
  button.onclick = addItemToProduct(data);
  // button.addEventListener(onclick, (data)=>addItemToProduct(data));
  button.append(img);
  button.className = "add-cart";
  let row = table.insertRow(-1);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);
  c1.innerText = data.name;
  c2.innerText = data.price;
  c3.innerText = type == 'user' ? data.total : data.stock ;
  if(type == 'user'){
    let minus = document.createElement("button");
    let plus = document.createElement("button");
    let inp = document.createElement("input");
    const div = document.createElement("div");
    div.className = "user-action-wrapper";
    plus.addEventListener(onclick, addItemToProduct(data));
    plus.innerText = '-';
    minus.innerText = "+";
    div.append(plus);
    div.append(inp);
    div.append(minus);
    c4.append(div);
  }else{
    c4.append(button);
  }
  
  
}
function addItemToProduct(id){
  console.log(id);
}

// function