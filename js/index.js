const likes = document.querySelectorAll(".likes");
const names = document.querySelectorAll(".nameOfPicture");
const bookmarks = document.querySelectorAll(".flag");

const nameList = [
  "Jameson",
  "Gilliland",
  "G. Jarrett Montalvo",
  "T. Marianna Wofford",
  "Witherspoon",
  "D. Megan Beard",
  "S. Coronado",
  "A. Ada Rojas",
  "Grayson",
  "T. Burroughs",
  "L. Rincon",
  "B. Nagel",
  "K. Alyse Outlaw",
  "T. McCloskey",
  "M. Bryce Horan",
  "C. Carbone",
  "M. Dyson",
  "F. Remington Carlson",
  "J. Altamirano",
  "K. Octavio Morrow",
  "O. Lamont Pullen",
  "S. Kylie George",
  "M. Bynum",
  "L. Clay",
  "R. Dempsey",
  "O. Castro",
  "R. Eduardo Womack",
  "I. Dianna Neil",
  "A. Montserrat Deaton",
  "D. Atwell",
  "C. Dexter",
  "G. Woods",
  "A. Kenneth Stevens",
  "Gresham",
  "Muir",
  "Bedford",
  "Mares",
  "McQueen",
  "K. Neville",
  "S. Salena Thatcher",
  "Schuster",
  "M. Bowden",
  "Peyton",
  "Loera",
  "C. Marsh",
  "Sargent",
  "M. Emalee Thiel",
  "J. Durbin",
  "J. Jamar Dailey",
  "R. Gordon",
  "K. Lukas Karr",
  "Q. Niko Butler",
  "E. Nickolas Hoff",
  "K. Shields",
  "K. Raekwon Holliday",
  "Akin",
  "Villa",
  "Flanagan",
  "Scott",
  "Cosgrove",
  "B. Jacques Valles",
  "P. Anthony",
  "T. Unger",
  "F. Jarrod Fournier",
  "G. Barrera",
  "M. Kearns",
  "H. Jerry Boykin",
  "Longoria",
  "Lafleur",
  "C. Bethany Warden",
  "J. Vivian Arenas",
  "K. Jamison",
  "Good",
  "T. Edmondson",
  "Corrales",
  "Fisk",
  "Zhao",
  "Hester",
  "Viera",
  "J. Annie Breeden",
  "C. Jamaal Mead",
  "P. Sample",
  "D. Elana Stine",
  "L. Uriel Holley",
  "J. Tonya Rincon",
  "Blum",
  "S. Leslie Segura",
  "E. Christie McClanahan",
  "Roper",
  "J. Dionte James",
  "Whiteside",
  "Gilbertson",
  "M. Aiello",
  "C. Marjorie Cummins",
  "C. Zheng",
  "Daigle",
  "Colbert",
  "L. Eden Holmes",
  "M. Marco Berrios",
  "Kahn",
  "Meadows",
  "Lauer",
  "T. Isom",
  "Ho",
  "Huey",
  "Vest",
  "S. Jaylen Kirkpatrick",
  "R. Grayson Mobley",
  "J. Arianna Winn",
  "Robles",
  "L. Kimberley Adkins",
  "Bourque",
  "E. Cruz Allison",
  "A. Davion Warren",
  "Cole",
  "H. Donald Ceja",
  "Bruce",
  "D. Dix",
  "Janssen",
  "Roush",
  "R. Jaidyn Hulsey",
  "N. Philip Cleary",
  "C. Lisa Hays",
  "A. Maira Lim",
  "E. Bo Kent",
  "Christman",
  "Tanner",
  "K. Shumaker",
  "L. Noble",
  "R. Liberty Sturgill",
  "T. Bowen Walton",
  "Holt",
  "Nettles",
  "L. Janet Joyner",
  "C. Kitchens",
  "C. Stacey Amos",
  "C. Mayfield",
  "Gooden",
  "A. Doty",
  "C. Kelly Boyer",
  "Keith",
  "Faulkner",
  "B. Ostrander",
  "Diaz",
  "J. Scales",
  "J. Coles",
  "Wicks",
  "M. Furman",
  "T. Brennon Plunkett",
  "Hamblin",
];

names.forEach((name) => {
  let nameId = nameList[getRandomArbitrary(1, 150)];
  name.innerText = ` ${nameId} `;
});

likes.forEach((itemLike) => {
  let like = getRandomArbitrary(0, 100000);
  let shares = getRandomArbitrary(0, 10000);

  itemLike.innerText = `${like} likes - ${shares} shares`;
});

bookmarks.forEach((book) => {
  book.addEventListener("click", (e) => {
    if (book.classList.contains("tap") === !true) {
      book.classList.add("tap");
      book.classList.add("fill-white");
      console.log("tap added");
    } else {
      book.classList.remove("tap");
      book.classList.remove("fill-white");
      console.log("tap removed");
    }
  });
});

// for (let i = 0; i < bookmarks.length; i++) {
//   if (element[i].classList.contains("tap")) {
//     let tap = element[i];
//     tap.addEventListener("click", (e) => {
//       tap.classList.toggle("fill-white");
//     });
//   }
// }

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

document.querySelector("#flag > path:nth-child(2)");
