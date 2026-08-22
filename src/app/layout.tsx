import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Serene Foot Relief Lounge",
        template: "%s | Serene Foot Relief Lounge",
    },
    description:
        "Relax your body, restore inner balance. Foot reflexology, hand reflexology, head, neck & back, arm & shoulder and full body relaxation massage therapies.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <style
                    id="sfrl-perf"
                    dangerouslySetInnerHTML={{
                        __html: "html{scroll-behavior:smooth}body *{background-attachment:scroll!important}.ata-site-logo-container{display:flex!important;align-items:center}.elementor-element-hero-subtitle p{color:#fff!important}.elementor-279 .elementor-element.elementor-element-5a9afd1 .ata-site-logo img{max-height:none!important;height:60px!important;width:auto!important;margin:-5px 0!important}@media(min-width:1025px){.elementor-279 .elementor-element.elementor-element-5a9afd1 .ata-site-logo img{height:76px!important;margin:-13px 0!important}}",
                    }}
                />
            </head>
            <body
                className="wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-theme-revoza tt-magic-cursor fancy-scrollbar elementor-default elementor-template-full-width elementor-kit-10"
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
