class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw() {
        let div = super.draw();
        if (this.sale) {
            // create div с надписью sale
            let d = document.createElement('div');
            d.innerHTML = 'sale';
            div.append(d);
        }
        return div;
    }
}