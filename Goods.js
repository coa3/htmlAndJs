class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw() {
        // создаем div где товар будет помещаться
        let div = document.createElement('div');
        // создаем элемент с именем и добавляем в div
        let n = document.createElement('p');
        n.innerText = this.name;
        div.append(n);
        // создаем картинку
        let img = document.createElement('img');
        img.src = this.image;
        div.append(img);
        // аналогично создаете amount, count

        // почему не выводим здесь? Потому что мы делаем гибкий метод
        // он должен давать и наследоваться и расшираться
        return div;
    }
}
// тут конец файла Goods.js