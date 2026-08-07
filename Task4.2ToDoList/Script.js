const Date = document.getElementById("DateInput");
const Title = document.getElementById("TaskTitle");
const Desc = document.getElementById("Desc");
const Addbtn = document.getElementById("Add");
const TaskArea = document.getElementById("container");

// Making A Card
Addbtn.addEventListener("click", function () {
  //  check if there is a title
  if (Title.value.trim() !== "") {
    // Add Card
    const TaskCard = document.createElement("div");
    TaskArea.appendChild(TaskCard);
    TaskCard.classList.add("TaskCard");
    console.log("Task Added");

    // Top div
    const TopCard = document.createElement("div");
    TopCard.classList.add("TopCard");
    TaskCard.appendChild(TopCard);

    // Add title
    const TaskTitle = document.createElement("h3");
    TaskTitle.textContent = Title.value;
    TopCard.appendChild(TaskTitle);
    TaskTitle.classList.add("Title");

    // Add date
    const TaskDate = document.createElement("small");
    TaskDate.textContent = Date.value;
    TopCard.appendChild(TaskDate);
    TaskDate.classList.add("Date");

    // Add Description
    const TaskDescription = document.createElement("p");
    TaskDescription.textContent = Desc.value;
    TaskCard.appendChild(TaskDescription);
    TaskDescription.classList.add("TaskDescription");

    // buttons div
    const ButtonsContain = document.createElement("div");
    ButtonsContain.classList.add("ButtonsContain");
    TaskCard.appendChild(ButtonsContain);

    // complete button
    const Completebtn = document.createElement("button");
    Completebtn.textContent = "Incomplete";
    ButtonsContain.appendChild(Completebtn);
    Completebtn.addEventListener("click", function () {
      TaskCard.classList.toggle("completed");
      if (TaskCard.classList.contains("completed")) {
        Completebtn.textContent = "Complete";
        console.log("Task complete");
      } else {
        Completebtn.textContent = "Incomplete";
        console.log("Task incomplete");
      }
    });
    Completebtn.classList.add("Complete");

    // Edit button
    const Editbtn = document.createElement("button");
    Editbtn.textContent = "Edit";
    ButtonsContain.appendChild(Editbtn);
    Editbtn.addEventListener("click", function () {
      const NewTitle = prompt("Enter a new Title");
      if (NewTitle !== null) {
        TaskTitle.textContent = NewTitle;
      }
      const NewDesc = prompt("Enter a new Description");
      if (NewDesc !== null) {
        TaskDescription.textContent = NewDesc;
      }
      console.log("Task edited");
    });
    Editbtn.classList.add("Edit");

    // Delete Button
    const deletbtn = document.createElement("button");
    deletbtn.textContent = "Delete";
    ButtonsContain.appendChild(deletbtn);
    deletbtn.addEventListener("click", function () {
      TaskCard.remove();
      console.log("Task deleted");
    });
    deletbtn.classList.add("Delete");

    // Reset Input
    Title.value = "";
    Desc.value = "";
  }
});
