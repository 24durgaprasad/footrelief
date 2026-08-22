import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

export const metadata: Metadata = {
    title: "Hand Reflexology",
};

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
                <div className="elementor">
                    <h1>Hand Reflexology</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}
