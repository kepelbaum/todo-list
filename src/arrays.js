export function createList() {
    let masterList = [];
    let projid = 1;
    let taskid = 1;
    const list = () => masterList;
    const createProject = (name) => masterList.push({name, content: [], pid: projid++});
    const currentPid = () => projid;
    const renameProject = (pid, name) => {
        masterList.forEach((element) => {
            if (element.pid == pid) {
                element.name = name;
            }
        })
    }
    const createTask = (pid, title, description, dueDate, priority) => {
        masterList.forEach((element) => {
            if (element.pid == pid) {
                element.content.push({title, description, dueDate, priority, completion: 'no', id: taskid++});
            }
        })
    }
    const changeTask = (pid, id, title, description, dueDate, priority) => {
        masterList.forEach((element) => {
            if (element.pid == pid) {
                element.content.forEach((ele) => {
                    if (ele.id == id) {
                        ele.title = title;
                        ele.description = description;
                        ele.dueDate = dueDate;
                        ele.priority = priority;
                    }
                })
            }
        })
    }
    const deleteTask = (pid, id) => {
        masterList.forEach((element) => {
            if (element.pid == pid) {
                let arr = [];
                element.content.forEach((ele) => {
                    if (ele.id != id) {
                        arr.push(ele);
                    }
                element.content = arr;
                })
            }
        })
    }
    const deleteProject = (pid) => {
        let arr = [];
        masterList.forEach((element) => {
            if (element.pid != pid) {
                arr.push(element);
            }
        masterList = arr;
        })
    }
    return {list, createProject, createTask, renameProject, changeTask, deleteTask, deleteProject, currentPid};
}
