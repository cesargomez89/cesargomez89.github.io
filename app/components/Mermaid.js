'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid with some nice default styling
mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    themeVariables: {
        primaryColor: '#8b5cf6', // purple-500
        primaryTextColor: '#fff',
        primaryBorderColor: '#7c3aed', // purple-600
        lineColor: '#475569', // slate-500
        secondaryColor: '#1e293b', // slate-800
        tertiaryColor: '#0f172a', // slate-900
        mainBkg: '#0f172a', // slate-900
        nodeBorder: '#334155', // slate-700
        clusterBkg: '#1e293b', // slate-800
        clusterBorder: '#334155', // slate-700
        defaultLinkColor: '#8b5cf6', // purple-500
        titleColor: '#f8fafc', // slate-50
        edgeLabelBackground: '#1e293b', // slate-800
        nodeTextColor: '#f8fafc', // slate-50
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
        <div className="flex justify-center my-12 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm overflow-x-auto">
            <div ref={ref} className="mermaid w-full flex justify-center" />
        </div>
    );
};

export default Mermaid;
