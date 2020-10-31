//Items
let catalogue = [
    {
    sku: "/Bags/01.jpg",
    name:"Wine B-Quilt",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/02.jpg",
    name:"Black B-Quilt",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/03.jpg",
    name:"Pink B-Quilt",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/04.jpg",
    name:"Grey B-Quilt",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/05.jpg",
    name:"Black Stud",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/06.jpg",
    name:"Exotic",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/07.jpg",
    name:"Black Tech B-Quilt",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/08.jpg",
    name:"Pink Tech B-Quilt",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/09.jpg",
    name:"Grey Tech B-Quilt",
    price:5000,
    availability:true
    },
    {
    sku: "/Bags/10.jpg",
    name:"Stud Tech B-Quilt",
    price:5000,
    availability:true
    },
]

//For loop that renders the item
for (let i = 0; i < 11; i++){
    let div = document.createElement('div');
    let sum = `${i}`;
    div.setAttribute("id", sum);
    let image = document.createElement('img');
    image.src = catalogue[i].sku;
    document.getElementById('app').appendChild(div);
    document.getElementById(sum).appendChild(image);
    document.getElementById(sum).innerHTML += `<h4> ${catalogue[i].name}</h4> <h4>${catalogue[i].price}</h4> <h4 class = "avail">Available</h4> <button onclick = "setAvailability(this)" >Toggle</button>`

}

//Function that sets Item Availability
function setAvailability(elem){
    let id = elem.parentNode;
    let ans = id.children[3].innerHTML;
    if(ans == "Available"){
        id.children[1].classList.toggle("erase");
        id.children[2].classList.toggle("erase");
        id.children[3].innerHTML = "Not Available";
        id.children[3].style.color = "#494c4a";
    }
    else{
        id.children[1].classList.toggle("erase");
        id.children[2].classList.toggle("erase");
        id.children[3].innerHTML = "Available";
        id.children[3].style.color = "black";
    }
}
