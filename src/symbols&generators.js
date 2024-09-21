class Team {
   constructor(characters = []) {
      this.characters = characters;
   }

   *[Symbol.iterator]() {
      for (const character of this.characters) {
         yield character;
      }
   }
}

export { Team };
