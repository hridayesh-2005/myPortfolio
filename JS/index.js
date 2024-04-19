function myFunction(){
    document.getElementById('alpha').innerHTML='नमस्ते!<br>मैं हृदयेश हूं<br>मैं वेब डेवलपर हूं';
    document.getElementById('beta').innerHTML='मुझे अपना परिचय देने दो';
    document.getElementById('gamma').innerHTML='एक उभरते पूर्ण-स्टैक डेवलपर के रूप में, मैं पायथन, सी, सी++ और जावा में एक फाउंडेशन लाता हूं। वेब एप्लिकेशन डिज़ाइन और कार्यान्वित करने के लिए उत्सुक, मैं निरंतर सीखने और सहयोग के लिए प्रतिबद्ध हूं। परियोजनाओं में योगदान देने, नई तकनीकों को अपनाने और इस गतिशील क्षेत्र में आगे बढ़ने के लिए उत्साहित हूं।';
    document.getElementById('delta').innerHTML='मुझे खोजें';
    document.getElementById('a').innerHTML='बेझिझक मेरे साथ जुड़ें';
    document.body.style.backgroundImage = "linear-gradient(to bottom, #ff9999 0%, #66b3ff 100%);"
}


function changeBackgroundColor() {
    // Get the element by its ID
    var boxElement = document.body;

    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Change the background color to the random color
    boxElement.style.backgroundColor = randomColor;
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  function mOver(obj) {
    obj.innerHTML = "this is mouse over JS"
  }
  function mOut(obj) {
    obj.innerHTML = "As an emerging full-stack developer, I bring a foundation in Python, C, C++, and Java. Eager to design and implement web applications, I am committed to continuous learning and collaboration. Excited to contribute to projects, embrace new technologies, and grow in this dynamic field."
  }
  
  
function validateForm() {
  // Get references to the form elements
  const fname = document.getElementById("fName");
  const lname = document.getElementById("lName");
  const number = document.getElementById("number");
  const email = document.getElementById("email");
  const query = document.getElementById("Query");

  // Check required fields (using a loop for efficiency)
  let anyEmpty = false;
  for (const element of [fname, lname, number, email, query]) {
    if (element.value.trim() === "") {
      anyEmpty = true;
      break; // Exit the loop if any field is empty
    }
  }
  if (anyEmpty) {
    alert("Please fill out all required fields.");
    return false;
  }

  // Email validation (basic check)
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Mobile number validation (improved check)
  const numberRegex = /^\d{10}$/; // Allows only 10 digits
  if (!numberRegex.test(number.value)) {
    alert("Please enter a valid mobile number (10 digits).");
    return false;
  }

  // If all validations pass, allow form submission
  return true;
}
