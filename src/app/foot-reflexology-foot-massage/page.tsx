import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
    title: "Foot Reflexology & Foot Massage",
};

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-1601.css",
				"post-4326.css",
				"post-4329.css",
                ]}
            />
            <PageShell page="foot-reflexology-foot-massage">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["foot-reflexology-foot-massage"] }} />
            </PageShell>
        </>
    );
}

