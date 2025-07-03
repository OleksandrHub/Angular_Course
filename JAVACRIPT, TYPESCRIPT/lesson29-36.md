Ось приклади використання Local Storage, Session Storage та Cookies в JavaScript:

**Local Storage**

Local Storage зберігає дані безстроково, доки ви їх не видалите вручну або програмно.

  * **Зберегти дані:**
    ```javascript
    localStorage.setItem('username', 'JohnDoe');
    localStorage.setItem('theme', 'dark');
    ```
  * **Отримати дані:**
    ```javascript
    let username = localStorage.getItem('username');
    console.log(username); // Output: JohnDoe
    ```
  * **Видалити конкретний елемент:**
    ```javascript
    localStorage.removeItem('username');
    ```
  * **Очистити все Local Storage:**
    ```javascript
    localStorage.clear();
    ```

**Session Storage**

Session Storage зберігає дані лише протягом поточної сесії браузера (до закриття вкладки або вікна).

  * **Зберегти дані:**
    ```javascript
    sessionStorage.setItem('sessionID', 'ABC123');
    sessionStorage.setItem('formData', JSON.stringify({ name: 'Jane', email: 'jane@example.com' }));
    ```
  * **Отримати дані:**
    ```javascript
    let sessionID = sessionStorage.getItem('sessionID');
    console.log(sessionID); // Output: ABC123

    let formData = JSON.parse(sessionStorage.getItem('formData'));
    console.log(formData.name); // Output: Jane
    ```
  * **Видалити конкретний елемент:**
    ```javascript
    sessionStorage.removeItem('sessionID');
    ```
  * **Очистити все Session Storage:**
    ```javascript
    sessionStorage.clear();
    ```

**Cookies**

Cookies - це невеликі фрагменти даних, які зберігаються у вашому браузері і можуть мати термін дії. Вони часто використовуються для аутентифікації та відстеження.

  * **Створити Cookie:**
    ```javascript
    document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
    ```
      * `username=JohnDoe`: ім'я та значення cookie.
      * `expires=...`: дата закінчення терміну дії cookie. Якщо не вказано, cookie буде сесійним (видалиться при закритті браузера).
      * `path=/`: шлях, для якого доступний cookie. `/` означає, що він доступний для всього сайту.
  * **Отримати всі Cookies:**
    ```javascript
    console.log(document.cookie); // Output: username=JohnDoe; theme=dark
    ```
    (Зверніть увагу, `document.cookie` повертає всі cookie як один рядок, розділений крапкою з комою. Вам потрібно буде розпарсити його, щоб отримати окремі значення.)
  * **Видалити Cookie:**
    Щоб видалити cookie, встановіть його термін дії на дату в минулому.
    ```javascript
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    ```

**Коли що використовувати:**

  * **Local Storage:** Ідеально підходить для зберігання даних, які повинні зберігатися тривалий час, наприклад, користувацькі налаштування (мова, тема сайту) або офлайн-дані.
  * **Session Storage:** Використовуйте для тимчасових даних, які потрібні лише протягом однієї сесії, наприклад, дані форми, які не були відправлені, або стан кошика покупок до оформлення замовлення.
  * **Cookies:** Найкраще підходять для невеликих обсягів даних, які потрібно відправляти на сервер з кожним запитом (наприклад, токени аутентифікації) або для відстеження користувачів.

Звісно, ось конспект лекції про Event Loop в JavaScript з прикладами коду:

### **Основи JavaScript для початківців \#30 - Цикл подій / Event Loop**

Цей урок пояснює концепцію Event Loop в JavaScript, яка є фундаментальною для розуміння того, як виконується код та чому JavaScript не блокується під час асинхронних операцій.

#### **Вступ до Event Loop**

  * **Мета каналу:** Спочатку канал не мав на меті заробіток, але тепер є можливість зробити світ кращим через благодійний фонд \[[00:05](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=5)\]. Якщо подобаються курси, можна подякувати донатом на рахунок фонду \[[00:29](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=29)\]. Усі кошти підуть на корисну справу, і звіти будуть надаватися регулярно \[[00:37](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=37)\]. Якщо хтось потребує фінансової допомоги, можна писати на електронну пошту з підтверджувальними документами \[[00:44](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=44)\].
  * **Тема уроку:** Event Loop (Цикл подій) в JavaScript \[[01:07](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=67)\].
  * **Важливість Event Loop:** Неможливо сказати, що ви знаєте JavaScript, не розуміючи, як працює Event Loop \[[01:59](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=119)\]. Розуміння Event Loop означає розуміння послідовності виконання JavaScript коду \[[02:13](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=133)\].

