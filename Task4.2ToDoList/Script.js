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

    // Add title
    const TaskTitle = document.createElement("h3");
    TaskTitle.textContent = Title.value;
    TaskCard.appendChild(TaskTitle);
    TaskTitle.classList.add("CardContent");

    // Add date
    const TaskDate = document.createElement("small");
    TaskDate.textContent = Date.value;
    TaskCard.appendChild(TaskDate);
    TaskDate.classList.add("CardTop", "Date");

    // Add Description
    const TaskDescription = document.createElement("p");
    TaskDescription.textContent = Desc.value;
    TaskCard.appendChild(TaskDescription);
    TaskDescription.classList.add("CardContent");

    // complete button
    const Completebtn = document.createElement("button");
    Completebtn.textContent = "Incomplete";
    TaskCard.appendChild(Completebtn);
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
    Completebtn.classList.add("CardTop", "Complete");

    // Edit button
    const Editbtn = document.createElement("button");
    Editbtn.textContent = "Edit";
    TaskCard.appendChild(Editbtn);
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
    Editbtn.classList.add("CardButtons");

    // Delete Button
    const deletbtn = document.createElement("button");
    deletbtn.textContent = "Delete";
    TaskCard.appendChild(deletbtn);
    deletbtn.addEventListener("click", function () {
      TaskCard.remove();
      console.log("Task deleted");
    });
    deletbtn.classList.add("CardButtons");

    // Reset Input
    Title.value = "";
    Desc.value = "";
  }
});
