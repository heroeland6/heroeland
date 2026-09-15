
    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    /* Close mobile menu after clicking link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


    /* =====================================================
       NOTIFICATION SYSTEM
    ===================================================== */

    function showNotification(message) {

        const notification =
            document.getElementById("notification");

        const text =
            document.getElementById("notificationText");

        text.textContent = message;

        notification.classList.add("show");

        setTimeout(() => {

            notification.classList.remove("show");

        }, 4000);

    }


    /* =====================================================
       APPOINTMENT FORM
    ===================================================== */

    const appointmentForm =
        document.getElementById("appointmentForm");

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("patientName").value;

        showNotification(
            "Thank you " +
            name +
            ". Your appointment request has been submitted."
        );

        appointmentForm.reset();

    });


    /* =====================================================
       PAYMENT FORM
    ===================================================== */

    const paymentForm =
        document.getElementById("paymentForm");

    paymentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        showNotification(
            "Payment interface opened. Connect this form to your payment gateway for live transactions."
        );

    });


    /* =====================================================
       PATIENT / STAFF LOGIN DEMO
    ===================================================== */

    function portalLogin(type) {

        const email =
            prompt(
                type +
                " Portal\n\nEnter your registered email:"
            );

        if (!email) {
            return;
        }

        showNotification(
            type +
            " portal login request received for " +
            email
        );

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    document.getElementById("year").textContent =
        new Date().getFullYear();


  /* =====================================================
       SIMPLE SCROLL ANIMATION
    ===================================================== */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    document
        .querySelectorAll(
            ".service-card, .platform-card, .article-card, .portal-card"
        )
        .forEach(card => {

            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            card.style.transition = "all .6s ease";

            observer.observe(card);

        });


