const resizer = document.getElementById('resizer')
const firstPane = document.getElementById('editor-pane')
const secondPane = document.getElementById('preview-pane')

//initial declaration of cursor co ordinates
let x = 0
let y = 0

//initial declaration of width of left side
let firstWidth = 0

function resize(e) {
    x = e.clientX //get cursor x coords
    y = e.clientY //get cursor y coords
    firstWidth = firstPane.getBoundingClientRect().width

}