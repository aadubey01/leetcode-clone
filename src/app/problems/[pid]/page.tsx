

import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import React from 'react';


export async function generateStaticParams() {
    return Object.keys(problems).map((pid) => ({
      pid,
    }));
  }

type ProblemPageProps = {
    params: {
        pid: string;
      };
    
    
};

export default  function ProblemPage({ params }: { params: { pid: string } }) {
  // No need to 'await' params — just access it directly
  const problem: Problem | undefined = problems[params.pid];

  if (!problem) {
    return <div>Problem not found</div>;
  }

  const { handlerFunction, ...serializableProblem } = problem;

  return (
    <div>
      <Topbar problemPage />
      <Workspace problem={serializableProblem} />
    </div>
  );
}

// const ProblemPage = async({ params }: ProblemPageProps) => {
//     const problem: Problem | undefined = await getProblemData(params.pid);

//     if (!problem) {
//         return <div>Problem not found</div>;
//       }

//     const {handlerFunction,...serializableProblem} = problem;
//     return <div>
//         <Topbar problemPage/>
//         <Workspace problem={serializableProblem}/>
//     </div>
// }

// async function getProblemData(pid: string): Promise<Problem | undefined> {
//   try {
//     // Here, we simulate async fetching (In reality, you can fetch from DB, API, or static file)
//     const problem = problems[pid];
//     if (problem) {
//       return problem;
//     }
//     return undefined;
//   } catch (error) {
//     console.error('Error fetching problem data:', error);
//     return undefined;
//   }
// }


// export default ProblemPage;
//ssg -static site generation
//getStatticPaths



