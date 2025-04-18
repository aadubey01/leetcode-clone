import assert from 'assert'
import { Problem } from '../types/problem'
   

export type Example ={
    id:number;
    inputText:string;
    outputText:string;
    explanation?:string;
    img?:string;
}
// export type Problem ={
//     id:string;
//     title:string;
//     problemStatement:string;
//     examples:Example[];
//     constraints:string;
//     order:number;
//     starterCode:string;
//     handlerFunctions:((fn:any)=>boolean)|string
// starterFunctionName:string
// }

const starterCodeAnagram = `function isAnagram(str1,str2){
    //Your Code here
    // };`;

const handlerAnagram = (fn:any):boolean=>{
    try{
        const input = [{
            str1:"listen",
            str2:"silent"
        },{
            str1:"hello",
            str2:"world"
        },{
            str1:"evil",
            str2:"vile"
        }];
        const output = [true,false,true];

        for(let i =0;i<input.length;i++){
            const result = fn(input[i].str1,input[i].str2)
            assert.strictEqual(result,output[i]);
        }
        return true;

    }
    catch(error:any){
        console.log("Error in function:", error.message);
         throw new Error(error)
        return false;
        

    }
}    

export const anagram:Problem ={
    id:"anagram",
    title:"1. Anagram",
    problemStatement:`<p class='mt-3'>
								You are given two strings<code>str1</code> and <code>str2</code>. Your Task is to  
								<em>determine whether the two strings are anagrams of each other</em> .
							</p>
							<p class='mt-3'>
								Two strings are considered<strong>anagrams</strong>, if they contain the same characters with the same frequencies, but possibly in a different order.
							</p>
							<p class='mt-3'>Return <code>true</code> if str1 and str2 are anagrams, return <code>false</code> otherwise</p>`,
    examples:[
    {
        id:1,
        inputText:"listen\nenlist",
        outputText:"true",
        explanation:"The two words are anagrams of each other.",
    }
    ,
    {
        id:2,
        inputText:"hello\nworld",
        outputText:"false",
        explanation:"The two words are not anagrams of each other.",
    },
    {
        id:3,
        inputText:"evil\nvile",
        outputText:"true",
        explanation:"The two words are anagrams of each other.",
    },
    ],
    constraints:`<li class='mt-2'>
									<code>1 ≤ str1.length ,str2.length <=10^5</code>
								</li>

								<li class='mt-2'>
                                    <code>str1, str2</code> consist of lowercase English letters.</li>
								`,
    handlerFunction:handlerAnagram,
    starterCode:starterCodeAnagram,
    order:1,
    starterFunctionName: "function isAnagram(",
}