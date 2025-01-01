const taskGroupList = {};
let taskId = 0;

function addTask (inputDataObj) {
    if (taskGroupList[inputDataObj.project] === undefined) {
        taskGroupList[inputDataObj.project] = [];
        taskGroupList[inputDataObj.project].push(addItInner());
    } else {
        taskGroupList[inputDataObj.project].push(addItInner());
    };

    function addItInner () {
        return {
            title: inputDataObj.title,
            desc: inputDataObj.desc,
            deadline: inputDataObj.deadline,
            id: taskId,
            status: 'not-started'
        }
    };
    taskId++;
};

export {addTask, taskGroupList};