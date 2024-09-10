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




/*     LAB 2  */


characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];



const blueEyes = characters.find(function(eyes) {
  return eyes.eye_color === "blue";
});

console.log(blueEyes.name);



const massover50 = characters.find(function(massg) {
    return massg.mass > 50;
  });
  
  console.log(massover50.gender);
    

  const heightLess200 = characters.find(function(character) {
    return character.height < 200;
  });
  
  console.log(heightLess200);
    

  const mallChar = characters.filter(function(character) {
    return character.gender === "male";
  });
  
  console.log(mallChar);


  const nameArr = characters.map(function(character) {
    return character.name;
  });
  
  console.log(nameArr);

  const heightArr = characters.map(function(character) {
    return character.height;
  });
  
  console.log(heightArr);

  const sortMassl = characters.sort(function(a,b) {
    return a.mass - b.mass;
  });
  
  console.log(sortMassl);


  const sortMassh = characters.sort(function(b,a) {
    return a.mass - b.mass;
  });
  
  console.log(sortMassh);



  const evreyMassmor40 = characters.every(function(character) {
    return character.mass > 40;
  });
  
  console.log(evreyMassmor40);
    
  const evreyMassmor200 = characters.every(function(character) {
    return character.mass > 200;
  });
  
  console.log(evreyMassmor200);



  const someyblue = characters.some(function(character) {
    return character.eye_color === "blue";
  });
  
  console.log(someyblue);


  const someTaler210 = characters.some(function(character) {
    return character.height > 210;
  });
  
  console.log(someTaler210);