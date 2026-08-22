"use client";

import { useEffect, useRef } from "react";

const V = "/assets/revoza";

type Step = { src: string; after?: "functionJs" } | { inline: string };

const SCRIPTS_HEAD = [`${V}/wp-includes/js/jquery/jquery.min.js`, `${V}/wp-includes/js/jquery/jquery-migrate.min.js`];

const WP_SCRIPTS = [`${V}/wp-includes/js/dist/hooks.min.js`, `${V}/wp-includes/js/dist/i18n.min.js`];

const THEME_SCRIPTS = [
    `${V}/wp-content/themes/revoza/assets/js/SmoothScroll.min.js`,
    `${V}/wp-content/themes/revoza/assets/js/gsap.min.js`,
    `${V}/wp-content/themes/revoza/assets/js/magiccursor.js`,
    `${V}/wp-content/themes/revoza/assets/js/SplitText.js`,
    `${V}/wp-content/themes/revoza/assets/js/ScrollTrigger.min.js`,
    `${V}/wp-content/themes/revoza/assets/js/three.min.js`,
];

const ELEMENTOR_PART_A = [
    `${V}/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js`,
    `${V}/wp-content/plugins/elementor/assets/js/frontend-modules.min.js`,
];

const ELEMENTOR_PART_B = [`${V}/wp-includes/js/jquery/ui/core.min.js`];

const ELEMENTOR_PART_C = [`${V}/wp-content/plugins/elementor/assets/js/frontend.min.js`];

const EKIT_PRE = [
    `${V}/wp-content/plugins/elementskit/assets/libs/jarallax/jarallax.js`,
    `${V}/wp-content/plugins/elementskit/modules/parallax/assets/js/parallax-admin.js`,
    `${V}/wp-content/plugins/elementor/assets/lib/jquery-numerator/jquery-numerator.min.js`,
];

const EKIT_CORE = [
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/core.js`,
    `${V}/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/core.js`,
    `${V}/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/creative-button.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/video.js`,
];

const EKIT_WIDGETS = [
    `${V}/wp-content/plugins/elementskit-lite/assets/libs/magnific-popup/jquery.magnific-popup.min.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/ekit-ui.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/accordion.js`,
    `${V}/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/testimonial.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/nav-menu.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/nav-menu.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/header-search.js`,
    `${V}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widgets/header-offcanvas.js`,
    `${V}/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/content-ticker.js`,
    `${V}/wp-content/plugins/elementskit/widgets/init/assets/js/widgets/vertical-menu.js`,
];

const LAZYLOAD_OBSERVER = `( function() {
  var lazyloadRunObserver = function() {
    var lazyloadBackgrounds = document.querySelectorAll( '.e-con.e-parent:not(.e-lazyloaded)' );
    var lazyloadBackgroundObserver = new IntersectionObserver( function( entries ) {
      entries.forEach( function( entry ) {
        if ( entry.isIntersecting ) {
          var lazyloadBackground = entry.target;
          if( lazyloadBackground ) {
            lazyloadBackground.classList.add( 'e-lazyloaded' );
          }
          lazyloadBackgroundObserver.unobserve( entry.target );
        }
      });
    }, { rootMargin: '200px 0px 200px 0px' } );
    lazyloadBackgrounds.forEach( function( lazyloadBackground ) {
      lazyloadBackgroundObserver.observe( lazyloadBackground );
    } );
  };
  var events = [ 'DOMContentLoaded', 'elementor/lazyload/observe' ];
  events.forEach( function( event ) { document.addEventListener( event, lazyloadRunObserver ); } );
} )();`;

function buildSteps(postId: number, postTitle: string): Step[] {
    const elementorConfig = JSON.stringify({
        environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
        i18n: {},
        is_rtl: false,
        breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
        responsive: {
            breakpoints: {
                mobile: { label: "Mobile Portrait", value: 767, default_value: 767, direction: "max", is_enabled: true },
                tablet: { label: "Tablet Portrait", value: 1024, default_value: 1024, direction: "max", is_enabled: true },
            },
        },
        version: "4.2.3",
        is_static: false,
        experimentalFeatures: { container: true, "nested-elements": true },
        urls: {
            assets: "/assets/revoza/wp-content/plugins/elementor/assets/",
            ajaxurl: "/assets/revoza/wp-admin/admin-ajax.php",
            uploadUrl: "/assets/revoza/wp-content/uploads",
        },
        swiperClass: "swiper",
        settings: { page: [], editorPreferences: [] },
        kit: {
            active_breakpoints: ["viewport_mobile", "viewport_tablet"],
            global_image_lightbox: "yes",
            lightbox_enable_counter: "yes",
            lightbox_enable_fullscreen: "yes",
            lightbox_enable_zoom: "yes",
            lightbox_title_src: "title",
            lightbox_description_src: "description",
        },
        post: { id: postId, title: postTitle, excerpt: "", featuredImage: false },
    });

    return [
        ...SCRIPTS_HEAD.map((src) => ({ src })),
        ...WP_SCRIPTS.map((src) => ({ src })),
        { inline: `wp.i18n.setLocaleData( { 'text direction\\u0004ltr': [ 'ltr' ] } );` },
        { inline: LAZYLOAD_OBSERVER },
        ...THEME_SCRIPTS.map((src) => ({ src })),
        { inline: `var theme_vars = {"theme_uri":"${V}/wp-content/themes/revoza"};` },
        { src: `${V}/wp-content/themes/revoza/assets/js/function.js`, after: "functionJs" as const },
        ...ELEMENTOR_PART_A.map((src) => ({ src })),
        { inline: `jQuery.uiBackCompat = true;` },
        ...ELEMENTOR_PART_B.map((src) => ({ src })),
        { inline: `var elementorFrontendConfig = ${elementorConfig};` },
        ...ELEMENTOR_PART_C.map((src) => ({ src })),
        ...EKIT_PRE.map((src) => ({ src })),
        { inline: `var ekit_config = {"ajaxurl":"${V}/wp-admin/admin-ajax.php","nonce":"","errorMessage":"Something went wrong. Please try again."};` },
        ...EKIT_CORE.map((src) => ({ src })),
        ...EKIT_WIDGETS.map((src) => ({ src })),
    ];
}

function runStep(step: Step): Promise<void> {
    return new Promise((resolve) => {
        const el = document.createElement("script");
        if ("inline" in step) {
            el.textContent = step.inline;
            document.body.appendChild(el);
            resolve();
            return;
        }
        el.src = step.src;        el.onload = () => resolve();
        el.onerror = () => {
            console.warn("[vendor-scripts] failed to load:", step.src);
            resolve();
        };
        document.body.appendChild(el);
    });
}

export function VendorScripts({ postId, postTitle }: { postId: number; postTitle: string }) {
    const started = useRef(false);
    useEffect(() => {
        if (started.current) return;
        started.current = true;

        let nativeLoadFired = document.readyState === "complete";
        if (!nativeLoadFired) {
            window.addEventListener("load", () => {
                nativeLoadFired = true;
            });
        }

        let chain = Promise.resolve();
        for (const step of buildSteps(postId, postTitle)) {
            chain = chain.then(() =>
                runStep(step).then(() => {
                    if (
                        "after" in step &&
                        step.after === "functionJs" &&
                        nativeLoadFired &&
                        typeof (window as unknown as { jQuery?: unknown }).jQuery !== "undefined"
                    ) {
                        (window as unknown as { jQuery: { (w: Window): { trigger(t: string): void } } }).jQuery(
                            window,
                        ).trigger("load");
                    }
                }),
            );
        }
    }, [postId, postTitle]);
    return null;
}
