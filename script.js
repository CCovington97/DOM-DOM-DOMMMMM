document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.classList.add('container')
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.classList.add('add-square');
    // let box = document.createElement('div');
    button.appendChild(btnText);
    document.body.appendChild(button);
    document.body.appendChild(div);

    sqrCounter = 0

    button.addEventListener('click', function () {
        addSquare()
    })

    function addSquare() {
        let box = document.createElement('div');
        let boxId = document.createTextNode(sqrCounter);
        box.classList.add('box');
        box.id = sqrCounter;
        box.appendChild(boxId);
        div.appendChild(box);
        sqrCounter++;

        box.addEventListener('click', function () {
            let colors = ['blue', 'green', 'red', 'yellow',
                'purple', 'orange', 'turquoise', 'chartreuse',
                'pink', 'gold', 'violet', 'coral']

            box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        })

        box.addEventListener('dblclick', function () {
            if (box.id % 2 === 0) {
                console.log("This is even")
                if (document.body.contains(box.nextSibling)) {
                    box.nextSibling.remove();
                } else {
                    alert("There isn't a square after this!")
                }
            } else {
                console.log("This is odd")
                if (document.body.contains(box.previousSibling)) {
                    box.previousSibling.remove();
                } else {
                    alert("There isn't a square before this!")
                }
            }
        })
    }
})