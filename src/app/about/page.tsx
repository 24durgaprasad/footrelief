import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";

export const metadata: Metadata = {
    title: "about",
};

export default function Page() {
    return (
        <>
            <PageHead postCss={[
			"post-1112.css",
            ]} />
            <div className="elementor">
                <h1>about</h1>
                <p>Placeholder — content migrated in Phase 3.</p>
            </div>
        </>
    );
}
