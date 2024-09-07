var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName: "",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


let regex = /@gmail\.com$|@yahoo\.com$/;
let validEmails = [];

let checkValidEmails = function (array) {

    for (let i = 0; i < array.length; i++) {
        if (regex.test(array[i].email)) {
            validEmails.push(array[i].email); 
        }
    }
    return validEmails;
}

console.log(checkValidEmails(arr));