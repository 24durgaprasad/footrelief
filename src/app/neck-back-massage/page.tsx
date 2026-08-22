import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";
import { PageShell } from "@/components/theme/PageShell";

export const metadata: Metadata = {
    title: "Neck & Back Massage",
};

export default function Page() {
    return (
        <>
            <PageHead
                postCss={[
				"post-10382.css",
				"post-4326.css",
				"post-4329.css",
                ]}
            />
            <PageShell page="neck-back-massage">
                <div className="elementor">
                    <h1>Neck & Back Massage</h1>
                    <p>Placeholder — content migrated in Phase 3.</p>
                </div>
            </PageShell>
        </>
    );
}

