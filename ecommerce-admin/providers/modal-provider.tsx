"use client"

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMouted] = useState(false);

    useEffect(() => {
        setIsMouted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal/>
        </>
    );
};