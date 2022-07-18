 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. 
 //Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

 let goods = new Goods();
 console.log(goods);


 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.
 /*class Goods2 extends Goods {
     constructor(a, b, c, d) {
         super(a, b)
         this.image = c;
         this.count = d;
     }
 }*/
 //let goods2 = new Goods2();
 //console.log(goods2);

 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
 /*class Goods3 extends Goods2 {
     constructor(a, b, c, d, ) {
         super(a, b, c, d)

     }
    
 }
 goods = new Goods('book', '50', 'star');
 goods.draw();*/

 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
 let goods2 = new Goods('book', '50', 'star');
 goods2.draw();

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы 
 //он выводил информацию о распродажах.
 goods2 = new Goods2('book', '50', 'true');
 goods2.draw();


 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw.
 // Вывод осуществить в out-6.
 // этот код идет в отдельном файле Goods.js //
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
 // этот код пишем в общем файле unit_28.js

 // создаем объект
 let g1 = new Goods('cucumber', 50, 'https://cdn1.iconfinder.com/data/icons/vegetable-colored/48/Plants_Vegetables_Artboard_9-256.png', 300);
 // создаем объект для вставки на страницу
 let g1Obj = g1.draw();
 // вставляем
 document.querySelector('.out-1').append(g1Obj);
 // такой подход удобен тем что мы можем создавать много товаров и выводить куда хотим.

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

 let g2 = new Goods2('cucumber22', 100, 'https://cdn1.iconfinder.com/data/icons/vegetable-colored/48/Plants_Vegetables_Artboard_9-256.png', 300, true);
 // создаем объект для вставки на страницу
 let g1Obj2 = g2.draw();
 // вставляем
 document.querySelector('.out-2').append(g1Obj2);

 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.


 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.


 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.


 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.


 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.


 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.