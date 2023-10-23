document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = "(By me):";
    const paragraphText = "Family road trips are like mini getaways. My dad always takes charge of planning our adventures. One memorable trip was to the Smoky Mountains when I was just seven years old. My mom prepared these amazing meals that she stored in small containers, and we enjoyed them in the car and later in our cozy wood cabin. It was a much-needed break for my parents, and our breathing seemed to sync with the rhythm of the rolling mountains, ridge upon ridge. I thought it might be the last time we'd visit a national park before heading back home. Little did I know that it was just the beginning of a new family tradition. In my home country, every summer, we embark on a long car journey to the steppe. The drive typically spans one or two full days, much like our later visits to various national parks in the United States. What we cherished most was not just the destination but the journey itself. We spent a significant amount of time on the road, but those moments made us feel incredibly alive and free.";

    const typewriter = document.getElementById("typewriter");
    const paragraph = document.getElementById("paragraph");
    const audio = document.getElementById("audio");
    const popup = document.getElementById("popup");


    typewriter.innerHTML = typewriterText;

    paragraph.innerHTML = "";

    audio.play();

    let charIndex = 0;


    function typeWriter() {
        if (charIndex < paragraphText.length) {
            paragraph.innerHTML += paragraphText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); 
        } else {
            popup.style.display = "block";
        }
    }

    typeWriter();
});
