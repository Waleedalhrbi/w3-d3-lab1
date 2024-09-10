const user = {
    name: "Waleed",
    email: "WaleedAlhrbi@gmail.com",
    Id: 1234,
    Available: false,
    avlib: function(){
        return this.avlib = ! this.avlib
    },
    address: {
        postelcode: 54343,
        shortAddress: 1212,
        zipCode: 22334,
        city: {
            building: "3367 Al Salamah",
            cityName: "Hafar Al-Batin",  
        },
    },
    skills: ["Creativity", "Time management", "working under pressure"],
}


console.log(user);
console.log(user.name);
user.Id=12;
console.log(user.Id);
delete user.email;
console.log(user.Id);
console.log(user.Available);
console.log(user.address);
console.log(user.address.city.building);
console.log(user.skills[2]);
console.log(user.skills.join(","));




