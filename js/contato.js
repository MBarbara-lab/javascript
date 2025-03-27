const inputs = document.querySelectorAll(".fordform");

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.style.border = "solid 2px blue";
        input.style.transition = "border 0.5s";
        }
    )

    input.addEventListener("blur", () => {
        input.style.border = "2px solid #cccccc";
    })
})

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.scale = "1.1";
    submitBtn.style.transition = "scale 0.5s";
})
submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.scale = "1";
})
