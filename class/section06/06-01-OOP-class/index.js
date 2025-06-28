class Monster {
  constructor(qqq) {
    this.power = qqq ?? 11;
  }

  attack = () => {
    console.log('공격하자!');
    console.log(`내 공격력은 ${this.power}야!`);
  }
  run = () => {
    console.log('도망가자!');
  }
}

const myMonster1 = new Monster(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new Monster();

myMonster2.attack();
myMonster2.run();