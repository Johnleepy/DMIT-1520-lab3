// declare variables
const showResourcesBtn = document.querySelector('#show-resources');
const resources = document.querySelector('#resources');

// display resources on click
showResourcesBtn.addEventListener('click', onDisplayResources);
function onDisplayResources(event) {
    resources.classList.remove('d-none');
}

// bold entries on mouseover
resources.addEventListener('mouseover', onHighlightEntry);
function onHighlightEntry(event) {
    event.target.classList.add('fw-bold');
}

// reset entry format on mouseout
resources.addEventListener('mouseout', onResetEntryFormat);
function onResetEntryFormat(event) {
    event.target.classList.remove('fw-bold', 'fst-italic');
}

// italicize entries on click
resources.addEventListener('click', onItalicizeEntries);
function onItalicizeEntries(event) {
    event.target.classList.add('fst-italic');
}

