import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
    title: "Our Services",
};

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-7055.css",
                ]}
            />
            <PageShell page="services">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["services"] }} />
            </PageShell>
        </>
    );
}
