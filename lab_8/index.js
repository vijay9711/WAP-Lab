class Node {
  constructor(element) {
    this.element = element;
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null)
      this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  removeElement(element) {
    var current = this.head;
    var prev = null;
    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

function list(){
  var ll = new LinkedList();
  ll.add(1);
  ll.add(2);
  ll.add(3);
  ll.printList(); 
  ll.removeElement(2);
  ll.printList();
}


function Student(firstName, lastName, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades || [];
}
Student.prototype.inputNewGrade = function(newGrade) {
  this.grades.push(newGrade);
};
Student.prototype.computeAverage = function() {
  if (this.grades.length === 0) {
    return 0;
  }
  const sum = this.grades.reduce((total, grade) => total + grade, 0);
  return sum / this.grades.length;
};
function grade(){
  const student1 = new Student('John', 'Doe', [85, 90, 78]);
  const student2 = new Student('Alice', 'Smith', [76, 88, 94]);
  
  student1.inputNewGrade(88);
  student2.inputNewGrade(90);
  console.log(student1.computeAverage());
  console.log(student2.computeAverage());
}
