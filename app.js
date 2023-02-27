const users = [
  {
    name: `Temo`,
    age: 25,
  },
  {
    name: `Lasha`,
    age: 21,
  },
  {
    name: `Ana`,
    age: 28,
  },
];

function returnYoungestAge(arr) {
  const minAge = Math.min(...arr.map((el) => el.age));

  for (let user of arr) {
    if (user.age === minAge) {
      return user.name;
    }
  }
}
console.log(returnYoungestAge(users));
// ************************************************************

const usersArr = [
  {
    name: `Temo`,
    age: 25,
  },
  {
    name: `Lasha`,
    age: 21,
  },
  {
    name: `Ana`,
    age: 28,
  },
];

function returnArr(user) {
  return user;
}
console.log(returnArr(usersArr));

// *****************************************

let userATrie = 0;
let userBTrie = 0;

while (true) {
  const userARoll = Math.floor(Math.random() * 6) + 1;

  userATrie++;

  if (userARoll === 3) {
    console.log(`user A wins in ${userATrie} tries!!`);
    break;
  }

  const userBRoll = Math.floor(Math.random() * 6) + 1;
  userBTrie++;

  if (userBRoll === 3) {
    console.log(`user B wins in ${userBTrie} tries!!`);
    break;
  }
}
// ***************************************************************************
