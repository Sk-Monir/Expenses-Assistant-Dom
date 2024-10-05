// common shared script

//Shared function to get all input value
function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
// Shared function to get all TEXT value
function getTextValueById(id) {
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}

// HiddenElement
function hiddenElement(id) {
    const hidden = document.getElementById(id).classList.add('hidden');
    return hidden;
}
// ShowHiddenElement
function ShowHiddenElement(id) {
    const show = document.getElementById(id).classList.remove('hidden');
    return show;
}

function swapOption(id) {
    document.getElementById('assistant-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById('history-tab').classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById(id).classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
}