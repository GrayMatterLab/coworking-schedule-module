var timeIn = [];
var timeOut = [];

function ToggleAction(){
        timeIn = 'inside the funcwunc'
    // window.onload=function(){
        const selected = document.querySelector(".selected");
        const optionsContainer = document.querySelector(".options-container");
      
        const optionsList = document.querySelectorAll(".option");
      
        selected.addEventListener("click", () => {
          optionsContainer.classList.toggle("active");
          console.log('Time In Box Selected')
        });
      
        optionsList.forEach(o => {
          o.addEventListener("click", () => {
            console.log('An option in Checkin Time was selected')
            selected.innerHTML = o.querySelector("label").innerHTML;
            timeIn = selected.innerHTML;
            optionsContainer.classList.remove("active");
          });
        });
      
        const selectedq = document.querySelector(".selectedq");
        const optionsContainerq = document.querySelector(".options-containerq");
      
        const optionsListq = document.querySelectorAll(".optionq");
      
        selectedq.addEventListener("click", () => {
          optionsContainerq.classList.toggle("active");
          console.log('Time Out Box Selected')
        });
      
        optionsListq.forEach(e => {
          e.addEventListener("click", () => {
            console.log('An option in Checkout Time was selected');
            selectedq.innerHTML = e.querySelector("label").innerHTML;
            timeOut = selectedq.innerHTML;
            optionsContainerq.classList.remove("active");
          });
        });    
    // }
}



export {ToggleAction, timeIn, timeOut}; 