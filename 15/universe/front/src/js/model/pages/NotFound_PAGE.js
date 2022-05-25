import '../../../classes.css'
import * as manager from '../../controller/manager.js'
import React, { useState, Component, useRef, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'

export const NotFound_PAGE = () => {
    let notFoundRef = useRef(null);

    useEffect(() => {
        // console.log(notFoundRef.current);
        manager.lottieAnimation.notFoundAnimation(notFoundRef.current);
    }, []);

    return (
        <div ref={notFoundRef}></div>
    );
}