let table = document.querySelector("#users-table tbody")

const users = [
  {
    name: "Erik",
    age: 29,
    email: "erik@academlo.com",
    social: [
      { name: "facebook", url: "facebook/erik" },
      { name: "twitter", url: "twitter/erik" }
    ],
    gender: "Male"
  },
  {
    name: "Georg",
    age: 33,
    email: "georg@academlo.com",
    social: [
      { name: "facebook", url: "facebook/georg" },
      { name: "twitter", url: "twitter/georg" }
    ],
    gender: "Male"
  },
  {
    name: "Andrea",
    age: 42,
    email: "andrea@hotmail.com",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  },
  {
    name: "Oscar",
    age: 31,
    email: "oscar@academlo.com",
    social: [
      { name: "facebook", url: "facebook/oscar" },
      { name: "twitter", url: "twiter/oscar" }
    ],
    gender: "Male"
  },
  {
    name: "Daniela",
    age: 22,
    email: "andrea@uaq.mx",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  }
];

function createTable() {
  let emailAcademlo = users.filter(user => {
    return user.email.endsWith("@academlo.com")
  })
  
 
  return emailAcademlo.forEach(element => {
    table.innerHTML += `<tr>
                         <td>${element.name}</td>
                         <td>${element.email}</td>
                         <td>${element.age}</td>
                         <td>${element.gender}</td>
                         <td>${element.social[0].url}, ${element.social[1].url}</td>
                    </tr>`
  });
}


console.log(createTable());
