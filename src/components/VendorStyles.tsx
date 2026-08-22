const VENDOR_CSS_PRE = [
    "/assets/revoza/wp-content/plugins/elementor/assets/css/frontend.min.css",
    "/assets/revoza/wp-content/uploads/elementor/css/post-279.css",
    "/assets/revoza/wp-content/uploads/elementor/css/post-280.css",
    "/assets/revoza/wp-content/plugins/contact-form-7/includes/css/styles.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css",
    "/assets/revoza/wp-content/uploads/elementor/css/post-10.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-heading.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-counter.min.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/common.css",
    "/assets/revoza/wp-content/plugins/elementskit/widgets/init/assets/css/creative-button.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-image.min.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/button.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/icon-box.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-rating.min.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/business-hours.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-text-path.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-nested-accordion.min.css",
    "/assets/revoza/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css",
    "/assets/revoza/wp-includes/js/mediaelement/wp-mediaelement.min.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/assets/libs/magnific-popup/magnific-popup.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/video.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/social.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/accordion.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-divider.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/testimonial.css",
];

const VENDOR_CSS_POST = [
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/nav-menu.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/header-search.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/header-offcanvas.css",
    "/assets/revoza/wp-content/plugins/elementskit-lite/widgets/init/assets/css/header-info.css",
    "/assets/revoza/wp-content/themes/revoza/assets/css/css-variable.css",
    "/assets/revoza/wp-content/themes/revoza/assets/css/all.min.css",
    "/assets/revoza/wp-content/themes/revoza/assets/css/bootstrap.min.css",
    "/assets/revoza/wp-content/themes/revoza/style.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min.css",
    "/assets/revoza/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css",
    "/assets/revoza/wp-content/plugins/elementskit/widgets/init/assets/css/content-ticker.css",
    "/assets/revoza/wp-content/plugins/elementskit/widgets/init/assets/css/vertical-menu.css",
];

const UPLOADS = "/assets/revoza/wp-content/uploads/elementor/css";

export function PageHead({ postCss = [] }: { postCss?: string[] }) {
    return (
        <>
            {VENDOR_CSS_PRE.map((href) => (
                <link key={href} rel="stylesheet" href={href} />
            ))}
            {postCss.map((id) => (
                <link key={id} rel="stylesheet" href={`${UPLOADS}/${id}`} />
            ))}
            {VENDOR_CSS_POST.map((href) => (
                <link key={href} rel="stylesheet" href={href} />
            ))}
        </>
    );
}
