import type { HeaderActive } from "@/components/theme/Header";

export type PageKey =
    | "home"
    | "about"
    | "services"
    | "contact"
    | "foot-reflexology-foot-massage"
    | "hand-reflexology"
    | "head-massage"
    | "neck-back-massage"
    | "arm-shoulder-massage"
    | "full-body-relaxation-massage";

export interface PageConfig {
    postId: number;
    postTitle: string;
    bodyClass: string;
    active: HeaderActive;
}

const BODY_BASE =
    "wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-theme-revoza tt-magic-cursor fancy-scrollbar elementor-default elementor-template-full-width elementor-kit-10";

export const PAGE_CONFIGS: Record<PageKey, PageConfig> = {
    home: {
        postId: 14,
        postTitle: "Serene Foot Relief Lounge",
        bodyClass: `${BODY_BASE} home elementor-page elementor-page-14`,
        active: "home",
    },
    about: {
        postId: 1112,
        postTitle: "About Us",
        bodyClass: `${BODY_BASE} elementor-page elementor-page-1112`,
        active: "about",
    },
    services: {
        postId: 7055,
        postTitle: "Our Services",
        bodyClass: `${BODY_BASE} page-parent elementor-page elementor-page-7055`,
        active: "services",
    },
    contact: {
        postId: 6976,
        postTitle: "Contact Us",
        bodyClass: `${BODY_BASE} elementor-page elementor-page-6976`,
        active: "contact",
    },
    "foot-reflexology-foot-massage": {
        postId: 1601,
        postTitle: "Foot Reflexology & Foot Massage",
        bodyClass: `${BODY_BASE} page-child parent-pageid-7055 elementor-page elementor-page-1601`,
        active: "services",
    },
    "hand-reflexology": {
        postId: 10374,
        postTitle: "Hand Reflexology",
        bodyClass: `${BODY_BASE} page-child parent-pageid-7055 elementor-page elementor-page-10374`,
        active: "services",
    },
    "head-massage": {
        postId: 10362,
        postTitle: "Head Massage",
        bodyClass: `${BODY_BASE} page-child parent-pageid-7055 elementor-page elementor-page-10362`,
        active: "services",
    },
    "neck-back-massage": {
        postId: 10382,
        postTitle: "Neck & Back Massage",
        bodyClass: `${BODY_BASE} page-child parent-pageid-7055 elementor-page elementor-page-10382`,
        active: "services",
    },
    "arm-shoulder-massage": {
        postId: 10387,
        postTitle: "Arm & Shoulder Massage",
        bodyClass: `${BODY_BASE} page-child parent-pageid-7055 elementor-page elementor-page-10387`,
        active: "services",
    },
    "full-body-relaxation-massage": {
        postId: 10395,
        postTitle: "Full Body Relaxation Massage",
        bodyClass: `${BODY_BASE} page-child parent-pageid-7055 elementor-page elementor-page-10395`,
        active: "services",
    },
};
