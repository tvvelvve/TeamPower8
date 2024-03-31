// "use client"

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const BoxPlot: React.FC = () => {
//     const svgRef = useRef<SVGSVGElement>(null);
//     const data = { e: 10, a: 30, d: 40, f: 53, g: 70, i: 90, j: 200 }; // Sample data
//     const newData = { k: 120 };

//     useEffect(() => {
//         const dataArray = Object.values(data); // Extract values from the object
//         const newDataArray = Object.values(newData);

//         if (dataArray.length === 0) return;

//         const width = 500; // Example width
//         const height = 150; // Example height
//         const margin = { top: 20, right: 50, bottom: 50, left: 40 };
//         const innerWidth = width - margin.left - margin.right;
//         const innerHeight = height - margin.top - margin.bottom;

//         const svg = d3.select(svgRef.current)
//             .attr('width', width)
//             .attr('height', height)
//             .append('g')
//             .attr('transform', `translate(${margin.left}, ${margin.top})`);

//         const yScale = d3.scaleBand()
//             .domain(['Box Plot'])
//             .range([margin.top, innerHeight])
//             .padding(0.1);

//         const xScale = d3.scaleLinear()
//             .domain([d3.min(dataArray)!, d3.max(dataArray)!])
//             .nice()
//             .range([margin.left, innerWidth]);

//         const g = svg.append('g')
//             .attr('transform', `translate(${margin.left},${margin.top})`);

//         // Draw box plot
//         const boxPlotGroup = g.append('g');

//         const boxHeight = yScale.bandwidth();

//         Object.entries(data).forEach(([key, value]) => {
//             // For each key-value pair in the data object
//             boxPlotGroup.append('rect')
//                 .attr('y', yScale('Box Plot') - 20)
//                 .attr('x', xScale(d3.quantile(dataArray, 0.25)))
//                 .attr('height', 40)
//                 .attr('width', xScale(d3.quantile(dataArray, 0.75)) - xScale(d3.quantile(dataArray, 0.25)))
//                 .attr('fill', 'rgba(0, 0, 0, 0.01)');
//             // Draw circles
//             const jitter = Math.random() * 10 - 5; // Generate random jitter within range [-5, 5]
//             boxPlotGroup.append('circle')
//                 .attr('cy', yScale('Box Plot'))
//                 .attr('cx', xScale(value)) // Add jitter to x position
//                 .attr('r', key === 'a' ? 12 : 8) // 'a' has a bigger circle
//                 .attr('fill', 'steelblue');
//         });


//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot') - 20)
//             .attr('y2', yScale('Box Plot') + 20)
//             .attr('x1', xScale(d3.quantile(dataArray, 0.5)))
//             .attr('x2', xScale(d3.quantile(dataArray, 0.5)))
//             .attr('stroke', 'black');

//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot') - 20)
//             .attr('y2', yScale('Box Plot') + 20)
//             .attr('x1', xScale(d3.min(dataArray)!))
//             .attr('x2', xScale(d3.min(dataArray)!))
//             .attr('stroke', 'black')
//             .attr('stroke-width', 0.5)
//             .attr('stroke-dasharray', '3');

//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot') - 20)
//             .attr('y2', yScale('Box Plot') + 20)
//             .attr('x1', xScale(d3.max(dataArray)!))
//             .attr('x2', xScale(d3.max(dataArray)!))
//             .attr('stroke', 'black')
//             .attr('stroke-width', 0.5)
//             .attr('stroke-dasharray', '3');
        
//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot') - 20)
//             .attr('y2', yScale('Box Plot') + 20)
//             .attr('x1', xScale(d3.quantile(dataArray, 0.25)))
//             .attr('x2', xScale(d3.quantile(dataArray, 0.25)))
//             .attr('stroke', 'black')

        
//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot') - 20)
//             .attr('y2', yScale('Box Plot') + 20)
//             .attr('x1', xScale(d3.quantile(dataArray, 0.75)))
//             .attr('x2', xScale(d3.quantile(dataArray, 0.75)))
//             .attr('stroke', 'black')

//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot'))
//             .attr('y2', yScale('Box Plot'))
//             .attr('x1', xScale(d3.min(dataArray)!))
//             .attr('x2', xScale(d3.quantile(dataArray, 0.25)))
//             .attr('stroke', 'black')
        
//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot'))
//             .attr('y2', yScale('Box Plot'))
//             .attr('x1', xScale(d3.quantile(dataArray, 0.75)))
//             .attr('x2', xScale(d3.max(dataArray)!))
//             .attr('stroke', 'black')
        
//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot')-20)
//             .attr('y2', yScale('Box Plot')-20)
//             .attr('x1', xScale(d3.quantile(dataArray, 0.25)))
//             .attr('x2', xScale(d3.quantile(dataArray, 0.75)))
//             .attr('stroke', 'black')
        
//         boxPlotGroup.append('line')
//             .attr('y1', yScale('Box Plot')+20)
//             .attr('y2', yScale('Box Plot')+20)
//             .attr('x1', xScale(d3.quantile(dataArray, 0.25)))
//             .attr('x2', xScale(d3.quantile(dataArray, 0.75)))
//             .attr('stroke', 'black')

//         Object.entries(data).forEach(([key, value]) => {
//             // For each key-value pair in the data object
//             boxPlotGroup.append('rect')
//                 .attr('y', yScale('Box Plot') - 20)
//                 .attr('x', xScale(d3.quantile(dataArray, 0.25)))
//                 .attr('height', 40)
//                 .attr('width', xScale(d3.quantile(dataArray, 0.75)) - xScale(d3.quantile(dataArray, 0.25)))
//                 .attr('fill', 'rgba(0, 0, 0, 0.01)');
//             // Draw circles
//             const jitter = Math.random() * 10 - 5; // Generate random jitter within range [-5, 5]
//             boxPlotGroup.append('circle')
//                 .attr('cy', yScale('Box Plot'))
//                 .attr('cx', xScale(value)) // Add jitter to x position
//                 .attr('r', key === 'a' ? 12 : 8) // 'a' has a bigger circle
//                 .attr('fill', 'steelblue');
//         });


        
        
//         boxPlotGroup.append('circle')
//             .attr('cy', yScale('Box Plot'))
//             .attr('cx', xScale(newDataArray[0])) // x position for the new red circle
//             .attr('r', 12) // red circle radius
//             .attr('fill', 'red');

        
//         const xAxis = d3.axisBottom(xScale);

//         g.append('g')
//             .attr('class', 'x-axis')
//             .call(xAxis)
//             .attr("transform", `translate(0, ${innerHeight})`);

//     }, [data]);

//     return (
//         <svg ref={svgRef}></svg>
//     );
// }

// export default BoxPlot;




"use client"


import React, { useRef, useEffect, useState } from 'react';
import Boxplot from './components/boxplot';
import CurrentPrices from './components/currentprices';
import CurrentPricesMFLG from './components/currentprices-mflg';
import OptimisedPrices from './components/optimisedprice';
import DiscreteSlider from './components/slidebar'; // Import DiscreteSlider component
import './pricebar.css';

const PriceBar = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [data,setData] = useState({ e: 10, a: 30, mflg: 40, f: 53, g: 70, i: 90, j: 200 }); // State for data
    const [newData, setNewData] = useState({ k: 50 }); // State for newData
    const [sliderValue, setSliderValue] = useState(50);// State for newData
    const width = 500;
    const height = 150;

    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };



    const handleUpdateData = () => {
        // Clear the original data and newData
        setData({});
        setNewData({});
    
        // Clear the SVG element containing the original Boxplot and prices circles
        const svg = svgRef.current;
        if (svg) {
            while (svg.firstChild) {
                svg.removeChild(svg.firstChild);
            }
        }
    
        // Delay the addition of new data to ensure the original data is cleared
        setData({ e: 10, a: 30, mflg: 40, f: 53, g: 70, i: 90, j: 200 });
        setNewData({ k: sliderValue })
    };
    
    

    return (
        <div className="container">
            <div className="boxplot-container">
                <svg ref={svgRef} style={{
                    width: '100%',
                    height: '100%', // Set height to 100% to fill the container
                    display: 'block'
                }}>
                    <g transform={`translate(${svgRef.current ? svgRef.current.clientWidth / 2 : 0}, ${svgRef.current ? svgRef.current.clientHeight / 2 : 0})`}>
                        <Boxplot data={data} svgRef={svgRef} width={width} height={height} />
                    </g>
                </svg>
                <div className="content">
                    <div className="prices">
                        <h2>Slide to choose percentile</h2>
                        {/* Render DiscreteSlider component here */}
                        <div className="slider-button-container">
                            <DiscreteSlider handleChange={handleSliderChange} />
                            <button onClick={handleUpdateData}>Show optimised price</button>
                        </div>
                        {/* Pass handleSliderChange as a prop */}
                        <CurrentPrices data={data} svgRef={svgRef} width={width} height={height} />
                        <CurrentPricesMFLG data={data} svgRef={svgRef} width={width} height={height} />
                        <OptimisedPrices data={data} newData={newData} svgRef={svgRef} width={width} height={height}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceBar;