#### **Синхронне виконання коду та Call Stack**

  * **Приклад 1 (Синхронний код):**
    ```javascript
    function showNumber(number) {
        console.log(number);
    }

    console.log(1);
    console.log(2);
    showNumber(3);
    console.log(4);

    for (let i = 5; i < 9; i++) {
        console.log(i);
    }

    showNumber(9);
    console.log(10);
    ```
      * **Очікуваний результат:** 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 \[[02:21](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=141)\].
      * **Пояснення:** Код виконується чітко по порядку зверху донизу, без анархії \[[03:30](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=210)\].
  * **Чому все виконується по порядку?** JavaScript — це **однопоточна** мова програмування \[[04:36](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=276)\]. Це означає, що одночасно може виконуватись лише одна дія \[[04:59](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=299)\].
  * **JavaScript Engine (Двигун JavaScript):** Мета двигуна — виконати JavaScript код і трансформувати його в машинний код (нулі та одинички), який розуміє комп'ютер \[[08:42](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=522)\].
  * **Складові JavaScript Engine:**
      * **Heap (Купа):** Місце, де зберігаються об'єкти в JavaScript \[[09:36](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=576)\]. (Не є основною темою цього уроку).
      * **Call Stack (Стек викликів):** Механізм виконання функцій у правильному порядку \[[09:59](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=599)\].
          * Всі функції, описані в коді, закидаються в Call Stack \[[10:06](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=606)\].
          * Здатен виконувати лише одну дію в даний момент (однопоточність) \[[10:14](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=614)\].
          * **Приклад візуалізації Call Stack:**
            ```javascript
            function one() {
                console.log(1);
            }

            function two() {
                one();
                console.log(2);
            }

            function three() {
                two();
                console.log(3);
            }

            function four() {
                three();
                console.log(4);
            }

            four(); // Виклик функції four
            ```
              * Принцип роботи:
                  * При запуску коду, `four()` додається в Call Stack \[[12:04](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=724)\].
                  * `four()` викликає `three()`, яка додається зверху \[[12:15](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=735)\].
                  * `three()` викликає `two()`, яка додається зверху \[[12:29](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=749)\].
                  * `two()` викликає `one()`, яка додається зверху \[[12:39](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=759)\].
                  * `one()` виконує `console.log(1)` \[[12:59](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=779)\], потім видаляється з Call Stack \[[13:15](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=795)\].
                  * Повертаємось до `two()`, яка виконує `console.log(2)` \[[13:29](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=809)\], потім видаляється \[[13:40](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=820)\].
                  * Аналогічно `three()` виконує `console.log(3)` \[[13:44](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=824)\], видаляється \[[13:58](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=838)\].
                  * І нарешті `four()` виконує `console.log(4)` \[[14:02](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=842)\], видаляється, і Call Stack стає порожнім \[[14:07](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=847)\].
              * **Висновок:** Call Stack працює прямолінійно та зрозуміло для синхронних операцій \[[14:15](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=855)\].

#### **Проблема блокування та асинхронні операції**

  * **Проблема:** Що робити з операціями, які займають багато часу (наприклад, HTTP-запити, які тривають 5-6 секунд) \[[14:29](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=869)\]?
      * Якщо така довга операція зависне в Call Stack, користувач не зможе взаємодіяти зі сторінкою \[[15:08](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=908)\].
  * **Приклад блокування (Довгий синхронний цикл):**
    ```javascript
    let i = 0;
    function count() {
        for (i = 0; i < 1_500_000_000; i++) { // Цикл на 1.5 мільярда ітерацій
            // Просто збільшуємо i
        }
        alert('Done'); // Виведеться лише після завершення циклу
    }

    count(); // Виклик функції
    ```
      * **Проблема:** Під час виконання цього циклу сторінка повністю блокується, і користувач не може взаємодіяти з елементами (кнопками, полями вводу) \[[16:37](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=997)\]. Це небажана поведінка для користувача \[[18:28](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1108)\].
  * **Вирішення проблеми (Асинхронність):** JavaScript, хоч і однопоточний, має можливість обійти свою однопоточність \[[18:34](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1114)\].
      * **Приклад з `setTimeout` (Асинхронний код):**
        ```javascript
        setTimeout(() => {
            alert('Done');
        }, 5000); // Виконається через 5 секунд
        ```
          * **Перевага:** Під час очікування 5 секунд користувач може вільно взаємодіяти зі сторінкою, вона не блокується \[[19:13](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1153)\]. Це можливо завдяки Event Loop \[[19:35](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1175)\].

#### **Web API, Callback Queue та Event Loop**

  * **Web API (Інтерфейси браузерного API):** Якщо в Call Stack потрапляє функція, яка не є складовою двигуна JavaScript, а є складовою Web API браузера (наприклад, `setTimeout`, `fetch` (Ajax-запити), взаємодія з DOM), вона переноситься в окрему чергу очікування \[[19:53](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1193)\].
      * Наприклад, `setTimeout` переноситься в Web API секцію \[[20:16](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1216)\].
      * Після завершення таймера або отримання відповіді від запиту, **колбек** цієї функції переходить в окрему чергу очікування, яка називається **Callback Queue** (або Task Queue) \[[20:55](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1255)\].
  * **Callback Queue (Task Queue):** Черга, куди потрапляють колбеки асинхронних операцій, готових до виконання.
  * **Event Loop:** Механізм, який перевіряє, чи Call Stack порожній \[[21:06](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1266)\].
      * Якщо Call Stack порожній (тобто всі синхронні операції завершилися), Event Loop бере перший колбек з Callback Queue і перекидає його в Call Stack для виконання \[[21:36](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1296)\].
      * Якщо Call Stack не порожній, колбек з Callback Queue чекатиме своєї черги \[[21:55](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1315)\].

