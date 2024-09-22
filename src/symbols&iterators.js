class Team {
   constructor(characters = []) {
      this.characters = characters;
   }

   [Symbol.iterator]() {
      const { characters } = this;
      let idx = -1;

      return {
         next() {
            idx += 1;
            return {
               value: characters[idx],
               done: idx >= characters.length,
            };
         },
      };
   }
}

export { Team };
