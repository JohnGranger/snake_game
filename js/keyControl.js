export function keyControl(event, the_snake) {
    switch (event.key) {
        case 'a':
        case 'A':
        case 'ArrowLeft':
            the_snake.moveLeft();
            break
        case 'w':
        case 'W':
        case 'ArrowUp':
            the_snake.moveUp();
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            the_snake.moveRight();
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            the_snake.moveDown();
            break;
        // default:
        //     the_snake.moveRight();
    }
}


