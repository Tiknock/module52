"use strict";
const Organe = require("./organe");
const Vetement = require("./vetement");
const Coeur = require("./coeur");

/**
 * @module Humain
 */
class Humain {
  /**
   * @private
   * @type {Organe[]} #organes
   */
  #organes;

  /**
   * @private
   * @type {Organe[]} #greffes
   */
  #greffes;

  /**
   * @private
   * @type {Vetement[]} #vetements
   */
  #vetements;

  /**
   * @private
   * @type {string} #nom
   */
  #nom;

  /**
   * @constructor
   * @param {string} nom
   */
  constructor(nom = "Humain") {
    this.#organes = [];
    this.#greffes = [];
    this.#vetements = [];
    this.#nom = nom;
  }

  /**
   * @returns {string}
   */
  getNom() {
    return this.#nom;
  }

  /**
   * @param {Organe} organe
   */
  ajouterOrgane(organe) {
    this.#organes.push(organe);
    organe.setHumain(this);
  }

  /**
   * @returns {Organe[]}
   */
  getOrganes() {
    return [...this.#organes];
  }

  /**
   * @returns {Coeur|null}
   */
  getCoeur() {
    return this.#organes.find(organe => organe instanceof Coeur) || null;
  }

  /**
   * @param {Organe} organe
   * @returns {boolean}
   */
  supprimerOrgane(organe) {
    const index = this.#organes.indexOf(organe);
    if (index !== -1) {
      this.#organes.splice(index, 1);
      organe.setHumain(null);
      return true;
    }
    return false;
  }

  /**
   * @param {Organe} organe
   */
  ajouterGreffe(organe) {
    this.#greffes.push(organe);
  }

  /**
   * @returns {Organe[]}
   */
  getGreffes() {
    return [...this.#greffes];
  }

  /**
   * @param {Vetement} vetement
   */
  ajouterVetement(vetement) {
    this.#vetements.push(vetement);
  }

  /**
   * @returns {Vetement[]}
   */
  getVetements() {
    return [...this.#vetements];
  }
}

module.exports = Humain;
