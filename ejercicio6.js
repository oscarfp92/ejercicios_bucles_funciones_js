// Agrupa las películas de Star War por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas. Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

// Añade tu código de bucle aquí
let starWars70 = [];
let starWars80 = [];
let starWars90 = [];
let starWars00 = [];
let starWars10 = [];

for (i = 0; i < starWarsMovies.length; i++) {
  if (starWarsMovies[i].releaseYear > 1970 && starWarsMovies[i].releaseYear < 1980) {
    starWars70.push(starWarsMovies[i].title);
  } else if (starWarsMovies[i].releaseYear > 1980 && starWarsMovies[i].releaseYear < 1990) {
    starWars80.push(starWarsMovies[i].title);
  } else if (starWarsMovies[i].releaseYear > 1990 && starWarsMovies[i].releaseYear < 2000) {
    starWars90.push(starWarsMovies[i].title);
  } else if (starWarsMovies[i].releaseYear > 2000 && starWarsMovies[i].releaseYear < 2010) {
    starWars00.push (starWarsMovies[i].title);
  } else {
    starWars10.push (starWarsMovies[i].title);
  } 
}

const starWarsCollection = {
decada1970: (starWars70),
decada1980: (starWars80),
decada1990: (starWars90),
decada2000: (starWars00),
decada2010: (starWars10),
}

console.log (starWarsCollection);