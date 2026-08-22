import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = pageMetadata("neck-back-massage");

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-10382.css",
				"post-4326.css",
				"post-4329.css",
                ]}
            />
            <PageShell page="neck-back-massage">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["neck-back-massage"] }} />
            </PageShell>
        </>
    );
}

