"use strict";
import { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from './heroes.js';

console.log(new Character('Crusider', 'Swordsman'));
console.log(new Bowerman('Boris'));
console.log(new Swordsman('Boris'));
console.log(new Magician('Boris'));
console.log(new Daemon('Boris'));
console.log(new Undead('Boris'));
console.log(new Zombie('Boris'));

let hero = new Undead('Boris')
hero.levelUp()
console.log(hero)
hero.damage(15)
console.log(hero)