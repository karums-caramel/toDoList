let taskGroupList = JSON.parse(localStorage.getItem('taskGroupObject'));
(!localStorage.getItem('taskId')) ? localStorage.setItem('taskId', 0) : localStorage.setItem('taskId', localStorage.getItem('taskId'));
const localTaskListSoICanUseItHere = JSON.parse(localStorage.getItem('taskGroupObject')) || {};
function addTask (inputDataObj) {
    if (localTaskListSoICanUseItHere[inputDataObj.project] === undefined) {
        localTaskListSoICanUseItHere[inputDataObj.project] = [];
        localTaskListSoICanUseItHere[inputDataObj.project].push(addItInner());
    } else {
        localTaskListSoICanUseItHere[inputDataObj.project].push(addItInner());
    };

    function addItInner () {
        const deadline = inputDataObj.deadline;
        return {
            title: inputDataObj.title,
            desc: inputDataObj.desc,
            deadline: `${deadline.getDate()}/${deadline.getMonth() + 1}/${deadline.getFullYear()} ${deadline.getHours()}:${deadline.getMinutes()}`,
            id: localStorage.getItem('taskId'),
            status: 'not-started',
            project: inputDataObj.project
        }
    };
    localStorage.setItem('taskId', (+localStorage.getItem('taskId') + 1));

    localStorage.setItem('taskGroupObject', JSON.stringify(localTaskListSoICanUseItHere));
    taskGroupList = JSON.parse(localStorage.getItem('taskGroupObject'));
    console.log(taskGroupList);
    console.log(localTaskListSoICanUseItHere);
};

export {addTask, taskGroupList};