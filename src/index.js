import {createList} from './arrays.js';
import './styles.css';

function display(obj) {
    let side = document.querySelector('.sidebar');
    let add = document.createElement('button');
    add.classList.add('addproject');
    add.textContent = '+';
    side.textContent = '';
    side.appendChild(add);
    let ul = document.createElement('ul');
    obj.forEach((element) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = element.name;
        let del = document.createElement('button');
        del.textContent = 'X';
        del.classList.add('delproject');
        let ren = document.createElement('button');
        ren.textContent = 'Rename';
        ren.classList.add('renproject');
        li.appendChild(p);
        li.appendChild(ren);
        li.appendChild(del);
        ul.appendChild(li);
        del.addEventListener('click', () => {
            main.deleteProject(element.pid);
            ul.removeChild(li);
        });
        ren.addEventListener('click', () => {
            let x = prompt('Enter new project name', element.name);
            main.renameProject(element.pid, x);
            display(main.list());
        });
        p.addEventListener('click', () => {
            displayTasks(element.pid, obj);
        })
    });
    add.addEventListener('click', () => {
        let x = prompt('Enter new project name');
        main.createProject(x);
        display(main.list());
    });
    side.appendChild(ul);
}

function displayTasks(pid, obj) {
    let cont = document.querySelector('.content');
    cont.textContent = '';
    let add = document.createElement('button');
    add.classList.add('addbutton');
    add.textContent = 'NEW TASK';
    cont.appendChild(add);
    let ul = document.createElement('ul');
    obj.forEach((element) => {
        if (element.pid == pid) {
            element.content.forEach((ele) => {
                let li = document.createElement('li');
                li.textContent = `${ele.title} - due date: ${ele.dueDate}`;
                let del = document.createElement('button');
                del.textContent = 'X';
                del.classList.add('delbutton');
                let ren = document.createElement('button');
                ren.textContent = 'Change';
                ren.classList.add('renbutton');
                li.appendChild(ren);
                li.appendChild(del);
                ul.appendChild(li);
                del.addEventListener('click', () => {
                    main.deleteTask(element.pid, ele.id);
                    ul.removeChild(li);
                })
            });
        }
    });
    cont.appendChild(ul);
    add.addEventListener('click', {

    });
}

const main = createList();
main.createProject('test');
main.createProject('AYAYA');
console.log(main.list());
main.createTask(1, 'WOLOLO', 'hehehe', 2025, 'ASAP');
console.log(main.list());
main.renameProject(2, 'PYSCH');
console.log(main.list());
main.changeTask(1, 1, 'BOOHOO', 'WOOOOOOOOO', 2099, 'high');
main.createTask(1, 'WOLOLO', 'hehehe', 2025, 'ASAP');
console.log(main.list());
// main.deleteTask(1, 1);
// console.log(main.list());
// main.deleteProject(2);
// console.log(main.list());
display(main.list());
displayTasks(1, main.list());