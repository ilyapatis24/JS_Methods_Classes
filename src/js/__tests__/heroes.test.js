import { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../heroes.js';

test('should level up and health mistake', () => {
    let hero = new Undead('Boris')
    hero.levelUp()
    expect(hero).toEqual({
        name: 'Boris',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30
    });

    hero.damage(1000)
    expect(function() {
        hero.levelUp()
    }).toThrow(new Error("Can't level up for lifeless Hero..."));

})

test('should damage and health mistake', () => {
    let hero = new Undead('Boris')
    hero.levelUp()
    hero.damage(15)
    expect(hero).toEqual({
        name: 'Boris',
        type: 'Undead',
        health: 89.5,
        level: 2,
        attack: 30,
        defence: 30
    });

    hero.damage(1000)
    expect(function() {
        hero.damage()
    }).toThrow(new Error("Can't damage points for lifeless Hero..."));

})

test('should constructor mistake', () => {

    expect(function() {
        new Zombie('')
    }).toThrow(new Error('Name is too short / long...'));

    expect(function() {
        new Character('Monster', '')
    }).toThrow(new Error('Wrong type of Hero...'));

});

test('should objects', () => {

    expect(new Character('Crusider', 'Swordsman')).toEqual({
        name: 'Crusider',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined
    });

    expect(new Bowerman('Boris')).toEqual({
        name: 'Boris',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Swordsman('Boris')).toEqual({
        name: 'Boris',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

    expect(new Magician('Boris')).toEqual({
        name: 'Boris',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Daemon('Boris')).toEqual({
        name: 'Boris',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Undead('Boris')).toEqual({
        name: 'Boris',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Zombie('Boris')).toEqual({
        name: 'Boris',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

});