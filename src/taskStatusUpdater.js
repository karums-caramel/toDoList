import { taskGroupList } from "./taskAdd";

// the argument 'e' is a click event on a #card-progress-input element. 

//  secondary function which changes the dom class to reflect one choice being selected

function updateDomStatus (e) {
    const choices = document.querySelectorAll('.card-option');
    const newChoice = e.target;

    function resetChoices () {
        choices.forEach((choice) => {
            choice.classList.remove('checked');
        })
    }
    resetChoices();
    newChoice.classList.add('checked');
};

// primary function that calls the secondaries after changing the status of the task in the taskGroupList imported from taskAdd.js.

function updateStatus (e) {
    const newChoice = e.target;

    if (newChoice.classList.contains('card-progress-input')){
        return;
    }

    for (const arr of Object.values(taskGroupList)) {
        for (const taskObj of arr) {
            if (taskObj.id = newChoice.parentNode.parentNode.id) {
                newChoice.classList.forEach((c) => {
                    if (c !== 'card-option' && c !== 'checked') {
                        taskObj.status = c;
                    }
                });

                updateDomStatus(e);
                setProgressStyling(e);
            }
        }
    }
}

// secondary function for styling the .card-bodies in the dom.

function setProgressStyling (e) {
    switch (true) {
        case (e.target.classList.contains('not-started')):
            e.target.parentNode.parentNode.style.borderTop = '0.2rem solid var(--not-quite-black)';
            break;
        case (e.target.classList.contains('started')):
            e.target.parentNode.parentNode.style.borderTop = '0.2rem solid orange';
            break;
        case (e.target.classList.contains('completed')):
            e.target.parentNode.parentNode.style.borderTop = '0.2rem solid var(--done-green)';
            break;
    }
}

// function called by domContentSetter.js upon creating the task cards.

function applyDefaultStylesAtElementCreation (taskObj, cardBody) {
    switch (true) {
        case (taskObj.status === 'not-started'):
            cardBody.style.borderTop = '0.2rem solid var(--not-quite-black)';
            break;
        case (taskObj.status === 'started'):
            cardBody.style.borderTop = '0.2rem solid orange';
            break;
        case (taskObj.status === 'completed'):
            cardBody.style.borderTop = '0.2rem solid var(--done-green)';
            break;
    }
}


export {updateStatus, applyDefaultStylesAtElementCreation};