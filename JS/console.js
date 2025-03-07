function upDate(reviewPic)
{
    console.log("Event is triggered!");

    console.log("Source: ", reviewPic.src);
    console.log("Alt: ", reviewPic.alt);

    let display = document.getElementById("image");
    display.style.backgroundImage = `url('${reviewPic.src}')`;
    display.textContent = reviewPic.alt;
}

function undo()
{
    let display = document.getElementById("image");
    display.style.backgroundImage = "url('')";
    display.textContent = "Hover over an image below to display here.";
}

document.querySelectorAll(".reviewPic").forEach(img => {
    img.addEventListener("mouseover", function() {
        upDate(this);
    });
        
    img.addEventListener("mouseout", function() {
        undo();
    });

    img.addEventListener("focus", function() {
        console.log("Image focus");
        upDate(this);
    });

    img.addEventListener("blur", function() {
        console.log("Image blur");
        undo();
    });
})