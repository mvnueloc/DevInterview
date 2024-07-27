import { useState } from "react";

export function useLocalStorage(key, initValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        try {
            return item ? JSON.parse(item) : initValue;
        } catch (error) {
            console.log(error);
            return initValue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export function getLocalStorage(key) {
    try{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }catch(error){
        console.log("Error al obtener el valor del localStorage", error);
        return null;
    }
}