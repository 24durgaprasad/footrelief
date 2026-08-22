import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
    title: "Contact Us",
};

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-6976.css",
                ]}
            />
            <PageShell page="contact">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["contact"] }} />
            </PageShell>
        </>
    );
}
