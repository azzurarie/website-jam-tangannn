let Index;
let quantity = 1;
let isdarkmode;

var moneyformater = new Intl.NumberFormat();

function GetIndex(index) {
    localStorage.setItem("IndexRolex", index )
    Index = index;
    console.log(ItemName[index]);
    console.log(ItemPrice[index]);
    console.log(ImageAsset[index]);

    Changetheme();





}

function min() {
    if (quantity > 1) {
        quantity--;
    }
}

function max() {
    quantity++
}

setInterval(() => {
    document.getElementById("title").textContent = ItemName[Index];
    document.getElementById("price").textContent = "IDR " + moneyformater.format(ItemPrice[Index]);
    document.getElementById("image").style.backgroundImage = "url(" + ImageAsset[Index] + ")";
    document.getElementById("quantity").textContent = quantity;
    document.getElementById("total").textContent = "IDR " + moneyformater.format(ItemPrice[Index] * quantity);
    if (isdarkmode == "dark") {
        document.body.style.background = "black";
        document.getElementById("font").style.color = "white";
        document.getElementById("title").style.color = "white";
        document.getElementById("description").style.color = "white";
        document.getElementById("order").style.color = "white";
        document.getElementById("total").style.color = "white";
        document.getElementById("prices").style.color = "white";
    } else {
        document.body.style.background = "white"
        document.getElementById("font").style.color = "black";
    }
}, 0);



function Changetheme() {



}

Index = Number(localStorage.getItem("IndexRolex"));
isdarkmode = localStorage.getItem("selected-theme");


