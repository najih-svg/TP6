document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; 
    }
});

function addTask(taskText) {
    let taskList = document.getElementById('taskList');
    let li = document.createElement('li');
    
    
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'continuer';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
  
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'annule';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
   
    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
   
    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    
   
    taskList.appendChild(li);
}