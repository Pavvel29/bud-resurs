const prise = {
  ["Електричні інструменти"]:{
    [["Наждачна шліфувальна машинка","",""]]:["Makita 9910","250","2000"],
    [["Електрорубанок","",""]]:["Einhell BT PL750","135","1500"],
    [["Електрорубанок","",""]]:["Фиолент P3 82","150","1500"],
    [["Електропилка","",""]]:["Sturm RS 8812","200","3000"],
    [["Перфоратор","",""]]:["Grand PE 1200 DFR","375","2000"],
    [["Болгарка 220","",""]]:["Stanley СТО 2223","135","1800"],
    [["Електролобзик","",""]]:["Тайга ПЕ-80","150","1000"],
    [["Бензопила","",""]]:["Stihl MS 180","150","3000"],
    [["Міксер з вінчиком","",""]]:["Невідомо","50","300"],
    [["Пульвізатор електричний","",""]]:["Black & Decker","100","1000"],
    [["Пульвізатор електричний","",""]]:["Єнергомаш модель КР-96 100","150","1000"],
    [["Пульверизатор під компресор","",""]]:["Intertool","200","1200"],
    // [["","",""]]:["","",""],
  },
  ["Ручні інструменти"]:{
    [["Відбійний молоток","",""]]:["Компас ZIG FD60","200","4000"],
    [["Відбійний молоток","",""]]:["DeWalt","250","10000"],
    [["Подовжувач на двутаврі","",""]]:["50 м","50","1200"],
    [["Трос страховочний","",""]]:["10 м","50","300"],
    [["Ремінь страховочний","",""]]:["Синій","20","500"],
    [["Горелка для балона","",""]]:["-","50","500"],
    [["Степлер комплект","",""]]:["Intertool","100","1000"],
    [["Паяльна станція для труби","",""]]:["Набор в кейсі","100","1600"],
    [["Подовжувач на три розетки","",""]]:["10 м","50","600"],
    // [["","",""]]:["","",""],
    
  },
  ["Будівельна техніка"]:{
    [["Плиткоріз","",""]]:["40 см","100","300"],
    [["Плиткоріз","",""]]:["60 см","150","800"],
    [["Трамбовка","",""]]:["Makita","100","3000"],
    [["Ріштування","",""]]:["Рама 16 шт, Траверси 14 шт, Діагоналі 11 шт, Горизонтальні 22 шт, Копита 7 шт, Распорки 7 шт","20","8000"],
    [["Мусоровідвод","",""]]:["9 шт","250","6000"],
    [["Вібратор глибинний","",""]]:["Модель УБ-017 + шланг","100","2500"],
    [["Апарат сварочний","",""]]:["Дніпро М","50","1000"],
    [["Апарат сварочний","",""]]:["Nurdika 4-220","80","1500"],
    [["Бетономішалки","",""]]:["-","100","2000"],
    // [["","",""]]:["","",""],
  },
  ["Термообладнання"]:{
    [["Сушильна електрошафа","",""]]:["СШ151","200","5000"],
    [["Муфельні печі","",""]]:["Пм 8","200","10000"],
    [["Будівельний фен","",""]]:["","600","50"],
    [["Термо пушка","",""]]:["","2000","50"],
    // [["","",""]]:["","",""],
  },

  
}

function getPrise (prise){
  for(key in prise){
    const categori = document.createElement("div");
    categori.classList.add("instruments-categori");
    const categoriH4 = document.createElement("h4");
    categoriH4.textContent = key;
    categori.append(categoriH4);
    document.querySelector(".price__container").append(categori)
    
      for(keys in prise[key]){
        const keyArr = keys.split(',');
        const instruments = document.createElement('div');
        instruments.classList.add("instruments");
        const h4 = document.createElement('h4');
        h4.textContent = keyArr[0];
        instruments.append(h4)
      
        const oneHour = document.createElement('div');
        oneHour.classList.add("one-hour")
        const span2 = document.createElement('span');
        span2.textContent = prise[key][keys][0];
        oneHour.append(span2)

        const oneDay = document.createElement('div');
        oneDay.classList.add("one-day")
        const span3 = document.createElement('span');
        span3.textContent = prise[key][keys][1];
        oneDay.append(span3)


        const oneWeek = document.createElement('div');
        oneWeek.classList.add("one-week")
        const span4 = document.createElement('span');
        span4.textContent = prise[key][keys][2];
        oneWeek.append(span4)

        document.querySelector(".price__container").append(instruments)
        document.querySelector(".price__container").append(oneHour)
        document.querySelector(".price__container").append(oneDay)
        document.querySelector(".price__container").append(oneWeek)

      }
  }
}

getPrise(prise)


const instruments = document.querySelectorAll(".price__container > .instruments");
instruments.forEach((element, index) => {
    if (index % 2 === 1) {
        element.style.backgroundColor = "var(--tableColor1)";
    }
    if (index % 2 === 0) {
      element.style.backgroundColor = "var(--tableColor2)";
  }
});
const onehour = document.querySelectorAll(".price__container > .one-hour");
onehour.forEach((element, index) => {
    if (index % 2 === 1) {
        element.style.backgroundColor = "var(--tableColor1)";
    }
    if (index % 2 === 0) {
      element.style.backgroundColor = "var(--tableColor2)";
  }
});

const oneday = document.querySelectorAll(".price__container > .one-day");
oneday.forEach((element, index) => {
    if (index % 2 === 1) {
        element.style.backgroundColor = "var(--tableColor1)";
    }
    if (index % 2 === 0) {
      element.style.backgroundColor = "var(--tableColor2)";
  }
});

const oneweek = document.querySelectorAll(".price__container > .one-week");
oneweek.forEach((element, index) => {
    if (index % 2 === 1) {
        element.style.backgroundColor = "var(--tableColor1)";
    }
    if (index % 2 === 0) {
      element.style.backgroundColor = "var(--tableColor2)";
  }
});
