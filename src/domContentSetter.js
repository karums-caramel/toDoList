// here the function takes the object containing the users' tasks and displays them.

import { updateStatus, applyDefaultStylesAtElementCreation, deleteTask, expandOrHideGroup } from "./taskStatusUpdater";

function displayTasks (obj) {
    const main = document.querySelector('#task-container');
    main.innerHTML = '';
    let keyIndex = 0;
    let cardIndex = 0;
    if (!obj) return;

    for (const arr of Object.values(obj)) {
        // here i create groups for each separate project the user can assign tasks to.
        
        const projectGroup = document.createElement('div');
        projectGroup.classList.add('project-group');
        projectGroup.setAttribute('id', arr + 'Group');
        const projectGroupInner = document.createElement('div');
        projectGroupInner.classList.add('project-group-inner');
        projectGroupInner.setAttribute('id', Object.keys(obj)[keyIndex]);

        const projectHeading = document.createElement('h3');
        projectHeading.textContent = Object.keys(obj)[keyIndex];
        projectHeading.classList.add('project-heading');
        keyIndex++;

        const projectExpandBtn = document.createElement('div');
        projectExpandBtn.classList.add('project-expand-btn');
        projectExpandBtn.textContent = 'Hide';
        projectExpandBtn.addEventListener(('click'), (e) => {
            expandOrHideGroup(e)
        })
        
        projectGroup.append(projectHeading, projectExpandBtn, projectGroupInner);
        main.appendChild(projectGroup);
        addInputSuggestions(obj);
        for (const taskObj of arr) {
            // here if create all of the elements for displaying the individual todolist tasks.

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.setAttribute('id', taskObj.id);

            const cardHeading = document.createElement('h4');
            cardHeading.textContent = taskObj.title;
            cardHeading.classList.add('card-heading');

            // button attached to each task for deleting it.
            const cardDelBtn = document.createElement('div');
            cardDelBtn.classList.add('card-del-btn');
            cardDelBtn.textContent = 'x';
            cardDelBtn.addEventListener('click', (e) => {
                deleteTask(e);
            })

            const cardDesc = document.createElement('p');
            cardDesc.textContent = taskObj.desc;
            cardDesc.classList.add('card-desc');

            const cardDeadline = document.createElement('p');
            cardDeadline.textContent = taskObj.deadline;
            cardDeadline.classList.add('card-deadline');

            const cardProgressInput = document.createElement('div');
            cardProgressInput.classList.add('card-progress-input');
            const cardNotStarted = document.createElement('div');
            cardNotStarted.classList.add('card-option', 'not-started');
            cardNotStarted.textContent = 'Not started';
            const cardInProgress = document.createElement('div');
            cardInProgress.classList.add('card-option', 'started');
            cardInProgress.textContent = 'In progress';
            const cardCompleted = document.createElement('div');
            cardCompleted.classList.add('card-option', 'completed');
            cardCompleted.textContent = 'Completed!';
            cardProgressInput.append(cardNotStarted, cardInProgress, cardCompleted);

            applyDefaultStylesAtElementCreation(taskObj, cardBody);

            cardProgressInput.addEventListener('click', (e) => {
                updateStatus(e);
            });


            
            cardBody.append(cardHeading, cardDelBtn, cardDesc, cardDeadline, cardProgressInput)
            projectGroupInner.appendChild(cardBody);
        }
    }
};

function addInputSuggestions (obj) {
    // here i add suggestions to the html datalist element, displaying existing project names :)
    const htmlDataList = document.querySelector('#projects');
    htmlDataList.innerHTML = '';

    for (const project of Object.keys(obj)) {
        const option = document.createElement('option');
        option.setAttribute('value', project);
        option.textContent = project;
        htmlDataList.appendChild(option);
    };
}



/*function displayTasks (obj) {
    const main = document.querySelector('#task-container');
    main.innerHTML = '';
    for (const arr in obj) {
        // here i create groups for each separate project the user can assign tasks to.

        const projectGroup = document.createElement('div');
        projectGroup.classList.add('project-group');
        projectGroup.setAttribute('id', arr + 'Group');

        const projectHeading = document.createElement('h3');
        projectHeading.textContent = arr;
        
        projectGroup.appendChild(projectHeading);
        main.appendChild(projectGroup);
        for (const taskObj in Object.values(arr)) {
            console.log(typeof(taskObj));
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardHeading = document.createElement('h4');
            cardHeading.textContent = taskObj.title;

            cardBody.appendChild(cardHeading);
            projectGroup.appendChild(cardBody);
        }
    }
};*/

export {displayTasks};