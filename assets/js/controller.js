let Index;
let quantity = 1;

var moneyformater = new Intl.NumberFormat();

function GetIndex(index) {
    localStorage.setItem("IndexRolex", index )
    Index = index;
    console.log(ItemName[index]);
    console.log(ItemPrice[index]);
    console.log(ImageAsset[index]);





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
}, 0);


Index = Number(localStorage.getItem("IndexRolex"));

