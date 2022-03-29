import React from 'react'
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function ChartInfo({ coin }) {
  const [historicData, setHistoricData] = useState();
  const [day, setDay] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const update = async () => {
    const HistoricalChart = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=cad&days=${day}`);
    const json = await HistoricalChart.json()
    setHistoricData(json.prices);
  }

  useEffect(update, [coin, day]);

  console.log({ historicData })
  const INTERVAL = 60
  const [countDown, setCountDown] = useState(INTERVAL);
  useEffect(() => {
    if (day !== 1) return
    const intervalId = setInterval(() => {
      if (countDown <= 0) {
        setCountDown(INTERVAL)

        const max = Math.max(...historicData.map(d => d[1]))
        const min = Math.min(...historicData.map(d => d[1]))
        setHistoricData(historicData.map((d, idx) => {
          d[1] = (idx === 0) ? max : min;
          return d
        }))
        setTimeout(() => {
          update()
        }, 100);
      }
      else {
        setCountDown(countDown - 1)
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown, day, ]);


  return (historicData == null) ? (
    <div>loading</div>
  ) : (
    <div>
      <Line
        data={{
          labels: historicData.map((coin) => {
            let date = new Date(coin[0]);
            let time = `${date.getHours()}:${date.getMinutes()}`
            return (day === 1) ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: historicData.map((coin) => coin[1]),
              label: `Price ( Past ${day} Days )`,
              borderColor: "#0D6EFD",
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
      <div>
        <button type="button" className="btn btn-primary m-3" onClick={() => setDay(1)}>24 Hours</button>
        <button type="button" className="btn btn-primary m-3" onClick={() => setDay(7)}>1 Week</button>
        <button type="button" className="btn btn-primary m-3" onClick={() => setDay(30)}>1 Month</button>
        <button type="button" className="btn btn-primary m-3" onClick={() => setDay(365)}>1 Year</button>
        {(day === 1) && <span>Will update in {countDown} seconds</span>}
      </div>
    </div>
  )
}