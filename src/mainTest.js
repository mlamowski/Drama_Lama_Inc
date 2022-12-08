
document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');

  const element1 = document.getElementById("target1")
  const element2 = document.getElementById("target2")
  let textDiv = document.getElementById('textWrapper');

  let playSign = document.getElementsByClassName("playSign");

  let userAgentString = navigator.userAgent;
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1;


  
  //arReady event triggered when ready
  sceneEl.addEventListener("arReady", (event) => {
    if(firefoxAgent) {
      document.getElementById('instruction').innerHTML = 'Bitte nutze einen anderen Browser, Firefox wird nicht unterstützt!';

    } else {
      document.getElementById('instruction').innerHTML = 'Halte Deine Kamera über die Karte';
    }


  });
  // arError event triggered when something went wrong. Mostly browser compatbility issue
  sceneEl.addEventListener("arError", (event) => {
    document.getElementById('instruction').innerHTML = 'Dein Browser scheint nicht kompatibel zu sein...';
  });

  element1.addEventListener('targetFound', function () {
    playSign[0].setAttribute("visible",true);
    playSign[1].setAttribute("visible",true);

    //this.startSign = document.querySelector(element1.children[2].getAttribute("src"));
    //console.log(this.startSign);
    //this.startSign.style.visibility = 'hidden';

    //this.startSign.setAttribute("visible",true);

    this.vid = document.querySelector(element1.children[0].getAttribute("src"));
    this.entitiy_model = element1.children[1];
    this.toggle = true;
    document.getElementsByClassName("mindar-ui-overlay mindar-ui-scanning")[0].style.display = "none";

    if(firefoxAgent) {
      document.getElementById('instruction').innerHTML = 'Bitte nutze einen anderen Browser, Firefox wird nicht unterstützt!';

    } else {
      document.getElementById('instruction').innerHTML = 'Klicke auf die Karte um zu Starten';

    }

    this.entitiy_model.setAttribute('animation-mixer', {
      clip: 'null'
    })
    this.entitiy_model.pause();

    element1.addEventListener('click', function () {
      playSign[0].setAttribute("visible","false");
      playSign[1].setAttribute("visible","false");

      this.vid.play();
      this.vid.muted = false;
      textDiv.style.visibility = 'hidden';
      this.entitiy_model.setAttribute('animation-mixer', {
        clip: '*'
      })


      this.entitiy_model.play();
      
    }.bind(this));
    
  }.bind(this));
  
  element1.addEventListener('targetLost', function () {
    playSign[0].setAttribute("visible",true);
    playSign[1].setAttribute("visible",true);


    this.toggle = false;
    this.vid.pause();


    textDiv.style.visibility = 'visible';
    document.getElementsByClassName("mindar-ui-overlay mindar-ui-scanning")[0].style.display = "flex";
    if(firefoxAgent) {
      document.getElementById('instruction').innerHTML = 'Bitte nutze einen anderen Browser, Firefox wird nicht unterstützt!';

    } else {
      document.getElementById('instruction').innerHTML = 'Halte Deine Kamera über die Karte';
    }
    console.log("lost ");

    this.entitiy_model.setAttribute('animation-mixer', {
      clip: 'null'
    })


    this.entitiy_model.pause();
    
  }.bind(this));




  element2.addEventListener('targetFound', function () {
    playSign[0].setAttribute("visible",true);
    playSign[1].setAttribute("visible",true);

    this.vid = document.querySelector(element2.children[0].getAttribute("src"));
    this.entitiy_model = element2.children[1];
    this.toggle = true;
    document.getElementsByClassName("mindar-ui-overlay mindar-ui-scanning")[0].style.display = "none";
    if(firefoxAgent) {
      document.getElementById('instruction').innerHTML = 'Bitte nutze einen anderen Browser, Firefox wird nicht unterstützt!';

    } else {
      document.getElementById('instruction').innerHTML = 'Klicke auf die Karte um zu Starten';

    }
    this.entitiy_model.setAttribute('animation-mixer', {
      clip: 'null'
    })

    this.entitiy_model.pause();



    element2.addEventListener('click', function () {

      playSign[0].setAttribute("visible","false");
      playSign[1].setAttribute("visible","false");


      this.vid.play();
      this.vid.muted = false;
      textDiv.style.visibility = 'hidden';

      

      this.entitiy_model.setAttribute('animation-mixer', {
        clip: '*'
      })


      this.entitiy_model.play();

    }.bind(this));

  }.bind(this));

  element2.addEventListener('targetLost', function () {
    playSign[0].setAttribute("visible",true);
    playSign[1].setAttribute("visible",true);

    this.toggle = false;
    this.vid.pause();
    textDiv.style.visibility = 'visible';
    document.getElementsByClassName("mindar-ui-overlay mindar-ui-scanning")[0].style.display = "flex";
    if(firefoxAgent) {
      document.getElementById('instruction').innerHTML = 'Bitte nutze einen anderen Browser, Firefox wird nicht unterstützt!';

    } else {
      document.getElementById('instruction').innerHTML = 'Halte Deine Kamera über die Karte';
    }
    console.log("lost ");

    this.entitiy_model.setAttribute('animation-mixer', {
      clip: 'null'
    })


    this.entitiy_model.pause();

  }.bind(this));
  
  
  
  
});