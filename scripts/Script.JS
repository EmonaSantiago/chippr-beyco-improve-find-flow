              var button_showAantal = document.querySelector("#filterbutton0");
              var fieldset_aantal = document.querySelector("#filter_aantal");
              console.log("HELLO!")
  
              var button_showCountries = document.querySelector("#filterbutton1");
              var fieldset_Countries = document.querySelector("#filter_countries");
  
              var button_showCertifications = document.querySelector("#filterbutton2");
              var fieldset_Certifications = document.querySelector("#filter_certifications");
  
              var button_showSpecies = document.querySelector("#filterbutton3");
              var fieldset_Species = document.querySelector("#filter_species");
  
              var button_showProcess = document.querySelector("#filterbutton4");
              var fieldset_Process = document.querySelector("#filter_process");
  
              var button_showGrades = document.querySelector("#filterbutton5");
              var fieldset_Grades = document.querySelector("#filter_grades");
  
              var button_showCuppingscore = document.querySelector("#filterbutton6");
              var fieldset_Cuppingscore = document.querySelector("#filter_cuppingscore");
  
              var button_showQuantity = document.querySelector("#filterbutton7");
              var fieldset_Quantity = document.querySelector("#filter_quantity");
  
              var button_showPortOfExport = document.querySelector("#filterbutton8");
              var fieldset_PortOfExport = document.querySelector("#filter_portofexport");
  
              button_showAantal.addEventListener("click", function(){
  
                  if(button_showAantal.textContent == "Show all"){
                  fieldset_Countries.classList.remove("hide")
                  fieldset_Certifications.classList.remove("hide")
                  fieldset_Species.classList.remove("hide")
                  fieldset_Process.classList.remove("hide")
                  fieldset_Grades.classList.remove("hide")
                  fieldset_Cuppingscore.classList.remove("hide")
                  fieldset_Quantity.classList.remove("hide")
                  fieldset_PortOfExport.classList.remove("hide")
                  button_showAll.textContent="Hide all"
                  }else if(button_showAll.textContent == "Hide all"){
                  fieldset_Countries.classList.add("hide")
                  fieldset_Certifications.classList.add("hide")
                  fieldset_Species.classList.add("hide")
                  fieldset_Process.classList.add("hide")
                  fieldset_Grades.classList.add("hide")
                  fieldset_Cuppingscore.classList.add("hide")
                  fieldset_Quantity.classList.add("hide")
                  fieldset_PortOfExport.classList.add("hide")
                  button_showAll.textContent="Show all"
                  }
                  })  
  
      button_showAantal.addEventListener("click",function(){
        console.log("ja!")

      fieldset_Aantal.classList.toggle("hide")

      })            
  
      button_showCountries.addEventListener("click",function(){
      console.log("ja!")

      fieldset_Countries.classList.toggle("hide")

      })
  
      button_showCertifications.addEventListener("click",function(){
      console.log("ja!")
      
      fieldset_Certifications.classList.toggle("hide")

      })
  
      button_showSpecies.addEventListener("click",function(){
      console.log("ja!")
      fieldset_Species.classList.toggle("hide")
      })
  
      button_showProcess.addEventListener("click",function(){
      console.log("ja!")
      fieldset_Process.classList.toggle("hide")
      })
  
      button_showGrades.addEventListener("click",function(){
      console.log("ja!")
      fieldset_Grades.classList.toggle("hide")
      })
  
      button_showCuppingscore.addEventListener("click",function(){
      console.log("ja!")
      fieldset_Cuppingscore.classList.toggle("hide")
      })
  
      button_showQuantity.addEventListener("click",function(){
      console.log("ja!")
      fieldset_Quantity.classList.toggle("hide")
      })
  
      button_showPortOfExport.addEventListener("click",function(){
      console.log("ja!")
      fieldset_PortOfExport.classList.toggle("hide")
      })
              