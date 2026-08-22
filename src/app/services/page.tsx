import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

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
                <div className="elementor">
                    <h1>Our Services</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}
