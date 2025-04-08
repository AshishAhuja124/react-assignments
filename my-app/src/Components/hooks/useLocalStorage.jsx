import React from "react";

const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = (key) => {
    window.localStorage.getItem(key)
    return item ? JSON.parse(item) : undefined
  }
  return {setItem, getItem}

};

//in parent we can use as

// const {setItem, getItem} = useLocalStorage('value');

export default useLocalStorage;
