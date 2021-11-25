const bodyContainer= document.getElementById("container");
bodyContainer.style.backgroundColor= "gray";

const headerContainer = document.getElementById("header-container");
  headerContainer.style.backgroundColor= "green";

const section = document.getElementsByClassName("emergency-tasks");
  section[0].style.backgroundColor="orange";

  let emergency= document.querySelectorAll(".emergency-tasks h3");
   for (a = 0; a < emergency.length; a+= 1){
      emergency[a].style.backgroundColor="black";
   }

const noEmergency = document.querySelector(".no-emergency-tasks");
  noEmergency.style.backgroundColor="pink";
 
let noSection= document.querySelectorAll(".no-emergency-tasks h3");
  for(b = 0; b < noSection.length; b += 1){
      noSection[b].style.backgroundColor="black";
  }

const footContainer = document.getElementById("footer-container");
  footContainer.style.backgroundColor="blue";