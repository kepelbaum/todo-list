export function display(obj) {
    let main = document.querySelector('.sidebar');
    let add = document.createElement('button');
    add.classList.add('addproject');
    add.textContent = '+';
    main.textContent = '';
    main.appendChild(add);
    let ul = document.createElement('ul');
    obj.forEach((element) => {
        let li = document.createElement('li');
        li.textContent = element.name;
        let del = document.createElement('button');
        del.textContent = 'X';
        del.setAttribute('pid', element.pid);
        del.classList.add('delproject');
        li.appendChild(del);
        ul.appendChild(li);
        del.addEventListener('click', () => {
            
        })
    });
    main.appendChild(ul);
}

export function displayTasks(pid, obj) {
    let main = document.querySelector('.content');
    main.textContent = '';
    let ul = document.createElement('ul');
    obj.forEach((element) => {
        if (element.pid == pid) {
            element.content.forEach((ele) => {
                let li = document.createElement('li');
                li.textContent = `${ele.title} - due date: ${ele.dueDate}`;
                ul.appendChild(li);
            });
        }
    });
    main.appendChild(ul);
}