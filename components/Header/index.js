// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const head = document.createElement("div");
    const date = document.createElement("span");
    const h1 = document.createElement("h1");
    const temp = document.createElement("span");
    const container = document.querySelector('.header-container');
    
    head.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    container.appendChild(head);
    head.appendChild(date);
    head.appendChild(h1);
    head.appendChild(temp);
    

    date.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return head;
}

console.log(Header());
