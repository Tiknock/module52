"use strict";

/**
 * @module Vetement
 */
class Vetement {
  /**
   * @constructor
   */
  constructor() {
    if (this.constructor === Vetement) {
      Object.freeze(this);
    }
  }
}

module.exports = Vetement;
