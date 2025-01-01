import './styles.css';
import {addTask, taskGroupList} from './taskAdd';
import {getFormContent} from './domContentGetter';
import { displayTasks } from './domContentSetter';
import { updateStatus } from './taskStatusUpdater';


document.querySelector('#note-form-btn').addEventListener('click', () => {
    const classList = document.querySelector('#note-form-container').classList;
    classList.toggle('hidden');
    classList.contains('hidden') ? document.querySelector('#note-form-btn').textContent = '+' : document.querySelector('#note-form-btn').textContent = '-';
});

document.querySelector('#note-form-submit-btn').addEventListener('click', () => {
    if (document.querySelector('form').checkValidity()){
        addTask(getFormContent());
        console.log(taskGroupList);
        console.log(typeof(taskGroupList));
        displayTasks(taskGroupList);
    }
})