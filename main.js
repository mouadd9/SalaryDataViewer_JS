


const companies = ["OpenAi", "X", "Meta"];
const roles = ["Big data","AI" ];

// Create input buttons for every company and role represented in the data.

renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');
// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName){
    const container = document.createElement('section');
    container.setAttribute('id',`${groupName}Inputs`);

    let header = document.createElement('h3');
    header.innerText = `Select a ${groupName}`;
    container.appendChild(header);

    labels.forEach(label => {
        // Create the div holding the input and label elements.
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');
        // Create the radio input element.
        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('name', groupName);
        inputElement.setAttribute('value', label);
        divElement.appendChild(inputElement);
        // Create a label for that radio input element.
        let labelElement = document.createElement('label');
        labelElement.setAttribute('for', label);
        labelElement.innerText = label;
        divElement.appendChild(labelElement);

        //here it should be an event that will fire when clicking on an input 

        container.appendChild(divElement);
    });

    document.querySelector('main').prepend(container);
}

