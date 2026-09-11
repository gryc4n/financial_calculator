
/* ICON-CHANGER */

const sections = document.querySelectorAll(".section");

sections.forEach( section => {

    section.addEventListener("mouseenter", () => {
        
        const sectionIcon = section.querySelector(".section-icon");
        const nameIcon = sectionIcon.dataset.icon;

        sectionIcon.src = `/assets/icons/header-icons/blue/${nameIcon}.svg`;
    });

    section.addEventListener("mouseleave", () => {
    const sectionIcon = section.querySelector(".section-icon");
    const nameIcon = sectionIcon.dataset.icon;

    sectionIcon.src = `/assets/icons/header-icons/grey/${nameIcon}.svg`;
    });
});


