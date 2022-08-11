
document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');
  //arReady event triggered when ready
  sceneEl.addEventListener("arReady", (event) => {
    document.getElementById('instruction').innerHTML = 'Halte Deine Kamera über die Karte';

  });
  // arError event triggered when something went wrong. Mostly browser compatbility issue
  sceneEl.addEventListener("arError", (event) => {
    document.getElementById('instruction').innerHTML = 'Dein Browser scheint nicht kompatibel zu sein...';
  });
});

AFRAME.registerComponent('videohandler', {
  init: function () {
    var marker = this.el;
    this.vid = document.querySelector(marker.children[0].getAttribute("src"));
    //NEU
    this.entitiy_model = marker.children[1];

    let textDiv = document.getElementById('textWrapper');
    var img = document.createElement('a-image');
    img.setAttribute('src', '#playSign');
    img.setAttribute('position', '0 0 0.2');
    img.setAttribute('scale', '0.5 0.5 1');
    marker.appendChild(img);

    marker.addEventListener('targetFound', function () {
      console.log("found ");

      this.toggle = true;
      //this.vid.play();
      //this.vid.muted = !this.vid.muted;
      //textDiv.style.display = "none";
      document.getElementsByClassName("mindar-ui-overlay mindar-ui-scanning")[0].style.display = "none";
      document.getElementById('instruction').innerHTML = 'Klicke auf die Karte um zu Starten';

      img.setAttribute("visible",true);
      /*
      this.entitiy_model.setAttribute('animation-mixer', {
        clip: 'null'
      })

       */

      this.entitiy_model.pause();






    }.bind(this));

    marker.addEventListener('targetLost', function () {
      this.toggle = false;
      this.vid.pause();

      textDiv.style.visibility = 'visible';
      document.getElementsByClassName("mindar-ui-overlay mindar-ui-scanning")[0].style.display = "flex";
      document.getElementById('instruction').innerHTML = 'Halte Deine Kamera über die Karte';
      console.log("lost ");
      /*
      this.entitiy_model.setAttribute('animation-mixer', {
        clip: 'null'
      })

       */
      this.entitiy_model.pause();

    }.bind(this));

    //manchmal kommt er hier durcheinander.. vllt kann man this.video erst setzen, wenn target gefunden?
    marker.addEventListener('click', function () {
      //this.toggle = true;
      this.vid.play();
      this.vid.muted = false;
      textDiv.style.visibility = 'hidden';
      console.log("clicked");
      /*
      img.setAttribute("visible",false);
      this.entitiy_model.setAttribute('animation-mixer', {
        clip: '*'
      })

       */
      this.entitiy_model.play();



    }.bind(this));
  },
});