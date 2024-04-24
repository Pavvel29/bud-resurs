const slider = {
  setingsAnimation: {
    activationAnimation: false,
    durationAnimation: 2000,
  },
  orientation: "gorizontal",
  speed_scroll: {
    time: 10,
    step: 10,
  },
  number_visible: 1,
  APIimg: undefined,
  boxElement: undefined,
  quantity_img_show: 1,//----------
  arrImg: [],
  imgStub: "",
  divForwardCreater(
    divBlock,
    topOrientation,
    leftOrientation,
    transformOrientation
  ) {
    const divForward = document.createElement("div");
    divForward.style.position = "absolute";
    divForward.style.bottom = topOrientation;
    divForward.style.right = leftOrientation;
    divForward.style.transform = transformOrientation;
    divForward.style.width = "60px";
    divForward.style.height = "60px";
    divForward.style.backgroundColor = "rgba(87, 85, 85, 0.158)";
    divForward.style.borderRadius = "50%";
    divForward.style.cursor = "pointer";
    divForward.style.display = "flex";
    divForward.style.alignItems = "center";
    divForward.style.justifyContent = "center";
    divForward.style.userSelect = "none";
    divForward.innerHTML =
      '<i class="material-icons" style="font-size: 36px; color:white;">chevron_right</i>';
    divBlock.append(divForward);
    return divForward;
  },
  divBackCreater(
    divBlock,
    topOrientation,
    leftOrientation,
    transformOrientation
  ) {
    const divBack = document.createElement("div");
    divBack.style.position = "absolute";
    divBack.style.top = topOrientation;
    divBack.style.left = leftOrientation;
    divBack.style.transform = transformOrientation;
    divBack.style.width = "60px";
    divBack.style.height = "60px";
    divBack.style.backgroundColor = "rgba(87, 85, 85, 0.158)";
    divBack.style.borderRadius = "50%";
    divBack.style.cursor = "pointer";
    divBack.style.display = "flex";
    divBack.style.alignItems = "center";
    divBack.style.justifyContent = "center";
    divBack.style.userSelect = "none";
    divBack.innerHTML =
      '<i class="material-icons" style="font-size: 36px;color:white;">chevron_left</i>';
    divBlock.append(divBack);
    return divBack;
  },
  methods: {
    copyArrImg:null,
    triger: true,
    numberOfClicks: 0,
    inc: (item, step, operator) => {
      if (operator === "+") {
        return item + step;
      } else if (operator === "-") {
        return item - step;
      } else {
        console.log("error");
      }
    },
    incProperty: (start, clientW, number_visible, operator) => {
      if (operator === "+") {
        return Math.ceil(start + clientW / number_visible);
      } else if (operator === "-") {
        return Math.ceil(start - clientW / number_visible);
      } else {
        console.log("error");
      }
    },
    incLogink: (item, value, operator) => {
      if (operator === "+") {
        return item >= value;
      } else if (operator === "-") {
        return item <= value;
      } else {
        console.log("error");
      }
    },
    animation: function (
      div,
      step,
      time,
      number_visible,
      operator,
      orientation
    ) {
      let CLIENT_WIDTH, SCROLL_LEFT, SCROLL_WIDTH;

      if (orientation === "gorizontal") {
        CLIENT_WIDTH = "clientWidth";
        SCROLL_LEFT = "scrollLeft";
        SCROLL_WIDTH = "scrollWidth";
      }
      if (orientation === "vertical") {
        CLIENT_WIDTH = "clientHeight";
        SCROLL_LEFT = "scrollTop";
        SCROLL_WIDTH = "scrollHeight";
      }
      //----------------------
      //----------------------

      if (this.triger) {
        this.triger = false;
        let size;
        let start;
        size = div.parentElement[CLIENT_WIDTH];
        const resizeObserver = new ResizeObserver((entries) => {
          size = entries[0].target[CLIENT_WIDTH];
          //-----------------------
          //console.log(div.parentElement[SCROLL_LEFT])
          div.parentElement[SCROLL_LEFT] = size * (this.numberOfClicks / number_visible);
          start = div.parentElement[SCROLL_LEFT];
        });
        resizeObserver.observe(div.parentElement);

        
        function nap(value, operator) {
          if (operator === "+") {
            value += 10;
            return value < div.parentElement[SCROLL_WIDTH] - size;
          }
          if (operator === "-") {
            value -= 10;
            return value > 0;
          }
        }
        if (nap(div.parentElement[SCROLL_LEFT], operator)) {
          //---------------------------------------------------------
          //---------------------------------------------------------
          //---------------------------------------------------------
          //---------------------------------------------------------
          //---------------------------------------------------------
          this['item' + this.copyName] = null
          this['att' + this.copyName] = setInterval(
            () => {
              
              this['item' + this.copyName] = this.inc(this['item' + this.copyName], step, operator);
              div.parentElement[SCROLL_LEFT] = this['item' + this.copyName];
              if (
                this.incLogink(
                  this['item' + this.copyName],
                  this.incProperty(start, size, number_visible, operator),
                  operator
                )
              ) {
                div.parentElement[SCROLL_LEFT] = this.incProperty(
                  start,
                  size,
                  number_visible,
                  operator
                );
                
                clearInterval(this['att' + this.copyName]);
                if (operator === "+") {
                  if (this.numberOfClicks < this.copyArrImg.length - 1) {
                    this.numberOfClicks++;
                  }
                }
                if (operator === "-") {
                  if (this.numberOfClicks > 0) {
                    this.numberOfClicks--;
                  }
                }
                this.triger = true;
              }else{
                ///------------
                
              }
            },
            time,
            (this['item' + this.copyName] = div.parentElement[SCROLL_LEFT])
            //---------------------------------------------------------
            //---------------------------------------------------------
            //---------------------------------------------------------
            //---------------------------------------------------------
            //---------------------------------------------------------
            //---------------------------------------------------------
            //---------------------------------------------------------
          );
        } else {
          this.triger = true;
        }
      } else {
        //console.log("none");
      }
    },
    click: function (div, step, time, number_visible, operator, orientation) {
      div.addEventListener("click", () => {
        this.animation(div, step, time, number_visible, operator, orientation);
      });
    },
  },
  set speed_scroll_options(value) {
    const { time, step } = value;
    this.speed_scroll.time = time;
    this.speed_scroll.step = step;
  },
  set setArrImg(value) {
    this.arrImg = value;
    this.methods.copyArrImg = value;
  },
  set API(value) {
    this.APIimg = value;
  },
  set box(value) {
    this.boxElement = value;
    this.methods['att' + this.boxElement] = null;
    this.methods.copyName = this.boxElement;

  },
  set number_visible_options(value) {
    this.number_visible = value;
  },
  get get_slider() {
    if (document.querySelector(this.boxElement)) {
      let number_visible = this.number_visible;
      let { time, step } = this.speed_scroll;

      const block = document.querySelector(this.boxElement);
      //console.log("is wredy");
      if (Array.isArray(this.arrImg) && this.arrImg.length > 0) {
        //console.log("array is good");
        let orientation;
        if (this.orientation === "gorizontal") {
          orientation = "flex";
        }
        if (this.orientation === "vertical") {
          orientation = "block";
        }
        block.style.position = "absolute";
        block.style.top = "0";
        block.style.left = "0";
        block.style.overflow = "hidden";

        const divBlock = document.createElement("div");
        divBlock.style.width = "100%";
        divBlock.style.height = "100%";
        divBlock.style.backgroundColor = "rgba(84, 101, 102, 0.158)";
        divBlock.style.display = orientation;
        divBlock.style.overflow = "hidden";
        block.append(divBlock);

        if (true) {
          let topOrientation, leftOrientation;
          if (this.orientation === "gorizontal") {
            topOrientation = "calc(50% - 30px)";
            leftOrientation = "10px";
            transformOrientation = "rotateZ(0deg)";
          }
          if (this.orientation === "vertical") {
            topOrientation = "10px";
            leftOrientation = "calc(50% - 30px)";
            transformOrientation = "rotateZ(90deg)";
          }
          const divBack = this.divBackCreater(
            divBlock,
            topOrientation,
            leftOrientation,
            transformOrientation
          );
          //-----------------------------------------
          this.methods.click(
            divBack,
            step,
            time,
            number_visible,
            "-",
            this.orientation
          );
          //-----------------------------------------
          const divForward = this.divForwardCreater(
            divBlock,
            topOrientation,
            leftOrientation,
            transformOrientation
          );
          this.methods.click(
            divForward,
            step,
            time,
            number_visible,
            "+",
            this.orientation
          );

          if (this.setingsAnimation.activationAnimation) {
            divForward.style.visibility = "hidden";
            divBack.style.visibility = "hidden";
            let forward = true;
            //-----------------------------------------------
            //-----------------------------------------------
            //-----------------------------------------------
            //-----------------------------------------------
            //-----------------------------------------------
            
            this['timeAnim' + this.boxElement] = null;
            this['anim' + this.boxElement] = setInterval(
              () => {
                if (forward) {
                  if (this['timeAnim' + this.boxElement] >= this.arrImg.length - 1) {
                    forward = false;
                  } else {
                    this.methods.animation(
                      divForward,
                      step,
                      time,
                      number_visible,
                      "+",
                      this.orientation
                    );
                  }
                  this['timeAnim' + this.boxElement]++;
                }
                if (!forward) {
                  if (this['timeAnim' + this.boxElement] <= 0) {
                    forward = true;
                  } else {
                    this.methods.animation(
                      divBack,
                      step,
                      time,
                      number_visible,
                      "-",
                      this.orientation
                    );
                  }
                  this['timeAnim' + this.boxElement]--;
                }
              },
              this.setingsAnimation.durationAnimation,
              (this['timeAnim' + this.boxElement] = 0)
            );
            //---------------------------------------------
            //---------------------------------------------
            //---------------------------------------------
            //---------------------------------------------
            //---------------------------------------------
            //---------------------------------------------
          }
        }

        //------------------------------------------
        let orientationWidth, orientationHeight;
        if (this.orientation === "vertical") {
          orientationWidth = "100%";
          orientationHeight = `${100 / number_visible}%`;
          
        }
        if (this.orientation === "gorizontal") {
          orientationWidth = `${100 / number_visible}%`;
          orientationHeight = "100%";
          //console.log(orientationWidth)
        }

        this.arrImg.forEach((element) => {
          const div = document.createElement("div");
          // div.style.width = `${divBlock.clientWidth / number_visible}px`;
          div.style.width = orientationWidth;
          div.style.height = orientationHeight;
          //div.style.padding = '10px'; //----------------------------
          // div.style.border = "1px solid white";
          div.style.flexShrink = "0";
          const img = document.createElement("img");
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.objectFit = "cover";
          img.src = element;
          img.alt = "no faund";
          div.append(img);
          divBlock.append(div);
        });
      } else {
        console.log("arr is none");
      }
    } else {
      console.log("none");
    }
  },
};

