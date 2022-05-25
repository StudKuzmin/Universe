let i = 0;

getRandomValue = (min, max) =>
{
    return Math.round(Math.random() * (max - min) + min);
}
function f() {
    let field = new Array(5);

    for (let i = 0; i < field.length; i++) 
    {
        field[i] = new Array(5);
    }
    for (let i = 0; i < field.length; i++) 
    {
        for (let j = 0; j < field[0].length; j++)
        {
            switch(getRandomValue(0, 10))
            {
                case(1): field[i][j] = 'red'; break;
                case(2): field[i][j] = 'white'; break;
                case(3): field[i][j] = 'black'; break;
                default: field[i][j] = 'dead'; break;
            }
        }
    }

    self.postMessage(field);
}
f();