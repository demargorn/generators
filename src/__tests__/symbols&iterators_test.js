import { Team } from '../symbols&iterators';
import { Character } from '../Character';

const legolas = new Character('Legolas', 'Bowman');
const aragorn = new Character('Aragorn', 'Swordsman');

const team = new Team([legolas, aragorn]);
const data = team[Symbol.iterator]();

test('test iterator in team class', () => {
   expect(data.next()).toEqual({
      done: false,
      value: {
         attack: null,
         defence: null,
         health: 100,
         level: 1,
         name: 'Legolas',
         type: 'Bowman',
      },
   });
   expect(data.next()).toEqual({
      done: false,
      value: {
         attack: null,
         defence: null,
         health: 100,
         level: 1,
         name: 'Aragorn',
         type: 'Swordsman',
      },
   });
   expect(data.next()).toEqual({
      done: true,
      value: undefined,
   });
});
