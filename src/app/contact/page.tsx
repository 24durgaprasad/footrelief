import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";

export const metadata: Metadata = {
    title: "contact",
};

export default function Page() {
    return (
        <>
            <PageHead postCss={[
			"post-6976.css",
            ]} />
            <div className="elementor">
                <h1>contact</h1>
                <p>Placeholder — content migrated in Phase 3.</p>
            </div>
        </>
    );
}
