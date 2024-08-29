import React from "react";
import Script from "next/script";

const Scripts = () => {
  return (
    <React.Fragment>
      <Script
        src="/assets/vendors/jquery/jquery-3.6.0.min.js" 
        // strategy="lazyOnload"
        strategy="beforeInteractive"
      />
      <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/bootstrap-select/js/bootstrap-select.min.js" strategy="lazyOnload" />

      <Script src="/assets/vendors/isotope/isotope.js" strategy="lazyOnload" />
      <Script
        src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"
        strategy="lazyOnload"
      />

      <Script
        src="/assets/vendors/jquery-appear/jquery.appear.min.js"
        strategy="lazyOnload"
      />

      <Script
        src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/jquery-ui/jquery-ui.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/jquery-validate/jquery.validate.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/nice-select/jquery.nice-select.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/odometer/odometer.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/owl-carousel/owl.carousel.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/swiper/swiper.min.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/vendors/wnumb/wNumb.min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/wow/wow.js" strategy="lazyOnload" />
      <Script
        src="/assets/vendors/jarallax/jarallax.min.js"
        strategy="lazyOnload"
      />

      <Script src="/assets/vendors/gsap/gsap.js" strategy="lazyOnload" />
      <Script
        src="/assets/vendors/gsap/ScrollTrigger.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      <Script
      src="/assets/vendors/gsap/SplitText.js"
      strategy="lazyOnload"
    />
    <Script src="assets/vendors/gsap/ScrollTrigger.js" strategy="lazyOnload" />
    </React.Fragment>
  );
};

export default Scripts;
