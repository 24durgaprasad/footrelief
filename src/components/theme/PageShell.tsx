import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { VendorScripts } from "./VendorScripts";
import { BodyClassSync } from "./BodyClassSync";
import { PAGE_CONFIGS, type PageKey } from "@/lib/pageConfig";

export function PageShell({ page, children }: { page: PageKey; children?: ReactNode }) {
    const cfg = PAGE_CONFIGS[page];
    return (
        <>
            <BodyClassSync page={page} />
            <Header active={cfg.active} />
            {children}
            <Footer />
            <VendorScripts postId={cfg.postId} postTitle={cfg.postTitle} />
        </>
    );
}