#### **Аналогія з рестораном**

  * **Офіціантка:** Обробник JavaScript в браузері.
  * **Список замовлень офіціантки:** Call Stack.
  * **Шеф-кухар:** Web API браузера.
  * **Стіл шефа:** Callback Queue (Task Queue).
  * **Готові страви:** Результат виконаної роботи (наприклад, `console.log`).
  * **Процес:**
    1.  Офіціантка приймає замовлення: сік (синхронна), салат (потребує приготування), гамбургер (синхронна).
    2.  **Синхронні замовлення:** Гамбургер та сік, які вже готові, одразу подаються клієнтам, і ці дії видаляються зі списку замовлень офіціантки \[[23:05](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1385)\].
    3.  **Асинхронне замовлення:** Салат, який потребує часу на приготування, передається шеф-кухарю \[[24:28](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1468)\]. Офіціантка не чекає його приготування, а продовжує працювати з іншими замовленнями.
    4.  Коли салат готовий, шеф-кухар ставить його на свій стіл (Callback Queue) \[[26:52](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1612)\].
    5.  Коли список замовлень офіціантки порожній (Call Stack порожній), вона перевіряє стіл шефа (Event Loop перевіряє Callback Queue) \[[27:04](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1624)\].
    6.  Офіціантка бере готовий салат зі столу шефа і подає його клієнту (колбек з Callback Queue переходить у Call Stack і виконується) \[[27:36](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1656)\].

#### **Microtask Queue (Черга мікрозавдань)**

  * **Приклад 2 (Асинхронний код з `setTimeout` та `Promise`):**
    ```javascript
    function one() { console.log('1'); }
    function two() { console.log('2'); }
    function three() { console.log('3'); }
    function four(number) { console.log(number); }

    setTimeout(one, 0); // Викликає one() через 0 мс
    two(); // Викликає two()

    setTimeout(three, 1000); // Викликає three() через 1000 мс

    console.log('4');

    Promise.resolve(5).then(four); // Викликає four(5)
    ```
      * **Очікуваний результат:** 2, 4, 5, 1, 3 \[[07:50](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=470)\].
      * **Пояснення послідовності:**
        1.  **`setTimeout(one, 0)`:** Переноситься в Web API браузера, а її колбек (`one`) додається в **Task Queue** \[[30:57](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1857)\].
        2.  **`two()`:** Це синхронна функція. Вона одразу виконується, `console.log('2')` виводиться першим \[[31:27](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1887)\].
        3.  **`setTimeout(three, 1000)`:** Переноситься в Web API браузера, а її колбек (`three`) додається в **Task Queue** (після `one`) \[[32:35](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1955)\].
        4.  **`console.log('4')`:** Це синхронна операція. Вона одразу виконується, `4` виводиться другим \[[32:43](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=1963)\].
        5.  **`Promise.resolve(5).then(four)`:**
              * Обробники промісів (колбеки, передані в `.then()` або `.catch()`) мають окрему, **пріоритетну чергу очікування**, яка називається **Microtask Queue** \[[33:57](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2037)\].
              * Колбек `four` додається в Microtask Queue \[[36:26](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2186)\].
              * Коли Call Stack порожній, Event Loop спочатку перевіряє **Microtask Queue**. Якщо там є завдання, вони виконуються перед завданнями з Task Queue.
              * Тому `four(5)` виконується третім, виводячи `5` \[[36:56](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2216)\].
        6.  **Виконання Task Queue:** Після того, як Microtask Queue стає порожньою, Event Loop перевіряє Task Queue.
              * `one()` (з `setTimeout` на 0 мс) виконується, виводячи `1` \[[37:13](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2233)\].
              * `three()` (з `setTimeout` на 1000 мс) виконується, виводячи `3` \[[37:33](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2253)\].

