import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

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
                <div className="elementor">
                    <h1>Foot Reflexology & Foot Massage</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}

