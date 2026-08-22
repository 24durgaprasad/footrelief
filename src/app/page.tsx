import type { Metadata } from "next";
import { PageHead } from "@/components/VendorStyles";

export const metadata: Metadata = {
    title: "Serene Foot Relief Lounge",
};

export default function HomePage() {
    return (
        <>
            <PageHead
                postCss={[
                    "post-14.css",
                    "post-2664.css",
                    "post-5596.css",
                    "post-5689.css",
                    "post-5710.css",
                    "post-5720.css",
                ]}
            />
            <div className="elementor elementor-14">
                <h1>Step Into Complete Relaxation And Wellness</h1>
                <p>Placeholder — content migrated in Phase 3.</p>
            </div>
        </>
    );
}
