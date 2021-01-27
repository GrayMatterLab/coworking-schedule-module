
function ToggleAction(){
    window.onload=function(){
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
            console.log(selected.innerHTML);
            const TimeIn = selected.innerHTML;
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
            console.log(selectedq.innerHTML);
            const TimeOut = selectedq.innerHTML;
            optionsContainerq.classList.remove("active");
          });
        });    
    }
}

export default ToggleAction; 