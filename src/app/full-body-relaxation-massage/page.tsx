import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";

export const metadata: Metadata = {
    title: "full-body-relaxation-massage",
};

export default function Page() {
    return (
        <>
            <PageHead postCss={[
			"post-10395.css",
			"post-4326.css",
			"post-4329.css",
            ]} />
            <div className="elementor">
                <h1>full-body-relaxation-massage</h1>
                <p>Placeholder — content migrated in Phase 3.</p>
            </div>
        </>
    );
}
