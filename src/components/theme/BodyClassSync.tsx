"use client";

import { useEffect } from "react";
import { PAGE_CONFIGS, type PageKey } from "@/lib/pageConfig";

export function BodyClassSync({ page }: { page: PageKey }) {
    useEffect(() => {
        document.body.className = PAGE_CONFIGS[page].bodyClass;
    }, [page]);
    return null;
}
