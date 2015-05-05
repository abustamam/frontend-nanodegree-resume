// JSON

$(function(){
  var model = {
    init: function() {
      this.work = {
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

      this.projects = {
        "projects": [
          {
            "title": "HTML Mockup",
            "url": "abustamam.github.io/rb-port",
            "dates": "October 2014",
            "description": "Using a given mockup for design guidelines, this project focused on creating a website from scratch using HTML and CSS.",
            "images": ["./images/p1.png"]
          },
          {
            "title": "JavaScript Resume",
            "url": "abustamam.github.io/resume",
            "dates": "November 2014",
            "description": "This site was created using a basic template, and using JSON to populate each item.",
            "images": ["./images/resume.png"]
          },
          {
            "title": "Bugger (Frogger clone)",
            "url": "abustamam.github.io/bugger",
            "dates": "December 2014",
            "description": "Remake the classic Frogger game using HTML Canvas and JavaScript.",
            "images": ["./images/bugger.png"]
          },
          {
            "title": "Mobile Optimization",
            "url": "abustamam.github.io/mobile-portfolio",
            "dates": "January 2015",
            "description": "Optimize, with regard to pagespeed and FPS, a mobile portfolio",
            "images": ["./images/perf.png", "./images/pizza.png"]
          },
          {
            "title": "Groupon Map",
            "url": "abustamam.github.io/Neighborhood-Map",
            "dates": "April 2015",
            "description": "A simple map showing locations of nearby Groupons.",
            "images": ["./images/Groupon.png"]
          },
          {
            "title": "Feedreader (Jasmine Testing)",
            "url": "abustamam.github.io/Neighborhood-Map",
            "dates": "February 2015",
            "description": "A simple feedreader, designed solely to get used to writing, failing, then passing, tests.",
            "images": ["./images/Feedreader.png"]
          }
        ]
      };

      this.bio = {
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
        "skills": ["public speaking", "programming", "teaching", "JavaScript", "HTML5", "CSS3"]
      };

      this.education = {
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
            "dates": "August 2014",
            "url": "https://www.udacity.com/course/cs101"
          },
          {
            "title": "Progamming Foundations with Python",
            "school": "Udacity",
            "dates": "September 2014",
            "url": "https://www.udacity.com/course/ud036"
          },
          {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "November 2014",
            "url": "https://www.udacity.com/course/ud304"
          },
          {
            "title": "How to use Git and GitHub",
            "school": "Udacity",
            "dates": "November 2014",
            "url": "https://www.udacity.com/course/ud775"
          },
          {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "December 2014",
            "url": "https://www.udacity.com/course/ud804"
          },
          {
            "title": "Object-Oriented JavaScript",
            "school": "Udacity",
            "dates": "January 2015",
            "url": "https://www.udacity.com/course/ud015"
          },
          {
            "title": "Website Performance Optimization",
            "school": "Udacity",
            "dates": "February 2015",
            "url": "https://www.udacity.com/course/ud884"
          },
          {
            "title": "JavaScript Testing",
            "school": "Udacity",
            "dates": "March 2015",
            "url": "https://www.udacity.com/course/ud549"
          },
          {
            "title": "JavaScript Design Patterns",
            "school": "Udacity",
            "dates": "April 2015",
            "url": "https://www.udacity.com/course/ud989"
          }
        ]
      };
    }
  };

  var octopus = {
    init: function() {
      model.init();
      view.init();
    },

    bioDisplay: function() {
      var formattedName = HTMLheaderName.replace("%data%",model.bio["name"]);
      var formattedRole = HTMLheaderRole.replace("%data%",model.bio["role"]);

      // Display contact info

      $("#header").prepend(formattedName + formattedRole);
      var contacts = model.bio["contacts"];
      var formattedMobile = HTMLmobile.replace("%data%",contacts["mobile"]);
      var formattedEmail = HTMLemail.replace("%data%",contacts["email"]);
      var formattedGithub = HTMLgithub.replace("%data%",contacts["github"]);
      var formattedLocation = HTMLlocation.replace("%data%",contacts["location"]);
      var cont = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
      $(cont).appendTo("#topContacts, #footerContacts");
      
      // Display image and welcome message

      var formattedImage = HTMLbioPic.replace("%data%",model.bio["img"]);
      var formattedMessage = HTMLWelcomeMsg.replace("%data%",model.bio["welcomeMessage"]);
      $("#header").append(formattedImage + formattedMessage);

      // Display skills

      if (model.bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = "";
        for (var i = 0; i < model.bio.skills.length; i++){
          formattedSkill = HTMLskills.replace("%data%",model.bio.skills[i]);
          $("#skills").append(formattedSkill);
        };
      };
    },

    workDisplay: function() {
      for (var job in model.work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var j = model.work.jobs[job];
        var formattedEmployer = HTMLworkEmployer.replace("%data%",j["employer"]);
        var formattedTitle = HTMLworkTitle.replace("%data%",j["title"]);
        var formattedDates = HTMLworkDates.replace("%data%",j["dates"]);
        var formattedLocation = HTMLworkLocation.replace("%data%",j['location']);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%",j['description']);
        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedWorkDesc);
      }
    },

    projectsDisplay: function() {
      for (var project in model.projects["projects"]) {
        $("#projects").append(HTMLprojectStart);
        var proj = model.projects["projects"][project];
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
    }, 

    educationDisplay: function() {
      // Add education entry for each school
      for (school in model.education["schools"]){
        $("#education").append(HTMLschoolStart);
        var sch = model.education["schools"][school];
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
      if (model.education["onlineCourses"].length > 0){
        $("#education").append(HTMLonlineClasses);
        for (course in model.education["onlineCourses"]){
          $("#education").append(HTMLschoolStart);
          var mooc = model.education["onlineCourses"][course];
          var formattedUrl = HTMLonlineURL.replace("%data%", mooc["url"]);
          var formattedTitle = HTMLonlineTitle.replace("%data%", mooc["title"]);
          var formattedSchool = HTMLonlineSchool.replace("%data%", mooc["school"]);
          var formattedDates = HTMLonlineDates.replace("%data%", mooc["dates"]);
          $(".education-entry:last").append(formattedUrl + formattedTitle + formattedSchool + formattedDates);
        };
      };
    },

    initializeMap: function() {
      this.map;    // declares a global map variable
      var locations = [];        

      var mapOptions = {
        disableDefaultUI: true
      };

      // This next line makes `map` a new Google Map JavaScript Object and attaches it to
      // <div id="map">, which is appended as part of an exercise late in the course.
      this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);


      /*
      locationFinder() returns an array of every location string from the JSONs
      written for bio, education, and work.
      */
      function locationFinder() {
        
        // initializes an empty array

        var locs = []

        // adds the single location property from bio to the locations array
        locs.push(model.bio.contacts.location);
        
        // iterates through school locations and appends each location to
        // the locations array
        for (var school in model.education.schools) {
          locs.push(model.education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in model.work.jobs) {
          locs.push(model.work.jobs[job].location);
        }

        return locs;
      }

      /*
      createMapMarker(placeData) reads Google Places search results to create map pins.
      placeData is the object returned from search results containing information
      about a single location.
      */
      function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.k;  // latitude from the place service
        var lon = placeData.geometry.location.D;  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
          map: this.map,
          position: placeData.geometry.location,
          title: name
        });
          
        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
          content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(this.map,marker);

        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        this.map.fitBounds(bounds);
        // center the map
        this.map.setCenter(bounds.getCenter());
      }

      /*
      callback(results, status) makes sure the search returned results for a location.
      If so, it creates a new map marker for that location.
      */
      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          createMapMarker(results[0])
        }
      }

      /*
      pinPoster(locations) takes in the array of locations created by locationFinder()
      and fires off Google place searches for each location
      */
      function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);
        
        // Iterates through the array of locations, creates a search object for each location
        for (place in locations) {

          // the search request object
          var request = {
            query: locations[place]
          }

          // Actually searches the Google Maps API for location data and runs the callback 
          // function with the search results after each search.
          service.textSearch(request, callback);
        }
      }

      // Sets the boundaries of the map based on pin locations
      window.mapBounds = new google.maps.LatLngBounds();

      // locations is an array of location strings returned from locationFinder()
      locations = locationFinder();

      // pinPoster(locations) creates pins on the map for each location in
      // the locations array
      pinPoster(locations);
      
    },
  };

  var view = {
    init: function() {
      octopus.bioDisplay();
      octopus.workDisplay();
      octopus.projectsDisplay();
      octopus.educationDisplay();
      this.addMap();
    },

    addMap: function() {
      window.addEventListener('load', octopus.initializeMap);

      window.addEventListener('resize', function(e) {
        octopus.map.fitBounds(mapBounds);
      })
    }
  };

  octopus.init();
}());

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
