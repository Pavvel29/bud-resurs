$(".telegram-form").on("submit", function (event) {
  event.stopPropagation();
  event.preventDefault();

  let form = this;
  let data = new FormData();

  if (validateForm()) {
    // Якщо форма пройшла валідацію, відправляємо дані
    if (true) { // Перевірка на Капчу чи інший функціонал...
      data.append("Имя", $('[name="name"]', form).val());
      data.append("Телефон", $('[name="phone"]', form).val());
      // data.append("Логін", $('[name="telegram"]', form).val());
      data.append("Хоче", $('[name="text"]', form).val());

      $.ajax({
        url: "ajax.php",
        type: "POST",
        data: data,
        cache: false,
        dataType: "json",
        processData: false,
        contentType: false,
        trieger: true,
        error: function (jqXHR, textStatus) {
          //console.log(this.trieger)
          // Тут виводим помилку
          // jqXHR.status = 201;
          if (jqXHR.status !== 200) {
            console.log(textStatus + " " + jqXHR.status);
            this.trieger = false;
            $(".modal-widnow").toggleClass("none");
            document.body.style.overflow = "hidden";
            modalAlarm.setSelectorBox = ".modal-widnow";
            modalAlarm.setClassNameModal = "status-send";
            modalAlarm.setText = `${textStatus} ${jqXHR.status}`;
            modalAlarm.setTextButton = "Зрозумів";
            modalAlarm.getModalAlarm;
          }
        },
        complete: function () {
          // У разі успішної операціі виводим інформацію
          if (this.trieger) {
            $(".modal-widnow").toggleClass("none");
            document.body.style.overflow = "hidden";
            modalAlarm.setSelectorBox = ".modal-widnow";
            modalAlarm.setClassNameModal = "status-send";
            modalAlarm.setText =
              "Заявка була відправленна в Телеграм чат з вами звяжутся протягом 10-ти хвилин.";
            modalAlarm.setTextButton = "Зрозумів";
            modalAlarm.getModalAlarm;
            form.reset();
          }
        },
      });
    }
  } else {
    $(".modal-widnow").toggleClass("none");
    document.body.style.overflow = "hidden";
    modalAlarm.setSelectorBox = ".modal-widnow";
    modalAlarm.setClassNameModal = "status-send";
    modalAlarm.setTextError = {
      name: $('[name="name"]', form).val(),
      phone: $('[name="phone"]', form).val(),
      // telegram: $('[name="telegram"]', form).val(),
      text: $('[name="text"]', form).val(),
    };
    modalAlarm.setText = "Заповніть форму правильно щоб відправити!";
    modalAlarm.setTextButton = "Зрозумів";
    modalAlarm.getModalAlarm;
  }
  return false;
});
