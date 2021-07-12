import { DataTable } from "../../components/DataTable";
import { Header } from "../../components/Header";
import { ModalForm } from "../../components/ModalForm";
import { SideMenu } from "../../components/SideMenu";
import React, { useState, useContext } from 'react';
import Store, { Context } from "../../../state/Store";
import firebase from "firebase";
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Download from "../../components/DownloadExcel";



firebase.initializeApp({
  apiKey: "AIzaSyB7AgjgengXz4XV3udEAmbekFuCiE6k0PM",
  authDomain: "amppli.firebaseapp.com",
  projectId: "amppli",
  storageBucket: "amppli.appspot.com",
  messagingSenderId: "352036860454",
  appId: "1:352036860454:web:acc6dafd6074ac93df6ce7",
  measurementId: "G-VP4MJY8CFS"
});

const firestore = firebase.firestore();


const App = ()  =>  {

  


  return (
    <Store >
      
      <Header />
      <SideMenu />
      <DataTable />

    </Store>
  );
}

export default App;
