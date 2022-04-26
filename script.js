function presidentSubmit() {
  console.log("im here");
  let element = document.getElementsByName("president");
  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) {
      const value = element[i].value;
      if (value === "Joe Biden") {
        document.getElementById("resultat").innerHTML =
          "Bonne réponse : " + element[i].value;
      } else {
        document.getElementById("resultat").innerHTML =
          "Mauvaise réponse : " + element[i].value;
      }
    }
  }
}
