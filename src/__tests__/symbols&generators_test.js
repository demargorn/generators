import { Team } from '../symbols&generators';
import { Character } from '../Character';

const legolas = new Character('Legolas', 'Bowman');

let team = new Team([legolas]);

test('test generator in team class', () => {
   for (const character of team) {
      expect(character).toEqual({
         attack: null,
         defence: null,
         health: 100,
         level: 1,
         name: 'Legolas',
         type: 'Bowman',
      });
   }
});
