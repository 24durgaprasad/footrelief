import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = pageMetadata("hand-reflexology");

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-10374.css",
				"post-4326.css",
				"post-4329.css",
                ]}
            />
            <PageShell page="hand-reflexology">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["hand-reflexology"] }} />
            </PageShell>
        </>
    );
}
