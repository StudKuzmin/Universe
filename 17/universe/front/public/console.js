// let i = 0;

getRandomValue = (min, max) =>
{
    return Math.round(Math.random() * (max - min) + min);
}
// drawPixel = (x, y, color) => {
//     if (color == 'dead')
//         this.context.clearRect(x, y, 1, 1);
//     else {
//         this.context.fillStyle = color || '#000';
//         this.context.fillRect(x, y, 1, 1);
//     }
    
// }

// self.onmessage = (e) => {
//     let canvas = e.data.canvas;
//     let ctx = canvas.getContext("2d");


//     let field = new Array(300);

//     for (let i = 0; i < field.length; i++) 
//     {
//         field[i] = new Array(300);
//     }
//     for (let i = 0; i < field.length; i++) 
//     {
//         for (let j = 0; j < field[0].length; j++)
//         {
//             switch(getRandomValue(0, 10))
//             {
//                 case(1): field[i][j] = 'red'; break;
//                 case(2): field[i][j] = 'white'; break;
//                 case(3): field[i][j] = 'black'; break;
//                 default: field[i][j] = 'dead'; break;
//             }
//         }
//     }

//     // setInterval(() => {
//     //     for (let i = 0; i < field.length; i++)
//     //         for (let j = 0; j < field.length; j++)
//     //         {
//     //             ctx.fillStyle = field[i][j] || '#000';
//     //             ctx.fillRect(i, j, 1, 1);
//     //         }
//     // }, 1000);
// };


self.onmessage = (e) => {
    console.log(e.data);
}