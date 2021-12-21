var button_showAantal = document.querySelector("#filterbutton1");
var fieldset_aantal = document.querySelector("#filter_aantal");

var button_showBewerking = document.querySelector("#filterbutton2");
var fieldset_bewerking = document.querySelector("#filter_bewerking");
// console.log(button_showBewerking)
// console.log(fieldset_bewerking)

var button_showKwaliteit = document.querySelector("#filterbutton3");
var fieldset_kwaliteit = document.querySelector("#filter_kwaliteit");
// console.log(button_showKwaliteit)
// console.log(fieldset_kwaliteit)

var button_showAll = document.querySelector("#filterbutton0")
console.log(button_showAll)

//  console.log (button_showAantal)
//  console.log(fieldset_aantal)
//  console.log(button_showBewerking)

button_showAll.addEventListener("click", function(){
// console.log("JA!")

if(button_showAll.textContent == "Show all"){
   fieldset_aantal.classList.remove("hide")
   fieldset_bewerking.classList.remove("hide")
   fieldset_kwaliteit.classList.remove("hide")
   button_showAll.textContent="Hide all"
}else if(button_showAll.textContent == "Hide all"){
   fieldset_aantal.classList.add("hide")
   fieldset_bewerking.classList.add("hide")
   fieldset_kwaliteit.classList.add("hide")
   button_showAll.textContent="Show all"
}
})  

button_showAantal.addEventListener("click",function(){
console.log("ja!")
fieldset_aantal.classList.toggle("hide")
})

button_showBewerking.addEventListener("click",function(){
console.log("ja!")
fieldset_bewerking.classList.toggle("hide")
})

button_showKwaliteit.addEventListener("click",function(){
console.log("ja!")
fieldset_kwaliteit.classList.toggle("hide")
})

