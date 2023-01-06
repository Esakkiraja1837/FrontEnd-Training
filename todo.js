(function () {
  function getElementById(id) {
    return document.getElementById(id);
  }

  function createElement(name) {
    return document.createElement(name);
  }

  /**
   * create all category(id,text,icon).
   */
  const category = [
    {
      id: "1",
      text: "My Day",
      icon: '<i class="fa fa-sun-o" aria-hidden="true"></i>',
    },
    {
      id: "2",
      text: "important",
      icon: '<i class="fa fa-star-o" aria-hidden="true"></i>',
    },
    {
      id: "3",
      text: "planned",
      icon: '<i class="fa fa-calculator" aria-hidden="true"></i>',
    },
    {
      id: "4",
      text: "Assigned To Me",
      icon: '<i class="fa fa-user-circle-o" aria-hidden="true"></i>',
    },
    {
      id: "5",
      text: "Flogged mail",
      icon: '<i class="fa fa-flag" aria-hidden="true"></i>',
    },
    {
      id: "6",
      text: "tasks",
      icon: '<i class="fa fa-home" aria-hidden="true"></i>',
    },
  ];

  const categoryIcon = getElementById("category-icon");

  let tasks = [];

  let chooseCategory = category[0];

  /**
   * This method will initialize all the variables and methods.
   */
  function init() {
    getDate();
    addTasks();
    addCategories();
    getCategory();
    taskcontainer();
    taskBar(chooseCategory.id);
  }

  /**
   * get all category.
   */
  function getCategory() {
    var sideList = getElementById("mylists");
    sideList.innerHTML = "";

    for (var i = 0; i < category.length; i++) {
      var listContainer = createElement("div");
      listContainer.className = "left-menu";

      listContainer.setAttribute("id", category[i].id);
      // listContainer.setAttribute("onclick", "taskBar(this.id)");

      var icons = createElement("div");
      icons.className = "icon";

      var categoryContent = createElement("div");
      categoryContent.className = "left-content";

      icons.innerHTML = category[i].icon;
      categoryContent.innerHTML = category[i].text;
      listContainer.addEventListener("click", taskBar);

      listContainer.appendChild(icons);
      listContainer.appendChild(categoryContent);

      var list = getElementById("options");
      sideList.appendChild(listContainer);
      sideList.insertBefore(listContainer, list.children[i]);
    }
  }

  /**
   * It will give the current date for user in the right side container.
   * @returns Date
   */
  function getDate() {
    let date = new Date();
    let currentDate = date.toDateString();
    document.getElementById("date").innerHTML = currentDate;
  }

  function taskcontainer() {
    var task = getElementById("main-task-title");
    task.innerHTML = category[0].text;
    categoryIcon.innerHTML = category[0].icon;
    chooseCategory = category[0];
    getTask();
  }

  function taskBar() {
    var id = this.id;
    console.log(id);
    for (let index = 0; index < category.length; index++) {
      if (id == category[index].id) {
        var task = getElementById("main-task-title");
        task.innerHTML = category[index].text;
        categoryIcon.innerHTML = category[index].icon;
        chooseCategory = category[index];
        getTask();
      }
    }
  }

  function addTasks() {
    var newTask = getElementById("task");
    newTask.addEventListener("keypress", function addTask(event) {
      if (event.key == "Enter" && newTask.value != "") {
        var text = newTask.value;
        // console.log(text);
        var taskId = tasks.length + 1;
        tasks.push({
          id: taskId++,
          taskName: text,
          categoryId: chooseCategory.id,
        });
        getTask();
        newTask.value = "";
      }
    });
  }

  /**
   * This method is used to create new task.
   */
  function getTask() {
    var addTask = document.getElementById("new-task");
    addTask.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].categoryId == chooseCategory.id) {
        var checkbox = createElement("div");
        checkbox.className = "check-box";

        var important = createElement("div");
        important.className = "important-box";

        var names = createElement("div");

        var taskContent = createElement("div");
        taskContent.className = "new-list";

        var addTaskAdded = createElement("div");
        addTaskAdded.className = "new-task-added";

        checkbox.innerHTML =
          '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
        names.innerHTML = tasks[i].taskName;
        important.innerHTML = '<i class="fa fa-star-o" aria-hidden="true"></i>';

        addTaskAdded.appendChild(checkbox);
        taskContent.appendChild(names);
        addTaskAdded.appendChild(taskContent);
        addTaskAdded.appendChild(important);

        addTask.appendChild(addTaskAdded);
        taskContent.value = "";
      }
    }
  }

  function addCategories() {
    var task = getElementById("Input");
    task.addEventListener("keypress", function addCategory(event) {
      if (event.key == "Enter") {
        var icons = '<i class="fa fa-bars"</i>';
        var texts = task.value;
        console.log(texts);
        if (texts == "") {
          texts = "untitle list";
        }
        var categoryId = category.length + 1;
        category.push({ icon: icons, text: texts, id: categoryId++ });
        getCategory();
        task.value = "";
      }
    });
  }
  init();
})();
