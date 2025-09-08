// Create the person object with initial properties
let person = {
    name: "Your Name",   // default name
    age: 0,              // default age
    city: "Your City",   // default city
    country: "Your Country", // extra property
    hobby: "Your Hobby",     // extra property

    // Method to introduce the person
    introduce: function () {
        return `Hi, my name is ${this.name}. I am ${this.age} years old from ${this.city}, ${this.country}. My hobby is ${this.hobby}.`;
    },

    // Method to update person properties
    updateData: function (newName, newAge, newCity, newCountry, newHobby) {
        this.name = newName;
        this.age = newAge;
        this.city = newCity;
        this.country = newCountry;
        this.hobby = newHobby;
    },

    // Method to display person details in structured format
    display: function () {
        return `
        Name: ${this.name}
        Age: ${this.age}
        City: ${this.city}
        Country: ${this.country}
        Hobby: ${this.hobby}
        `;
    }
};

// Function to handle form input and update person object
function myFunction() {
    // Collect values from form input fields
    let newName = document.getElementById("name").value;
    let newAge = document.getElementById("age").value;
    let newCity = document.getElementById("yourcity").value;
    let newCountry = document.getElementById("yourcountry").value;
    let newHobby = document.getElementById("yourhobby").value;

    // Update person object with new values
    person.updateData(newName, newAge, newCity, newCountry, newHobby);

   // Also show details inside the display box on the page
    document.getElementById("displaydata").innerText = person.display();
}

// Log the person object to console (testing)
console.log(person);
