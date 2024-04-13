const modalMenu = {
  selectorBox: null,
  menuModal: null,
  menuModalHeader: null,
  menuModalHeaderName: null,
  tag: null,
  tagText: null,
  menuModalHeaderCloser: null,
  materialIcons: null,
  menuModalConteiner: null,
  content:null,
  set setProperties(value) {
    document.querySelector(value.selectorBox) ? this.selectorBox = value.selectorBox : console.log("setProperties - " + value.selectorBox + ' is nod faund');
    this.menuModal = value.menuModal;
    this.menuModalHeader = value.menuModalHeader;
    this.menuModalHeaderName = value.menuModalHeaderName;
    this.tag = value.tag;
    this.tagText = value.tagText;
    this.menuModalHeaderCloser = value.menuModalHeaderCloser;
    this.materialIcons = value.materialIcons;
    this.menuModalConteiner = value.menuModalConteiner;
    this.content = value.content;
  },
  get getModalMenu (){
    console.log('is get Modal Menu');
    const box = document.querySelector(this.selectorBox)
    box.innerHTML = '';
    const div = document.createElement("div");
    div.classList.add(this.menuModal);
    const div2 = document.createElement("div");
    div2.classList.add(this.menuModalHeader);
    const div3 = document.createElement("div");
    div3.classList.add(this.menuModalHeaderName);
    const textElement = document.createElement(this.tag);
    textElement.textContent = this.tagText;
    const div4 = document.createElement("div");
    div4.classList.add(this.menuModalHeaderCloser);
    div4.addEventListener("click",function(){
      document.body.style.overflow = "visible";
      box.innerHTML = "";
      box.classList.toggle("none");
    })
    const i = document.createElement('i');
    i.classList.add("material-icons");
    i.textContent = this.materialIcons;
    const conteinerDiv = document.createElement('div');
    conteinerDiv.classList.add(this.menuModalConteiner);
    
    div.append(div2);
    div3.append(textElement);
    div2.append(div3);
    div4.append(i)
    div2.append(div4)
    div.append(conteinerDiv)
    box.append(div)
    

    console.log(box)
    console.log(this.content)// Тут знаходится обєкт який створює контент для вікна меню
    this.content.setInputComponent = inputTextComponet
    this.content.setSelectorBox = '.menu-modal__conteiner'
    this.content.getEquipment;
  }
};
const CreaterNavigatorElement = {
  selectorBox: null,
  mapText: null,
  objectFit: "cover",
  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("CreaterNavigatorElement - selector not faund!");
    }
  },
  set setElementsText(value) {
    this.mapText = new Map(Object.entries(value))
  },
  get getElementsText() {
    const box = document.querySelector(this.selectorBox);
    this.mapText.forEach((element, key) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = element;
      a.textContent = key;
      a.style.color = "var(--textColor)"
      li.append(a)
      box.append(li);
    });
  },
};
//------------------------------------------------------------------
const CreateLogotipSpace = {
  selectorBox: null,
  dirLogo: null,
  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("CreateLogotipSpace - selector not faund!");
    }
  },
  set setDirLogo(value) {
    this.dirLogo = value;
  },
  set setObjectFit(value) {
    arrCorectParameter = [
      "fill",
      "contain",
      "cover",
      "none",
      "scale-down",
      "contain",
    ];
    if (arrCorectParameter.includes(value)) {
      this.objectFit = value;
    } else {
      console.log(
        "CreateLogotipSpace - setObjectFit add not corect parameter " + value
      );
    }
  },
  get putLogotip() {
    const box = document.querySelector(this.selectorBox);
    const img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = this.objectFit;
    img.setAttribute("src", this.dirLogo);
    img.setAttribute("alt", "not faund");
    box.append(img);
  },
};
//------------------------------------------------------------------
const CreaterGoogleMap = {
  selectorBox: "",
  src: "",
  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("CreaterGoogleMap - selector is not faund");
    }
  },
  set setSrc(value) {
    this.src = value;
  },
  get getMap() {
    const iframe = document.createElement("iframe");
    iframe.src = this.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "0";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    document.querySelector(this.selectorBox).append(iframe);
  },
  get deleteMap() {
    document.querySelector(this.selectorBox).innerHTML = "";
  },
};

const CreaterPhoneNam = {
  selectorBox: null,
  numberPhone: null,
  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("CreaterPhoneNam - selector is not faund");
    }
  },
  set setNumberPhone(value) {
    this.numberPhone = value;
  },
  get getNumberPhone() {
    const box = document.querySelector(this.selectorBox);
    const a = document.createElement("a");
    const p = document.createElement("p");
    a.href = `tel:${this.numberPhone}`;
    a.textContent = this.numberPhone;
    p.append(a);
    box.append(p);
  },
};

const CreaterAbzac = {
  selectorBox: null,
  Abzac: null,
  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("CreaterAbzac - selector is not faund");
    }
  },
  set setAbzac(value) {
    this.Abzac = value;
  },
  get getAbzac() {
    const box = document.querySelector(this.selectorBox);
    const p = document.createElement("p");
    p.innerHTML = this.Abzac;
    box.append(p);
  },
};

