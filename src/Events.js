/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    document.body.innerHTML += '<button>Удали меня</button>';
    var elem = document.getElementsByTagName('button')[0];
    elem.onclick = function () {
        elem.remove();
    };
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let str = '<ul>';
    arr.map((value) => {
        str += '<li>' + value + '</li>';
    });
    str += '</ul>';
    document.body.innerHTML = str;
    let lis = document.body.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            lis[i].setAttribute('title', arr[i]);
        };
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.innerHTML = '<a href="https://tensor.ru/">tensor</a>';
    const a = document.body.getElementsByTagName('a')[0];
    a.onclick = (event) => {
        event.preventDefault();
        a.innerHTML += ' ' + a.getAttribute('href');
        a.onclick = null;
    };
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.innerHTML =
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>';
    const button = document.body.getElementsByTagName('button')[0];
    const ul = document.body.getElementsByTagName('ul')[0];
    const li = document.body.getElementsByTagName('li')[0];
    li.onclick = () => {
        li.innerHTML = li.innerHTML + '!';
    };
    button.onclick = () => {
        const li2 = document.createElement('li');
        li2.innerHTML = 'Пункт';
        li2.onclick = () => {
            li2.innerHTML = li2.innerHTML + '!';
        };
        ul.appendChild(li2);
    };
}
