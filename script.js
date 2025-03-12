document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll to sections
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove("active"));

            // Add active class to clicked link
            link.classList.add("active");

            // Get the target section
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});
