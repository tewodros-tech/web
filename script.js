<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Navbar toggle
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Donation button toggle (if used)
    const donationButtons = document.querySelectorAll(".donation-type");
    if (donationButtons.length > 0) {
      donationButtons.forEach(button => {
        button.addEventListener("click", () => {
          donationButtons.forEach(btn => {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
          });
          button.classList.add("active");
          button.setAttribute("aria-pressed", "true");
        });
      });
    }

    // Carousel logic (if used)
    const slides = document.querySelectorAll(".carousel-image");
    let currentSlide = 0;
    let carouselInterval;

    function rotateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/szerintedmi/roadmap-radar-chart/tree/45ee5f9f7a1d44100313358e369abb025b935cea/README.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/Vignesh3MR/College-Website/tree/e3215f9018a3ddd2d282c0ed915f8a46fe5b2fc5/zita-website-master%2Fworkshop.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "2")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/markozugic/wp-themes/tree/cee414632a0f4d117616984eb614e0a539622477/wp-content%2Fthemes%2Fskrozzzfit%2Fheader.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "3")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/Minuri-Rajapaksha/Second-Glance-Online-Book-Store/tree/782639f7d5dac6d90cacc4b8d6197ea09514affc/Second%20Glance%20Readers%27%20Gardens%2Fminu_pages%2Fregister.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "4")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/prathmeshgodbole/the-creative-artist/tree/985c39b33cae4596e1d1c3bd0981c618b01742da/.history%2Fsrc%2Fpages%2FContact%2FContactForm_20210802124825.js?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "5")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/vs-docs/hacres-real-estate-html-template-corporate/tree/c1ab8ebdce320b279d650e270c990585541890d7/footer-widgets.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "6")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/je-rajesh/appio.me/tree/8f744c8441d753a9933423d63ba50436aead6be9/OLD%2Fgrablorweb%2Fresources%2Fviews%2Fform%2Fhome.blade.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "7")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/nsamardzic13/Exter/tree/e47ab570ee0e885de2d8fe043546f85e2199cf01/resources%2Fviews%2Ffooter.blade.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "8")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/Kamrun-Nahar-Liza/E-Covid-19-Support/tree/eb932f009c65b1ccf90c3fc5fa1a99933f09ff2a/resources%2Fviews%2FHomePages%2Fdoctorlist.blade.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "9")