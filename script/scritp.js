//-----------------------------add img fon--------------------------------------
const presentationSlider = deepClone(slider);
presentationSlider.box = ".presentation__fone-image";
presentationSlider.setingsAnimation.activationAnimation = Content.optiSlider1.activationAnimation;
presentationSlider.setingsAnimation.durationAnimation = Content.optiSlider1.durationAnimation;
presentationSlider.orientation = Content.optiSlider1.orientation //vertical||gorizontal
presentationSlider.number_visible_options = Content.optiSlider1.number_visible_options;
presentationSlider.speed_scroll_options = Content.optiSlider1.speed_scroll_options;
presentationSlider.setArrImg = Content.pathSider1
presentationSlider.get_slider;

const advarstingSlider = deepClone(slider);
advarstingSlider.box = ".slider2";
advarstingSlider.setingsAnimation.activationAnimation = Content.optiSlider1.activationAnimation;
advarstingSlider.setingsAnimation.durationAnimation = 3000;
advarstingSlider.orientation = "gorizontal" //vertical||gorizontal
advarstingSlider.number_visible_options = 4;
advarstingSlider.speed_scroll_options = { time: 5, step: 10 };
advarstingSlider.setArrImg = Content.pathSlider2
advarstingSlider.get_slider;


document.querySelectorAll(".soc-seti > .soc-seti__item > a")[0].href = Content.SocialNetworks["Telegram"][1];
document.querySelectorAll(".soc-seti > .soc-seti__item > a > img")[0].src = Content.SocialNetworks["Telegram"][0];

document.querySelectorAll(".soc-seti > .soc-seti__item > a")[1].href = Content.SocialNetworks["FaceBook"][1];
document.querySelectorAll(".soc-seti > .soc-seti__item > a > img")[1].src = Content.SocialNetworks["FaceBook"][0];

document.querySelectorAll(".soc-seti > .soc-seti__item > a")[2].href = Content.SocialNetworks["Instagram"][1];
document.querySelectorAll(".soc-seti > .soc-seti__item > a > img")[2].src = Content.SocialNetworks["Instagram"][0];

document.querySelectorAll(".soc-seti > .soc-seti__item > a")[3].href = Content.SocialNetworks["YouTube"][1];
document.querySelectorAll(".soc-seti > .soc-seti__item > a > img")[3].src = Content.SocialNetworks["YouTube"][0];


//------------------------------ add navigation element-----------------------------------
CreaterNavigatorElement.setSelectorBox = ".navigation > ul";
CreaterNavigatorElement.setElementsText = Content.menuItem;
CreaterNavigatorElement.getElementsText;
//------------------------------add logotip-----------------------------------
CreateLogotipSpace.setSelectorBox = ".header__info-logo";
CreateLogotipSpace.setDirLogo = Content.pathLogo[0];
CreateLogotipSpace.putLogotip;
CreateLogotipSpace.setSelectorBox = ".presentation__info-logotip";
CreateLogotipSpace.setDirLogo = Content.pathLogo[1];
CreateLogotipSpace.putLogotip;
CreateLogotipSpace.setSelectorBox = ".footer-info__logotip";
CreateLogotipSpace.setDirLogo = Content.pathLogo[0];
CreateLogotipSpace.putLogotip;
CreaterGoogleMap.setSelectorBox = ".map";
CreaterGoogleMap.setSrc = Content.linksToGoogleMap[0];
CreaterGoogleMap.getMap;
CreaterPhoneNam.setSelectorBox = ".conteiner-phone";
CreaterPhoneNam.setNumberPhone = Content.contacts.phone[0]; //
CreaterPhoneNam.getNumberPhone;
CreaterAbzac.setSelectorBox = ".footer-info__contact";
CreaterAbzac.setAbzac = Content.contacts.address[0]; //
CreaterAbzac.getAbzac;
CreaterPhoneNam.setSelectorBox = ".footer-info__contact";
CreaterPhoneNam.setNumberPhone = Content.contacts.phone[0] + ' ' + Content.contacts.name[0]; //
CreaterPhoneNam.getNumberPhone;
CreaterAbzac.setSelectorBox = ".decorator";
CreaterAbzac.setAbzac = Content.contacts.address[0] //
CreaterAbzac.getAbzac;
CreaterSimpleElement.setSelectorBox = ".feedback-form-conteiner__header";
CreaterSimpleElement.setText = Content.textForm.header[0]; //
CreaterSimpleElement.setElementCreate = "h2";
CreaterSimpleElement.getElementText;
CreaterAbzac.setSelectorBox = ".feedback-form-conteiner__header";
CreaterAbzac.setAbzac = Content.textForm.promiseText[0]; //
CreaterAbzac.getAbzac;

CreaterSimpleElement.setSelectorBox = ".presentation__info-text";
CreaterSimpleElement.setText = Content.textPresentation.headlinerText; //
CreaterSimpleElement.setElementCreate = "h1";
CreaterSimpleElement.getElementText;
//------------------------
CreateInput.setSelectorBox = ".telegram-form";
CreateInput.setKindInput = "input";
CreateInput.setAddClass = "input-name";
CreateInput.setType = "text";
CreateInput.setName = "name";
CreateInput.setPlaceholder = Content.textFormInput.name[0]; //
CreateInput.setAutocomplete = "off";
CreateInput.getElementInput;
//-----------
CreateInput.setSelectorBox = ".telegram-form";
CreateInput.setKindInput = "input";
CreateInput.setAddClass = "input-phone";
CreateInput.setType = "text";
CreateInput.setName = "phone";
CreateInput.setPlaceholder = Content.textFormInput.phone[0]; //
CreateInput.setAutocomplete = "off";
CreateInput.getElementInput;
//--------------
// CreateInput.setSelectorBox = ".telegram-form";
// CreateInput.setKindInput = "input";
// CreateInput.setAddClass = "input-email";
// CreateInput.setType = "text";
// CreateInput.setName = "telegram";
// CreateInput.setPlaceholder = Content.textFormInput.telegram[0]; //
// CreateInput.setAutocomplete = "off";
// CreateInput.getElementInput;
//-----------------
CreateInput.setSelectorBox = ".telegram-form";
CreateInput.setKindInput = "textarea";
CreateInput.setName = "text";
CreateInput.setPlaceholder = Content.textFormInput.textArea[0]; //
CreateInput.setAddClass = "input-text-area";
CreateInput.getElementInput;
//------------------
CreaterSimpleElement.setSelectorBox = ".telegram-form";
CreaterSimpleElement.setType = "submit";
CreaterSimpleElement.setAddClass = "btn";
CreaterSimpleElement.setText = Content.textFormInput.buttonText[0]; //
CreaterSimpleElement.setElementCreate = "button";
CreaterSimpleElement.getElementText;
//------------------