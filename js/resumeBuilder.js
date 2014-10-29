// var bio = {
//   "name": "Rasheed Bustamam",
//   "role": "Front-End Web Developer",
//   "contacts": {
//     "phone": "916-623-5146",
//     "email": "rasheed.bustamam@gmail.com",
//     "github": "abustamam",
//     'blog': "abustamam.github.io",
//     'location': 'Sacramento, CA'
//   },
//   "welcome message": "Hi!",
//   "skills": ["awesomeness", "programming", "teaching", "JS"],
//   "img": "images/me.jpg"
// };

// var work = {}

// work.position = "Assistant Instructor";
// work.employer = "Davis Kumon Center";
// work.years = "2013 - present";
// work.city = "Davis, CA";
// work.desc = "At Kumon, our goal is to help students learn for the long run. This is done by encouraging students to teach themselves complex mathematical concepts via example."

// var education = {
//   "name": "UC Davis",
//   "years": "2008 - 2013",
//   "city": "Davis, CA",
//   "major": "Chemical Engineering"
// }

// var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
// var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);
// var formattedMobile = HTMLmobile.replace("%data%",bio["contacts"]["phone"]);
// var formattedEmail = HTMLemail.replace("%data%",bio["contacts"]["email"]);
// var formattedGithub = HTMLgithub.replace("%data%",bio["contacts"]["github"]);
// var formattedBlog = HTMLblog.replace("%data%",bio["contacts"]['blog']);
// var formattedLocation = HTMLlocation.replace("%data%",bio["contacts"]['location']);
// var formattedPic = HTMLbioPic.replace("%data%",bio['img']);
// var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio['welcome message']);
// var formattedSkills = HTMLskills.replace("%data%",bio['skills']);

// var formattedEmployer = HTMLworkEmployer.replace("%data%",work["employer"]);
// var formattedTitle = HTMLworkTitle.replace("%data%",work["position"]);
// var formattedDates = HTMLworkDates.replace("%data%",work["years"]);
// var formattedLocation = HTMLworkLocation.replace("%data%",work['city']);
// var formattedWorkDesc = HTMLworkDescription.replace("%data%",work['desc']);

// var formattedSchoolName = HTMLschoolName.replace("%data%",education.name);
// // HTMLschoolDegree
// var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.years);
// var formattedSchoolCity = HTMLschoolLocation.replace("%data%",education.city);
// var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.major);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// $("#topContacts").append(formattedMobile);
// $("#topContacts").append(formattedEmail);
// $("#topContacts").append(formattedLocation);
// $("#topContacts").append(formattedGithub);
// $("#topContacts").append(formattedBlog);

// $("#header").append(formattedPic);
// $("#header").append(formattedWelcome);

// $("#skillsChart").append(HTMLskillsStart);
// $("#skills").append(formattedSkills);

// $("#workExperience").append(HTMLworkStart);
// $(".work-entry").append(formattedEmployer);
// $(".work-entry").append(formattedTitle);
// $(".work-entry").append(formattedDates);
// $(".work-entry").append(formattedLocation);
// $(".work-entry").append(formattedWorkDesc);

// $("#education").append(HTMLschoolStart);
// $(".education-entry").append(formattedSchoolName);
// $(".education-entry").append(formattedSchoolDates);
// $(".education-entry").append(formattedSchoolCity);
// $(".education-entry").append(formattedSchoolMajor);

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
      "dates": "October 2014",
      "description": "Using HTML to create the mockup for a website",
      "images": ["./images/fall006.jpg"]
    },
    {
      "title": "JavaScript Resume",
      "dates": "October 2014",
      "description": "Using JavaScript to create an interactive resume",
      "images": ["./images/fall008.jpg"]
    },
    {
      "title": "Video Game Remake",
      "dates": "October 2014",
      "description": "Remake a classic game!",
      "images": ["./images/fall012.jpg"]
    }
  ]
}

var bio = {
  "name": "Rasheed Bustamam",
  "role": "Front-End Web Developer",
  "welcomeMessage": "My name is Rasheed Bustamam. I'm cool.",
  "contacts": {
    "mobile": "916-623-5146",
    "email": "rasheed.bustamam@gmail.com",
    "github": "abustamam",
    "location": "Sacramento, CA"
  },
  "img": "images/me.jpg",
  "skills": ["awesomeness", "programming", "teaching", "JS"]
};

var education = {
  "schools": [
    {
      "name": "UC Davis",
      "location": "Davis, CA",
      "degree": "N/A",
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

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var contacts = bio["contacts"];
  var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
  var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
  var formattedGithub = HTMLgithub.replace("%data%",contacts["github"]);
  var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
  var cont = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
  $(cont).appendTo("#topContacts, #footerContacts");
  // $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
  // $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
  
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
      var formattedTitle = HTMLonlineTitle.replace("%data%", mooc["title"]);
      var formattedSchool = HTMLonlineSchool.replace("%data%", mooc["school"]);
      var formattedDates = HTMLonlineDates.replace("%data%", mooc["dates"]);
      var formattedUrl = HTMLonlineURL.replace("%data%", mooc["url"]);
      $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
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








