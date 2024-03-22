import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


export const AssetContext = createContext('gold');

const Grandpa = () => {
    const asset = 'diamond'
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                <section className="flex">
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunt></Aunt>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;



// 1.create a context and export it
// 2 add provider for the context with a value
// 3 use context to access in the value context api
// 