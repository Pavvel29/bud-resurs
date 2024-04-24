const questionArray = ["Вопрос — ответ", "Наиболее частые вопросы:"];

const questionObject = {
  1: {
    question: `Які документи потрібні для оформлення оренди?`,
    
    answer: `Для оформлення оренди необхідно мати при собі паспорт оригінал з пропискою Києва або області та ідентифікаційний код оригінал. З пропискою в інших областях оформляється під заставу залишкової вартості обладнання.`,
  },
  2: {
    question: `Як забронювати інструмент?`,

    answer: `Зарезервувати інструмент можна в телефонному режимі за одну-дві години до приїзду в офіс або 16 на ранок наступного дня до 10:00. Можна також взяти на годину мінімальний термін оренди одна доба або 24 години.`,
  },
  3: {
    question: `Як отримати повернення застави?`,

    answer: `Потрібно здати інструмент у чистому вигляді та робочому стані на склад та повернутися до офісу за заставою. Заставу можна перерахувати на карту ПриватБанку. Комісію банку оплачує отримувач.`,
  },
  4: {
    question: `Чи можна оформити оренду без прописки?`,

    answer: `Без прописки можна оформлювати оренду тільки з повною заставою. Прописка необхідна для того, щоб були дані про орендаря в разі не повернення обладнання та втрати з ним зв'язку.`,
  },
  5: {
    question: `Куди здавати устаткування на склад?`,

    answer: `Устаткування здається на той самий склад, де його і видавали. Якщо здаєте на іншу філію, додатково оплачуєте за внутрішнє переміщення.`,
  },
  6: {
    question: `Який бензин можна використовувати?`,

    answer: `Можна використовувати лише спеціальний бензин. Використання спиртового бензину заборонено, оскільки це може призвести до поломки обладнання. Важливо дотримуватися вказаних рекомендацій.`,
  },
};
/*------------------------------------------------------------------------------------------------*/
try {
  if (questionArray && Array.isArray(questionArray)) {
    document.querySelectorAll(".cor5").forEach((el, index) => {
      el.textContent = questionArray[index];
    });
  }
} catch (error) {
  console.log(error);
}


try {
  if (questionObject) {
    let iter = -1;
    for (let i in questionObject) {
      iter++;
      let questionCard = document.querySelector(".question__card");

      let div = document.createElement("div");
      div.classList.add("question__card-item");

      let style = document.createElement("style");
      style.textContent = `
              #item${Object.keys(questionObject)[iter]}:checked
            ~ .question__card-item-text
            > .question__card-item-text-answer {
            max-height: 100.05vw; /*500/1919*100 = 26.055237102657635*/
            }
            #item${
              Object.keys(questionObject)[iter]
            }:checked ~ .list__button > label {
            transform: rotate(45deg);
            }
      `;
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", `item${Object.keys(questionObject)[iter]}`);
      input.setAttribute("style", "display: none");

      questionCard.append(div);
      div.append(style);
      div.append(input);
      let div1 = document.createElement("div");
      div1.classList.add("question__card-item-text");
      div.append(div1);

      if (questionObject[i].question) {
        let label = document.createElement("label");
        label.setAttribute("for", `item${Object.keys(questionObject)[iter]}`);
        let div2 = document.createElement("div");
        div2.classList.add("question__card-item-text-question");
        let h4 = document.createElement("h4");
        h4.textContent = questionObject[i].question;
        div1.append(label);
        label.append(div2);
        div2.append(h4);
      }

      if(questionObject[i].answer){
      let div3 = document.createElement("div");
      div3.classList.add("question__card-item-text-answer");
      let p = document.createElement("p");
      p.classList.add("p-min3");
      p.textContent = questionObject[i].answer;
      div3.append(p)
      div1.append(div3)
      }

      let div4 = document.createElement("div");
      div4.classList.add("list__button");
      let label2 = document.createElement("label");
      label2.setAttribute('for',`item${Object.keys(questionObject)[iter]}`);
      label2.classList.add("but");
      label2.textContent = '+';
      div4.append(label2)
      div.append(div4)
      
    }
  }
} catch (error) {
  console.log(error);
}

export { questionArray, questionObject };
