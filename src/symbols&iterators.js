class Team {
   constructor(characters = []) {
      this.characters = characters;
   }

   [Symbol.iterator]() {
      let { characters } = this;

      for (let i = 0; i < characters.length; i += 1) {
         return {
            next() {
               if (i >= characters.length) {
                  return {
                     value: undefined,
                     done: true,
                  };
               }

               return {
                  value: characters[i++],
                  done: false,
               };
            },
         };
      }
   }
}

export { Team };
