> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je, zoals altijd, in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Beyco Improve find flow

## Beschrijving
<!-- Voeg een link toe naar Github Pages 🌐--> 
De aanleiding was dat het filtersysteem van Beyco beter kan worden gemaakt. Ook wel een werkende filtersysteem. Dus hier de vernieuwde filtersysteem voor de Beyco pagina.
<img width="854" alt="Schermafbeelding 2022-02-02 om 21 46 44" src="https://user-images.githubusercontent.com/90447045/152234827-82e36ccd-e037-4321-ad56-9514e2f998be.png">
Het huidige filtersysteem van Beyco heeft verbetering nodig. Het filtersysteem heeft bijvoorbeeld opties die onnodig zijn en ze zeorgen maar voor verwarring. Dus na het onderzoeken van de opties, was het mogelijk een duidelijker fijner filtersysteem te ontwerpen. 

## Inhoudsopgave

- [Titel](#titel)
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Kenmerken
* 🟣 CSS
* 🔵 HTML
* 🟢 Javascript

Ik heb fieldset gebruikt om een groepering te maken van elementen. 

[stukje code Javascript]
* var button_showAll = document.querySelector("#filterbutton0");
 var fieldset_showAll = document.querySelector("#filter_aantal");
 console.log("HELLO!") 
 
* button_showAll.addEventListener("click", function(){

*  button_showAll.addEventListener("click",function(){
      console.log("ja!")

      fieldset_showAll.classList.toggle("hide")

 [Ik heb gespeeld met de stukjes code hierboven. Dit was mijn eerste keer Javascript en ik doe het graag nog een keer. Geleerd: Dat je goed moet opletten, want een foute lettertype... dan gaat het al fout]
 
## Gebruik
Gebruik de nieuwe filtersysteem door op een filter optie te drukken. Met behulp van Progressive diclosure komt het resultaat tevoorschijn. Ook heeft het een nieuwe feature "De mee scrollende filter systeem". Dit keer hoef je niet helemaal naar boven te scrollen om uit te vinden dat er helemaal geen resultaten zijn. 
 
 
## Bronnen
https://beyco.nl/offers/public
 

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
