'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid with some nice default styling
mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
        primaryColor: '#e32c22', // ruby-red
        primaryTextColor: '#FAF9F6', // cream
        primaryBorderColor: '#b3211a', // ruby-red-dark
        lineColor: '#e7ad52', // ruby-gold
        secondaryColor: '#2a2624', // warm-card-bg
        tertiaryColor: '#1a1614', // warm-bg
        mainBkg: '#1a1614', // warm-bg
        nodeBorder: '#3d3835', // warm-border
        clusterBkg: '#2a2624', // warm-card-bg
        clusterBorder: '#3d3835', // warm-border
        defaultLinkColor: '#e32c22', // ruby-red
        titleColor: '#FAF9F6', // cream
        edgeLabelBackground: '#2a2624', // warm-card-bg
        nodeTextColor: '#FAF9F6', // cream
    }
});

const Mermaid = ({ chart }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current && chart) {
            mermaid.contentLoaded();
            // We use a unique ID for each chart to avoid collisions
            const id = 'mermaid-' + Math.random().toString(36).substr(2, 9);
            const renderChart = async () => {
                try {
                    const { svg } = await mermaid.render(id, chart);
                    if (ref.current) {
                        ref.current.innerHTML = svg;
                    }
                } catch (error) {
                    console.error('Mermaid rendering failed:', error);
                }
            };
            renderChart();
        }
    }, [chart]);

    return (
        <div className="flex justify-center my-12 p-8 rounded-3xl bg-[#2a2624]/50 border border-[#3d3835] backdrop-blur-sm overflow-x-auto">
            <div ref={ref} className="mermaid w-full flex justify-center" />
        </div>
    );
};

export default Mermaid;
