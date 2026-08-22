import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
    title: "Serene Foot Relief Lounge",
};

export default function HomePage() {
    return (
        <>
            <PageHead
                postCss={[
                    "post-14.css",
                    "post-2664.css",
                    "post-5596.css",
                    "post-5689.css",
                    "post-5710.css",
                    "post-5720.css",
                ]}
            />
            <PageShell page="home">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["home"] }} />
            </PageShell>
        </>
    );
}
