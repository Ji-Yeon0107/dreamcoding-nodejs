console.log("logging..");
console.clear();

// log level
console.log("log"); // develop
console.info("info"); // information
console.warn("warn"); // warning
console.error("error"); // 사용자에러, 시스템에러

// assert
console.assert(2 === 3, "not Same"); // 출력됨
console.assert(2 === 2, " Same"); // 출력 안 됨

// print object
const student = {
  name: "ellie",
  age: 20,
  company: { name2: "AC", name3: "aa" },
};
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: true, depth: 0 });

// measuring time
console.time("for loop");
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
console.timeEnd("for loop");

// counting
function a() {
  console.count();
}

// trace
console.trace();
