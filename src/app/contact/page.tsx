import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

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
                <div className="elementor">
                    <h1>Contact Us</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}
