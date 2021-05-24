// let firstName = prompt("Bitte Name eingenen: ");
// let birthYear = parseInt(prompt("Bitte Geburtsjahr eingeben: "));
// let year = new Date().getFullYear();
// let entry = year - birthYear

/*
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
*/
zugang();
function zugang()
{
  ausgabe(alterBerechnung(datum(geburtsJahr(Name()))));  
}

function alterBerechnung() 
{
    if (datum() - geburtsJahr() >= 18)
    {
        return (Name() + " ist alt genug somit Zutritt erteilt");
    }
    else 
    {
        return ("Leider zu Jung Zutritt Verweigert");
}
}
    /*
    switch (true) 
    {
        case ((( datum - geburtsJahr)>18) && ((datum - geburtsJahr)<150)):
            return (firstName + " ist alt genug somit Zutritt erteilt");
            
        case ((datum - geburtsJahr)<17):
            return ("Leider zu Jung Zutritt Verweigert");
            
        default:
            return ("Fehlerhafte Eingabe");
            
    }   
}
*/

//ausgabe(datum()); //check
function datum() 
{
    let year = new Date().getFullYear();
    return year;     
}
//ausgabe(geburtsJahr()); // check
function geburtsJahr()
{
    let birthYear = parseInt(prompt("Bitte Geburtsjahr eingeben: "));
    return birthYear;
}
//ausgabe(Name()); // check
function Name() 
{
    let firstName = prompt("Bitte Name eingenen: ");
    return firstName;
}   

//ausgabe("moin"); // check
function ausgabe(outPut) 
{
    console.log(outPut);    
}
