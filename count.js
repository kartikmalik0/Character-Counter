const textareaElement = document.getElementById('textarea');
const totalCounterElement = document.getElementById('total-counter')
const remainCounterElement = document.getElementById('remain-counter')
textareaElement.addEventListener("keyup", () => {
    updateCounter()
    updateRemain()

})


function updateCounter() {
    const maxLength = textareaElement.getAttribute("maxlength");
    const currentLength = textareaElement.value.length;
    totalCounterElement.innerText = currentLength;
    remainCounterElement.innerText = maxLength - currentLength;

}