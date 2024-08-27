var user = {
    name: "Marina", 
    zodiacSign: "Pisces", 
    age: 27,
    workStyle: "Remote", 
    isQAEngineer: true,
};


user.getInfo = function() {
    for (let [key, value] of Object.entries(this)) {
        if (typeof value !== 'function') {
            console.log(`${key}: ${value}`);
        }
    }
    console.log("----------")
};

user.getInfo();

user.newProperty = "new";
// console.log(Object.entries(user))
user.getInfo();
