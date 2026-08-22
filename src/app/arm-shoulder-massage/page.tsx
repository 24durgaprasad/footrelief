import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";
import { PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
    title: "Arm & Shoulder Massage",
};

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-10387.css",
				"post-4326.css",
				"post-4329.css",
                ]}
            />
            <PageShell page="arm-shoulder-massage">
                <div dangerouslySetInnerHTML={{ __html: PAGE_CONTENT["arm-shoulder-massage"] }} />
            </PageShell>
        </>
    );
}

