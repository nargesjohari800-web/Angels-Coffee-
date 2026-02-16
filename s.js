document.addEventListener("DOMContentLoaded", () => {

    /* ===== منوی کناری ===== */
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");

    if (menuToggle && sideMenu) {
        menuToggle.addEventListener("click", () => {
            sideMenu.classList.toggle("active");
        });
    }

    /* ===== Contact Cafe ===== */
    const contactLink = document.getElementById("contactLink");
    const phoneItem = document.getElementById("phoneItem");

    if (contactLink && phoneItem) {
        contactLink.addEventListener("click", () => {
            phoneItem.classList.toggle("show");
        });
    }

    /* ===== Website Builder ===== */
    const builderLink = document.getElementById("builderLink");
    const websiteBuilder = document.getElementById("Websitebuilder");

    if (builderLink && websiteBuilder) {
        builderLink.addEventListener("click", () => {
            websiteBuilder.classList.toggle("show");
        });
    }

    /* ===== لایت‌باکس تصاویر ===== */
    const images = document.querySelectorAll(".item-image img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.style.cssText = `
                position:fixed;
                inset:0;
                background:rgba(0,0,0,0.8);
                display:flex;
                align-items:center;
                justify-content:center;
                z-index:9999;
            `;

            const bigImg = document.createElement("img");
            bigImg.src = img.src;
            bigImg.style.cssText = `
                max-width:90%;
                max-height:90%;
                border-radius:12px;
                box-shadow:0 20px 60px rgba(0,0,0,0.6);
            `;

            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => overlay.remove());
        });
    });

    /* ===== گالری اسلایدر ===== */
    const slider = document.getElementById("slider");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (slider && next && prev) {
        next.addEventListener("click", () => {
            slider.scrollBy({ left: 300, behavior: "smooth" });
        });

        prev.addEventListener("click", () => {
            slider.scrollBy({ left: -300, behavior: "smooth" });
        });
    }

});
