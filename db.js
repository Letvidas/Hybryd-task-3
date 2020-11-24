import * as React from 'react';
import Styled from 'styled-components/native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
      name: 'computersDB.db',
      location: '...\src\assets\computersDB.db'
    },
    () => {},
    error => {
      console.log(error);
    }
  );

  export function showComputers(){
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM Computers', 
    [],
    (_,results) => {
      var temp=[];
      for (let i = 0; i < results.rows.length; ++i){
        console.log(results.rows.item(i));
      }
    }
    )
  })}