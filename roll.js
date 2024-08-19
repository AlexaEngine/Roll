var pos = 0;
const rollArray = [
    ['roll1.jpg', 'roll2.jpg', 'roll3.png', 'roll4.jpg'],
    ['roll5.png', 'roll6.jpg', 'roll7.png', 'roll8.png']
];
var direction = 0; // 0 = go right, 1 = go left
var focus = 0;

function Run() {
    let img = document.getElementById("roll");
    let imgWidth = img.width;
    focus = (focus + 1) % 4;
    direction = checkPageBounds(direction, imgWidth);
    img.src = rollArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    setTimeout(Run, 200);
}
function checkPageBounds(direction, imgWidth) {
    // Complete this to reverse direction on hitting page bounds
    if (pos <= 0) {
        direction = 0;
    } else if (pos + imgWidth >= window.innerWidth) {
        direction = 1;
    }
    return direction;
}
