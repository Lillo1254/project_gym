'use client';
import { useEffect } from "react";
import { observerReveal } from "../../function/observer.js";

export default function ObserverImageHero({target, classAdd, percent = 0.3}:{target: string, classAdd: string, percent?: number}) {
    useEffect(() => {
        // Avvia l'osservatore al montaggio del componente
        observerReveal(target, classAdd, percent);
    }, [target, classAdd, percent]);

    return null;
}