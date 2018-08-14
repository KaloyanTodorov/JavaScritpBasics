let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// ctx.fillRect(20, 20, 50, 80);

// for (let row = 0; row < 8; row++) {
//     for (let column = 0; column < 8; column++) {
//         if ((row + column) % 2 === 0) {
//             let x = 25 + column * 50;
//             let y = 25 + row * 50;
//
//             ctx.fillRect(x, y, 50, 50);
//         }
//
//     }
//
// }

// ctx.beginPath();
// ctx.moveTo(20, 10);
// ctx.lineTo(20, 500);
// ctx.lineTo(120, 90);
//
// ctx.closePath();
//
// ctx.stroke();

// ctx.fill();
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false);
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
ctx.stroke();
// ctx.fill();