var userNumber = 25;
var counter = 0;
var maxTries = 5;
var randomNumber = Math.floor(Math.random() * userNumber + 1);
while (attempts != randomNumber) {
    var attempts = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..." + userNumber);
    counter += 1;
    if (counter > maxTries) {
        document.write("Je hebt geen pogingen meer over. Druk op F5 om nog een keer te spelen");
        break
    }
    if (attempts == randomNumber) {
        document.write("Gefeliciteerd! Je hebt het juiste getal");
        document.write("  " + randomNumber);
        document.write(" Je hebt " + counter + " pogingen gedaan");
        document.write("Dag" + person + "Tot de volgende keer!");
    }
}