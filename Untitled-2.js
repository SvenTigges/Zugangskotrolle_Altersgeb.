let firstName = prompt("Bitte Name eingenen: ");
let birthYear = parseInt(prompt("Bitte Geburtsjahr eingeben: "));
let year = new Date().getFullYear();
let entry = year - birthYear


switch (true) {
    case (entry>18 && entry<150):
        console.log(firstName + " ist alt genug somit Zutritt erteilt");
        break;
    case (entry<17):
        console.log("Leider zu Jung Zutritt Verweigert");
        break;
 
    default:
        console.log("Fehlerhafte Eingabe");
        break;
}