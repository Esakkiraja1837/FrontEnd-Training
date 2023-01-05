(function(){

    /**
     * This method will initialize all the variables and methods.
     */
    function init(){
        getDate();
        addTasks();
        addCategories();
        getCategory();
    }

    const tasks = [];

    function getElementById(id){
        return document.getElementById(id);
    }

    function createElement(name){
        return document.createElement(name);
    }

    /**
     * create all category(id,text,icon).
     */
    category = [
        { id : '1', text : 'My Day', icon :'<i class="fa fa-sun-o" aria-hidden="true"></i>'},
        { id : '2', text : 'important', icon : '<i class="fa fa-star-o" aria-hidden="true"></i>'},
        { id : '3', text : 'planned', icon : '<i class="fa fa-calculator" aria-hidden="true"></i>'},
        { id : '4', text : 'Assigned To Me', icon : '<i class="fa fa-user-circle-o" aria-hidden="true"></i>'},
        { id : '5', text : 'Flogged mail', icon : '<i class="fa fa-flag" aria-hidden="true"></i>'},
        { id : '6', text : 'task', icon : '<i class="fa fa-home" aria-hidden="true"></i>'}
    ]

    /** 
     * get all category.
     */
    function getCategory() {
        for(var i = 0; i < category.length; i++) {
            var listContainer = createElement("div");
            listContainer.className="left-menu";
            var icon = createElement("div");
            icon.className = "icon";
            var categoryContainer = createElement("div");
            categoryContainer.className = "left-content";
            icon.innerHTML = category[i].icon;
            categoryContainer.innerHTML = category[i].name;
            listContainer.appendChild(icon);
            listContainer.appendChild(categoryContainer);
            var list = getElementById("options");
            list.appendChild(listContainer);
            list.insertBefore(listContainer, list.children[i]);
        }
    }

    /**
     * It will give the current date for user in the right side container.
     * @returns Date
     */
    function getDate(){
        let date = new Date();
        let currentDate = date.toDateString();
        document.getElementById("date").innerHTML=currentDate;
    }

    function addTasks() {
        var task = getElementById("task");
        task.addEventListener("keypress", function addTask(event){
                if(event.key == "Enter" ) {
                    var text = task.value;
                    console.log(text);
                 tasks.push(text);
                    getTask();
                 text.value = "";
                }
        });
    }

        /**
        * This method is used to create new task.
        */
        function getTask(){    
            var addTask = document.getElementById("new-task")
                addTask.innerHTML = "";

                for(var i =0; i< tasks.length;i++){
                    var checkbox = createElement("div");
                    checkbox.className = 'check-box';
                    var important = createElement("div");
                    important.className = 'important-box';
                    var texts = createElement('div');
                    texts.className = 'new-list';
                    var addTaskAdded = createElement('div');
                    addTaskAdded.className = 'new-task-added';
                    checkbox.innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
                    texts.innerHTML = tasks[i];
                    important.innerHTML = '<i class="fa fa-star-o" aria-hidden="true"></i>';
                    addTaskAdded.appendChild(checkbox);
                    addTaskAdded.appendChild(texts);
                    addTaskAdded.appendChild(important);
                    addTask.appendChild(addTaskAdded);
                }
        }
    

        function addCategories(){
            var task = getElementById("Input");
            task.addEventListener("keypress", function addCategory(event){
                    if(event.key == "Enter" ) {
                        var icons = '<i class="fa fa-bars"</i>';
                        var texts = task.value;
                        console.log(texts);
                        if(texts == ''){
                            texts = 'untitle list';
                        }
                        var id = category.length+1;
                        category.push({icon:icons, text:texts, id:id++});
                        getCategory();
                        task.value = "";
                    }
            });
        }

        /**
        * This method is used to create new category.
        */
        function getCategory(){
            var sideList = getElementById("options");
            sideList.innerHTML = '';
            for(var i = 0; i < category.length; i++){      
                var list = createElement('div');
                list.className = "list-block";
                list.setAttribute('id', i);
                var icons = createElement('div');
                icons.className="icon";
                var texts = createElement('div');
                texts.className = 'content';
                icons.innerHTML = category[i].icon;
                texts.innerHTML = category[i].text;
                list.appendChild(icons);
                list.appendChild(texts);
                sideList.appendChild(list);
                sideList.insertBefore(list, sideList.children[i]);
            }
        }

init();

})();