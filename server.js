const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};
const allRecipes = [
  
  {
    id: 1,
    recipe_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7OsYEfJXjYkaiW3e7sbxZE1PgbOnLdRrD3NPW-jJhesGPG1nC",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "3Omin",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 2,
    recipe_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7OsYEfJXjYkaiW3e7sbxZE1PgbOnLdRrD3NPW-jJhesGPG1nC",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "3Omin",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 3,
    recipe_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7OsYEfJXjYkaiW3e7sbxZE1PgbOnLdRrD3NPW-jJhesGPG1nC",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "3000000000000000Omin",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 4,
    recipe_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7OsYEfJXjYkaiW3e7sbxZE1PgbOnLdRrD3NPW-jJhesGPG1nC",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "10Omin",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 5,
    recipe_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7OsYEfJXjYkaiW3e7sbxZE1PgbOnLdRrD3NPW-jJhesGPG1nC",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "3Omin",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 6,
    recipe_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7OsYEfJXjYkaiW3e7sbxZE1PgbOnLdRrD3NPW-jJhesGPG1nC",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "3Omin",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 7,
    recipe_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7OsYEfJXjYkaiW3e7sbxZE1PgbOnLdRrD3NPW-jJhesGPG1nC",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "3Omin",
    price: "$5",
    difficulty: "simple"
  }
]
// let smurfs = [
//   {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm',
//     id: 0
//   }
// ];

server.get('/recipes', (req, res ) => {
  res.json(allRecipes);
})
// server.get('/smurfs', (req, res) => {
//   res.json(smurfs);
// });

// let smurfId = smurfs.length;

// server.post('/smurfs', (req, res) => {
//   const { name, age, height } = req.body;
//   const newSmurf = { name, age, height, id: smurfId };
//   if (!name || !age || !height) {
//     return sendUserError(
//       'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
//       res
//     );
//   }
  // const findSmurfByName = smurf => {
  //   return smurf.name === name;
  // };
  // if (smurfs.find(findSmurfByName)) {
  //   return sendUserError(
  //     `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
  //     res
  //   );
  // }

//   smurfs.push(newSmurf);
//   smurfId++;
//   res.json(smurfs);
// });

// server.put('/smurfs/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, age, height } = req.body;
//   const findSmurfById = smurf => {
//     return smurf.id == id;
//   };
//   const foundSmurf = smurfs.find(findSmurfById);
//   if (!foundSmurf) {
//     return sendUserError('No Smurf found by that ID', res);
//   } else {
//     if (name) foundSmurf.name = name;
//     if (age) foundSmurf.age = age;
//     if (height) foundSmurf.height = height;
//     res.json(smurfs);
//   }
// });

// server.delete('/smurfs/:id', (req, res) => {
//   const { id } = req.params;
//   const foundSmurf = smurfs.find(smurf => smurf.id == id);

//   if (foundSmurf) {
//     const SmurfRemoved = { ...foundSmurf };
//     smurfs = smurfs.filter(smurf => smurf.id != id);
//     res.status(200).json(smurfs);
//   } else {
//     sendUserError('No smurf by that ID exists in the smurf DB', res);
//   }
// });

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
