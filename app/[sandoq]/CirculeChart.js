export default function CirculeChart() {
  var chartDetails = {
    usdt: {
      percentage: 42.76,
      color: "#00B095",
      name_fa: "\u062a\u062a\u0631",
    },
    btc: {
      percentage: 29.51,
      color: "#FF9500",
      name_fa: "\u0628\u06cc\u062a\u06a9\u0648\u06cc\u0646",
    },
    eth: {
      percentage: 9.76,
      color: "#404877",
      name_fa: "\u0627\u062a\u0631\u06cc\u0648\u0645",
    },
    trx: {
      percentage: 6.66,
      color: "#FF2826",
      name_fa: "\u062a\u0631\u0648\u0646",
    },
    xrp: {
      percentage: 5.09,
      color: "#23292E",
      name_fa: "\u0631\u06cc\u067e\u0644",
    },
    cash: {
      percentage: 3.8899999999999864,
      color: "#084642",
      name_fa: "\u0648\u062c\u0647 \u0646\u0642\u062f",
    },
    doge: {
      percentage: 2.33,
      color: "#C5A01F",
      name_fa: "\u062f\u0648\u062c \u06a9\u0648\u06cc\u0646",
    },
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
  const keysCardDetailsChart = Object.keys(chartDetails);

  const widthCardDetailsChart =
    document.querySelector(".DetailChart").offsetWidth;
  const heightCardDetailsChart =
    document.querySelector(".DetailChart").offsetHeight;
  const minOfWH = Math.min(widthCardDetailsChart, heightCardDetailsChart) / 2;
  const initialAnimDelay = 300;
  const arcAnimDelay = 150;
  const arcAnimDur = 3000;
  const secDur = 1000;
  const secIndividualdelay = 150;
  const windowWidth = window.innerWidth;

  let radius;

  if (minOfWH > 200) {
    radius = 200;
  } else {
    radius = minOfWH;
  }

  var svgCardDetailsChart = d3
    .select(".DetailChart")
    .append("svg")
    .attr({
      width: widthCardDetailsChart,
      height: heightCardDetailsChart,
      class: "pieChart",
    })
    .append("g");

  var transformHeight =
    windowWidth <= 375
      ? heightCardDetailsChart / 2
      : heightCardDetailsChart / 2 + 20;
  svgCardDetailsChart.attr({
    transform: `translate(${widthCardDetailsChart / 2}, ${transformHeight})`,
  });

  var aw;
  var bw;
  var cw;
  var dw;

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

  let arc = d3.svg
    .arc()
    .outerRadius(radius * aw)
    .innerRadius(radius * bw);

  let outerArc = d3.svg
    .arc()
    .innerRadius(radius * cw)
    .outerRadius(radius * cw);

  let pie = d3.layout.pie().value((d) => d);

  let draw = function () {
    svgCardDetailsChart.append("g").attr("class", "lines");
    svgCardDetailsChart.append("g").attr("class", "slices");
    svgCardDetailsChart.append("g").attr("class", "labels");

    let slice = svgCardDetailsChart
      .select(".slices")
      .datum(dataCardDetailsChart)
      .selectAll("path")
      .data(pie);
    slice
      .enter()
      .append("path")
      .attr({
        fill: (d, i) => colorsCardDetailsChart[i],
        d: arc,
        "stroke-width": "25px",
        transform: (d, i) => "rotate(-180, 0, 0)",
      })
      .style("opacity", 0)
      .transition()
      .delay((d, i) => i * arcAnimDelay + initialAnimDelay)
      .duration(arcAnimDur)
      .ease("elastic")
      .style("opacity", 1)
      .attr("transform", "rotate(0,0,0)");

    slice
      .transition()
      .delay((d, i) => arcAnimDur + i * secIndividualdelay)
      .duration(secDur)
      .attr("stroke-width", "5px");

    let midAngle = (d) => d.startAngle + (d.endAngle - d.startAngle) / 2;

    let text = svgCardDetailsChart
      .select(".labels")
      .selectAll("text")
      .data(pie(dataCardDetailsChart));

    text
      .enter()
      .append("text")
      .attr("dy", "0.35em")
      .style("opacity", 0)
      .style("fill", (d, i) => colorsCardDetailsChart[i])
      .text(
        (d, i) =>
          `${convertEnglishToPersianNumbers(dataCardDetailsChart[i])}% - ${faNamesCardDetailsChart[i]}`
      )
      .attr("transform", (d, i) => {
        let pos = outerArc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);

        if (windowWidth <= 375 && pos[0] > 0) {
          pos[0] -= 40;
        } else if (windowWidth <= 375 && pos[0] <= 0) {
          pos[0] += 40;
        } else if (windowWidth > 375 && windowWidth <= 768 && pos[0] > 0) {
          pos[0] -= 20;
        } else if (windowWidth > 375 && windowWidth <= 768 && pos[0] <= 0) {
          pos[0] += 20;
        }

        if (i == dataCardDetailsChart.length - 1) {
          pos[1] -= 30;
        }

        if (i == dataCardDetailsChart.length - 2) {
          pos[1] -= 15;
        }

        if (i == dataCardDetailsChart.length - 3) {
          pos[1] -= 7.5;
        }

        return `translate(${pos})`;
      })
      .style("text-anchor", (d) => (midAngle(d) < Math.PI ? "start" : "end"))
      .transition()
      .delay((d, i) => arcAnimDur + i * secIndividualdelay)
      .duration(secDur)
      .style("opacity", 1);

    let polyline = svgCardDetailsChart
      .select(".lines")
      .selectAll("polyline")
      .data(pie(dataCardDetailsChart));

    polyline
      .enter()
      .append("polyline")
      .style("opacity", 0.5)
      .attr("points", (d, i) => {
        let pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        return [arc.centroid(d), arc.centroid(d), arc.centroid(d)];
      })
      .transition()
      .duration(secDur)
      .delay((d, i) => arcAnimDur + i * secIndividualdelay)
      .attr("points", (d, i) => {
        var pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);

        if (windowWidth <= 375 && pos[0] > 0) {
          pos[0] -= 40;
        } else if (windowWidth <= 375 && pos[0] <= 0) {
          pos[0] += 40;
        } else if (windowWidth > 375 && windowWidth <= 768 && pos[0] > 0) {
          pos[0] -= 20;
        } else if (windowWidth > 375 && windowWidth <= 768 && pos[0] <= 0) {
          pos[0] += 20;
        }

        var t = outerArc.centroid(d);
        if (i == dataCardDetailsChart.length - 1) {
          t[1] -= 30;
          pos[1] -= 30;
        }

        if (i == dataCardDetailsChart.length - 2) {
          t[1] -= 15;
          pos[1] -= 15;
        }

        if (i == dataCardDetailsChart.length - 3) {
          t[1] -= 7.5;
          pos[1] -= 7.5;
        }

        return [arc.centroid(d), t, pos];
      });
  };

  window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;
    var elementPosition = document.getElementById("detailChart").offsetTop;
    if (scrollPosition >= elementPosition) {
      draw();
    }
  });

  let replay = () => {
    d3.selectAll(".slices")
      .transition()
      .ease("back")
      .duration(500)
      .delay(0)
      .style("opacity", 0)
      .attr("transform", "translate(0, 250)")
      .remove();
    d3.selectAll(".lines")
      .transition()
      .ease("back")
      .duration(500)
      .delay(100)
      .style("opacity", 0)
      .attr("transform", "translate(0, 250)")
      .remove();
    d3.selectAll(".labels")
      .transition()
      .ease("back")
      .duration(500)
      .delay(200)
      .style("opacity", 0)
      .attr("transform", "translate(0, 250)")
      .remove();

    setTimeout(draw, 800);
  };

  return (
    <section className="mx-auto max-w-5xl py-5 flex justify-center">
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[500px]">
        <div
          id="detailChart"
          className="DetailChart w-full h-full absolute"
          dir="ltr"
        ></div>
      </div>
    </section>
  );
}
