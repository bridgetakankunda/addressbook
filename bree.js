// create variables with details ie name,contacts    
    var Heidy = {
    firstName: "Heidy",
    lastName: "Namanya",
    phoneNumber: "256 773613835",
    email: "heidynam@example.com"
    };

    var Helga = {
    firstName: "Helga",
    lastName: "charlene",
    phoneNumber: "256 759022512",
    email: "helga.charlene@example.com"
    };

    var bridget = {
        firstName: "Bridget",
        lastName: "Akankunda",
        phoneNumber: "256 759022512",
        email: "bridgetakankunda23@example.com"
        };

    var contacts = [Heidy, helga, bridget];

    function printPerson(person) {
        console.log(person.firstName + " " + person.lastName , "\n" , person.phoneNumber );
    

    function list () {
        var contactsLength = contacts.length;
            for (i = 0; i < contactsLength; i++){
            printPerson(contacts[i])}
    };
    list ();

  