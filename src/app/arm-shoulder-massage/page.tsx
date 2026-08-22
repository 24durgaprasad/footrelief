import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

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
                <div className="elementor">
                    <h1>Arm & Shoulder Massage</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}