var offerList = [
    {
      seller: "Cooperativa Laguna de los Cóndores",
      coffeeName: "CAFE FTO-841",
      country: "Peru",
      portOfExport: "PAITA - PIURA - PERÚ",
      species: "Arabica ",
      quantity: "275(69kg/bag)",
      process: "Fully washed ",
      grade: "Grade 1",
      certifications: "Fairtrade, Organic",
      cuppingScore: "84",
    },
  
    {
      seller: "ASOARHUACO",
      coffeeName: "CAFE INDIGENA ARHUACO",
      country: "Colombia",
      portOfExport: "Cartagena",
      species: "Arabica",
      quantity: "275 bags(70kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "82",
    },
  
    {
      seller: "AsisteCampo S.A.S",
      coffeeName: "Magic Bled SG21 Excelso",
      country: "Colombia",
      portOfExport: "Cartagena",
      species: "Arabica",
      quantity: "300 bags(70kg/bag)",
      process: "Fully washed",
      grade: "Other",
      certifications: "N/A",
      cuppingScore: "84",
    },
  
    {
      seller: "Tewodros Moges Ayele",
      coffeeName: "Natural Limu",
      country: "Ethiopia(Oromia)",
      portOfExport: "Djibouti",
      species: "Arabica",
      quantity: "1280 bags(60kg/bag)",
      process: "Fully washed",
      grade: "Grade 2, Grade 3",
      certifications: "N/A",
      cuppingScore: "83",
    },
  
    {
      seller: "Mount Elgon Coffee And Honey Co-Operative Society Limitted",
      coffeeName: "Bugisu Arabica Coffee",
      country: "Uganda",
      portOfExport: "Mombasa",
      species: "Arabica",
      quantity: "38400 kg)",
      process: "Fully washed",
      grade: "A, Aa, Ab",
      certifications: "Organic",
      cuppingScore: "83",
    },
    {
      seller: "AsisteCampo S.A.S",
      coffeeName: "Great Quality Caturra",
      country: "Colombia",
      portOfExport: "Cartagena",
      species: "Arabica",
      quantity: "20 bags(70kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "85",
    },
    {
      seller: "AsisteCampo S.A.S",
      coffeeName: "Sweet Geisha",
      country: "Colombia",
      portOfExport: "Cartagena",
      species: "Arabica",
      quantity: "7 bags(70kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "87",
    },
    {
      seller: "AsisteCampo S.A.S",
      coffeeName: "Java The No. 1 Seller",
      country: "Colombia",
      portOfExport: "Cartagena",
      species: "Arabica",
      quantity: "10 bags(70kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "86",
    },
    {
      seller: "AsisteCampo S.A.S",
      coffeeName: "King Blend Excelso",
      country: "Colombia",
      portOfExport: "Cartagena",
      species: "Arabica",
      quantity: "270 bags(70kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "82",
    },
    {
      seller: " Catur Coffee Company",
      coffeeName: "Catur Collection 21-22l",
      country: "Indonesia",
      portOfExport: "Tanjung Priok",
      species: "Arabica",
      quantity: "142 bags(30kg/bag)",
      process: "Natural",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "87",
    },
    {
      seller: "AsisteCampo S.A.S",
      coffeeName: "Wush Wush Special",
      country: "Colombia",
      portOfExport: "Cartagena",
      species: "Arabica",
      quantity: "6 bags(70kg/bag)",
      process: "Fully washed",
      grade: "Other",
      certifications: "N/A",
      cuppingScore: "88",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Natural Guji Shakiso Gr 1",
      country: "Ethiopia",
      portOfExport: "Djibouti",
      species: "Arabica",
      quantity: "1980 bags(60kg/bag)",
      process: "Natural",
      grade: "Grade 1",
      certifications: "Organic",
      cuppingScore: "87",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Washed Guji Shakiso Gr 1",
      country: "Ethiopia",
      portOfExport: "Djibouti",
      species: "Arabica",
      quantity: "2560 bags(60kg/bag)",
      process: "Fully washed",
      grade: "Grade 1",
      certifications: "Organic",
      cuppingScore: "87",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Washed Guji Shakiso Gr 2",
      country: "Ethiopia",
      portOfExport: "Djibouti",
      species: "Arabica",
      quantity: "3200 bags(60kg/bag)",
      process: "Fully washed",
      grade: "Grade 2",
      certifications: "Organic",
      cuppingScore: "83",
    },
    {
      seller: "Secofet Trading PLC",
      coffeeName: "Yirgacheffe-Edido 2",
      country: "Ethiopia",
      portOfExport: "Djibouti",
      species: "Arabica",
      quantity: "38.4 Mt",
      process: "Fully washed",
      grade: "Grade 1",
      certifications: "N/A",
      cuppingScore: "86",
    },
    {
      seller: "Maunaz",
      coffeeName: "Honey Blend Nizzu",
      country: "Colombia",
      portOfExport: "Aeropuerto el Dorado",
      species: "Arabica",
      quantity: "11 Bags(60 kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "87",
    },
    {
      seller: "Caffeine Nirvana",
      coffeeName: "Arabica Shade-Grown",
      country: "India",
      portOfExport: "Mangalore, Chennai",
      species: "Arabica",
      quantity: "400 Bags(60 kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "84",
    },
    {
      seller: "Kaecoffee Indonesia",
      coffeeName: "Special Offer Robusta Lombok Indonesia",
      country: "Indonesia",
      portOfExport: "Tanjung Perak-Surabaya",
      species: "Robusta",
      quantity: "1 Bags(70 kg/bag)",
      process: "Natural",
      grade: "Grade 1",
      certifications: "Organic",
      cuppingScore: "84",
    },
    {
      seller: "Alfa Jaya Indonesia",
      coffeeName: "Java Peaberry (Male)",
      country: "Indonesia",
      portOfExport: "Tanjung Priok",
      species: "Robusta",
      quantity: "200 Bags(60 kg/bag)",
      process: "Fully Washed",
      grade: "Grade 1",
      certifications: "N/A",
      cuppingScore: "75",
    },
    {
      seller: "Top of the Crop NV",
      coffeeName: "Colombia FT spot ANTWERP",
      country: "Colombia",
      portOfExport: "Antwerp",
      species: "Arabica",
      quantity: "285 Bags(70 kg/bag)",
      process: "Fully Washed",
      grade: "Grade 1",
      certifications: "Organic",
      cuppingScore: "82",
    },
  
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Washed Yirgacheffe Gr 3",
      country: "Ethiopia",
      portOfExport: "Djibouti",
      species: "Arabica",
      quantity: "1600 bags(60kg/bag)",
      process: "Fully washed",
      grade: "Grade 1",
      certifications: "N/A",
      cuppingScore: "84",
    },
    {
      seller: " Indigo Mountain Company Limited",
      coffeeName: "Indigo Mountain coffee",
      country: "Myanmar(Hopong)",
      portOfExport: "Yangon, Myanmar",
      species: "Arabica",
      quantity: "230 bags(60kg/bag)",
      process: "Natural",
      grade: "Grade 1",
      certifications: "N/A",
      cuppingScore: "85",
    },
    {
      seller: " Indigo Mountain Company Limited",
      coffeeName: "Pa O ethnic coffee",
      country: "Myanmar(Hopong)",
      portOfExport: "Yangon, Myanmar",
      species: "Arabica",
      quantity: "230 bags(60kg/bag)",
      process: "Natural",
      grade: "Grade 1",
      certifications: "N/A",
      cuppingScore: "85",
    },
    {
      seller: "Sorgeba Farmers Cooperative Union Society",
      coffeeName: "ETH-NAT ILUBABOR FOREST",
      country: "Ethiopia",
      portOfExport: "Djibouti",
      species: "Arabica",
      quantity: "320 bags(60kg/bag)",
      process: "Natural",
      grade: "Grade 4, Grade 5",
      certifications: "N/A",
      cuppingScore: "60",
    },
    {
      seller: "COOPERATIVA REGIONAL DE CAFES ESPECIALES GLOBAL CAFES",
      coffeeName: "HUILA- CAFE ESPECIAL TAZA 85- GLOBAL CAFES",
      country: "Colombia",
      portOfExport: "Buenaventura",
      species: "Arabica",
      quantity: "275 bags(70kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "85",
    },
    {
      seller: "COOPERATIVA REGIONAL DE CAFES ESPECIALES GLOBAL CAFES",
      coffeeName: "HUILA REGIONAL- GLOBAL CAFES- LOTE RFA/UTZ DE 275 SACOS / 70KLS",
      country: "Colombia",
      portOfExport: "Buenaventura",
      species: "Arabica",
      quantity: "275 bags(70kg/bag)",
      process: "Fully washed",
      grade: "N/A",
      certifications: "Ra",
      cuppingScore: "82",
    },
  
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Guji Anaerobic Hambella Wamena Gr 1",
      country: "Ethiopia",
      portOfExport: "N/A",
      species: "Arabica",
      quantity: "320 bags(60kg/bag)",
      process: "Other",
      grade: "Grade 1",
      certifications: "Ra, Organic",
      cuppingScore: "88",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Guji Honey Hambela Wamena Gr 1",
      country: "Ethiopia",
      portOfExport: "N/A",
      species: "Arabica",
      quantity: "320 bags(60kg/bag)",
      process: "Semi washed",
      grade: "Grade 1",
      certifications: "Ra, Organic",
      cuppingScore: "87",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Guji Natural Gr 3",
      country: "Ethiopia",
      portOfExport: "N/A",
      species: "Arabica",
      quantity: "3200 bags(60kg/bag)",
      process: "Natural",
      grade: "Grade 3",
      certifications: "Organic",
      cuppingScore: "80",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Natural Sidamo Gr 4",
      country: "Ethiopia",
      portOfExport: "N/A",
      species: "Arabica",
      quantity: "6400 bags(60kg/bag)",
      process: "Natural",
      grade: "Grade 4",
      certifications: "Ra, Organic",
      cuppingScore: "75",
    },
  
    {
      seller: "Alfa Jaya Indonesia",
      coffeeName: "JAVA MALE (PEABERRY)",
      country: "Indonesia",
      portOfExport: "Tanjung Perak",
      species: "Robusta",
      quantity: "20 MT",
      process: "Fully Washed",
      grade: "N/A",
      certifications: "N/A",
      cuppingScore: "75",
    },
  
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Natural Guji Hambela Wamena BUKU Gr 1",
      country: "Ethiopia",
      portOfExport: "N/A",
      species: "Arabica",
      quantity: "3200 bags(60kg/bag)",
      process: "Natural",
      grade: "Grade 1",
      certifications: "Ra, Organic",
      cuppingScore: "87",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Washed Sidamo Gr 2",
      country: "Ethiopia",
      portOfExport: "N/A",
      species: "Arabica",
      quantity: "4800 bags(60kg/bag)",
      process: "Fully washed",
      grade: "Grade 2",
      certifications: "Organic",
      cuppingScore: "82",
    },
    {
      seller: "Gujoo Trading PLC",
      coffeeName: "Washed Guji Hambela Wamena BUKU",
      country: "Ethiopia",
      portOfExport: "N/A",
      species: "Arabica",
      quantity: "3200 bags(60kg/bag)",
      process: "Fully washed",
      grade: "Grade 1",
      certifications: "Ra, Organic",
      cuppingScore: "87",
    },
  ];