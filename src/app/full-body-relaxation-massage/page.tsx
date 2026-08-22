import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

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
                <div className="elementor">
                    <h1>Full Body Relaxation Massage</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}
