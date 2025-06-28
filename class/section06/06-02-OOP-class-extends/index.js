class Monster {
  constructor(qqq) {
    this.power = qqq ?? 11;
  }

  attack = () => {
    console.log('공격하자!');
    console.log(`내 sss공격력은 ${Number(this.power)}야!`);
  }
  run = () => {
    console.log('도망가자!');
  }
}

class FlyMonster extends Monster {

  constructor(aaa) {
    super(aaa )
  }
  // 오버라이딩(부모의 run을 덮어쓰기)
  run = () => {
    console.log('날라서 도망가자!!');
  }  
}

class LandMonster extends Monster {
  constructor(bbb) {
    super(bbb);
  }
  // 오버라이딩(부모의 run을 덮어쓰기)
  run = () => {
    console.log('뛰어서 도망가자');
  }
}

const mymonster1 = new FlyMonster();
mymonster1.attack();
mymonster1.run();