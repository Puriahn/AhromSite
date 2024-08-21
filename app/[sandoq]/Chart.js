"use client";
import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const ChartComponent = (props) => {
  const {
    data,
    colors: {
      backgroundColor = "white",
      lineColor = "#009688",
      textColor = "black",
      areaTopColor = "#9BD5D0",
      areaBottomColor = "rgb(243,250,249)",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      grid: {
        vertLines: false,
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderColor: "#fff",
      },
      handleScale: {
        axisPressedMouseMove: false,
        mouseWheel: false,
        pinch: false,
      },

      handleScroll: {
        mouseWheel: false,
        pressedMouseMove: false,
        horzTouchDrag: false,
        vertTouchDrag: false,
      },
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);
  return (
    <div
      className={`${props.pendingStatus === true ? "hidden" : "block"}`}
      ref={chartContainerRef}
    />
  );
};
let y = 1;
export function Chart(props) {
  const [sandoq, setSandoq] = useState([]);
  const url =
    "https://ahrominvest.ir/api/dev/lightChart?name=" +
    props.param +
    "&interval=" +
    props.time;
  async function Get() {
    props.pending(true);
    await axios
      .get(url)
      .then((res) => {
        props.pending(false);
        setSandoq(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    Get();
    const interval = setInterval(() => {
      Get();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return <ChartComponent {...props} data={sandoq}></ChartComponent>;
}