//------------------------------
function deepClone(obj) {
  let clone = Object.create(Object.getPrototypeOf(obj));
  let descriptors = Object.getOwnPropertyDescriptors(obj);
  for (let prop in descriptors) {
    if (
      typeof descriptors[prop].value === "object" &&
      descriptors[prop].value !== null
    ) {
      descriptors[prop].value = deepClone(descriptors[prop].value);
    }
  }
  return Object.defineProperties(clone, descriptors);
}
//------------------------------


// slider.box = ".content";
// slider.setingsAnimation.activationAnimation = true;
// slider.setingsAnimation.durationAnimation = 7000;
// slider.orientation = "vertical"//vertical||gorizontal
// slider.number_visible_options = 1;
// slider.speed_scroll_options = {time:5,step:1}
// slider.setArrImg = [
//   "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
//   "https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=",
//   "https://hips.hearstapps.com/clv.h-cdn.co/assets/17/29/2048x1152/hd-aspect-1500566326-gettyimages-512366437-1.jpg",
//   "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp",
//   "https://cdn.wallpapersafari.com/95/75/NLE4SQ.jpg",
//   "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg",
//   'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
//   "https://i.ebayimg.com/images/g/mrQAAOSww5Rj9PFp/s-l1200.webp",
//   "https://nyaa.shikimori.one/system/images/original/94455.gif?1558471299",
// ];
// slider.get_slider;
