export default class Building {
    constructor(sqft) {
      if (new.target === Building) {
        throw new Error('Building is an abstract class and cannot be instantiated directly');
      }
      if (typeof sqft !== 'number') throw new TypeError('Square feet must be a number');
      this._sqft = sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
  
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }