import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
    title: "Full Body Relaxation Massage",
};

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-10395.css",
				"post-4326.css",
				"post-4329.css",
                ]}
            />
            <PageShell page="full-body-relaxation-massage">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["full-body-relaxation-massage"] }} />
            </PageShell>
        </>
    );
}
