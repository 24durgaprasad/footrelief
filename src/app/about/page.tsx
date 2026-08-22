import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
    title: "About Us",
};

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-1112.css",
                ]}
            />
            <PageShell page="about">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["about"] }} />
            </PageShell>
        </>
    );
}
