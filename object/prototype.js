let Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
Member.prototype.getName = function () {
  return this.lastName + " " + this.firstName;
};
let mem = new Member("tomoki", "nalkayama");
console.log(mem.getName());
