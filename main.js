
function Student(fname, lname, birthDay, grade) {
  this.fname = fname;
  this.lname = lname;
  this.birthDay = parseInt(birthDay);
  this.grade = grade;
  this.arr = new Array(25);
}
Student.prototype.ageStudent = function () {
    let d = new Date();
    return d.getFullYear() - this.birthDay;
  };
  Student.prototype.getGradeScore = function () {
    if (this.grade.length === 0) {
      return 0;
    }
    const sum = this.grade.reduce((total, grade) => total + grade, 0);
    return sum / this.grade.length;
  };
  
  Student.prototype.present = function () {
    if (this.arr.filter(a => a).length < 25) {
     this.arr.push(true);
     return true;
    }
  };
  Student.prototype.absent = function () {
    if (this.arr.filter(a => a).length < 25) {
       this.arr.push(false);
       return false;
    }
  };
  Student.prototype.summary = function () {
    let sum = this.arr.filter(a => a).length;
    summaryScore = sum / this.arr.length;
    if (this.getGradeScore() >= 90 && summaryScore >= 0.9) {
      return "Молодець!";
    }
    else if (this.getGradeScore() <= 90 || summaryScore <= 0.9) {
        return "Добре, але можна краще!";
    }
    else {
        return "Редиска!";
    }
  };

let student1 = new Student("Diana", "Humenna", 2007, [9, 10, 11, 7, 10, 12, 8, 9]);
console.log(
  student1.fname,
  student1.lname,
  student1.ageStudent(),
  student1.getGradeScore(),
  student1.present(),
  student1.absent(),
  student1.summary()
);
let student2 = new Student("Inna", "Myronuk", 2001, [1, 1, 1, 0.1,]);
console.log(
  student2.fname,
  student2.lname,
  student2.ageStudent(),
  student2.getGradeScore(),
  student2.present(),
  student2.absent(),
  student2.summary()
);
let student3 = new Student("Viktor", "Kravczyk", 2005, [3, 7, 9, 10, 6, 9, 10, 7, 7]);
console.log(
  student3.fname,
  student3.lname,
  student3.ageStudent(),
  student3.getGradeScore(),
  student3.present(),
  student3.absent(),
  student3.summary()
);
