let data = "Nakayama";
let obj1 = { data: "obj1 data" };
let obj2 = { data: "obj2 data" };

function hoge() {
  console.log(this.data);
}

hoge.call(null);
hoge.call(obj1);
hoge.call(obj2);
