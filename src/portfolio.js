/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Juned Raza",
  title: "Hi all, I'm Juned,",
  subTitle: emoji(
    "A passionate Flutter Developer along with Full stack Web developer(MERN) and Django. I like to build awesome applications and websites. Currently serving as a Freelancer"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Dnvpn1HeK8EPwXeoaYEfG-n2yV771-KM/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/junedr375",
  linkedin: "https://www.linkedin.com/in/junedr375",
  // gmail: "https://mail-to:junedr375@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://junedr375.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/13691546/juned-raza",
  instagram: "https://www.instagram.com/junedr375/",
  twitter: "https://twitter.com/junedr375",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A PASSIONATE FULL STACK DEVELOPER WHO LIKES TO DEVELOP APPLICATIONS AND WEBSITES",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Complete backend with Firebase and REST API"),
    emoji(
      "⚡ Integration of third party services e.g. Payments / Maps / Video & Audio Players"
    ),
    emoji("⚡ Experienced with Figma and Adobe."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Pyhton",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "far fa-copyright",
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aligarh Muslim University, Aligarh",
      logo: require("./assets/images/amuLogo.png"),
      subHeader: "Bachelor in Technology, Computer Engineering",
      duration: "July 2018 - Present",
      desc:
        "Learning OOPS, DBMS, Computer Architecture, Microprocessor Theory, Advance Mathematics",
      descBullets: ["CPI - 9.1", "Won 2 University Coding Hackathons"],
    },
    {
      schoolName: "Rajdhani College, Bhubaneswar",
      logo: require("./assets/images/rajdhaniLogo.jpeg"),
      subHeader: "Higher Secondary, Science",
      duration: "May 2015 - July 2017",
      desc: "College Topper",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter / App development", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MERN Stack / Web Development",
      progressPercentage: "75%",
    },
    {
      Stack: "Firebase / Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Django / Web Development",
      progressPercentage: "80%",
    },
    {
      Stack: "Pyhton",
      progressPercentage: "85%",
    },
    {
      Stack: "C/C++",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Ventive, Boise ID, USA",
      companylogo: require("./assets/images/ventive.jpg"),
      date: "Aprill 2021 - Present",
      desc: "Helping as Application Developer",
      descBullets: [
        "Buiding Application With Flutter Framework",
        "Extracting Assets from Figma File",
        "Solving Bugs",
      ],
    },
    {
      role: "Flutter Developer",
      company: "GrowthGear, New Delhi",
      companylogo: require("./assets/images/growthGear.jpg"),
      date: "March 2021 - Aprill 2021",
      desc: "Build Mobile Application with Smooth UI",
      descBullets: [
        "Build Application With Modern UI",
        "Assets Extracted from Adobe File",
        "Integrated Stripe, Google Map",
      ],
    },
    {
      role: "Flutter App Developer",
      company: "Morning Cars, Gurugram",
      companylogo: require("./assets/images/morningCar.jpeg"),
      date: "Jan 2021 - March 2021",
      desc: "Developing Android and iOS Application for MorningCars",
      descBullets: [
        "Implementing smooth UI",
        "Integrating with REST API",
        "Loading JSON Data",
      ],
    },
    {
      role: "App Developer",
      company: "CodePlayers, Noida",
      companylogo: require("./assets/images/codePlayer.png"),
      date: "Jul 2020 - Jan 2021",
      desc: "Built an application in which",
      descBullets: [
        "Solved issue of video Live-streaming using the Agora engine.",
        "Integrated the PayPal payment service for purchasing",
        "Built Music player which streams in background too",
      ],
    },
    {
      role: "Flutter App Developer",
      company: "PlacidVision, Bangalore",
      companylogo: require("./assets/images/placidLogo.png"),
      date: "May 2020 - Aug 2020",
      desc: "Developed an OTT-Platform app",
      descBullets: [
        "Added Google, Facebook authentication",
        "Video calling feature using JITSI meet",
        "Multiple channels for different contents",
        "Video Player which supports HLS format video",
      ],
    },
    {
      role: "Web Developer",
      company: "Alfred Technologies, Hyderabad",
      companylogo: require("./assets/images/alfredLogo.jpeg"),
      date: "Jan 2020 - May 2020",
      desc: "Added an Feature in company's website",
      descBullets: [
        "Built Internship Management portal",
        "Users can register for internship",
        "Admin can check and assign tasks",
        "User can check real-time status of application",
        "Hosted on Amazon EC2",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "junedr375", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Works",
  subtitle: "PERSONAL AND FREELANCING WORKS",
  projects: [
    {
      image: require("./assets/images/ticketBooking.PNG"),
      projectName: "Ticket Booking Application",
      projectDesc: "Application to Book Tickets Online for Parks and Parking",
      footerLink: [
        {
          name: "See Project",
          url:
            " https://drive.google.com/file/d/1oy4WQebpN3qW7IV4OnTQdRnyasR3CEMd/view?usp=sharing",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/ottPlatform.jpg"),
      projectName: "OTT Platform App",
      projectDesc: "OTT Platform App which stream HLS videos",
      footerLink: [
        {
          name: "See Project",
          url:
            "https://drive.google.com/file/d/1cLTGNe89iY3Wox_CaoHbFdb9NBGas-K3/view?usp=sharing",
        },
        //  you can add extra buttons here.
      ],
    },

    {
      image: require("./assets/images/liveStreaming.PNG"),
      projectName: "Music Player cum Event Managment App",
      projectDesc:
        "Event management app with in-app Music Player. User also can purchase merchandise and musics",
      footerLink: [
        {
          name: "See Project",
          url:
            "https://drive.google.com/file/d/1exP7CwdFREn3YtwTZvPie8RjODFQeme-/view?usp=sharing",
        },
      ],
    },
    {
      image: require("./assets/images/ecomPrime.PNG"),
      projectName: "E-commerce App",
      projectDesc:
        "E-commerce Application built with Flutter Framework. Integrated with Stripe for payment and Wordpress's Woocommerce plugin.",
      footerLink: [
        {
          name: "See Project",
          url:
            "https://drive.google.com/file/d/1wEP4lCxDqhrnJ3xlEuZLaJXjV5803nrC/view?usp=sharing",
        },
      ],
    },
    {
      image: require("./assets/images/timeTable.PNG"),
      projectName: "Time Table App",
      projectDesc:
        "Time table app for student to be updated. Included admin page to upload class data.",
      footerLink: [
        {
          name: "See Project",
          url:
            "https://drive.google.com/file/d/1VPI8JFdHLp1vMsraArq6smeKO3PD7MA3/view?usp=sharing",
        },
      ],
    },
    {
      image: require("./assets/images/chatApp.PNG"),
      projectName: "Chatting App",
      projectDesc:
        "Chatting app with Firebase as backend. Streaming live chats. Searching users and chatting available",
      footerLink: [
        {
          name: "See Project",
          url:
            "https://drive.google.com/file/d/1OdGkqCF0wPpj2pjTpJ31vOoolGIgi7Qw/view?usp=sharing",
        },
      ],
    },
    {
      image: require("./assets/images/youTubeClone.PNG"),
      projectName: "Youtube Clone",
      projectDesc: "Youtube clone using FLutter. Loading data from JSON file.",
      footerLink: [
        {
          name: "See Project",
          url:
            "https://drive.google.com/file/d/1qB_nTGKUp940Lr-xM5YWD4US6tKcMgzn/view?usp=sharing",
        },
      ],
    },
    {
      image: require("./assets/images/newsReader.PNG"),
      projectName: "NewsReader App",
      projectDesc:
        "NewsReader app fetching data from API and loading Json data. Showing news in flutter webview.",
      footerLink: [
        {
          name: "See Project",
          url:
            "https://drive.google.com/file/d/1ISYtL6i9u5GUr6xWji4Efhx7MiZJaVCL/view?usp=sharing",
        },
      ],
    },
    {
      image: require("./assets/images/linkedInClone.PNG"),
      projectName: "LinkedIn React Clone",
      projectDesc: "",
      footerLink: [
        {
          name: "See Project",
          url: "https://linkedin-clone-6cf64.web.app/",
        },
      ],
    },
    {
      image: require("./assets/images/amazonReactClone.PNG"),
      projectName: "Amazon React Clone",
      projectDesc: "",
      footerLink: [
        {
          name: "See Project",
          url: "https://clone-8cc12.web.app/",
        },
      ],
    },
    {
      image: require("./assets/images/whatsappReactClone.PNG"),
      projectName: "Whatsapp React Clone",
      projectDesc: "",
      footerLink: [
        {
          name: "See Project",
          url: "https://whatsapp-mern-1909b.web.app/",
        },
      ],
    },
    {
      image: require("./assets/images/tinderReactClone.PNG"),
      projectName: "Tinder React Clone",
      projectDesc: "",
      footerLink: [
        {
          name: "See Project",
          url: "https://tinder-clone-d13c4.web.app/",
        },
      ],
    },
    {
      image: require("./assets/images/tiktokClone.png"),
      projectName: "Tiktok React Clone",
      projectDesc: "",
      footerLink: [
        {
          name: "See Project",
          url: "https://tiktok-clone-mern-ddff0.web.app/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://junedr375.medium.com/basic-git-commands-for-creating-new-branch-and-pull-request-4033724c17a",
      title: "Git Essential Commands",
      description: "Git Commands for Creating new branch and Pull Request",
    },
    {
      url:
        "https://junedr375.medium.com/flutter-paypal-integration-d1f4585b596f",
      title: "Flutter PayPal Integration",
      description: "Integrate Paypal as your payment gateway in Flutter app",
    },
    {
      url: "https://junedr375.medium.com/flutter-provider-9681eac20c38",
      title: "Flutter Provider",
      description:
        "Starting with Flutter Provider with Making Shopping Cart and theme changing",
    },
    {
      url: "https://junedr375.medium.com/flutter-custom-calender-cdbb1db412eb",
      title: "Flutter Custom Calender",
      description: "Implementing own Custom Calender in Flutter",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 90786 13527",
  email_address: "junedr375@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "junedr375", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  educationInfo,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
