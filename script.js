



function toggleMenu() {
    var menu = document.querySelector('.menu');
    var navbar = document.querySelector('.navbar');
    if (menu.style.transform === 'translateX(-100%)') {
      menu.style.transform = 'translateX(0)';
      
    } else {
      menu.style.transform = 'translateX(-100%)';
      
    }
  }
  
// for callender

var months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var monthYear = document.getElementById("monthYear");
  var calendarBody = document.getElementById("calendarBody");
  
  var currentDate = new Date();
  
  function renderCalendar() {
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    var firstDay = new Date(currentYear, currentMonth, 1);
    var lastDay = new Date(currentYear, currentMonth + 1, 0);
    var daysInMonth = lastDay.getDate();
    var startDay = firstDay.getDay();
  
    monthYear.textContent = months[currentMonth] + " " + currentYear;
  
    calendarBody.innerHTML = "";
  
    var date = 1;
    var today = new Date();
  
    for (var i = 0; i < 6; i++) {
      var row = document.createElement("tr");
  
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          var cell = document.createElement("td");
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          var cell = document.createElement("td");
          cell.textContent = date;
  
          if (
            date === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
          ) {
            var loginTime = 8; // Example login time: 8 hours
            if (loginTime === 0) {
              cell.textContent += " (AA)"; // If login time is 0 hours
            } else if (loginTime === 4) {
              cell.textContent += " (PA)"; // If login time is 4 hours
            } else {
              cell.textContent += " (PP)"; // If login time is 8 hours
            }
            cell.classList.add("current-date");
          }
  
          row.appendChild(cell);
          date++;
        }
      }
  
      calendarBody.appendChild(row);
    }
  }
  
  prevButton.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });
  
  nextButton.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });
  
  renderCalendar();
  
  



// for login and registration
const DLogin=document.querySelector("#Dlogin")
const MLogin=document.querySelector("#Mlogin")
const LoginRegister=document.querySelector(".login_register_sec")
const LCross=document.querySelector(".Lcross")
const RCross=document.querySelector(".Rcross")
var menu = document.querySelector('.menu');
DLogin.addEventListener("click",(()=>{
  // alert("hy")
  LoginRegister.style.transform = 'translateY(0)';
}))
MLogin.addEventListener("click",(()=>{
  // alert("hy")
  setTimeout(()=>{
  LoginRegister.style.transform = 'translateY(0)';
  },300)
  menu.style.transform = 'translateX(-100%)';
}))
LCross.addEventListener("click",(()=>{
  // alert("hyy")
  LoginRegister.style.transform = 'translateY(-100%)';
}))
RCross.addEventListener("click",(()=>{
  // alert("hyy")
  LoginRegister.style.transform = 'translateY(-100%)';
}))



var firebaseConfig = {
  // Replace with your Firebase project configuration
  apiKey: "AIzaSyAYR3Yg3Z7Hst5xrwFDB70yO7jez306X38",
  authDomain: "requirement-solution.firebaseapp.com",
  projectId: "requirement-solution",
  storageBucket: "requirement-solution.appspot.com",
  messagingSenderId: "690841217993",
  appId: "1:690841217993:web:5bd9024ad753e4e882d618"
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function toggleForms() {
  var loginForm = document.getElementById('loginForm');
  var registrationForm = document.getElementById('registrationForm');

  loginForm.classList.toggle('hidden');
  registrationForm.classList.toggle('hidden');
}

function login(event) {
  event.preventDefault();
  
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Login successful, perform any additional actions
      alert('Login successful');
      clearLoginForm();
      setTimeout(()=>{
        LoginRegister.style.transform = 'translateY(-100%)';
        },400)
    })
    .catch(function(error) {
      // Handle login errors
      var errorMessage = error.message;
      alert('Login error:', errorMessage);
    });
}

function clearLoginForm() {
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

function register(event) {
  event.preventDefault();

  var email = document.getElementById('registerEmail').value;
  var password = document.getElementById('registerPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Registration successful, perform any additional actions
      alert('Registration successful');
      clearRegistrationForm();
      setTimeout(()=>{
        LoginRegister.style.transform = 'translateY(-100%)';
        },400)
    })
    .catch(function(error) {
      // Handle registration errors
      var errorMessage = error.message;
      alert('Registration error:', errorMessage);
    });
}
function clearRegistrationForm() {
  document.getElementById('registerEmail').value = '';
  document.getElementById('registerPassword').value = '';
}





// for Candidate Search


var candidates = [
  { name: 'Amulya Kumar', location: 'New Delhi', jobRole: 'Frontend Developer' },
  { name: 'Chinmay Kumar', location: 'Odisha', jobRole: 'Backend Developer' },
  { name: 'Sudeepa Acharya', location: 'Mumbai', jobRole: 'Data Scientist' },
  { name: 'Mamata Behera', location: 'Bangalore', jobRole: 'Data Scientist' },
  // Add more candidate objects as needed
];

var locationSelect = document.getElementById('location');
var jobRoleSelect = document.getElementById('job-role');
var candidatesList = document.getElementById('candidates-list');

function searchCandidates(event) {
  event.preventDefault();

  var location = locationSelect.value;
  var jobRole = jobRoleSelect.value;

  var filteredCandidates = candidates.filter((candidate)=> {
   console.log(candidate.jobRole)
   console.log(location);
   console.log(jobRole);
    if (location === 'all' && jobRole === 'all') {
      return true;
    } else if (location === 'all' && candidate.jobRole === jobRole) {
      return true;
    } else if (candidate.location === location && jobRole === 'all') {
      return true;
    } else if (candidate.location === location && candidate.jobRole === jobRole) {
      return true;
    }
    return false;
  });

  displayCandidates(filteredCandidates);
}

function displayCandidates(candidates) {
  console.log(candidates);
  candidatesList.innerHTML = '';

  if (candidates.length === 0) {
    var li = document.createElement('li');
    li.textContent = 'No candidates found.';
    candidatesList.appendChild(li);
  } else {
    candidates.forEach(function(candidate) {
      var li = document.createElement('li');
      li.textContent = candidate.name + ' - ' + candidate.location + ' - ' + candidate.jobRole;
      candidatesList.appendChild(li);
    });
  }
}








var NavHeader = document.getElementById("myDIV");
var NavOpt = NavHeader.getElementsByClassName("navopt");
for (var i = 0; i < NavOpt.length; i++) {
    NavOpt[i].addEventListener("click", function() {
    var Current = document.getElementsByClassName("Active");
    console.log(Current.value)
    Current[0].className = Current[0].className.replace(" Active", "");
    this.className += " Active";
    });
  }








