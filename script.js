const $smykoil = document.querySelector('#smykoil')
const $app = document.querySelector('#app')

const UP_DIRECTION = 0
const DOWN_DIRECTION = 1
const RIGHT_DIRECTION = 0
const LEFT_DIRECTION = 1

const offset = {
    top: 0,
    left: 0
}

const speed = { x: 15, y: 3 }

const direction = {
    y: UP_DIRECTION,
    x: RIGHT_DIRECTION
}

function tick() {
    calcTop()
    calcLeft()

    $smykoil.style.top = `${offset.top}px`
    $smykoil.style.left = `${offset.left}px`

    requestAnimationFrame(tick)
}

function calcTop() {
    switch(direction.y) {
        case UP_DIRECTION: 
            direction.y = offset.top <= (1 + speed.y) ? DOWN_DIRECTION : UP_DIRECTION
            offset.top -= speed.y
            break;
        case DOWN_DIRECTION: 
            direction.y = offset.top >= $app.clientHeight - $smykoil.clientHeight - speed.y ? UP_DIRECTION : DOWN_DIRECTION
            offset.top += speed.y
            break;
    }
}

function calcLeft() {
    switch(direction.x) {
        case LEFT_DIRECTION: 
            direction.x = offset.left <= (1 + speed.x) ? RIGHT_DIRECTION : LEFT_DIRECTION
            offset.left -= speed.x
            break;
        case RIGHT_DIRECTION: 
            direction.x = offset.left >= $app.clientWidth - $smykoil.clientWidth - speed.x ? LEFT_DIRECTION : RIGHT_DIRECTION
            offset.left += speed.x
            break;
    }
}

requestAnimationFrame(tick)