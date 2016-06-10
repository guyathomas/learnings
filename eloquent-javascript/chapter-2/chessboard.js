size = 24;
var board = '';
for (var hori = 1; hori <= size; hori++) {
    if (hori % 2 === 0) {
        for (var vert = 1; vert <= size; vert++) {
            if (vert % 2 === 1) {
                board += "#";
            } else {
                board += " ";
            }
        }
    } else {
        for (var vert = 1; vert <= size; vert++) {
            if (vert % 2 === 1) {
                board += " ";
            } else {
                board += "#";
            }
        }
    }
    board += "\n";
}
console.log(board);