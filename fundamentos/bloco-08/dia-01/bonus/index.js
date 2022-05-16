const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDamage = () => {
  const { strength } = battleMembers.dragon;
  return Math.floor(Math.random() * (strength - 15)) + 15;
};

const getWarriorDamage = () => {
  const { strength, weaponDmg } = battleMembers.warrior;
  const maxDamage = strength * weaponDmg;      gameActions.mageTurn(getMageDamage);
  gameActions.dragonTurn(getDragonDamage);
  console.log(gameActions.turnInfo(checkIfCharacterIsDead));
  return Math.floor(Math.random() * (maxDamage - strength)) + strength;
};

const getMageDamage = () => {
  const { intelligence, mana } = battleMembers.mage;
  if (mana < 15) return { damage: "Não possui mana suficiente", mana };
  const maxDamage = intelligence * 2;
  const damage = Math.floor(Math.random() * (maxDamage - intelligence)) + intelligence;
  return {
    damage,
    mana: mana - 15
  }
};

const checkIfCharacterIsDead = (character, characterName) => {
  return character.healthPoints <= 0 ? `${characterName} morreu` : `${characterName} ainda está em condições de batalha`;
}

const gameActions = {
  warriorTurn: (warriorsDamageCallback) => {
    const warriorsDamage = warriorsDamageCallback();
    warrior.damage = warriorsDamage;
    dragon.healthPoints -= warriorsDamage;
  },
  mageTurn: (mageDamageCallback) => {
    const mageDamage = mageDamageCallback();
    const { damage, mana } = mageDamage;
    mage.damage = damage;
    mage.mana = mana;
    if (typeof damage !== "number") return;
    dragon.healthPoints -= damage;
  },
  dragonTurn: (dragonDamageCallback) => {
    const dragonDamage = dragonDamageCallback();
    dragon.damage = dragonDamage;
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  turnInfo: (callback) => {
    console.log(callback(mage, 'Mage'));
    console.log(callback(warrior, 'Warrior'));
    console.log(callback(dragon, 'Dragon'));
    return battleMembers;
  },
  play: () => {
    areAlliesAlive = mage.healthPoints > 0 || warrior.healthPoints > 0;
    while ((areAlliesAlive) && dragon.healthPoints > 0) {
      if (warrior.healthPoints > 0 && dragon.healthPoints > 0 ) gameActions.warriorTurn(getWarriorDamage);
      if (mage.healthPoints > 0 && dragon.healthPoints > 0) gameActions.mageTurn(getMageDamage);
      if (dragon.healthPoints > 0 && (areAlliesAlive)) gameActions.dragonTurn(getDragonDamage);
      console.log(gameActions.turnInfo(checkIfCharacterIsDead));
    }
  }
};

gameActions.play();