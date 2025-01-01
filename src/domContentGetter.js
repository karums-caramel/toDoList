function getFormContent () {
    const title = document.querySelector('#title').value;
    const desc = document.querySelector('#desc').value;
    const deadline = new Date(document.querySelector('#deadline').value);
    const project = (document.querySelector('#project-group').value) ? document.querySelector('#project-group').value : '';

    return {title: title, desc: desc, deadline: deadline, project: project};
};

export {getFormContent};