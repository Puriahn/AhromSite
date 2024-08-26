import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function CirculeChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && chartRef.current) {
      d3.select(chartRef.current).selectAll("*").remove();

      const chartDetails = {
        btc: { percentage: 45, color: "#FF9500", name_fa: "\u0628\u06cc\u062a\u06a9\u0648\u06cc\u0646" },
        eth: { percentage: 17.43, color: "#404877", name_fa: "\u0627\u062a\u0631\u06cc\u0648\u0645" },
        trx: { percentage: 11.08, color: "#FF2826", name_fa: "\u062a\u0631\u0648\u0646" },
        usdt: { percentage: 10.18, color: "#00B095", name_fa: "\u062a\u062a\u0631" },
        xrp: { percentage: 7.13, color: "#23292E", name_fa: "\u0631\u06cc\u067e\u0644" },
        doge: { percentage: 6.47, color: "#C5A01F", name_fa: "\u062f\u0648\u062c \u06a9\u0648\u06cc\u0646" },
        cash: { percentage: 2.71, color: "#084642", name_fa: "\u0648\u062c\u0647 \u0646\u0642\u062f" }
      };

      const dataCardDetailsChart = Object.values(chartDetails).map(item => item.percentage.toFixed(2));
      const colorsCardDetailsChart = Object.values(chartDetails).map(item => item.color);
      const faNamesCardDetailsChart = Object.values(chartDetails).map(item => item.name_fa);

      const widthCardDetailsChart = chartRef.current.offsetWidth;
      const heightCardDetailsChart = chartRef.current.offsetHeight;
      const minOfWH = Math.min(widthCardDetailsChart, heightCardDetailsChart) / 2;
      const initialAnimDelay = 300;
      const arcAnimDelay = 150;
      const arcAnimDur = 3000;
      const secDur = 1000;
      const secIndividualdelay = 150;
      const windowWidth = window.innerWidth;

      let radius = minOfWH > 200 ? 200 : minOfWH;

      const svgCardDetailsChart = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", widthCardDetailsChart)
        .attr("height", heightCardDetailsChart)
        .append("g")
        .attr("transform", `translate(${widthCardDetailsChart / 2}, ${heightCardDetailsChart / 2})`);

      let aw, bw, cw;
      switch (true) {
        case windowWidth <= 375:
          aw = 0.4;
          bw = 0.25;
          cw = 0.45;
          break;
        case windowWidth > 375 && windowWidth <= 768:
          aw = 0.5;
          bw = 0.35;
          cw = 0.65;
          break;
        case windowWidth > 768:
          aw = 0.6;
          bw = 0.45;
          cw = 0.85;
          break;
      }

      // Arc generators
      const arc = d3.arc().outerRadius(radius * aw).innerRadius(radius * bw);

      const outerArc = d3.arc().innerRadius(radius * cw).outerRadius(radius * cw);

      const pie = d3
        .pie()
        .value(d => d)
        // Increase the gap between slices by setting a larger padAngle
        .padAngle(0.03); // Increased from 0.03 to 0.05 for more space between slices

      // Animation function
      const draw = () => {
        svgCardDetailsChart.append("g").attr("class", "lines");
        svgCardDetailsChart.append("g").attr("class", "slices");
        svgCardDetailsChart.append("g").attr("class", "labels");

        const slice = svgCardDetailsChart
          .select(".slices")
          .selectAll("path")
          .data(pie(dataCardDetailsChart))
          .enter()
          .append("path")
          .attr("fill", (d, i) => colorsCardDetailsChart[i])
          .attr("d", arc)
          .attr("transform", "rotate(-180, 0, 0)")
          .style("opacity", 0)
          .transition()
          .delay((d, i) => i * arcAnimDelay + initialAnimDelay)
          .duration(arcAnimDur)
          .ease(d3.easeElasticOut.amplitude(1).period(0.8)) // More elastic feel
          .style("opacity", 1)
          .attr("transform", "rotate(0, 0, 0)");

        slice.transition()
          .delay((d, i) => arcAnimDur + i * secIndividualdelay)
          .duration(secDur)
          .attr("stroke-width", "5px");

        const midAngle = d => d.startAngle + (d.endAngle - d.startAngle) / 2;

        // Text Labels
        const text = svgCardDetailsChart
          .select(".labels")
          .selectAll("text")
          .data(pie(dataCardDetailsChart))
          .enter()
          .append("text")
          .attr("dy", "0.35em")
          .style("opacity", 0)
          .style("font-size", "13px") // Set smaller font size
          .style("fill", (d, i) => colorsCardDetailsChart[i]) // Set color based on chart slice
          .text((d, i) => `${dataCardDetailsChart[i]}% - ${faNamesCardDetailsChart[i]}`)
          .attr("transform", d => {
            const pos = outerArc.centroid(d);
            pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
            pos[1]=pos[1]*1.3
            return `translate(${pos})`;
            
          })
          .style("text-anchor", d => (midAngle(d) < Math.PI ? "start" : "end"))
          .transition()
          .delay((d, i) => arcAnimDur + i * secIndividualdelay)
          .duration(secDur)
          .style("opacity", 1);

        // Polyline (Dotted Lines)
        svgCardDetailsChart
          .select(".lines")
          .selectAll("polyline")
          .data(pie(dataCardDetailsChart))
          .enter()
          .append("polyline")
          .style("opacity", 0.5)
          .attr("stroke-dasharray", "4 2") // Dotted line style
          .style("fill", "none") // No fill for the lines
          .attr("stroke", "#000") // Color of the dotted lines
          .attr("points", d => {
            const pos = outerArc.centroid(d);
            pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
            return [arc.centroid(d), arc.centroid(d), arc.centroid(d)];
          })
          .transition()
          .duration(secDur)
          .delay((d, i) => arcAnimDur + i * secIndividualdelay)
          .attr("points", d => {
            const pos = outerArc.centroid(d);
            pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
            pos[1]=pos[1]*1.27
            return [arc.centroid(d), arc.centroid(d), pos];
          });
      };

      draw();
    }
  }, []);

  return (
    <section className="mx-auto max-w-5xl py-5 flex justify-center">
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[500px]">
        <div ref={chartRef} id="detailChart" className="DetailChart w-full h-full absolute" dir="ltr"></div>
      </div>
    </section>
  );
}


