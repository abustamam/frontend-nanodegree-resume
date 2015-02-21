  if(document.getElementsByClassName("flex-item").length === 0) {
    document.getElementById("topContacts").style.backgroundColor= "black";
  }
  if(document.getElementsByTagName("h1").length === 0) {
    document.getElementById("header").style.backgroundColor= "black";
    console.log(document.getElementsByTagName("h1").length);
  }
  if(document.getElementsByClassName("work-entry").length === 0) {
    document.getElementById("workExperience").style.backgroundColor= "black";
  }
  if(document.getElementsByClassName("project-entry").length === 0) {
    document.getElementById("projects").style.backgroundColor= "black";
  }
  if(document.getElementsByClassName("education-entry").length === 0) {
    document.getElementById("education").style.backgroundColor= "black";
  }
  // if(document.getElementsByClassName("skills-entry").length === 0) {
  //   document.getElementById("skillsChart").style.backgroundColor= "black";
  // }
  if(document.getElementsByClassName("flex-item").length === 0) {
    document.getElementById("letsConnect").style.backgroundColor= "black";
  }
  if(document.getElementById("map") == undefined) {
    document.getElementById("mapDiv").style.backgroundColor= "black";
  }