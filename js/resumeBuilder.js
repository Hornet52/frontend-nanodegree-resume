var work = {
	"jobs": [
		{
			"employer": "PDS Tech, Inc.",
			"title": "Account Associate",
			"location": "Indianapolis, IN",
			"dates": "1/2015 - present",
			"description": "Managed print services for Eli Lilly and Anthem, Inc."
		},
		{
			"employer": "JPMorgan Chase",
			"title": "Document Review Specialist",
			"location": "Indianapolis, IN",
			"dates": "8/2011 - 8/2014",
			"description": "Analyzed incoming subpoenas and provided responsive records"
		},
		{
			"employer": "Xerox Corporation",
			"title": "Account Associate",
			"location": "Indianapolis, IN",
			"dates": "9/2003 - 3/2009",
			"description": "Managed print services for Eli Lilly"
		}
	]
}

work.display = function() {
	//populate work experience
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

var projects = {
	"project": [
		{
			"title": "project 1",
			"dates": "2015",
			"description": "blah blah blah",
			"images": "http://placehold.it/400x200"
		},
		{
			"title": "project 2",
			"dates": "2015",
			"description": "blah blah blah",
			"images": "http://placehold.it/400x200"
		},
		{
			"title": "project 3",
			"dates": "2015",
			"description": "blah blah blah",
			"images": "http://placehold.it/400x200"
		}
	]	
}
	
projects.display = function() {
		
		//populate projects
		for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);
	
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
	
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		$(".project-entry:last").append(formattedProjectDate);
	
		var formattedProjectDescpription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		$(".project-entry:last").append(formattedProjectDescpription);
	
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project].images);
		$(".project-entry:last").append(formattedProjectImage);
		}
}

var bio = {
	"name": "Kyle Hurtley",
	"role": "Web Developer",
	"welcomeMessage": "Freelance for hire",
	"skills": ["Windows", "Macintosh", "HTML", "JavaScript", "Ruby"],
	"image": "images/fry.jpg",
	"contacts": 
		{
			"mobile": "317-340-1076",
			"email": "kyle@kylehurtley.com",
			"github": "hornet52",
			"twitter": "indyskeptic",
			"location": "Fishers, IN"
		}
}

bio.display = function() {
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
	$("#header").prepend(formattedBioPic);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);

	var formattedeEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedeEmail);

	var formattedeGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedeGithub);

	var formattedeTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedeTwitter);

	var formattedeLocation = HTMLlocation.replace(/%data%/g, bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedeLocation);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	//populate skills in header
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		for(var i = 0; i < bio.skills.length; i ++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}	
	}
}

var education = {
	"schools": [
		{
			"name": "Ivy Tech Community College",
			"location": "Indianapolis, IN",
			"degree": "None",
			"majors": ["Computer Information Technology"],
			"dates" : "2009 - 2011",
			"URL": "http://www.ivytech.edu"
		},
		{
			"name": "Indiana State University",
			"location": "Terre Haute, IN",
			"degree": "None",
			"majors": ["Aviation Administration", "Computer Science"],
			"dates" : "1999 - 2000 and 2001",
			"URL": "http://www.ivytech.edu"
		},
		{
			"name": "Noblesville High School",
			"location": "Noblesville, IN",
			"degree": "N/A",
			"majors": ["N/A"],
			"dates": "1995 - 1999",
			"URL": "http://www.noblesvilleschools.org/Domain/8"
		}
	],
	"onlineCourses": [
			{
				"title": "Ruby",
				"school": "CodeAcademy",
				"dates": "4/2015",
				"URL": "http://www.codecademy.com/en/tracks/ruby"
			},
			{
				"title": "Intro to HTML and CSS",
				"school": "Udacity",
				"dates": "5/2015",
				"URL": "https://www.udacity.com/course/ud304"
			},
			{
				"title": "Responsive Web Design Fundamentals",
				"school": "Udacity",
				"dates": "5/2015",
				"URL": "https://www.udacity.com/course/ud893"
			},
			{
				"title": "Responsive Images",
				"school": "Udacity",
				"dates": "5/2015",
				"URL": "https://www.udacity.com/course/ud882"
			},
			{
				"title": "JavaScript Basics",
				"school": "Udacity",
				"dates": "5/2015",
				"URL": "https://www.udacity.com/course/ud804"
			}
	]
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("#", education.schools[school].URL);
		var formattedNameWithURL = formattedName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedNameWithURL);
		
		//Have not earned any degrees, yet
		//var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		//$(".education-entry:last").append(formattedDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);		
	}
	
	$("#education").append(HTMLonlineClasses);
	for(course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);	
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].URL);
		$(".education-entry:last").append(formattedURL);
	}
}


bio.display();
projects.display();
work.display();
education.display();