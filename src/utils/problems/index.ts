import { Problem } from "../types/problem";
import { anagram } from "./anagram";
import { countVowels } from "./countvowels";
import { expenditureAnalysis } from "./expenditure";

interface ProblemMap{
    [key:string]:Problem
}
export const problems:ProblemMap = {
    "anagram": anagram,
    "expenditure-analysis": expenditureAnalysis,
    'count-vowels':countVowels
} 