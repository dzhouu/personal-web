import React, {JSX} from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./Home/Home";
import {About} from "./About/About";
import {SkillsPage} from "./Skills/Skills";
import {GearPage} from "./Gear/GearPage";

export const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<SkillsPage/>}/>
            <Route path="/gears" element={<GearPage/>}/>
        </Routes>
    );
};
