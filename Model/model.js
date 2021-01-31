let tables = [
  `create table if not exists User( 
      id int auto_increment,
      ime varchar(35) not null,
      prezime varchar(50) not null,
      telefon varchar(10) not null,
      email varchar(255) not null,
      slika varchar(255),
      lozinka varchar(250) not null,
      potvrda varchar(5),
      primary key(id))`,

  `CREATE TABLE IF NOT EXISTS Cijene(
      id int auto_increment, 
      datum_unosa date not null,
      naziv varchar(100) not null, 
      cijene_djeca int not null,
      cijene_odrasli int not null,
      cijene_studenti int not null,
      primary key(id))`,

  `CREATE TABLE IF NOT EXISTS ZanrFilma(
      id int auto_increment,
      zanr varchar(35) not null,
      primary key(id))`,

  `CREATE TABLE IF NOT EXISTS Film(
      id int auto_increment,
      naziv varchar(50) not null,
      strani_naziv varchar(50) not null,
      redatelji varchar(10) not null,
      glumci varchar(500) not null,
      drzava varchar(40) not null,
      audio varchar(40) not null,
      titlovi varchar(40) not null,
      trajanje varchar(20) not null,
      opis varchar(500) not null,
      slika varchar(500) not null,
      slika_pozadina varchar(500),
      zanr varchar(50) not null,
      ocjena double not null,
      trailer varchar(100),
      godina_proizvodnje int NOT NULL,
      primary key(id))`,

  `CREATE TABLE IF NOT EXISTS Rezervacija_karte(
      id int auto_increment, 
      datum date NOT NULL, 
      vrijeme double NOT NULL, 
      dvorana varchar(20) NOT NULL,
      red int NOT NULL,
      sjedalo int NOT NULL,
      primary key(id))`,

  `CREATE TABLE IF NOT EXISTS Raspored_filmova(
      id int auto_increment,
      id_filma int NOT NULL, 
      datum_unosa date NOT NULL,
      datum_prikazivanja varchar(50) NOT NULL,
      vrijeme_prikazivanja varchar(20) NOT NULL, 
      max_ulaznica int NOT NULL,
      trenutno_ulaznica int NOT NULL, 
      dvorana varchar(30) NOT NULL,
      primary key(id),
      foreign key(id_filma) references Film(id))`,

  `CREATE TABLE IF NOT EXISTS Karta(
      id int auto_increment,
      ime varchar(50) NOT NULL,
      prezime varchar(50) NOT NULL,
      cijena int NOT NULL, 
      red int NOT NULL,
      sjedalo int NOT NULL,
      oznaka int NOT NULL,
      ukupno double NOT NULL,
      id_raspored int NOT NULL,
      id_korisnik int NOT NULL,
      primary key(id),
      foreign key(id_raspored) references Raspored_filmova(id),
      foreign key(id_korisnik) references User(id))`,

  `CREATE TABLE IF NOT EXISTS MojIzbor(
      id int auto_increment, 
      datum_dodavanja varchar(30) not null,
      id_korisnik int, 
      id_film int, 
      primary key(id),
      foreign key (id_korisnik) references User(id),
      foreign key (id_film) references Film(id))`,

  `CREATE TABLE IF NOT EXISTS Najcesca_pitanja(
      id int auto_increment, 
      naziv varchar(100) NOT NULL,
      opis varchar(1000) NOT NULL,
      primary key(id))`,

  `CREATE TABLE IF NOT EXISTS Upit(
      id int auto_increment, 
      pitanje varchar(1000) NOT NULL,
      prijedlog varchar(500),
      id_korisnik int NOT NULL,
      foreign key (id_korisnik) references User(id),
      primary key(id))`
  
]

var db = require("../jsFiles/DBconnection") 

module.exports = {
  insertTables: function(){
      db.insertTables(tables)
  }
}