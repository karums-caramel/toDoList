import './styles.css';
import {addTask, taskGroupList} from './taskAdd';
import {getFormContent} from './domContentGetter';
import { displayTasks } from './domContentSetter';
import { updateStatus } from './taskStatusUpdater';

const noteFormBtn = document.querySelector('#note-form-btn');
const noteFormBtnWrapper = document.querySelector('#note-form-btn-wrapper');

displayTasks(taskGroupList);

noteFormBtn.addEventListener('click', () => {
    const classList = document.querySelector('#note-form-container').classList;
    classList.toggle('hidden');
    classList.contains('hidden') ? document.querySelector('#note-form-btn').textContent = '+' : document.querySelector('#note-form-btn').textContent = '-';
    classList.contains('hidden') ? noteFormBtnWrapper.appendChild(noteFormBtn) : document.querySelector('#note-form-container').prepend(noteFormBtnWrapper.removeChild(noteFormBtn));
    noteFormBtn.classList.toggle('form-displayed');
});

document.querySelector('#note-form-submit-btn').addEventListener('click', () => {
    if (document.querySelector('form').checkValidity()){
        addTask(getFormContent());
        displayTasks(taskGroupList);
    }
});