// a наименование товара, b- цена, c- фото товара,  d- кол-во товара, x- распродажа
class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw() {
        document.querySelector('.out-4').innerHTML += `<p class="">${this.name} ${this.amount} <span class="material-symbols-outlined">
       ${this.image}
       </span> </p>`;
    }
}