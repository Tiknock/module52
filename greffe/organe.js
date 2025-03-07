"use strict";

/**
 * @module Organe
 */
class Organe {
  /**
   * @private
   * @type {Object|null} #humain
   */
  #humain = null;

  /**
   * @private
   * @type {string} #nom
   */
  #nom = "";

  /**
   * @constructor
   * @param {string} nom
   */
  constructor(nom = "") {
    this.#nom = nom;
    if (this.constructor === Organe) {
      Object.freeze(this);
    }
  }

  /**
   * @param {Object} humain
   */
  setHumain(humain) {
    this.#humain = humain;
  }

  /**
   * @returns {Object|null} 
   */
  getHumain() {
    return this.#humain;
  }

  /**
   * @returns {string} 
   */
  getNom() {
    return this.#nom;
  }

  /**
   * @param {string} nom
   */
  setNom(nom) {
    this.#nom = nom;
  }
}

module.exports = Organe;
