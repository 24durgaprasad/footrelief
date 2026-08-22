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
                        __html: "html{scroll-behavior:smooth}body *{background-attachment:scroll!important}",
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
