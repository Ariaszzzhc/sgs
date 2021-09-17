export class Player {
  // 玩家座位号，从 1 开始
  id: number;
  // 玩家 uuid
  userId: string;

  entity?: PlayerEntity;

  constructor(id: number, userId: string) {
    this.id = id;
    this.userId = userId;
  }
}

class PlayerEntity {
  // stats
  // 生命值
  hp: number;
  maxHp: number;

  constructor(hp: number, maxHp: number) {
    this.hp = hp;
    this.maxHp = maxHp;
  }

  // TODO 装备区
  // TODO 判定区
  // TODO 额外区
  // TODO 翻面
}
