import React from "react";
import { createContext,useContext,useReducer } from "react";

export const DataLayerContext=createContext()

export const DataLayer=({initial,reducer,children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initial)}>
        {children}
    </DataLayerContext.Provider>
)


export const useDataValues=()=>useContext(DataLayerContext);