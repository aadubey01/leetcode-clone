import assert from "assert";
import { Problem } from '../types/problem'
import { Example } from "../types/problem";

const starterCodeExpenditureAnalysis = `function analyzeExpenditure(expenditures) {
//Your code here
}`

const handlerExpenditureAnalysis=(fn:any)=>{
    try{
        const transactions1 = [
            {
                id: 1,
                timestamp: 1656076800000,
                price: 10,
                category: 'Food',
                itemName: 'Pizza',
              },
        ];
        const transactions2 = [
            {
                id: 1,
                timestamp: 1656076800000,
                price: 10,
                category: 'Food',
                itemName: 'Pizza',
              },
              {
                id: 2,
                timestamp: 1656259600000,
                price: 20,
                category: 'Food',
                itemName: 'Burger',
              },
              {
                id: 3,
                timestamp: 1656019200000,
                price: 15,
                category: 'Clothing',
                itemName: 'T-Shirt',
              },
              {
                id: 4,
                timestamp: 1656364800000,
                price: 30,
                category: 'Electronics',
                itemName: 'Headphones',
              },
              {
                id: 5,
                timestamp: 1656105600000,
                price: 25,
                category: 'Clothing',
                itemName: 'Jeans',
              },
            
        ];
        const transactions3 = [{}]

        const result1 = fn(transactions1);
    const result2 = fn(transactions2);
    const result3 = fn(transactions3);

        const expected1 = {
            totalExpenditure: 10,
            averageExpenditure: 10,
            categoryWiseExpenditure: { Food: 10 },
            mostExpensiveItem: { itemName: 'Pizza', price: 10 },
        };
        const expected2 = {
            totalExpenditure: 100,
            averageExpenditure: 20,
            categoryWiseExpenditure: { Food: 30, Clothing: 40, Electronics: 30 },
            mostExpensiveItem: { itemName: 'Headphones', price: 30 },
        };
        const expected3 = {
            totalExpenditure: 0,
            averageExpenditure: 0,
            categoryWiseExpenditure: {},
            mostExpensiveItem: null,
        };

        assert.deepStrictEqual(result1, expected1);
        assert.deepStrictEqual(result2, expected2);
        assert.deepStrictEqual(result3, expected3);

        return true;

    }
    catch(error:any){
        console.log("Error in function:", error.message);
        throw new Error(error)
    }
};

export const expenditureAnalysis :Problem ={
    id:"expenditure-analysis",
    title:"2. Expenditure Analysis",
    problemStatement:`<p class='mt-3'>
    Implement a function<code>analyzeExpenditure</code> which takes a list of transactions as parameter and return
    <em>a list of objects where each object is unique category-wise and has total price spent as its value</em> transactions is an array where each Transaction - an object like <code>
     {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}</code>
  </p>
  <p class='mt-3'>
    You may assume that  input can have <strong>multiple categories</strong>,
  </p>
  <p class='mt-3'></p>`,
  examples:[
    {
        id:1,
        inputText:`[
            {
                id: 1,
                timestamp: 1656076800000,
                price: 10,
                category: 'Food',
                itemName: 'Pizza',
              },
          ]`,
        outputText:`[
            {
                category: 'Food',
                totalSpent: 10,
              },
          ]`,
        explanation:"The total spent in the Food category is 10.",
    },
    {
        id:2,
        inputText:`[
            {
                id: 1,
                timestamp: 1656076800000,
                price: 10,
                category: 'Food',
                itemName: 'Pizza',
              },
              {
                id: 2,
                timestamp: 1656259600000,
                price: 20,
                category: 'Food',
                itemName: 'Burger',
              },
              {
                id: 3,
                timestamp: 1656019200000,
                price: 15,
                category: 'Clothing',
                itemName: 'T-Shirt',
              },
              {
                id: 4,
                timestamp: 1656364800000,
                price: 30,
                category: 'Electronics',
                itemName: 'Headphones',
              },
              {
                id: 5,
                timestamp: 1656105600000,
                price: 25,
                category: 'Clothing',
                itemName: 'Jeans',
              },
            
          ]`,
        outputText:`[
            {
                category:'Food',
                totalSpent :30
            },
            {
               category:'Clothing',
               totalSpent :40 
            },
            {
               category:'Electronics',
               totalSpent :30 
            }
          ]`,
        explanation:"The total spent in each category is calculated correctly.",
    },


    ],
    
  constraints:`<li class='mt-2'>
  All <code>price</code> are non-negative integers.
</li> <li class='mt-2'>
<code>category</code> will always be non-empty string.
</li> <li class='mt-2'>
<code>timestamp</code> can be assumed to be valid and in milliseconds.
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
handlerFunction: handlerExpenditureAnalysis,
starterCode:starterCodeExpenditureAnalysis,
order:2,
starterFunctionName:"Function analyzeExpenditure("

}