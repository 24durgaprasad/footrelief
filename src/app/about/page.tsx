import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

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
                <div className="elementor">
                    <h1>About Us</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}
