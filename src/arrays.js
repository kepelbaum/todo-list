export function createList() {
    let masterList = [];
    let projid = 1;
    let taskid = 1;
    const maxpid = () => {
        let a = 0;
        if (masterList.length > 0) {
        masterList.forEach((element) => {
            if (element.pid > a) {
                a = element.pid;
            }
        });
        }
        projid = a + 1;
    }
    const maxtid = () => {
        let a = 0;
        if (masterList.length > 0) {
        masterList.forEach((element) => {
            if (element.content.length > 0) {
            element.content.forEach((ele) => {
                if (ele.id > a) {
                    a = ele.id;
                }
            });
            }
        });
        }
        taskid = a + 1;
    }
    const list = () => masterList;
    const setList = (nlist) => masterList = nlist;
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
    const setComplete = (pid, id) => {
        masterList.forEach((element) => {
            if (element.pid == pid) {
                element.content.forEach((ele) => {
                    if (ele.id == id) {
                        if (ele.completion == 'no') {
                            ele.completion = 'yes';
                        }
                        else {
                            ele.completion = 'no';
                        }
                    }
                })
            }
        });
    }
    return {list, createProject, createTask, renameProject, changeTask, deleteTask, deleteProject, currentPid, setComplete, setList, maxpid, maxtid};
}