const CreaterSimpleElement = {
  selectorBox: null,
  text: null,
  elementCreate: null,
  type: null,
  addClass: null,
  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("CreaterSimpleElement - selector is not faund");
    }
  },
  set setText(value) {
    this.text = value;
  },
  set setElementCreate(value) {
    this.elementCreate = value;
  },
  set setType(value) {
    this.type = value;
  },
  set setAddClass(value) {
    this.addClass = value;
  },
  get getElementText() {
    const box = document.querySelector(this.selectorBox);
    const element = document.createElement(this.elementCreate);
    this.type ? (element.type = this.type) : null;
    this.addClass ? element.classList.add(this.addClass) : null;
    element.textContent = this.text;
    box.append(element);

    if (this.type) {
    }
    if (this.addClass) {
    }
  },
};

const CreateInput = {
  selectorBox: null,
  addClass: null,
  type: null,
  name: null,
  placeholder: null,
  autocomplete: null,
  kindInput: null,

  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("CreateInput - selector is not faund");
    }
  },
  set setAddClass(value) {
    this.addClass = value;
  },
  set setType(value) {
    this.type = value;
  },
  set setName(value) {
    this.name = value;
  },
  set setPlaceholder(value) {
    this.placeholder = value;
  },
  set setAutocomplete(value) {
    this.autocomplete = value;
  },
  set setKindInput(value) {
    this.kindInput = value;
  },
  get getElementInput() {
    if (this.selectorBox) {
      const box = document.querySelector(this.selectorBox);
      if (this.kindInput) {
        const input = document.createElement(this.kindInput);
        this.addClass ? input.classList.add(this.addClass) : null;
        this.type ? (input.type = this.type) : null;
        this.name ? (input.name = this.name) : null;
        this.placeholder ? (input.placeholder = this.placeholder) : null;
        this.autocomplete ? (input.autocomplete = this.autocomplete) : null;
        box.append(input);
      }
    } else {
      console.log("getElementInput - selector is not faund");
    }
  },
};

const modalAlarm = {
  selectorBox: null,
  classNameModal: null,
  textError: null,
  text: null,
  textButton: null,
  set setTextError(value){
    this.textError = {
      name: value.name,
      phone: value.phone,
      telegram: value.telegram,
      text: value.text,
    }
  },
  set setSelectorBox(value) {
    if (document.querySelector(value)) {
      this.selectorBox = value;
    } else {
      console.log("modalAlarm - selector nod faund");
    }
  },
  set setClassNameModal(value) {
    this.classNameModal = value;
  },
  set setText(value) {
    this.text = value;
  },
  set setTextButton(value) {
    this.textButton = value;
  },
  get getModalAlarm() {
    const box = document.querySelector(this.selectorBox);
    const div = document.createElement("div");
    div.classList.add(this.classNameModal);
    
      
    
    const h2 = document.createElement("h2");
    h2.textContent = this.text;
    const button = document.createElement("button");
    button.textContent = this.textButton;
    button.addEventListener("click", function () {
      
      document.body.style.overflow = "visible";
      box.innerHTML = "";
      box.classList.toggle("none");
    });

    if(this.textError?.name || this.textError?.phone || this.textError?.telegram || this.textError?.text){
    const divError = document.createElement('div');
    divError.style.minWidth = "200px";
    divError.style.minHeight = "20px";
    divError.style.marginBottom = "20px";
    divError.style.padding = "5px";
    divError.style.display = "flex";
    divError.style.justifyContent = "center";
    divError.style.alignItems = "flex-start";
    divError.style.flexDirection = "column";
    
    const pName = document.createElement('p');
    pName.textContent = "Імя " + this.textError.name;
    if(validateName(this.textError.name)){
      pName.style.color = "#67E712"
    }else{
      pName.style.color = "red"
    }
    const pPhone = document.createElement('p');
    pPhone.textContent = "Телефон " + this.textError.phone;
    if(validatePhone(this.textError.phone)){
      pPhone.style.color = "#67E712";
    }else{
      pPhone.style.color = "red"
    }
    // const pTelegram = document.createElement('p');
    // pTelegram.textContent = "Телеграм " + this.textError.telegram;
    // if(validateEmail(this.textError.telegram)){
    //   pTelegram.style.color = "#67E712";
    // }else{
    //   pTelegram.style.color = "red"
    // }

    const pText = document.createElement('p');
    pText.textContent = "Лист " + this.textError.text;
    pText.style.color = "red";
    if(validateText(this.textError.text)){
      pText.style.color = "#67E712";
    }else{
      pText.style.color = "red";
    }
    divError.append(pName);
    divError.append(pPhone);
    // divError.append(pTelegram);
    divError.append(pText);
    div.append(divError);

    this.textError.name = null;
    this.textError.phone = null;
    this.textError.telegram = null;
    this.textError.text = null;
    }
    div.append(h2);
    div.append(button);
    box.append(div);
  },
};

