class Professor {
  constructor(name = '', idNumber = '') {
    this.name = name;
    this.idNumber = idNumber;
    this.assignmentList = [];
  }

  assign(title, description, dueDateString) {
    const dueDateMonth = parseInt(dueDateString.substring(0, 2));
    const dueDateDay = parseInt(dueDateString.substring(3, 5));
    const dueDateYear = parseInt(dueDateString.substring(6));
    const dueDate = new Date(dueDateYear, dueDateMonth - 1, dueDateDay);
    const today = new Date();

    if (today > dueDate) {
      console.log("Error: due date is in the past");
    } else if (title.length === 0) {
      console.log("Error: assignment has no title.");
    } else if (description.length === 0) {
      console.log("Error: assignment has no description");
    } else {
      this.assignmentList.push(new Assignment(title, description, dueDate));
    }
  }
}
