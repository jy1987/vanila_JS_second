const form = document.querySelector(".stock-form");
const inputTitle=form.querySelector("#title");
const inputPrice=form.querySelector("#price");
const inputVolume=form.querySelector("#volume");
const printStock= document.querySelector(".print-stock");

const TOBUY_LIST = "tobuy";
let toBuys =[];


function deleteTobuy (e){
    const btn = e.target;
    const li = btn.parentNode;
    printStock.removeChild(li);
    const cleanToBuy=toBuys.filter(function (toBuy) {
        return toBuy.id !== parseInt(li.id);
    });
    toBuys=cleanToBuy;
    saveToBuy();
}

function saveToBuy(){
    localStorage.setItem(TOBUY_LIST, JSON.stringify(toBuys));
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function printTobuy(title, prices, volumes){
    const price = numberWithCommas(`${prices}`);
    const volume = numberWithCommas(`${volumes}`);
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId=toBuys.length +1;
    deleteBtn.innerText="🔙"
    deleteBtn.addEventListener("click", deleteTobuy);
    span.innerText= `종목 : ${title} 목표매수가 : ${price} 수량 : ${volume}`;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.id=newId;
    printStock.appendChild(li);
    const toBuyObj={
        id : newId,
        title : title,
        price : price,
        volume : volume
    }
    toBuys.push(toBuyObj);
    saveToBuy();

}

function handleSubmit (e){
    e.preventDefault();
    const currentTitle = inputTitle.value;
    const currentPrice = inputPrice.value;
    const currentVolume = inputVolume.value;
    printTobuy(currentTitle, currentPrice, currentVolume);

}

function loadToBuy(){
    const loadToBuys = localStorage.getItem(TOBUY_LIST);
    if (loadToBuys!==null){
        const parsedToBuys=JSON.parse(loadToBuys);
        parsedToBuys.forEach(function(toBuy) {
            printStock(toBuy.title, toBuy.price,toBuy.volumn);
        });
    }
}

function init(){
    loadToBuy();
    form.addEventListener("submit", handleSubmit);
}

init();