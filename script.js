/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   1. JOURNEY TABS — SLIDING TABS
========================================= */

const resumeTabs =
    document.querySelectorAll(".resume-tab");

const timelineContainers =
    document.querySelectorAll(".timeline-container");

const resumeTabsContainer =
    document.querySelector(".resume-tabs");


resumeTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        const target =
            tab.dataset.target;


        /* Move sliding indicator */

        if (resumeTabsContainer) {

            resumeTabsContainer.style.setProperty(
                "--tab-index",
                index
            );

        }


        /* Remove active from all tabs */

        resumeTabs.forEach((item) => {

            item.classList.remove("active");

        });


        /* Hide all timelines */

        timelineContainers.forEach((container) => {

            container.classList.remove("active");

        });


        /* Activate selected tab */

        tab.classList.add("active");


        /* Show selected timeline */

        const selectedTimeline =
            document.getElementById(target);


        if (selectedTimeline) {

            selectedTimeline.classList.add("active");


            /* Re-run animation for timeline items */

            selectedTimeline
                .querySelectorAll(".timeline-item")
                .forEach((item, itemIndex) => {

                    item.classList.remove("show");

                    setTimeout(() => {

                        item.classList.add("show");

                    }, 100 + itemIndex * 80);

                });

        }

    });

});


/* =========================================
   SET INITIAL SLIDER POSITION
========================================= */

const activeTab =
    document.querySelector(".resume-tab.active");


if (activeTab && resumeTabsContainer) {

    const activeIndex =
        Array.from(resumeTabs).indexOf(activeTab);

    resumeTabsContainer.style.setProperty(
        "--tab-index",
        activeIndex
    );

}



/* =========================================
   2. SMOOTH NAVIGATION
========================================= */

const navigationLinks =
    document.querySelectorAll(
        'nav a[href^="#"]'
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();


        const targetId =
            link.getAttribute("href");


        const targetSection =
            document.querySelector(targetId);


        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



/* =========================================
   3. SCROLL REVEAL
========================================= */

function revealOnScroll() {

    const revealElements =
        document.querySelectorAll(
            ".project, .skill-card, .interest-card, .timeline-item"
        );


    revealElements.forEach((element) => {

        const elementPosition =
            element.getBoundingClientRect().top;


        const windowHeight =
            window.innerHeight;


        if (
            elementPosition <
            windowHeight - 60
        ) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);



/* =========================================
   4. ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        "nav a"
    );


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================================
   5. MOBILE MENU
========================================= */

const header =
    document.querySelector("header");


const navigation =
    document.querySelector("nav");


if (
    header &&
    navigation
) {

    const menuButton =
        document.createElement("button");


    menuButton.className =
        "mobile-menu-button";


    menuButton.innerHTML = "☰";


    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );


    header.insertBefore(
        menuButton,
        navigation
    );


    menuButton.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "mobile-open"
            );

        }
    );


    /* Close menu when link clicked */

    navigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                }
            );

        });

}



/* =========================================
   6. PROJECT LINK
========================================= */

const projectLinks =
    document.querySelectorAll(
        ".project-link"
    );


projectLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            console.log(
                "Opening Phirati Chai project..."
            );

        }
    );

});



/* =========================================
   7. EMAIL LINKS
========================================= */

const emailLinks =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );


emailLinks.forEach((email) => {

    email.addEventListener(
        "click",
        () => {

            console.log(
                "Opening email client..."
            );

        }
    );

});



/* =========================================
   8. PHONE LINKS
========================================= */

const phoneLinks =
    document.querySelectorAll(
        'a[href^="tel:"]'
    );


phoneLinks.forEach((phone) => {

    phone.addEventListener(
        "click",
        () => {

            console.log(
                "Opening phone dialer..."
            );

        }
    );

});



/* =========================================
   9. PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);



/* =========================================
   10. BACK TO TOP BUTTON
========================================= */

const backToTop =
    document.createElement("button");


backToTop.innerHTML = "↑";


backToTop.className =
    "back-to-top";


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


document.body.appendChild(
    backToTop
);



/* Show back-to-top button */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }
);



/* Scroll to top */

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);