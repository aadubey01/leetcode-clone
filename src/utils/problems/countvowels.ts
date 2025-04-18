import assert, { strictEqual } from "assert";
import { Problem } from '../types/problem'
import { Example } from "../types/problem";

export const countVowelsHandler =(fn:any) =>{
    try{
        const input = [
        
           {str:'hello'},
           {str:'programming'},
           {str:'openai'},
           {str:'javascript'},
           {str:'aeiou'},

        ]
        const output=[2,3,3,4,5];
        for(let i =0;i<input.length;i++){
            const result = fn(input[i].str)
            assert.strictEqual(result,output[i]);
        }
        return true;

    }catch(error:any){
        console.log("Error in function:", error.message)
        throw new Error(error)
    }
    
};

const starterCodeCountVowels = `function countVowels(str){
//Your Code Here
// };`;

export const countVowels:Problem ={
    id:"count-vowels",
    title :"3. Count Vowels",
    problemStatement:`<p class='mt-3'>Write a function <code>countVowels(str)</code> that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.</p>
    </p>`,
    examples:[
        {
            id: 1,
            inputText: "hello",
            outputText: "2",
            explanation: "The vowels in 'hello' are 'e' and 'o', so the count is 2.",
        },
        {
            id: 2,
            inputText: "programming",
            outputText: "3",
            explanation: "The vowels in 'programming' are 'o', 'a', and 'i', so the count is 3.",
        },
        {
            id: 3,
            inputText: "openai",
            outputText: "3",
            explanation: "The vowels in 'openai' are 'o', 'e', and 'a', so the count is 3.",
        },
        {
            id: 4,
            inputText: "javascript",
            outputText: "4",
            explanation: "The vowels in 'javascript' are 'a', 'a', 'i', and 'i', so the count is 4.",
        },
        {
            id: 5,
            inputText: "aeiou",
            outputText: "5",
            explanation: "All characters in 'aeiou' are vowels, so the count is 5.",
        },
    ],
    constraints:`<p class='mt-3'>The input string will only contain alphabetic characters (a-z, A-Z) and spaces.</p>`,
    order:3,
    starterCode:starterCodeCountVowels,
    handlerFunction: countVowelsHandler,
    starterFunctionName:"function countVowels("
    }
    
