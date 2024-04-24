function changeTheme() {
  const rootElement = document.documentElement;
  const buttonTheme = document.querySelector(".header__info-button > i");
  // console.log(buttonTheme)
  //
  //----------- Develop mode ------------------------
  

  //-----------------------------------------------
  buttonTheme.addEventListener("click", function () {
    // console.log(this.textContent)
    if (this.textContent === "brightness_3") {
      this.textContent = "brightness_4";
      this.style.color = "white";
      CreaterGoogleMap.deleteMap;
      CreaterGoogleMap.setSrc = Content.linksToGoogleMap[1];
      CreaterGoogleMap.getMap;
      document.querySelector(".header__info-logo").innerHTML = "";
      CreateLogotipSpace.setSelectorBox = ".header__info-logo";
      CreateLogotipSpace.setDirLogo = Content.pathLogo[1];
      CreateLogotipSpace.putLogotip;

      document.querySelector(".footer-info__logotip").innerHTML = "";
      CreateLogotipSpace.setSelectorBox = ".footer-info__logotip";
      CreateLogotipSpace.setDirLogo = Content.pathLogo[1];
      CreateLogotipSpace.putLogotip;

      rootElement.style.setProperty("--tableColor1", "#6e759d4f");
      rootElement.style.setProperty("--tableColor2", "#263a9d56");
      
      rootElement.style.setProperty("--textColor", "white");
      rootElement.style.setProperty("--bodyColor", "#333");
      rootElement.style.setProperty("--efetColor", "rgba(31, 37, 44, 0.7)");
      rootElement.style.setProperty("--footerBackColor", "rgba(195,195,199, .2)");
      rootElement.style.setProperty("--inputBackColor", "rgba(119,119,119)");
      rootElement.style.setProperty("--textColorPlaceholder", "rgb(186,188,193)");
      rootElement.style.setProperty("--colorBorder", "white");
    } else {
      this.textContent = "brightness_3";
      this.style.color = "black";
      CreaterGoogleMap.deleteMap;
      CreaterGoogleMap.setSrc = Content.linksToGoogleMap[0];
      CreaterGoogleMap.getMap;

      document.querySelector(".header__info-logo").innerHTML = "";
      CreateLogotipSpace.setSelectorBox = ".header__info-logo";
      CreateLogotipSpace.setDirLogo = Content.pathLogo[0];
      CreateLogotipSpace.putLogotip;

      document.querySelector(".footer-info__logotip").innerHTML = "";
      CreateLogotipSpace.setSelectorBox = ".footer-info__logotip";
      CreateLogotipSpace.setDirLogo = Content.pathLogo[0];
      CreateLogotipSpace.putLogotip;
      rootElement.style.setProperty("--tableColor1", "#c8d1fd63");
      rootElement.style.setProperty("--tableColor2", "#93a5fd79");
      rootElement.style.setProperty("--textColor", "black");
      rootElement.style.setProperty("--bodyColor", "#F1F1F1");
      rootElement.style.setProperty("--efetColor", "rgba(31, 37, 44, 0.548)");
      rootElement.style.setProperty("--footerBackColor", "rgba(195,195,199, 1)");
      rootElement.style.setProperty("--inputBackColor", "rgba(255,255,255)");
      rootElement.style.setProperty("--textColorPlaceholder", "rgb(192, 181, 181)");
      rootElement.style.setProperty("--colorBorder", "black");
    }
  });
}






