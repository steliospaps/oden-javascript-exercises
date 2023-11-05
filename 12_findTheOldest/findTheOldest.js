const findTheOldest = function(people) {
  return people.sort((a,b)=>((a.yearOfDeath?a.yearOfDeath:new Date().getFullYear())-a.yearOfBirth)-((b.yearOfDeath?b.yearOfDeath:new Date().getFullYear())-b.yearOfBirth)).pop()
};

// Do not edit below this line
module.exports = findTheOldest;
