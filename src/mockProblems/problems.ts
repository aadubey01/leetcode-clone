export type Problem ={
    id:string;
    title:string;
    difficulty:string;
    category:string;
    order:number;
    videoId?:string;
} 


export const problems: Problem[] = [
	{
		id: "anagram",
		title: "Anagram",
		difficulty: "Easy",
		category: "String",
		order: 1,
		videoId: "",
	},
	{
		id: "expenditure-analysis",
		title: "Expenditure Analysis",
		difficulty: "Easy",
		category: "Objects",
		order: 2,
		videoId: "",
	},
	{
		id: "count-vowels",
		title: "Count Vowels",
		difficulty: "Medium",
		category: "String",
		order: 3,
		videoId: "",
	},
	{
		id: "debounce-function",
		title: "Debounce Function",
		difficulty: "Hard",
		category: "Asynchronous",
		order: 4,
		videoId: "",
	},
	{
		id: "async-js",
		title: "Create a counter in JavaScript",
		difficulty: "Easy",
		category: "Asynchronous",
		order: 5,
		videoId: "",
	},
	{
		id: "buisness-card",
		title: "Business Card",
		difficulty: "Medium",
		category: "React Basics",
		order: 6,
		videoId: "",
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "intervals",
		order: 7,
		videoId: "",
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		videoId: "4qYTqOiRMoM",
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 9,
		videoId: "",
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 10,
		videoId: "",
	},
];