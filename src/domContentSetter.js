// here the function takes the object containing the users' tasks and displays them.

import { updateStatus, applyDefaultStylesAtElementCreation } from "./taskStatusUpdater";

function displayTasks (obj) {
    const main = document.querySelector('#task-container');
    main.innerHTML = '';
    let keyIndex = 0;
    let cardIndex = 0;

    for (const arr of Object.values(obj)) {
        // here i create groups for each separate project the user can assign tasks to.

        const projectGroup = document.createElement('div');
        projectGroup.classList.add('project-group');
        projectGroup.setAttribute('id', arr + 'Group');
        const projectGroupInner = document.createElement('div');
        projectGroupInner.classList.add('project-group-inner');
        projectGroupInner.setAttribute('id', arr + 'GroupInner');

        const projectHeading = document.createElement('h3');
        projectHeading.textContent = Object.keys(obj)[keyIndex];
        keyIndex++;
        
        projectGroup.appendChild(projectHeading);
        projectGroup.appendChild(projectGroupInner);
        main.appendChild(projectGroup);
        addInputSuggestions(obj);
        for (const taskObj of arr) {
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.setAttribute('id', taskObj.id);

            const cardHeading = document.createElement('h4');
            cardHeading.textContent = taskObj.title;

            const cardDesc = document.createElement('p');
            cardDesc.textContent = taskObj.desc;
            cardDesc.classList.add('card-desc');

            const cardDeadline = document.createElement('p');
            const deadline = taskObj.deadline;
            cardDeadline.textContent = `${deadline.getDate()}/${deadline.getMonth() + 1}/${deadline.getFullYear()} ${deadline.getHours()}:${deadline.getMinutes()}`;
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


            
            cardBody.append(cardHeading, cardDesc, cardDeadline, cardProgressInput)
            projectGroupInner.appendChild(cardBody);
        }
    }
};

function addInputSuggestions (obj) {
    // here i add suggestions to the html datalist element, displaying existing p[roject names :)
    const htmlDataList = document.querySelector('#projects');

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