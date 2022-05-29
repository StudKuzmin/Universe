class Organisms {
    #field = NaN;
    #ctx = NaN;
    #year = 0;

    #drawPixel = (x, y, color) => {
        if (color == 'dead')
            this.ctx.clearRect(x, y, 1, 1);
        else {
            this.ctx.fillStyle = color || '#000';
            this.ctx.fillRect(x, y, 1, 1);
        }
    }
    #getRandomValue(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    createOrganisms = (ctx) => {
        this.ctx = ctx;
        this.#field = new Array(300);

        for (let i = 0; i < this.#field.length; i++) {
            this.#field[i] = new Array(300);
        }
        for (let i = 0; i < this.#field.length; i++) {
            for (let j = 0; j < this.#field[0].length; j++)
            {
                switch(this.#getRandomValue(0, 10))
                {
                    case(1): this.#field[i][j] = 'red'; break;
                    case(2): this.#field[i][j] = 'white'; break;
                    case(3): this.#field[i][j] = 'black'; break;
                    default: this.#field[i][j] = 'dead'; break;
                }
            }
        }
    }
    startLiving = () => {
        for (let i = 0; i < this.#field.length; i++)
            for (let j = 0; j < this.#field.length; j++)
                    this.#drawPixel(i, j, this.#field[i][j]);

        let lastIndex = this.#field.length - 1;

        let copyField = new Array(this.#field.length)
        for (let i = 0; i < this.#field.length; i++ )
        {
            copyField[i] = this.#field[i].slice();
        }

        for (let i = 0; i < this.#field.length; i++)
        {
            for (let j = 0; j < this.#field.length; j++)
            {
                let currentOrganism = copyField[i][j];
                let enemies = 0;

                let red = 0;
                let white = 0;
                let black = 0;

                let redEnemies = 0;
                let whiteEnemies = 0;
                let blackEnemies = 0;

                let l = j - 1;
                let r = j + 1;
                let t = i - 1;
                let b = i + 1;
                if (i == 0)
                    t = lastIndex;
                if (i == lastIndex)
                    b = 0;
                if (j == 0)
                    l = lastIndex;
                if (j == lastIndex)
                    r = 0; 

                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;
                if (copyField[t][l] != currentOrganism) enemies++;

                if (copyField[t][l] == 'red') red++;
                if (copyField[t][r] == 'red') red++;
                if (copyField[t][j] == 'red') red++;
                if (copyField[i][l] == 'red') red++;
                if (copyField[i][r] == 'red') red++;
                if (copyField[b][l] == 'red') red++;
                if (copyField[b][r] == 'red') red++;
                if (copyField[b][j] == 'red') red++;

                if (copyField[t][l] == 'black') black++;
                if (copyField[t][r] == 'black') black++;
                if (copyField[t][j] == 'black') black++;
                if (copyField[i][l] == 'black') black++;
                if (copyField[i][r] == 'black') black++;
                if (copyField[b][l] == 'black') black++;
                if (copyField[b][r] == 'black') black++;
                if (copyField[b][j] == 'black') black++;

                if (copyField[t][l] == 'white') white++;
                if (copyField[t][r] == 'white') white++;
                if (copyField[t][j] == 'white') white++;
                if (copyField[i][l] == 'white') white++;
                if (copyField[i][r] == 'white') white++;
                if (copyField[b][l] == 'white') white++;
                if (copyField[b][r] == 'white') white++;
                if (copyField[b][j] == 'white') white++;

                let organismsJSON = {};
                organismsJSON[red] = 'red';
                organismsJSON[black] = 'black';
                organismsJSON[white] = 'white';
                
                if (red != 0 || black != 0 || white != 0)
                    this.#field[i][j] = organismsJSON[Math.max(red, white, black)];
                if (currentOrganism == 'white' && white > 6)
                    this.#field[i][j] = 'dead';
                if (currentOrganism == 'black' && black > 6)
                    this.#field[i][j] = 'dead';
                if (currentOrganism == 'red' && red > 6)
                    this.#field[i][j] = 'dead';
            }
        }
        this.#year++;



        // TODO добавить вероятность гибели
        if (this.getSize('white') > 45000)
            for (let i = 0; i < this.#field.length; i++)
                for (let j = 0; j < this.#field.length; j++) 
                {
                    let mustDie = Math.random() < 0.5; // Bool random
                    if (this.#field[i][j] == 'white' && mustDie == true) this.#field[i][j] = 'dead';
                }
        if (this.getSize('red') > 45000)
            for (let i = 0; i < this.#field.length; i++)
                for (let j = 0; j < this.#field.length; j++)
                {
                    let mustDie = Math.random() < 0.5; // Bool random
                    if (this.#field[i][j] == 'red' && mustDie == true) this.#field[i][j] = 'dead';
                }
        if (this.getSize('black') > 45000)
            for (let i = 0; i < this.#field.length; i++)
                for (let j = 0; j < this.#field.length; j++)
                {
                    let mustDie = Math.random() < 0.5; // Bool random
                    if (this.#field[i][j] == 'black' && mustDie == true) this.#field[i][j] = 'dead';
                }

    }
    getOrganisms = () => {
        return this.#field;
    }
    getSize = (color) => {
        let count = 0;
        for(let i = 0; i < this.#field.length; i++)
            for (let j = 0; j < this.#field.length; j++)
                if (this.#field[i][j] == color) count++;
        return count;
    }
    addOrganism = (color) => {
        for(let i = 0; i < this.#field.length; i++)
            for (let j = 0; j < this.#field.length; j++)
            {
                let mustLive = Math.random() < 0.5;
                if(this.#field[i][j] == 'dead' && mustLive == true) this.#field[i][j] = color;
            }       
    }
    getYear = () => {
        return this.#year;
    }
}

const organisms = new Organisms();

self.onmessage = (e) => {
    if (typeof e.data == typeof new Object)
    {
        let canvas = e.data.canvas;
        let ctx = canvas.getContext("2d");
    
        organisms.createOrganisms(ctx);
        setInterval(() => {
            organisms.startLiving(ctx);
            self.postMessage({
                red: organisms.getSize("red"),
                black: organisms.getSize("black"),
                white: organisms.getSize("white"),
                year: organisms.getYear(),
            })
        });
    }
    else{
        organisms.addOrganism(e.data);
    }
}