import React from "react";
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "}/>
                    <Skill title={"CSS"} description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Skill title={"React"} description={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
