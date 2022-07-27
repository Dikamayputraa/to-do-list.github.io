///jika text box kosong tampilkan alert

//ambil element button berdasarkan id push dan inpput
var push = document.getElementById('push')
var newTask = document.getElementsByTagName('input')[0]
var taskList = document.getElementById('task')

//cek kondisi jika push berupa input kosong tampilkan peringatan
push.addEventListener('click', function(){
    if(newTask.value == 0){
        alert("Anda Belum Mengisi Task")
    }else{
        taskList.innerHTML += 
        "<div class='task'>"+
        "<span id='taskname'>"+ newTask.value +"</span>"+
        "<button class='btn-del' value='ikan'>"+
        "<i class='icon-trash'></i>"+
        "</button>"+
        "</div>"

        var curren_task = document.querySelectorAll('.btn-del')
        for (var i = 0; i < curren_task.length; i++) {
            curren_task[i].onclick = function(){
                this.parentNode.remove();
            }
            
        }

        var tasks = document.querySelectorAll('.task')
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function(){
                this.classList.toggle('complited')
            }
            
        }

        document.querySelector('#newtask input').value = ""
    }
})
  
    
    


