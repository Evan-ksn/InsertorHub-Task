const config = {
  actions: false,
  renderer: "svg",
  config: {
    font: "Inter, system-ui, sans-serif",
    axis: {
      labelFont: "Inter, system-ui, sans-serif",
      titleFont: "Inter, system-ui, sans-serif",
      labelColor: "#5E4A50",
      titleColor: "#241720",
      gridColor: "#EFE0DD",
      domainColor: "#E8D7D4",
      tickColor: "#E8D7D4"
    },
    legend: {
      labelFont: "Inter, system-ui, sans-serif",
      titleFont: "Inter, system-ui, sans-serif",
      labelColor: "#5E4A50",
      titleColor: "#241720"
    },
    view: { stroke: null },
    background: "transparent"
  }
};

[
  ["#growth-pressure", "js/growth_pressure.vg.json"],
  ["#metric-trend", "js/metric_trend.vg.json"],
  ["#channel-quality", "js/channel_quality.vg.json"],
  ["#store-map", "js/store_map.vg.json"],
  ["#strategy-tracker", "js/strategy_tracker.vg.json"],
  ["#financial-quality", "js/financial_quality.vg.json"]
].forEach(([selector, spec]) => {
  vegaEmbed(selector, spec, config).catch(error => {
    document.querySelector(selector).innerHTML = `<pre class="error">${error}</pre>`;
  });
});
