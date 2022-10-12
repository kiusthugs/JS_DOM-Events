console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let nodeOne = document.getElementById("node1")
nodeOne.textContent = 'I used the getElementById(“node1”) method to access this'
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let nodeTwo = document.getElementsByClassName('node2')
nodeTwo[0].textContent = 'I used the getElementByClassName("node2") method to access this'
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let headThree = document.getElementsByTagName('h3')
for (let i = 0; i < headThree.length; i++) {
    headThree[i].textContent = 'I used the getElementByTagName("h3") method to access all of these'
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement('p')
p.textContent = 'This node was created using the createElement() method'
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector('#parent')
parent.appendChild(p)
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let link = document.createElement('a')
link.textContent = 'I am a <a> tag'
// BONUS: Add a link href to the <a>
link.href = 'https://www.w3schools.com/'
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(link, p)
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let pTwo = document.createElement('p')
let pNode = document.querySelector('#N1')
pTwo.textContent = 'New Child Node'
let exeThree = document.querySelector('#exercise-container3')
exeThree.replaceChild(pTwo, pNode)
// TODO: Remove the "New Child Node"
exeThree.removeChild(pTwo)

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement('ul')
// TODO: Iterate over the array values, and create a list item element for each
list.forEach(el => {
    let li = document.createElement('li')
    li.textContent = el
    ul.appendChild(li)
})
// TODO: Append the new list items to the unordered list element
let listContainer = document.querySelector('#container')
listContainer.appendChild(ul)
// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality