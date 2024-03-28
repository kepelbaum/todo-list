import {createList} from './arrays.js';
import './styles.css';

function populateStorage() {
    localStorage.setItem("memory", JSON.stringify(main.list()));
  }

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
            populateStorage();
            displayTasks(0, obj);
        });
        ren.addEventListener('click', () => {
            let x = prompt('Enter new project name', element.name);
            main.renameProject(element.pid, x);
            display(main.list());
            populateStorage();
        });
        p.addEventListener('click', () => {
            displayTasks(element.pid, obj);
        })
    });
    add.addEventListener('click', () => {
        let x = prompt('Enter new project name');
        main.createProject(x);
        populateStorage();
        display(main.list());   
    });
    side.appendChild(ul);
}

function displayTasks(pid, obj) {
    let toggle = 0;
    let current = 0;
    let form = document.querySelector('.form');
    let hide = document.querySelector('.hide');
    let submit = document.querySelector('.submit');
    let title = document.querySelector('#title');
    let desc = document.querySelector('#description');
    let date = document.querySelector('#datetime');
    let prio = document.querySelector('#priority');

    function refresh() {
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
                let check = document.createElement('input');
                check.setAttribute('type', 'checkbox');
                if (ele.completion == 'yes') {
                    check.setAttribute('checked', 'true');
                };
                
                li.textContent = `${ele.title} - due date: ${ele.dueDate}`;
                if (ele.priority == 'high') {
                    li.setAttribute('style', 'color: red;');
                }
                else if (ele.priority == 'low') {
                    li.setAttribute('style', 'color: green;');
                }
                let del = document.createElement('button');
                del.textContent = 'X';
                del.classList.add('delbutton');
                let ren = document.createElement('button');
                ren.textContent = 'Change';
                ren.classList.add('renbutton');
                li.appendChild(check);
                li.appendChild(ren);
                li.appendChild(del);
                ul.appendChild(li);
                check.addEventListener('click', () => {
                    if (check.getAttribute('checked') == 'true') {
                        check.setAttribute('checked', 'false');
                        main.setComplete(element.pid, ele.id);
                        populateStorage();
                    }
                    else {
                        check.setAttribute('checked', 'true');
                        main.setComplete(element.pid, ele.id);
                        populateStorage();
                    }
                })
                del.addEventListener('click', () => {
                    if (toggle == 0) {
                        main.deleteTask(element.pid, ele.id);
                        ul.removeChild(li);
                    }
                })
                ren.addEventListener('click', () => {
                    current = ele.id;
                    title.value = ele.title;
                    desc.value = ele.description;
                    date.value = ele.dueDate;
                    prio.value = ele.priority;
                    toggle = 2;
                    form.setAttribute("style", "opacity: 1");
                });
            });
        }
    });
    cont.appendChild(ul);
    populateStorage();
    add.addEventListener('click', () => {    
        form.setAttribute("style", "opacity: 1");
        toggle = 1;
    });
    }

    refresh();

    function clear() {
        title.value = '';
        desc.value = '';
        date.value = '';
        prio.value = 'medium';
        form.setAttribute("style", "opacity: 0");
        toggle = 0;
    }

    hide.addEventListener('click', () => {
        clear();
    });
    submit.addEventListener('click', () => {
        if (title.value != '' && toggle == 1) {
            main.createTask(pid, title.value, desc.value, date.value, prio.value);
            clear();
            refresh();
        }
        else if (title.value != '' && toggle == 2) {
            main.changeTask(pid, current, title.value, desc.value, date.value, prio.value);
            clear();
            refresh();
        }
    });

}

// function storageAvailable(type) {
//     let storage;
//     try {
//       storage = window[type];
//       const x = "__storage_test__";
//       storage.setItem(x, x);
//       storage.removeItem(x);
//       return true;
//     } catch (e) {
//       return (
//         e instanceof DOMException &&
//         // everything except Firefox
//         (e.code === 22 ||
//           // Firefox
//           e.code === 1014 ||
//           // test name field too, because code might not be present
//           // everything except Firefox
//           e.name === "QuotaExceededError" ||
//           // Firefox
//           e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
//         // acknowledge QuotaExceededError only if there's something already stored
//         storage &&
//         storage.length !== 0
//       );
//     }
//   }

const main = createList();
let temp = JSON.parse(localStorage.getItem("memory"));
if (temp == '') {
    main.createProject('Default');
}
else {
    main.setList(temp);
    main.maxpid();
    main.maxtid();
}

display(main.list());
displayTasks(1, main.list());