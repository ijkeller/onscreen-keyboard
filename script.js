


document.addEventListener('keydown', addPressed);
document.addEventListener('keyup', removePressed);

function addPressed(e) {
    if ((document.getElementById(`${e.code}`)) === 'Tab') {
        console.log(`${e.code}`)
        e.preventDefault()
    }
    if ((document.getElementById(`${e.code}`)) === 'Qoute') {
        e.preventDefault()
    }
    if ((document.getElementById(`${e.code}`)) === 'Slash') {
        e.preventDefault()
    }
    document.getElementById(`${e.code}`).classList.add("pressed");
}

function removePressed(e) {
    document.getElementById(`${e.code}`).classList.remove("pressed");
}

// ---------------------------------------

// *** This code coppied from stackoverflow to fix tab bug ***
// https://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea

// ---------------------------------------

document.querySelector("textarea").addEventListener('keydown', function (e) {
    if (e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var target = e.target;
        var value = target.value;

        // set textarea value to: text before caret + tab + text after caret
        target.value = value.substring(0, start)
            + "\t"
            + value.substring(end);

        // put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        e.preventDefault();
    }
}, false);

// ---------------------------------------

// *** End copied code ***

// ---------------------------------------

