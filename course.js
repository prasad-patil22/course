// let addbtn=document.getElementById('add_btn');
// addbtn.addEventListener('click',addchapater);

// function addchapater(e){
//     let currentbtn=e.currentTarget;
//     let currentInput=currentbtn.previousElementSibling
//     console.log(currentInput.value);
    
// }



// let addbtn = document.getElementById('add_btn');
// addbtn.addEventListener('click', addchapater);

// function addchapater(e) {
//     let currentbtn = e.currentTarget;
//     // Go to the parent '.input-group' and then find the input field
//     let currentInput = currentbtn.closest('.input-group').querySelector('input');
//     let currentchapterName=currentInput.value
    
   
//     //  console.log(currentInput.value);  // This will log the input value
//      let newli= document.createElement("li");
//     //  newli.classList.add('list-group-item');
//     newli.className="list-group-item d-flex  justify-content-between";
//      newli.innerHTML=` <h3 class="flex-grow-1">${currentchapterName}</h3>

//                 <button class="btn btn-warning mx-3">Edit</button>
//                 <button class="btn btn-danger">Remove</button>`

//      let parentList = document.getElementById('parentList');
//      parentList.appendChild(newli)
// }
   
// function removeChapter(currelement){
//    currelement.parentElement.remove()

// }






// let addbtn = document.getElementById('add_btn');
// addbtn.addEventListener('click', addChapter);
// let parentList = document.getElementById('parentList');

// function addChapter(e) {
//     let currentbtn = e.currentTarget;
//     // Go to the parent '.input-group' and then find the input field
//     let currentInput = currentbtn.closest('.input-group').querySelector('input');
//     let currentChapterName = currentInput.value;
    
//     // Create a new list item (li)
//     let newLi = document.createElement("li");
//     newLi.className = "list-group-item d-flex justify-content-between";
//     newLi.innerHTML = `
//         <h3 class="flex-grow-1">${currentChapterName}</h3>
//         <button class="btn btn-warning mx-3">Edit</button>
//         <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>
//     `;

//     // Append the new list item to the parent list
    
//     parentList.appendChild(newLi);
    
//     // Clear the input field after adding the chapter
//     currentInput.value = '';
// }

// function removeChapter(currentElement) {
//     // Remove the parent list item (li) from the list
//     currentElement.parentElement.remove();
//     let parentList = document.getElementById('parentList');
//     if(parentList.children.length<=0){
//         let newEmptymsg=document.createElement("h3");
//         newEmptymsg.textContent="Nothing is  Here!";
//         parentList.appendChild(newEmptymsg)
//     }
// }

// function  EditChapter(currelement){
//     let currentChapterName=currentElement.previousElementSibling.textContent
//     let currentInput=document.createElement('input');
//     currentInput.type="text";
//     currentInput.placeholder="Chapter name";
//     currentInput.className="form-control";
//     currentInput.value=currentChapterName


//     currelement.parentElement.replaceChild(currentInput,currentElement.previousElementSibling)


// }

let addbtn = document.getElementById('add_btn');
addbtn.addEventListener('click', addChapter);
let parentList = document.getElementById('parentList');

function addChapter(e) {
    let currentbtn = e.currentTarget;
    // Go to the parent '.input-group' and then find the input field
    let currentInput = currentbtn.closest('.input-group').querySelector('input');
    let currentChapterName = currentInput.value.trim();

    if (!currentChapterName) {
        alert("Please enter a chapter name.");
        return;
    }

    // Create a new list item (li)
    let newLi = document.createElement("li");
    newLi.className = "list-group-item d-flex justify-content-between align-items-center";
    newLi.innerHTML = `
        <h3 class="flex-grow-1 mb-0">${currentChapterName}</h3>
        <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
        <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>
    `;

    // Append the new list item to the parent list
    parentList.appendChild(newLi);

    // Clear the input field after adding the chapter
    currentInput.value = '';
}

function removeChapter(currentElement) {
    // Remove the parent list item (li) from the list
    currentElement.parentElement.remove();
}

function editChapter(currentElement) {
    let chapterNameElement = currentElement.previousElementSibling;
    let currentChapterName = chapterNameElement.textContent;

    // Create an input field with the current chapter name
    let currentInput = document.createElement('input');
    currentInput.type = "text";
    currentInput.placeholder = "Chapter name";
    currentInput.className = "form-control";
    currentInput.value = currentChapterName;

    // Replace the chapter name <h3> with the input field
    currentElement.parentElement.replaceChild(currentInput, chapterNameElement);

    // Change the "Edit" button to "Save" and update the onclick event
    currentElement.textContent = "Save";
    currentElement.className = "btn btn-success mx-3";
    currentElement.onclick = function () {
        saveChapter(currentElement, currentInput);
    };
}

function saveChapter(currentElement, currentInput) {
    let newChapterName = currentInput.value.trim();

    if (!newChapterName) {
        alert("Please enter a chapter name.");
        return;
    }

    // Create a new <h3> element with the updated chapter name
    let newChapterElement = document.createElement('h3');
    newChapterElement.className = "flex-grow-1 mb-0";
    newChapterElement.textContent = newChapterName;

    // Replace the input field with the updated chapter name
    currentElement.parentElement.replaceChild(newChapterElement, currentInput);

    // Change the "Save" button back to "Edit" and restore the original onclick event
    currentElement.textContent = "Edit";
    currentElement.className = "btn btn-warning mx-3";
    currentElement.onclick = function () {
        editChapter(currentElement);
    };
}