/* 


const CirculeChart = () => {
  useEffect(() => {
    const chartDetails = {
      usdt: { percentage: 42.76, color: "#00B095", name_fa: "تتر" },
      btc: { percentage: 29.51, color: "#FF9500", name_fa: "بیتکوین" },
      eth: { percentage: 9.76, color: "#404877", name_fa: "اتریوم" },
      trx: { percentage: 6.66, color: "#FF2826", name_fa: "ترون" },
      xrp: { percentage: 5.09, color: "#23292E", name_fa: "ریپل" },
      cash: { percentage: 3.89, color: "#084642", name_fa: "وجه نقد" },
      doge: { percentage: 2.33, color: "#C5A01F", name_fa: "دوج کوین" },
    };

    const dataCardDetailsChart = Object.values(chartDetails).map((item) =>
      item.percentage.toFixed(2)
    );
    const colorsCardDetailsChart = Object.values(chartDetails).map(
      (item) => item.color
    );
    const faNamesCardDetailsChart = Object.values(chartDetails).map(
      (item) => item.name_fa
    );

    const drawChart = () => {
      const container = document.querySelector(".DetailChart");
      if (!container) return;

      const widthCardDetailsChart = container.offsetWidth;
      const heightCardDetailsChart = container.offsetHeight;
      const minOfWH = Math.min(widthCardDetailsChart, heightCardDetailsChart) / 2;
      const initialAnimDelay = 300;
      const arcAnimDelay = 150;
      const arcAnimDur = 3000;
      const secDur = 1000;
      const secIndividualdelay = 150;
      const windowWidth = window.innerWidth;

      let radius = minOfWH > 200 ? 200 : minOfWH;

      d3.select(container).select("svg").remove(); // Remove previous SVG if exists

      const svgCardDetailsChart = d3
        .select(container)
        .append("svg")
        .attr("width", widthCardDetailsChart)
        .attr("height", heightCardDetailsChart)
        .append("g");

      const transformHeight =
        windowWidth <= 375
          ? heightCardDetailsChart / 2
          : heightCardDetailsChart / 2 + 20;

      svgCardDetailsChart.attr(
        "transform",
        `translate(${widthCardDetailsChart / 2}, ${transformHeight})`
      );

      let aw, bw, cw;

      if (windowWidth <= 375) {
        aw = 0.4;
        bw = 0.25;
        cw = 0.45;
      } else if (windowWidth > 375 && windowWidth <= 768) {
        aw = 0.5;
        bw = 0.35;
        cw = 0.65;
      } else if (windowWidth > 768) {
        aw = 0.6;
        bw = 0.45;
        cw = 0.85;
      }

      const arc = d3.arc().outerRadius(radius * aw).innerRadius(radius * bw);
      const outerArc = d3.arc().innerRadius(radius * cw).outerRadius(radius * cw);

      const pie = d3.pie().value((d) => d);

      svgCardDetailsChart.append("g").attr("class", "lines");
      svgCardDetailsChart.append("g").attr("class", "slices");
      svgCardDetailsChart.append("g").attr("class", "labels");

      const slice = svgCardDetailsChart
        .select(".slices")
        .datum(dataCardDetailsChart)
        .selectAll("path")
        .data(pie)
        .enter()
        .append("path")
        .attr("fill", (d, i) => colorsCardDetailsChart[i])
        .attr("d", arc)
        .attr("stroke-width", "25px")
        .style("opacity", 0)
        .transition()
        .delay((d, i) => i * arcAnimDelay + initialAnimDelay)
        .duration(arcAnimDur)
        .ease(d3.easeElastic)
        .style("opacity", 1);

      const midAngle = (d) => d.startAngle + (d.endAngle - d.startAngle) / 2;

      // Helper function to adjust labels to avoid overlaps
      const adjustLabelPositions = (labels) => {
        const spacing = 16; // Minimum vertical spacing between labels
        let previousY = null;

        labels.each(function (d, i) {
          const label = d3.select(this);
          const pos = outerArc.centroid(d);
          pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1); // Left or right side

          if (previousY !== null && Math.abs(pos[1] - previousY) < spacing) {
            pos[1] = previousY - spacing; // Adjust the position to avoid overlap
          }
          previousY = pos[1]; // Update for next label
          label.attr("transform", `translate(${pos})`);
        });
      };

      // Text Labels
      const text = svgCardDetailsChart
        .select(".labels")
        .selectAll("text")
        .data(pie(dataCardDetailsChart))
        .enter()
        .append("text")
        .attr("dy", "0.35em")
        .style("opacity", 0)
        .style("fill", (d, i) => colorsCardDetailsChart[i])
        .text((d, i) => `${dataCardDetailsChart[i]}% - ${faNamesCardDetailsChart[i]}`)
        .style("text-anchor", (d) => (midAngle(d) < Math.PI ? "start" : "end"))
        .transition()
        .delay((d, i) => arcAnimDur + i * secIndividualdelay)
        .duration(secDur)
        .style("opacity", 1)
        .on("end", function () {
          adjustLabelPositions(svgCardDetailsChart.selectAll(".labels text")); // Call adjust function
        });

      // Polyline (Lines) for the labels
      const polyline = svgCardDetailsChart
        .select(".lines")
        .selectAll("polyline")
        .data(pie(dataCardDetailsChart))
        .enter()
        .append("polyline")
        .style("fill", "none")
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("points", (d) => {
          const pos = outerArc.centroid(d);
          pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1); // Shift label position

          // Return points to create the polyline
          return [arc.centroid(d), outerArc.centroid(d), pos];
        })
        .style("opacity", 0)
        .transition()
        .delay((d, i) => arcAnimDur + i * secIndividualdelay)
        .duration(secDur)
        .style("opacity", 1);
    };

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const elementPosition = document.getElementById("detailChart").offsetTop;
      if (scrollPosition >= elementPosition) {
        drawChart();
        window.removeEventListener("scroll", handleScroll); // Remove scroll event after drawing
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <section className="mx-auto max-w-5xl py-5 flex justify-center">
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[500px]">
        <div id="detailChart" className="DetailChart w-full h-full absolute" dir="ltr"></div>
      </div>
    </section>
  );
};

export default CirculeChart;
 */