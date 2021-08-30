const countEl = document.getElementById("count-el")
const incrementBtn = document.querySelector("#increment-btn")
const decrementBtn = document.querySelector("#decrement-btn")



let count = 0

incrementBtn.addEventListener('click', function() {
    count += 1
    countEl.textContent = count
})

decrementBtn.addEventListener('click', function() {
    count -= 1
    countEl.textContent = count
})