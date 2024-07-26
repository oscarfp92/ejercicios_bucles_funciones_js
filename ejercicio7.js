// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género. Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Añade tu código de bucle aquí
titelsMetal = [];
titlesRock = [];
titlesPop = [];
titlesCountry = [];
titlesGrunge = [];

genreTracks = {
  Metal: (titelsMetal),
  Rock: (titlesRock),
  Pop: (titlesPop),
  Country: (titlesCountry),
  Grunge: (titlesGrunge),
}

for (i = 0; i < tracks.length; i++) {
if (tracks[i].genre === 'Metal') {
  titelsMetal.push(tracks[i].title); 
} else if (tracks[i].genre === 'Rock') {
  titlesRock.push(tracks[i].title);
} else if (tracks[i].genre === 'Pop') {
  titlesPop.push(tracks[i].title);
} else if (tracks[i].genre === 'Country') {
  titlesCountry.push(tracks[i].title);
} else {
  titlesGrunge.push(tracks[i].title);
}
}

console.log (genreTracks);