(function(){
    function init(){
        getDate();
        addList();
    }


    function getDate(){
        let date = new Date();
        let currentDate = date.toDateString();
        document.getElementById("date").innerHTML=currentDate;
    }

    function addList(){
        var task = document.getElementById("Input");
        task.addEventListener("keypress", function(event){
            if(event.key === "Enter") {
                var node = document.createElement("li");
                var text = document.createTextNode(task.value);
                node.innerHTML="list";
                node.appendChild(text);
                document.getElementById("mylists").appendChild(node);
                task.value="";
            }
        });
    }
init();
})();