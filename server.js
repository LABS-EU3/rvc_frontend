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
    recipe_image: "https://images.unsplash.com/photo-1573413754133-2a7214b289b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    no_of_likes: 72,
    fork_icon: null,
    author: "Kiyani",
    recipe_title: "stew",
    time: "15min",
    price: "$45",
    difficulty: "medium"
  },
  {
    id: 2,
    recipe_image: "https://images.unsplash.com/photo-1571809839227-b2ac3d261257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    no_of_likes: 32,
    fork_icon: null,
    author: "Kiyani James",
    recipe_title: "Potata stew",
    time: "3Omin",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 3,
    recipe_image: "https://images.unsplash.com/photo-1574653853117-0274131c2175?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "30min",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 4,
    recipe_image: "https://images.unsplash.com/photo-1549365564-f34bcc1fbcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=634&q=80",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Potata stew",
    time: "120min",
    price: "$5",
    difficulty: "difficult"
  },
  {
    id: 5,
    recipe_image:"https://images.unsplash.com/photo-1568461002123-01f1229aa2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=693&q=80",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Chips and fish",
    time: "25min",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 6,
    recipe_image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=332&q=80",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy James",
    recipe_title: "Lasagna",
    time: "30min",
    price: "$5",
    difficulty: "simple"
  },
  {
    id: 7,
    recipe_image: "https://images.unsplash.com/photo-1549365564-f34bcc1fbcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=634&q=80",
    no_of_likes: 32,
    fork_icon: null,
    author: "Mercy Bouloume",
    recipe_title: "Potata stew",
    time: "3Omin",
    price: "$5",
    difficulty: "simple"
  },

  {
    id: 8,
    recipe_image: "https://images.unsplash.com/photo-1535980156496-87fc2cfcb832?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    no_of_likes: 302,
    fork_icon: null,
    author: "Babaloki James",
    recipe_title: "Potata pasta",
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
