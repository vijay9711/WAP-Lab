let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  // using arrow function
  showList1: function () {
      this.students.forEach((student) => {
          console.log(this.title + ": " + student);
      });
  },
  // self pattern
  showList2: function() {
    var this_ = this;
    this.students.forEach(function (student) {
        console.log(this_.title + ": " + student);
    });
  },
  // using bind
  showList3: function() {
    this.students.forEach(function (student) {
        console.log(this.title + ": " + student);
    }.bind(this));
  },
  // using call and apply
  showList4: function () {
    this.students.forEach((student) => {
        console.log(this.title + ": " + student);
    });
  },
};
console.log("-------------1--------------");
group.showList1();
console.log("-------------2--------------");
group.showList2();
console.log("-------------3--------------");
group.showList3();
console.log("-------------4--------------");
group.showList4.call(group);
console.log("-------------5--------------");
group.showList4.apply(group);