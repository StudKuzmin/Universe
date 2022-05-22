import * as manager from "../../controller/manager.js"
import Globe from 'react-globe.gl'
import {createRef, Component, useRef, useEffect, useState } from 'react'

export class FieldLife {
    #canvas = NaN;
    #context = NaN;
    #field = NaN;

    constructor(id){
        this.canvas = document.getElementById(id);

        this.context = this.canvas.getContext('2d');

        this.#field = new Array(200);

        for (let i = 0; i < this.#field.length; i++) {
            this.#field[i] = new Array(200);
        }
        for (let i = 0; i < this.#field.length; i++) {
            for (let j = 0; j < this.#field[0].length; j++)
            {
                this.#field[i][j] = 0;
            }
        }

        this.#createLife();
        // console.log(this.#field);
    }
    #getRandomValue(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    #createRed = () => {
        for (let i = 0; i < this.#getRandomValue(30, 60); i++)
        {
            let x = this.#getRandomValue(0, 200);
            let y = this.#getRandomValue(0, 200);
            this.drawPixel(x, y, 'red')
        }
    }
    #createBlack = () => {
        for (let i = 0; i < this.#getRandomValue(30, 60); i++)
        {
            let x = this.#getRandomValue(0, 200);
            let y = this.#getRandomValue(0, 200);
            this.drawPixel(x, y, 'black')
        }
    }
    #createWhite = () => {
        for (let i = 0; i < this.#getRandomValue(30, 60); i++)
        {
            let x = this.#getRandomValue(0, 200);
            let y = this.#getRandomValue(0, 200);

            this.#field[x][y] = 1;
            this.drawPixel(x, y, 'white')
        }
    }
    #createLife = () => {
        // this.#createRed();
        // this.#createBlack();
        this.#createWhite();
    }
    drawPixel = (x, y, color) => {
        let roundedX = Math.round(x);
        let roundedY = Math.round(y);
        this.context.fillStyle = color || '#000';
        this.context.fillRect(roundedX, roundedY, 1, 1);
    }


    showField = () => {
        this.canvas.className = 'showPlanetInfo';
    }
    hideField = () => {
        this.canvas.className = 'hidePlanetInfo';
    }
}