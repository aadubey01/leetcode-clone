'use client';


import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import PLayground from './Playground/PLayground';
import { Problem } from '@/utils/types/problem';


type WorkspaceProps = {
    problem :Problem
    
};

const Workspace:React.FC<WorkspaceProps> = ({problem}) => {
    
    return (
        <Split className='split' minSize={0}>
            <ProblemDescription problem={problem}/>
            <PLayground problem={problem}/>
            
        </Split>
    )
}
export default Workspace;