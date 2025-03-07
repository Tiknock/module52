"use strict";

const Organe = require('./organe');

/**
 * @module Coeur
 * @extends Organe
 */
class Coeur extends Organe {
  /**
   * @constructor
   * @param {string} nom
   */
  constructor(nom = "Coeur") {
    super(nom);
  }
}

module.exports = Coeur;
