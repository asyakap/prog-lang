window.onload = function () {
    const form = document.querySelector("form#radio-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const  = document.querySelector("input#name").value;
        const radioSelection = document.querySelector("input[name='skills']:checked").value;

        console.log(name, dob, favoriteColor, radioSelection);

        let result = "";
        if () {
          result = ;
        }

            
            document.getElementById("output").innerText = result;
          });

}