#### **Підсумок**

  * Event Loop необхідний для обходу однопоточності JavaScript \[[38:09](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2289)\].
  * Основна мета розробників — забезпечити безперебійну взаємодію користувача з сайтом, уникнути блокування сторінки \[[38:18](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2298)\].
  * Event Loop гарантує, що жодна функція не блокує виконання іншої функції, забезпечуючи **нонблокуючу модель роботи** JavaScript \[[38:56](http://www.youtube.com/watch?v=TFRdyxZdHWY&t=2336)\].

Ось конспект лекції про рекурсію в JavaScript з прикладами:

-----

### Рекурсія в JavaScript 🔄

**Рекурсія** — це програмний прийом, коли функція **викликає саму себе** для вирішення певної проблеми \[[01:21](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=81)\]. Вона особливо корисна, коли кількість повторень або глибина вкладеності операцій невідома наперед, наприклад, при обробці **вкладених структур даних** \[[06:59](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=419)\].

**Важливий аспект рекурсії:**

  * **Умова виходу (базовий випадок):** Щоб уникнути **нескінченного циклу** та переповнення стеку викликів (stack overflow), кожна рекурсивна функція повинна мати чітку умову, за якої вона **припиняє викликати себе** і повертає результат \[[02:52](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=172)\]. Без цієї умови функція працюватиме як вічний цикл, що може призвести до зависання програми \[[03:00](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=180)\].

-----

#### Приклад 1: Зворотний відлік (Count Down) ⏳

Цей приклад демонструє базовий принцип рекурсії, хоча для такого простого завдання зазвичай ефективніше використовувати звичайний цикл.

**Функція з циклом `for`:**

```javascript
function countDown(number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}
countDown(10); // Виведе: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

Ця функція просто рахує від заданого числа до одиниці \[[01:36](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=96)\].

**Рекурсивна функція `countDownRecursively`:**

```javascript
function countDownRecursively(number) {
    // Умова виходу з рекурсії
    if (number <= 0) {
        console.log("Count Down Done");
        return; // Вихід з функції
    }

    console.log(number); // Виводимо поточне число
    countDownRecursively(number - 1); // Рекурсивний виклик зі зменшеним числом
}

countDownRecursively(45);
/*
Виведе числа від 45 до 1, потім "Count Down Done".
Послідовність викликів:
countDownRecursively(45)
  countDownRecursively(44)
    ...
      countDownRecursively(1)
        countDownRecursively(0) // Умова виходу спрацьовує
          "Count Down Done"
        return
      return
    ...
  return
*/
```

**Пояснення роботи `countDownRecursively`:**

1.  Функція викликається з початковим числом (наприклад, 45) \[[05:07](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=307)\].
2.  На кожному кроці перевіряється **умова виходу**: якщо `number` менше або дорівнює нулю, виводиться повідомлення "Count Down Done" і функція завершується \[[05:10](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=310)\].
3.  Якщо умова виходу не виконана, поточне число виводиться в консоль \[[05:19](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=319)\].
4.  Функція **викликає сама себе**, передаючи `number - 1` \[[05:29](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=329)\].
5.  Цей процес повторюється, доки `number` не стане нулем, після чого спрацює умова виходу, і ланцюжок викликів почне розгортатися.

-----

#### Приклад 2: Об'єднання вкладених масивів (Flattening an Array) 📚

Цей приклад показує, де рекурсія є значно кориснішою та елегантнішою, оскільки кількість рівнів вкладеності масивів невідома \[[08:59](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=539)\].

**Проблема:**
Є масив, який містить інші масиви, що, в свою чергу, можуть містити ще масиви, і так далі \[[07:36](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=456)\]. Завдання — **об'єднати всі числа** з цих вкладених масивів в один плоский масив \[[08:08](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=488)\].

```javascript
const nestedArray = [
    1,
    1,
    [
        3,
        [
            2,
            [4, 5],
            3
        ],
        2
    ]
];

function concatArrRecursively(arr) {
    let flatted = []; // Локальна змінна для зберігання плоского масиву

    arr.forEach(item => { // Перебираємо кожен елемент масиву
        if (Array.isArray(item)) { // Перевіряємо, чи є елемент масивом
            // Якщо елемент є масивом, рекурсивно викликаємо функцію
            // і додаємо результат (розгорнутий масив) до flatted
            flatted.push(...concatArrRecursively(item));
        } else {
            // Якщо елемент не є масивом (це число), додаємо його до flatted
            flatted.push(item);
        }
    });

    return flatted; // Повертаємо плоский масив
}

console.log(concatArrRecursively(nestedArray));
// Очікуваний результат: [1, 1, 3, 2, 4, 5, 3, 2]
```

**Пояснення роботи `concatArrRecursively`:**

1.  **Ініціалізація:** При кожному виклику функції (як початковому, так і рекурсивному) створюється **новий, порожній масив `flatted`**, який буде зберігати об'єднані елементи для поточного рівня вкладеності \[[09:34](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=574)\].
2.  **Ітерація:** Функція перебирає кожен `item` у вхідному масиві `arr` за допомогою `forEach` \[[10:13](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=613)\].
3.  **Перевірка на масив:**
      * Використовується `Array.isArray(item)` для перевірки, чи є поточний `item` масивом \[[10:41](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=641)\].
      * Якщо `item` є масивом:
          * Функція `concatArrRecursively` **викликається рекурсивно**, передаючи цей вкладений масив `item` \[[11:29](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=689)\].
          * Оператор розширення (`...`) використовується для "розгортання" елементів повернутого масиву. Це гарантує, що елементи додаються безпосередньо до `flatted`, а не як вкладений масив \[[16:07](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=967)\].
      * Якщо `item` не є масивом (наприклад, це число):
          * Він просто додається до масиву `flatted` \[[11:19](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=679)\].
4.  **Повернення результату:** Після обробки всіх елементів поточного рівня, функція повертає свій локальний `flatted` масив \[[10:05](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=605)\].

**Як це працює з вкладеними викликами:**

  * Кожен рекурсивний виклик обробляє свій рівень вкладеності.
  * Коли найглибший рекурсивний виклик завершується, він повертає свій "плоский" масив чисел. Цей масив потім "розгортається" і додається до `flatted` масиву попереднього рівня.
  * Цей процес триває, доки всі вкладені масиви не будуть оброблені, і всі числа не будуть зібрані в один кінцевий `flatted` масив на найвищому рівні виклику \[[22:09](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=1329)\].

Рекурсія ідеально підходить для таких завдань, де структура даних має **невідому глибину вкладеності**, оскільки вона дозволяє елегантно обробляти кожен рівень, не знаючи наперед, скільки їх буде \[[15:13](http://www.youtube.com/watch?v=AQZCP3Tmgg0&t=913)\].

Ось конспекти лекцій з прикладами JavaScript для кожного відео:

-----

## JavaScript: Деструктуризація Об'єктів 📦

Відео [https://youtu.be/tSLdWI1jV\_U?si=F0bX3h\_VzZ1fRc20](https://youtu.be/tSLdWI1jV_U?si=F0bX3h_VzZ1fRc20) пояснює **деструктуризацію об'єктів** у JavaScript – потужну можливість, що дозволяє витягувати значення з об'єктів у нові змінні. Це робить код чистішим і лаконічнішим, особливо при роботі з властивостями об'єктів.

### Основні концепції

  * **Що це?** Деструктуризація об'єктів дозволяє "розпаковувати" властивості об'єкта та присвоювати їх значення окремим змінним за допомогою схожого на об'єктний літерал синтаксису.
  * **Навіщо це потрібно?**
      * **Зменшення надмірності коду:** Вам не потрібно писати `obj.property` багато разів.
      * **Покращення читабельності:** Код стає легшим для розуміння, оскільки відразу видно, які властивості ви витягуєте.
      * **Зручність:** Особливо корисно при роботі з об'єктами, що повертаються функціями, або при передачі об'єктів як аргументів.

### Приклади деструктуризації об'єктів

Припустимо, у нас є об'єкт `user`:

```javascript
const user = {
    firstName: "Denys",
    lastName: "Savchuk",
    age: 30,
    email: "denys@example.com",
    address: {
        city: "Kyiv",
        street: "Main St"
    }
};
```

1.  **Базова деструктуризація:**
    Витягуємо властивості `firstName` та `age` у змінні з такими ж назвами:

    ```javascript
    const { firstName, age } = user;
    console.log(firstName); // Denys
    console.log(age);      // 30
    ```

2.  **Деструктуризація з перейменуванням змінних:**
    Якщо ви хочете, щоб ім'я нової змінної відрізнялося від імені властивості об'єкта:

    ```javascript
    const { firstName: userFirstName, lastName: userLastName } = user;
    console.log(userFirstName); // Denys
    console.log(userLastName);  // Savchuk
    ```

3.  **Деструктуризація зі значеннями за замовчуванням:**
    Якщо властивість може бути відсутня в об'єкті, ви можете призначити значення за замовчуванням:

    ```javascript
    const { email, phone = "Не вказано" } = user;
    console.log(email); // denys@example.com
    console.log(phone); // Не вказано (оскільки `phone` немає в об'єкті `user`)
    ```

4.  **Деструктуризація вкладених об'єктів:**
    Ви можете деструктуризувати властивості об'єктів, які самі є об'єктами:

    ```javascript
    const { address: { city, street } } = user;
    console.log(city);   // Kyiv
    console.log(street); // Main St
    ```

5.  **Деструктуризація при передачі аргументів у функцію:**
    Це дуже поширений і зручний спосіб отримати доступ до властивостей об'єкта, переданого як аргумент функції:

    ```javascript
    function displayUserInfo({ firstName, lastName, age }) {
        console.log(`Ім'я: ${firstName}, Прізвище: ${lastName}, Вік: ${age}`);
    }

    displayUserInfo(user); // Ім'я: Denys, Прізвище: Savchuk, Вік: 30

    // Зверніть увагу, що ви передаєте цілий об'єкт user,
    // але функція витягує лише потрібні властивості.
    ```

-----

## JavaScript: Деструктуризація Масивів 📦

Відео [https://youtu.be/pjCnzv\_EmiA?si=mJRAkCcPgAqGaox-](https://youtu.be/pjCnzv_EmiA?si=mJRAkCcPgAqGaox-) розглядає **деструктуризацію масивів** у JavaScript – ще одну корисну можливість, яка дозволяє витягувати елементи масиву та присвоювати їх значення окремим змінним.

### Основні концепції

  * **Що це?** Деструктуризація масивів дозволяє "розпаковувати" елементи масиву та присвоювати їх значення окремим змінним за допомогою синтаксису, схожого на масивний літерал. **Порядок має значення\!**
  * **Навіщо це потрібно?**
      * **Простий доступ до елементів:** Легко отримати конкретні елементи масиву без використання індексів.
      * **Зручність для обміну змінних:** Швидко міняти місцями значення змінних.
      * **Отримання значень, що повертаються функцією:** Якщо функція повертає масив, деструктуризація дозволяє зручно витягти його компоненти.

### Приклади деструктуризації масивів

Припустимо, у нас є масив `colors`:

```javascript
const colors = ["red", "green", "blue", "yellow"];
```

1.  **Базова деструктуризація:**
    Витягуємо елементи масиву за позицією:

    ```javascript
    const [firstColor, secondColor] = colors;
    console.log(firstColor);  // red
    console.log(secondColor); // green
    ```

2.  **Пропуск елементів:**
    Якщо вам потрібні не всі елементи, ви можете пропустити їх за допомогою зайвих ком:

    ```javascript
    const [,, thirdColor] = colors; // Пропускаємо перші два елементи
    console.log(thirdColor); // blue
    ```

3.  **Деструктуризація з рештою елементів (rest operator `...`):**
    Ви можете зібрати решту елементів масиву в новий масив:

    ```javascript
    const [mainColor, ...otherColors] = colors;
    console.log(mainColor);   // red
    console.log(otherColors); // ["green", "blue", "yellow"]
    ```

4.  **Деструктуризація зі значеннями за замовчуванням:**
    Якщо елемент може бути відсутнім у масиві, ви можете призначити значення за замовчуванням:

    ```javascript
    const [c1, c2, c3, c4, c5 = "purple"] = colors;
    console.log(c5); // purple (оскільки `colors` має лише 4 елементи)
    ```

5.  **Обмін значень змінних:**
    Деструктуризація масивів робить обмін значень двох змінних дуже простим:

    ```javascript
    let a = 10;
    let b = 20;

    [a, b] = [b, a]; // Обміняли значення без тимчасової змінної
    console.log(a); // 20
    console.log(b); // 10
    ```

6.  **Деструктуризація повернених значень функцій:**
    Якщо функція повертає масив, деструктуризація дозволяє зручно отримати його елементи:

    ```javascript
    function getWeather() {
        return ["Sunny", 25, "Kyiv"];
    }

    const [condition, temperature, city] = getWeather();
    console.log(`Погода в ${city}: ${condition}, ${temperature}°C`);
    // Погода в Kyiv: Sunny, 25°C
    ```

-----

## Об'єкт Math в JavaScript 🧮

Відео [https://youtu.be/dVrvokQ\_Yck?si=7rYXKlay7It4EpRF](https://youtu.be/dVrvokQ_Yck?si=7rYXKlay7It4EpRF) пояснює **об'єкт `Math`** у JavaScript, який надає математичні константи та функції. Важливо зазначити, що `Math` не є конструктором, як, наприклад, `Date` \[[01:48:44](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=6524)\]. Ви можете використовувати його методи та властивості без створення нового екземпляра.

### Основні властивості та методи:

  * **`Math.PI`**

      * Повертає значення числа Пі (π) \[[02:29:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=8940)\].
      * **Приклад:**
        ```javascript
        console.log(Math.PI); // Виведе: 3.141592653589793
        ```

  * **`Math.max()`**

      * Повертає найбільше число з наданого переліку аргументів \[[02:51:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=10260)\].
      * **Приклад:**
        ```javascript
        console.log(Math.max(4, 100, 200, 300, 7)); // Виведе: 300
        ```

  * **`Math.min()`**

      * Повертає найменше число з наданого переліку аргументів \[[03:44:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=13440)\].
      * **Приклад:**
        ```javascript
        console.log(Math.min(4, 100, 200, 300, 7, -59)); // Виведе: -59
        ```

  * **`Math.round()`**

      * Округляє число до найближчого цілого за математичними правилами (0.5 і вище округляється вгору, менше 0.5 - вниз) \[[04:00:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=14400)\].
      * **Приклад:**
        ```javascript
        console.log(Math.round(4.5)); // Виведе: 5
        console.log(Math.round(4.4)); // Виведе: 4
        ```

  * **`Math.ceil()`**

      * Завжди округляє число вгору до найближчого цілого (стеля) \[[04:36:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=16560)\].
      * **Приклад:**
        ```javascript
        console.log(Math.ceil(4.1)); // Виведе: 5
        console.log(Math.ceil(4.9)); // Виведе: 5
        ```

  * **`Math.floor()`**

      * Завжди округляє число вниз до найближчого цілого (підлога) \[[05:14:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=18840)\].
      * **Приклад:**
        ```javascript
        console.log(Math.floor(4.9)); // Виведе: 4
        console.log(Math.floor(4.1)); // Виведе: 4
        ```

  * **`Math.pow(base, exponent)`**

      * Повертає основу, піднесену до степеня показника \[[05:49:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=20940)\].
      * **Приклад:**
        ```javascript
        console.log(Math.pow(5, 3));  // Виведе: 125 (5 * 5 * 5)
        console.log(Math.pow(2, 10)); // Виведе: 1024 (2 в 10-му степені)
        ```

  * **`Math.random()`**

      * Повертає псевдовипадкове число з плаваючою комою в діапазоні від 0 (включно) до 1 (не включно) \[[06:26:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=23160)\].
      * **Приклад:**
        ```javascript
        console.log(Math.random()); // Виведе випадкове число, наприклад: 0.723456789...
        ```
      * **Генерація випадкового цілого числа в діапазоні (наприклад, від 1 до 10):** \[[07:37:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=27420)\]
        ```javascript
        // Функція для отримання випадкового цілого числа в заданому діапазоні
        function getRandomInteger(min, max) {
            // Math.random() * (max - min + 1) - генерує число від 0 до (max - min + 1) (не включно)
            // Math.floor() - округлює вниз
            // + min - зміщує діапазон до мінімального значення
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        console.log(getRandomInteger(1, 10));  // Виведе випадкове число від 1 до 10
        console.log(getRandomInteger(1, 100)); // Виведе випадкове число від 1 до 100
        ```
        Ця функція `getRandomInteger` використовується для генерації випадкових позицій та кольорів у практичному завданні \[[02:13:35](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=8015)\].

### Практичне завдання: Генерація випадкових кружечків 🎨 \[[01:19:58](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=4798)\]

У відео демонструється практичне завдання, де за допомогою об'єкта `Math` генеруються 100 кружечків з випадковим розташуванням та кольором на сторінці.

**Логіка реалізації:**

1.  **HTML-розмітка:** Містить кнопку для генерації та контейнер для кружечків \[[01:44:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=6240)\].
2.  **CSS-стилі:** Визначають базові стилі для кружечків (розмір, форма, позиціонування) \[[01:55:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=6900)\].
3.  **JavaScript-логіка (`renderCircles` функція):**
      * Очищає вміст контейнера перед кожною новою генерацією, щоб уникнути накопичення кружечків \[[01:58:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=7080)\].
      * Має масив з 50 різними кольорами \[[01:44:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=6240)\].
      * Використовує цикл для створення 100 `div` елементів, кожен з яких представляє кружечок \[[01:11:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=4260)\].
      * Для кожного кружечка:
          * Додає CSS-клас `circle` для застосування стилів \[[01:39:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=5940)\].
          * Використовує функцію `getRandomInteger` (описану вище) для визначення:
              * **`randomLeftOffset`**: Випадкова позиція по горизонталі (від 0 до ширини контейнера `circlesList.clientWidth`) \[[02:14:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=8040)\].
              * **`randomTopOffset`**: Випадкова позиція по вертикалі (від 0 до висоти контейнера `circlesList.clientHeight`) \[[02:14:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=8040)\].
              * **`randomColor`**: Випадковий індекс для вибору кольору з масиву `colors` (від 0 до 49) \[[02:14:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=8040)\].
          * Встановлює стилі `left`, `top` та `backgroundColor` для кружечка \[[02:57:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=10620)\].
          * Додає створений кружечок до контейнера `circlesList` \[[02:27:00](http://www.youtube.com/watch?v=dVrvokQ_Yck&t=8820)\].

Цей приклад демонструє, як `Math.random()` та `Math.floor()` можуть бути використані для створення динамічного та інтерактивного контенту на веб-сторінці.

-----

## Об'єкт Date в JavaScript 📅

Об'єкт `Date` у JavaScript використовується для роботи з **датами та часом**. За допомогою цього об'єкта можна створювати, маніпулювати та форматувати дати, а також отримувати поточну дату і час.

На відміну від об'єкта `Math`, `Date` є **конструктором**, тому для роботи з ним зазвичай створюють новий екземпляр за допомогою ключового слова `new`.

### Створення об'єктів Date

Існує кілька способів створення об'єкта `Date`:

1.  **Без аргументів (поточна дата і час):**
    Створює об'єкт `Date` з поточною датою та часом на момент виконання.

    ```javascript
    const now = new Date();
    console.log(now); // Наприклад: Thu Jul 04 2024 10:30:00 GMT+0300 (Eastern European Summer Time)
    ```

2.  **З рядком дати:**
    Парсить рядок, що містить дату, і створює відповідний об'єкт `Date`. Формат рядка може бути різним, але найкраще використовувати стандартні формати (наприклад, ISO 8601: "YYYY-MM-DDTHH:mm:ss.sssZ").

    ```javascript
    const specificDate = new Date("2023-01-15T14:30:00Z"); // ISO 8601
    console.log(specificDate); // Наприклад: Sun Jan 15 2023 16:30:00 GMT+0200 (Eastern European Standard Time)
    // Зверніть увагу на зміну часового поясу, якщо не вказано Z (UTC)
    ```

    ```javascript
    const anotherDate = new Date("March 25, 2024 10:00:00"); // Деякі інші формати також підтримуються
    console.log(anotherDate);
    ```

3.  **З числовими аргументами (рік, місяць, день, години, хвилини, секунди, мілісекунди):**
    Місяці нумеруються від **0 (січень) до 11 (грудень)**.

    ```javascript
    // Рік, місяць (0-11), день (1-31), години (0-23), хвилини (0-59), секунди (0-59), мілісекунди (0-999)
    const newYear = new Date(2025, 0, 1, 0, 0, 0, 0); // 1 січня 2025 року, 00:00:00
    console.log(newYear);

    const christmas = new Date(2024, 11, 25); // 25 грудня 2024 року, 00:00:00
    console.log(christmas);
    ```

4.  **З мілісекундами від початку Unix-епохи (1 січня 1970 UTC):**

    ```javascript
    const unixEpoch = new Date(0); // 1 січня 1970 року, 00:00:00 UTC
    console.log(unixEpoch);

    const somePastTime = new Date(1673798400000); // 15 січня 2023 року, 14:00:00 UTC
    console.log(somePastTime);
    ```

### Отримання компонентів дати

Об'єкт `Date` надає безліч методів `get...` для отримання різних компонентів дати. Важливо розрізняти методи, що повертають значення за **місцевим часовим поясом** і за **UTC (Coordinated Universal Time)**.

  * **Місцевий час:**

    ```javascript
    const d = new Date(); // Припустимо, зараз 4 липня 2024, 10:30:00

    console.log(d.getFullYear());   // 2024 (рік)
    console.log(d.getMonth());      // 6 (липень, оскільки місяці з 0)
    console.log(d.getDate());       // 4 (день місяця)
    console.log(d.getDay());        // 4 (день тижня: 0 - неділя, 6 - субота)
    console.log(d.getHours());      // 10 (година)
    console.log(d.getMinutes());    // 30 (хвилина)
    console.log(d.getSeconds());    // 0 (секунда)
    console.log(d.getMilliseconds()); // Мілісекунди
    console.log(d.getTime());       // Мілісекунди від 1 січня 1970 UTC
    ```

  * **UTC час:**
    Аналогічні методи, але з префіксом `getUTC...`:

    ```javascript
    const d = new Date();

    console.log(d.getUTCFullYear());
    console.log(d.getUTCMonth());
    console.log(d.getUTCDate());
    // ... та інші
    ```

### Встановлення компонентів дати

Ви також можете змінювати компоненти дати за допомогою методів `set...`:

```javascript
const d = new Date(); // Поточна дата

d.setFullYear(2026);    // Встановлює рік на 2026
d.setMonth(0);          // Встановлює місяць на січень (0)
d.setDate(1);           // Встановлює день місяця на 1
d.setHours(9);          // Встановлює годину на 9 ранку
d.setMinutes(0);        // Встановлює хвилини на 0
d.setSeconds(0);        // Встановлює секунди на 0
d.setMilliseconds(0);   // Встановлює мілісекунди на 0

console.log(d); // Наприклад: Fri Jan 01 2026 09:00:00 GMT+0200 (Eastern European Standard Time)
```

### Форматування дат

Форматування дати для відображення користувачеві може бути складним, оскільки існують різні регіональні стандарти. JavaScript надає кілька методів для цього:

1.  **`toString()`:**
    Повертає рядок, що представляє дату, у загальному форматі, залежному від системи.

    ```javascript
    const d = new Date();
    console.log(d.toString()); // Наприклад: Thu Jul 04 2024 10:30:00 GMT+0300 (Eastern European Summer Time)
    ```

2.  **`toDateString()`:**
    Повертає лише частину дати (день тижня, місяць, день, рік).

    ```javascript
    const d = new Date();
    console.log(d.toDateString()); // Наприклад: Thu Jul 04 2024
    ```

3.  **`toTimeString()`:**
    Повертає лише частину часу.

    ```javascript
    const d = new Date();
    console.log(d.toTimeString()); // Наприклад: 10:30:00 GMT+0300 (Eastern European Summer Time)
    ```

4.  **`toISOString()`:**
    Повертає дату у форматі ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ), який є стандартизованим і рекомендованим для обміну датами між системами. Це завжди UTC час.

    ```javascript
    const d = new Date();
    console.log(d.toISOString()); // Наприклад: 2024-07-04T07:30:00.000Z
    ```

5.  **`toLocaleDateString()` та `toLocaleTimeString()`:**
    Форматують дату/час відповідно до локалі користувача (мови та регіону).

    ```javascript
    const d = new Date();

    // Дата у форматі місцевої локалі
    console.log(d.toLocaleDateString('uk-UA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    // Наприклад: четвер, 4 липня 2024 р.

    // Час у форматі місцевої локалі
    console.log(d.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    // Наприклад: 10:30:00

    // Можна також вказати параметри для відображення часового поясу
    console.log(d.toLocaleString('en-US', { timeZoneName: 'short' }));
    // Наприклад: 7/4/2024, 10:30:00 AM EEST
    ```

-----