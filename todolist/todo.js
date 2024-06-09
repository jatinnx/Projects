const addbox = document.querySelector('.searchbox')
const addbtn = document.querySelector('.addbtn')
const taskList = document.querySelector('.task-list')

const addTask = async (query) => {
    const taskDiv = document.createElement('div')
    taskDiv.innerHTML = `
    <form >
      <input type="checkbox" id="checkboxs" class="form-check-input checkInput">
      <label for="checkboxs" class="form-check-label checkLable">${query}</label>
    </form>
              `
    taskList.appendChild(taskDiv);

    
}

addbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const addinput = addbox.value.trim();
    if (addinput) {
        addTask(addinput);
        addbox.value = ''; // Clear the input box after adding the task
    }
})



taskList.addEventListener('change', (e) => {
    if (e.target.classList.contains('form-check-input')) {
        const label = e.target.nextElementSibling;
        if (e.target.checked) {
            label.textContent = ;
        }
    }
});