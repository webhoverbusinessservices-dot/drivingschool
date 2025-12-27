"use client"

import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PricingPackaging from "@/components/Frontend/PricingPackaging";

export default function Pricing() {
    return (
        <>
            {/* ====== HEADER SECTION ====== */}
            <Header />

            {/* ====== SECTION ====== */}
            <div className="">
                <PricingPackaging />
            </div>

            {/* ====== SECTION ====== */}
            {/* <AdvantageSection /> */}
            
            {/* ====== FOOTER SECTION ====== */}
            <Footer />
        </>
    );
}
