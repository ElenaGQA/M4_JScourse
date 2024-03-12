// The code introduces 2 employees. Function is to compare employees list of companies. The result will show who had 
// worked for most number of companies by printing their full name and a list of their companies using JS loop. If both
// worked for the same number of companies, the program will provide their names only. 

const employee1 = {
    name: "John",
    lastName: "Doe",
    age: 39,
    listCompanies: ['Ford', 'Mazda', 'BMW', 'RAM', 'Lexus', 'Toyota', 'Nissan']
};

const employee2 = {
    name: "Jane",
    lastName: "Smith",
    age: 35,
    listCompanies: ['Costco', 'Lablaws', 'Longos', 'Fortinos', 'NoFrills', 'Food Basics']
};

function compareEmployees() {
    if (employee1.listCompanies.length > employee2.listCompanies.length) {
        console.log(employee1.name + " " + employee1.lastName);
        for (let i = 0; i < employee1.listCompanies.length; i++) { console.log(employee1.listCompanies[i]); }

    }


    else if (employee1.listCompanies.length < employee2.listCompanies.length) {
        console.log(employee2.name + " " + employee2.lastName);
        for (let i = 0; i < employee2.listCompanies.length; i++) { console.log(employee2.listCompanies[i]); }
    }


    else {
        console.log(employee1.name + " " + employee1.lastName + ", " + employee2.name + " " + employee2.lastName);
    }

}

compareEmployees();
