import {defineStore} from 'pinia'

export const useDarkModeStore=defineStore('darkModeStore', {
    state:()=> ({
        darkModeBool: false
    }),
    getters: {
        darkedGatter:(state)=> state.darkModeBool,
    },
    actions:{
        darkToggle(){
            this.darkModeBool = !this.darkModeBool;
        },
    },
});
