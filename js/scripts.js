window.onload = function () {
  const form = document.querySelector("form#radio-form3");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //storing form inputs
    const name = document.querySelector("input#name").value;
    const dob = document.querySelector("input#born").value;
    const color = document.querySelector("input#color").value;
    const radioSelection1 = document.querySelector("input[name='level']:checked").value;
    const radioSelection2 = document.querySelector("input[name='interest']:checked").value;
    const radioSelection3 = document.querySelector("input[name='learner']:checked").value;

    console.log(radioSelection1)
    // running a check for level
    let result = "";
    if (radioSelection1 === "beginner") {
      result = name + ", how exciting, you are just starting your journey in the world of Software Development!";
    } else if (radioSelection1 === "intermidiate") {
      result = name + ", look at you going!";
    } else if (radioSelection1 === "advanced") {
      result = name + ", gread job reaching all the way to this point!";
    } 

    // running a check for learning type
    if (radioSelection3 === "slow") {
      result = result + " No rush. Studying new concepts can be hard. Take a good care of yourself.";
    } else if (radioSelection3 === "moderate") {
      result = result + " It looks like you are ready for a new challenge.";
    } else if (radioSelection3 === "quick") {
      result = result + " We know you are a great learner and it's going to be easy for you.";
    } 

    // running a check for preferences
    if (radioSelection2 === "web") {
      result = result + " Your best choice of programming languages is JavaScript.";
    } else if (radioSelection2 === "iOS") {
      result = result + " Your best choice of programming languages is Swift.";
    } else if (radioSelection2 === "android") {
      result = result + " Your best choice of programming languages is Java.";
    } else if (radioSelection2 === "data") {
      result = result + " Your best choice of programming languages is Python.";
    } else if (radioSelection2 === "cloud") {
      result = result + " Your best choice of programming languages is C++.";
    }

    //running a check for age
    if (dob > "1993 - 01 - 01") {
      result = result + " You have all the time in the world!";
    } else if (dob < "1992 - 12 - 31") {
      result = result + " Hurry up! New projects are awaiting!";
    }

    document.getElementById("output").innerText = result;
  });

}