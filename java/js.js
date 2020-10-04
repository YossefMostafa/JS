"use strict"
// Var definitions
const tasks = [
    {
        id : 1,
        title : 'Task One',
        body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" ,
        isDone : false,
        createdAt : '14-02-2020'
    },
    {
        id : 2,
        title : 'Task Two',
        body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" ,
        isDone : true,
        createdAt : '15-05-2020'
    },
    {
        id : 3,
        title : 'Task Three',
        body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" ,
        isDone : true,
        createdAt : '25-06-2020'
    }
];


// Actions (functions)
$('#tasks').empty();
function printTasks() {
    for (let i = 0; i < tasks.length; i++){
        $('#tasks').append(`
        <li class="list-group-item d-flex justify-content-between">
                    <div class="content">
                        <h3 class="task-title ${tasks[i].isDone? 'line-through' : ''}">
                        ${tasks[i].title}
                        </h3>
                        <hr>
                    <p class="task-body d-none">
                        ${tasks[i].body}
                    </p>
                    </div>
                    <div class="actions">
                <button class="btn btn-info ${tasks[i].isDone? 'd-none' : ''}">Edit</button>
                <button class="btn btn-${tasks[i].isDone ? 'danger' : 'success'}">
                ${tasks[i].isDone ? 'Re-Open' : 'Done'}
                </button>
            </div>
                </li>
        `);
    }
}

const addTaskHandle = function addTask() {
    const newTask = {
        id: 9,
        title: $('input#title').val(),
        body:  $('textarea#body').val(),
        isDone: false,
        createdAt: '03-09-2020'
    };

    tasks.push(newTask);
    printTasks();
}

// Events
$(function () {
    printTasks();

    $('button#btn-add-tasks').click(addTaskHandle);
});