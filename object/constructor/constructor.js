let Member1 = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

let m1 = Member1("tomoki", "nakayama");
console.log(m1);
console.log(firstName); // firstName, lastNameがグローバル変数として生成されてしまう
// console.log(m.firstName); expect to error

let Member2 = function (middleName) {
  if (!(this instanceof Member2)) {
    return new Member2(middleName);
  }
  this.middleName = middleName;
};

let m2 = Member2("michael");
console.log(m2);
// console.log(middleName); expect to error
