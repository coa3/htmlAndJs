// a наименование товара, b- цена, c- фото товара,  d- кол-во товара, 
class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count)
        this.sale = sale;

    }
    draw() {
        if (this.sale == true) {
            document.querySelector('.out-5').innerHTML = `<p class="">${this.sale} 'SALE' </p>`;
        } else {
            this.sale == false;
        }
    }
}