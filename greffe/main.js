"use strict";

const Organe = require("./organe");
const Vetement = require("./vetement");
const Humain = require("./humain");
const Chemise = require("./chemise");
const Coeur = require("./coeur");

console.log("===== Création de deux humains =====");
const humain1 = new Humain("Alice");
const humain2 = new Humain("Bob");

const coeur1 = new Coeur("Coeur d'Alice");
const coeur2 = new Coeur("Coeur de Bob");

const poumon1 = new Organe("Poumon gauche");
const poumon2 = new Organe("Poumon droit");

humain1.ajouterOrgane(coeur1);
humain1.ajouterOrgane(poumon1);
humain1.ajouterOrgane(poumon2);

humain2.ajouterOrgane(coeur2);
humain2.ajouterOrgane(new Organe("Poumon gauche"));
humain2.ajouterOrgane(new Organe("Poumon droit"));


const chemiseBlanche = new Chemise();
humain2.ajouterVetement(chemiseBlanche);
console.log(`${humain2.getNom()} porte maintenant une chemise!`);

console.log(`\n===== État initial des humains =====`);
console.log(`${humain1.getNom()} a ${humain1.getOrganes().length} organes`);
console.log(`${humain2.getNom()} a ${humain2.getOrganes().length} organes et porte ${humain2.getVetements().length} vêtement(s)`);

console.log(`\n===== Affichage des cœurs =====`);
console.log(`Cœur de ${humain1.getNom()}: ${humain1.getCoeur()?.getNom()}`);
console.log(`Cœur de ${humain2.getNom()}: ${humain2.getCoeur()?.getNom()}`);

console.log(`\n===== Greffe du cœur de ${humain1.getNom()} vers ${humain2.getNom()} =====`);
const coeurAGreffer = humain1.getCoeur();

if (coeurAGreffer) {
  console.log(`Suppression du cœur de ${humain1.getNom()}...`);
  humain1.supprimerOrgane(coeurAGreffer);
  
  console.log(`Le cœur est maintenant détaché: ${coeurAGreffer.getHumain() === null}`);
  
  console.log(`Suppression de l'ancien cœur de ${humain2.getNom()}...`);
  const ancienCoeur = humain2.getCoeur();
  if (ancienCoeur) {
    humain2.supprimerOrgane(ancienCoeur);
    console.log(`Ancien cœur supprimé: ${ancienCoeur.getNom()}`);
  }
  
  console.log(`Greffe du cœur dans ${humain2.getNom()}...`);
  humain2.ajouterGreffe(coeurAGreffer);
}

console.log(`\n===== État final après la greffe =====`);
console.log(`${humain1.getNom()} a ${humain1.getOrganes().length} organes et ${humain1.getGreffes().length} greffes`);
console.log(`${humain2.getNom()} a ${humain2.getOrganes().length} organes, ${humain2.getGreffes().length} greffe(s) et porte ${humain2.getVetements().length} vêtement(s)`);

console.log(`\n===== Affichage des cœurs après la greffe =====`);
console.log(`Cœur de ${humain1.getNom()}: ${humain1.getCoeur()?.getNom() || "Pas de cœur"}`);

let coeurTrouve = false;
humain2.getOrganes().forEach(organe => {
  if (organe instanceof Coeur) {
    coeurTrouve = true;
    console.log(`Cœur de ${humain2.getNom()} (organe): ${organe.getNom()}`);
  }
});

if (!coeurTrouve) {
  console.log(`${humain2.getNom()} n'a plus de cœur dans ses organes`);
}

console.log(`\n===== Liste des greffes de ${humain2.getNom()} =====`);
humain2.getGreffes().forEach(greffe => {
  console.log(`- ${greffe.getNom()}`);
});



console.log(`\n===== Liste des vêtements de ${humain2.getNom()} =====`);
humain2.getVetements().forEach((vetement, index) => {
  console.log(`- Vêtement ${index + 1}: ${vetement.constructor.name}`);
});
