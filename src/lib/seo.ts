import type { Metadata } from "next";
import type { PageKey } from "./pageConfig";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://serene-foot-relief-lounge.vercel.app";

type SeoEntry = { path: string; title: string; description: string };

const SEO: Record<PageKey, SeoEntry> = {
    home: {
        path: "",
        title: "Serene Foot Relief Lounge",
        description:
            "Serene Foot Relief Lounge in Bangalore offers foot reflexology, head, neck, back, hand and full body relaxation massages for stress relief, better circulation and deep relaxation.",
    },
    about: {
        path: "/about",
        title: "About Us",
        description:
            "Learn about Serene Foot Relief Lounge, Bangalore's trusted foot reflexology and wellness center dedicated to relaxation, balance, and natural healing.",
    },
    services: {
        path: "/services",
        title: "Our Services",
        description:
            "Explore our reflexology services: foot reflexology, head massage, hand reflexology, neck & back massage, arm & shoulder massage, and full body relaxation.",
    },
    contact: {
        path: "/contact",
        title: "Contact Us",
        description:
            "Book your reflexology session at Serene Foot Relief Lounge, Bangalore. Call +91 83273 63636 or visit us - open all days, 10:30 AM to 9:00 PM.",
    },
    "foot-reflexology-foot-massage": {
        path: "/foot-reflexology-foot-massage",
        title: "Foot Reflexology & Foot Massage",
        description:
            "Foot reflexology & foot massage in Bangalore. Pressure-point therapy that relaxes the body, improves circulation, and restores energy flow. Open all days.",
    },
    "hand-reflexology": {
        path: "/hand-reflexology",
        title: "Hand Reflexology",
        description:
            "Hand reflexology therapy in Bangalore. Gentle pressure on palm reflex points that soothes tired hands and encourages deep full-body relaxation.",
    },
    "head-massage": {
        path: "/head-massage",
        title: "Head Massage",
        description:
            "Relaxing head massage in Bangalore. Rhythmic scalp, neck & shoulder strokes that release stress, ease tension headaches, and improve sleep quality.",
    },
    "neck-back-massage": {
        path: "/neck-back-massage",
        title: "Neck & Back Massage",
        description:
            "Neck & back massage in Bangalore. Flowing, controlled techniques that loosen spinal stiffness, relieve shoulder tension, and restore easy movement.",
    },
    "arm-shoulder-massage": {
        path: "/arm-shoulder-massage",
        title: "Arm & Shoulder Massage",
        description:
            "Arm & shoulder massage in Bangalore. Warming strokes and targeted pressure that release knots, ease heaviness, and restore upper-body comfort.",
    },
    "full-body-relaxation-massage": {
        path: "/full-body-relaxation-massage",
        title: "Full Body Relaxation Massage",
        description:
            "Full body relaxation massage in Bangalore. A head-to-toe calming session combining gentle strokes and reflexology for complete renewal of mind and body.",
    },
};

export function pageMetadata(page: PageKey): Metadata {
    const entry = SEO[page];
    return {
        title: entry.title,
        description: entry.description,
        alternates: { canonical: entry.path || "/" },
        openGraph: {
            title: entry.title,
            description: entry.description,
            url: entry.path || "/",
            siteName: "Serene Foot Relief Lounge",
            type: "website",
        },
    };
}

export function seoEntries(): Array<SeoEntry & { url: string }> {
    return Object.values(SEO).map((e) => ({ ...e, url: `${SITE_URL}${e.path}` }));
}
