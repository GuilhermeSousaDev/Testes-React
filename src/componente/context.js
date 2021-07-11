import {createContext} from 'react';

  export const themes = {
        light:{background:'#fff',color:'#000'},
        dark:{background:'#000',color:'#fff'}
    }
    const {light,dark} = themes
export const themeContext = createContext({light,dark})