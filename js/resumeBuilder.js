// JSON

var work = {
  "jobs": [
    {
      "employer": "Davis Kumon",
      "title": "Assistant Instructor",
      "location": "Davis, CA",
      "dates": "2013 - present",
      "description": "At Kumon, our goal is to help students learn for the long run. This is done by encouraging students to teach themselves complex mathematical concepts via example."
    },
    {
      "employer": "UC Davis Medical Center",
      "title": "Student Assistant",
      "location": "Sacramento, CA",
      "dates": "2009-2010",
      "description": "Assisted medical students with initial PC setup, including software installation and troubleshot software issues"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "HTML Mockup",
      "url": "abustamam.github.io/Udacity-Portfolio",
      "dates": "October 2014",
      "description": "Using a given mockup for design guidelines, this project focused on creating a website from scratch using HTML and CSS.",
      "images": ["./images/p1.png"]
    },
    {
      "title": "JavaScript Resume",
      "url": "abustamam.github.io/frontend-nanodegree-resume",
      "dates": "October 2014",
      "description": "This site was created using a basic template, and using JSON to populate each item.",
      "images": ["./images/resume.png"]
    },
    {
      "title": "Bugger (Frogger clone)",
      "url": "abustamam.github.io/frontend-nanodegree-arcade-game",
      "dates": "December 2014",
      "description": "Remake the classic Frogger game using HTML Canvas and JavaScript.",
      "images": ["./images/bugger.png"]
    }
  ]
}

var bio = {
  "name": "Rasheed Bustamam",
  "role": "Front-End Web Developer",
  "welcomeMessage": "My name is Rasheed Bustamam. I'm a passionate learner, trying to learn new things every day. My current endeavor is programming, \
                    and I am currently learning how to create websites such as this through Udacity's Nanodegree program. I love teaching, and I believe that \
                    our nation's future belongs with our youth. <br><br>\
                    I currently serve as the president of a public speaking organization consisting of over 30 enthusiastic people, eager to defeat their fear of \
                    public speaking. I have overseen a youth leadership program, which was an 8 week program designed to help children ages 7-17 create and deliver \
                    a speech, as well as run a business meeting according to Robert's Rules.",
  "contacts": {
    "mobile": "916-623-5146",
    "email": "rasheed.bustamam@gmail.com",
    "github": "abustamam",
    "location": "Elk Grove, CA"
  },
  "img": "images/me.jpg",
  "skills": ["public speaking", "programming", "teaching", "JavaScript"]
};

var education = {
  "schools": [
    {
      "name": "UC Davis",
      "location": "Davis, CA",
      "degree": "",
      "majors": [
        "Chemical Engineering"
      ],
      "dates": "2008-2013",
      "url": "http://www.ucdavis.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://www.udacity.com/course/viewer#!/c-cs101"
    },
    {
      "title": "Progamming Foundations with Python",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://www.udacity.com/course/viewer#!/c-ud036"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://www.udacity.com/course/viewer#!/c-ud304"
    },
    {
      "title": "How to use Git and GitHub",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://www.udacity.com/course/viewer#!/c-ud775"
    }
  ]
};

// Function definitions

// Display bio info

bio.display = function() {
  // Display name and role

  var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
  var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);

  // Display contact info

  $("#header").prepend(formattedName + formattedRole);
  var contacts = bio["contacts"];
  var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
  var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
  var formattedGithub = HTMLgithub.replace("%data%",contacts["github"]);
  var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
  var cont = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
  $(cont).appendTo("#topContacts, #footerContacts");
  
  // Display image and welcome message

  var formattedImage = HTMLbioPic.replace("%data%",bio["img"]);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio["welcomeMessage"]);
  $("#header").append(formattedImage + formattedMessage);

  // Display skills

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";
    for (var i = 0; i < bio.skills.length; i++){
      formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(formattedSkill);
    };
  };
};

// Display jobs

work.display = function(){
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var j = work.jobs[job];
    var formattedEmployer = HTMLworkEmployer.replace("%data%",j["employer"]);
    var formattedTitle = HTMLworkTitle.replace("%data%",j["title"]);
    var formattedDates = HTMLworkDates.replace("%data%",j["dates"]);
    var formattedLocation = HTMLworkLocation.replace("%data%",j['location']);
    var formattedWorkDesc = HTMLworkDescription.replace("%data%",j['description']);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedWorkDesc);
  }
};

// Display projects

projects.display = function() {
  for (var project in projects["projects"]) {
    $("#projects").append(HTMLprojectStart);
    var proj = projects["projects"][project];
    var formattedTitle = HTMLprojectTitle.replace("%data%", proj["title"]);
    var formattedDates = HTMLprojectDates.replace("%data%", proj["dates"]);
    var formattedDesc = HTMLprojectDescription.replace("%data%", proj["description"]);
    var formattedImages = "";
    if (proj["images"].length > 0){
      for (image in proj["images"]) {
        formattedImages += HTMLprojectImage.replace("%data%", proj["images"][image]);
      };
    }
    $(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc + formattedImages);
  };
}

// Display education

education.display = function() {
  // Add education entry for each school
  for (school in education["schools"]){
    $("#education").append(HTMLschoolStart);
    var sch = education["schools"][school];
    var formattedName = HTMLschoolName.replace("%data%", sch["name"]);
    var formattedDegree = HTMLschoolDegree.replace("%data%", sch["degree"]);
    var formattedDates = HTMLschoolDates.replace("%data%", sch["dates"]);
    var formattedLocation = HTMLschoolLocation.replace("%data%", sch["location"]);
    var formattedMajor = ""; 
    if (sch["majors"].length > 0){
      for (var major in sch["majors"]){
        formattedMajor += HTMLschoolMajor.replace("%data%", sch["majors"][major]);
      };
    };
    $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
  };
  if (education["onlineCourses"].length > 0){
    $("#education").append(HTMLonlineClasses);
    for (course in education["onlineCourses"]){
      $("#education").append(HTMLschoolStart);
      var mooc = education["onlineCourses"][course];
      var formattedUrl = HTMLonlineURL.replace("%data%", mooc["url"]);
      var formattedTitle = HTMLonlineTitle.replace("%data%", mooc["title"]);
      var formattedSchool = HTMLonlineSchool.replace("%data%", mooc["school"]);
      var formattedDates = HTMLonlineDates.replace("%data%", mooc["dates"]);
      $(".education-entry:last").append(formattedUrl + formattedTitle + formattedSchool + formattedDates);
    };
  };
};

// Call display functions

bio.display();
work.display();
projects.display();
education.display();

// Log clicks to console

$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

// Internationalize! 

$("#main").append(internationalizeButton);

var inName = function() {
  var oldName = $("#name").text();
  var finalName = oldName.trim().split(" ");
  finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName[1] = finalName[1].toUpperCase();
  finalName = finalName.join(" ");
  return finalName;
}

// Add map!

$("#mapDiv").append(googleMap);
