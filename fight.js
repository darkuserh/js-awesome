import controls from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise(async resolve => {
    const attacker = firstFighter;
    const defender = secondFighter;


    while (attacker.health > 0 && defender.health > 0) {
      const attackerAction = await getUserAction(attacker);
      const defenderAction = await getUserAction(defender);

      if (attackerAction === controls.Block) {
        console.log(`${attacker.name} is blocking.`);
      } else {
        const damage = getDamage(attacker, defender);
        console.log(`${attacker.name} deals ${damage} damage to ${defender.name}.`);
        defender.health -= damage;
      }

      if (defender.health <= 0) {
        console.log(`${defender.name} has been defeated.`);
        break;
      }

      [attacker, defender] = [defender, attacker]; 
    }

    const winner = attacker.health > 0 ? attacker : defender;
    resolve(winner);
  });
}

function getUserAction(fighter) {
  return new Promise(resolve => {
  
    const actions = [controls.Attack, controls.Block];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    resolve(randomAction);
  });
}

export function getDamage(attacker, defender) {
  const hitPower = getHitPower(attacker);
  const blockPower = getBlockPower(defender);
  const damage = hitPower - blockPower;

  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {

  const power = fighter.attack * getRandomNumber(1, 2);
  return power;



}
return getRandomNumber(10, 20);
export function getBlockPower(fighter) {

  const power = fighter.defense * getRandomNumber(1, 2);
  return power;

}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}