   
  
 let tasks =[
    {
        "title":"قراة كتاب",
        "date":"9/03/2026",
        "isDone":false,
    },
    {
        "title":"لعب",
        "date":"9/03/2026",
        "isDone":false,
    },
    {
        "title":"مشي",
        "date":"9/03/2026",
        "isDone":false,
    },
   ]
   function getTasksFromSrorage(){
    let retrievedTasks= JSON.parse(localStorage.getItem("tasks"))
    if(retrievedTasks == null){
       tasks = []
    }else{
        tasks = retrievedTasks
    }
     
   }
   getTasksFromSrorage()
  
               function fillTasksOnThePage(){ 

               
document.getElementById("tasks").innerHTML =""
let index=0
            for(task of tasks){
        let content=
        ` <div class="task ${task.isDone ? 'done':''}">
        <!-- task info -->
                                  <div style="width: 70%; ">
                                       <h2>${task.title}</h2>
                                       <div>
                                           <span class="material-symbols-rounded">
                calendar_month
               </span>
                                           <span>
                                             ${task.date}
                                           </span>
                                       </div>
                                  </div>
                               <!-- //task info// -->
                                <!-- task actions -->
                                <div class="task-action">
                                 <button onclick="deleteTask(${index})" class="but-ramove">
                  <span class="material-symbols-rounded">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
               fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM428.5-291.5Q440-303 440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280q17 0 28.5-11.5Zm160 0Q600-303 600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280q17 0 28.5-11.5ZM280-720v520-520Z"/></svg>
               </span>
                                 </button>
                   ${task.isDone ? ` 
                   <button onclick="completeTask(${index})" class="but-vri" style=" background-color:rgb(248, 0, 210);">
                               <span class="material-symbols-outlined">
                                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                 </span>
                                 </button>
                   `
                    : 
                   `
                                 <button onclick="completeTask(${index})" class="but-vri">
                               <span class="material-symbols-outlined">
                                 check
                                 </span>
                                 </button>
                        `}  

                                 <button class="but-edite" onclick="editTask(${index})">
                                   <span class="material-symbols-rounded">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
               fill="#e3e3e3"><path d="M200-200h57l391-391-57-57-391 391v57Zm-40 80q-17 0-28.5-11.5T120-160v-97q0-16 6-30.5t17-25.5l505-504q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L313-143q-11 11-25.5 17t-30.5 6h-97Zm600-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></span>
                                 </button>
                                </div>
                                 <!-- //task actions// -->
        `
                document.getElementById("tasks").innerHTML += content
               index++
} 
}
             fillTasksOnThePage()

                 document.getElementById("add-btn1.1").addEventListener("click",function(){
                    let  now = new Date()
                    let date = now.getDate() +"/"+ (now.getMonth()+1)+"/"+now.getFullYear()+" | "+now.getHours()+":"+ now.getMinutes()
               let taskName=  prompt("ادخال مهمة")
           // let date
               let taskObj ={
                "title":taskName,
                "date":date,
                "isDone": false,
               }
                    tasks.push(taskObj)
             storeTasks()
                 fillTasksOnThePage()
                
                })
                ///delete
                function deleteTask(index){
                    let task = tasks[index]
                   let isConfirm=  confirm("هل انت متاكد من حذف :"+ task.title)
if(isConfirm == true){
    tasks.splice(index, 1)
    storeTasks()
     fillTasksOnThePage()
}
    
   
                }
                //edit
                function editTask(index){
                    let newTasktitle = prompt( "ادخال تعديل:")
                     let task = tasks[index]
                      let isnew=  confirm("هل انت متاكد من تعديل:"+task.title)
                      
if(isnew == true){task.title = newTasktitle
                     fillTasksOnThePage()
                     storeTasks()
                    }
                }
                
               // done
              function completeTask(index){

    let task = tasks[index]

    task.isDone = !task.isDone

    storeTasks()
    fillTasksOnThePage()
    updateProgress()
updateStats()
updateStats()
updateProgress()
}
                //=====strorage FUNCTION====
                function storeTasks(){
                  let tasksString = JSON.stringify(tasks)
              localStorage.setItem("tasks",tasksString)


                }




                //bar systam\
 function updateProgress(){

let total = tasks.length
let done = tasks.filter(task => task.isDone).length

let percent = 0

if(total > 0){
percent = Math.round((done / total) * 100)
}

document.getElementById("progressBar").style.width = percent + "%"
document.getElementById("progressText").innerText = percent + "%"

}
//Task statistics//
function updateStats(){

let total = tasks.length
let done = tasks.filter(task => task.isDone).length
let remaining = total - done

document.getElementById("totalTasks").innerText = total
document.getElementById("doneTasks").innerText = done
document.getElementById("remainingTasks").innerText = remaining

}




//search//
function searchTasks(){

let value = document.getElementById("searchTask").value.toLowerCase()

let tasksElements = document.querySelectorAll(".task")

tasksElements.forEach(task => {

let text = task.innerText.toLowerCase()

task.style.display = text.includes(value) ? "flex" : "none"

})

}





//////login///

localStorage.setItem("users",JSON.stringify([
{email:"walid@gmail.com",password:"1234"}
]))



function login(event){

event.preventDefault()

let email = document.getElementById("email").value
let password = document.getElementById("password").value

let users = JSON.parse(localStorage.getItem("users")) || []

let foundUser = users.find(user => user.email === email && user.password === password)

if(foundUser){

localStorage.setItem("currentUser",email)

window.location.href = "oksnotes.html"

}else{

alert("Email or password incorrect")

}

}
//// ui prf//


// let user = localStorage.getItem("currentUser")

// if(user){

// document.getElementById("loginBtn").innerText = user

// }
// 

let user = localStorage.getItem("currentUser")

if(user){

let name = user.split("@")[0]

document.getElementById("loginBtn").innerText = name

}

//// logout


function logout(){

localStorage.removeItem("currentUser")

window.location.href = "login.html"

}


// check login
let user1 = localStorage.getItem("currentUser")

if(!user1){
window.location.href = "login.html"
}

// show user name in button
let loginBtn = document.getElementById("loginBtn")

if(loginBtn && user1){
loginBtn.innerText = user1
}





