console.log("Hello World")
const name = 'jeremy'
const greeting = `Hello, ${name}!`;
console.log(greeting);
const squares = [1,2,4,5].map(x => x * x);
console.log(squares);


//list.map(parameter => function )


const evens = [1,2,3,4,5,6,7].filter(x=>x%2 ===0);
console.log(evens);
//list.filter(parameter=> statement to filter variables)


const sortedAsc = [1,4,53,3,4,77].sort((a,b)=> a-b);
console.log(sortedAsc);

/** 
 * inline css
 * 
 * 
 * <p style = "color: green;"> this is green text.</p>
 * 
 * internal css
 * <style>
 * p{color:blue;}
 * external css
 *
 * <link rel="stylesheet" href = "styles.css"> 
 */