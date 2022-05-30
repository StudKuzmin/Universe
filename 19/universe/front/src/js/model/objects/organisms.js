import * as manager from "../../controller/manager.js"
import Globe from 'react-globe.gl'
import {createRef, Component, useRef, useEffect, useState } from 'react'

class Organisms {
    #field = NaN;

    #getRandomValue(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    createOrganisms = () => {
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

    addOrganism = (color) => {
        for(let i = 0; i < this.#field.length; i++)
            for (let j = 0; j < this.#field.length; j++)
            {
                if (this.#field[i][j] == 'dead') this.#field[i][j] = color;
            }
    }

    getSize = (color) => {
        let count = 0;
        for(let i = 0; i < this.#field.length; i++)
            for (let j = 0; j < this.#field.length; j++)
                if (this.#field[i][j] == color) count++;

        return count;
            
    }
    
    getOrganisms = () => {
        return this.#field;
    }
    
}

export const organisms = new Organisms();