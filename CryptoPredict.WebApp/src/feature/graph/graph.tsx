import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './graph.css.ts';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { styles } from './graph.css';
import { Predict } from '../predict/predict.tsx';


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface CryptoPredictData {
	price: number
	time: number
};

const Graph = () => {
	const [bitcoinData, setBitcoinData] = useState<CryptoPredictData[]>([]);
	const [ethereumData, setEthereumData] = useState<CryptoPredictData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentEpochTime, setCurrentEpochTime] = useState(0);
	const [isBtcPredictorVisible,setBtcPredictorVisible] = useState(false);
    const [isEthPredictorVisible,setEthPredictorVisible] = useState(false);

	useEffect(() => {
		const fetchCryptoData = async () => {
			try {
				setLoading(true);

				const now = Math.floor(Date.now() / 1000);
				const hourAgo = now - 60 * 60;

				const bitcoinResponse = await axios.get(
					'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range',
					{
						params: {
							vs_currency: 'usd',
							from: hourAgo,
							to: now,
							x_cg_demo_api_key: 'CG-BYvHpK278eLhFa8Nb1B4frvL'
						},
						headers: {
							'User-Agent': 'crypto-dashboard',
						},
					}
				);

				const ethereumResponse = await axios.get(
					'https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range',
					{
						params: {
							vs_currency: 'usd',
							from: hourAgo,
							to: now,
							x_cg_demo_api_key: 'CG-BYvHpK278eLhFa8Nb1B4frvL'
						},
						headers: {
							'User-Agent': 'crypto-dashboard',
						},
					}
				);

				setBitcoinData(
					bitcoinResponse.data.prices.map((point: [number, number]) => ({
						time: point[0],
						price: point[1],
					}))
				);
				setEthereumData(
					ethereumResponse.data.prices.map((point: [number, number]) => ({
						time: point[0],
						price: point[1],
					}))
				);
				setCurrentEpochTime(now);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCryptoData();

		const interval = setInterval(fetchCryptoData, 300000);
		const epochInterval = setInterval(() => {
			setCurrentEpochTime(Math.floor(Date.now() / 1000));
		}, 1000);

		return () => {
			clearInterval(interval);
			clearInterval(epochInterval);
		};
	}, []);

	const formatChartData = (data: CryptoPredictData[]) => {
		return {
			labels: data.map((point) => new Date(point.time).toLocaleTimeString()),
			datasets: [
				{
					label: 'Price (USD)',
					data: data.map((point) => point.price),
					borderColor: 'rgba(75, 192, 192, 1)',
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					fill: true,
				},
			],
		};
	};

	return (
		<div style={styles.body}>
		  <div>
		  <header style={styles.headerStyle}>
               <h1 style={styles.textStyle}>Market Trend Graph</h1>
            </header>
			{loading && <p style={styles.paragraph}>Loading...</p>}
			{error && <p style={styles.paragraph}>Error fetching data: {error}</p>}
			{!loading && !error &&
			(
			  <div>
				{isBtcPredictorVisible == true || isEthPredictorVisible == true? 
				(<>
				<Predict userId='sainu'/>
				<button onClick={()=>{setBtcPredictorVisible(false);setEthPredictorVisible(false)}}>Exit</button>
				</>)
				:(<div style={styles.chartContainer}>
				  <div style={styles.cryptoChart}>
					<h2 style={styles.h2}>Bitcoin (BTC)</h2>
					<Line
					  data={formatChartData(bitcoinData)}
					  options={{
						responsive: true,
						plugins: {
						  legend: {
							position: 'top',
						  },
						  title: {
							display: true,
							text: 'Bitcoin Price (Last 1 Hour)',
						  },
						},
					  }}
					/>
				  <button style={styles.button} onClick={()=>setBtcPredictorVisible(true)}>BTC Price Predictor</button>
				  </div>
				  <div style={styles.cryptoChart}>
					<h2 style={styles.h2}>Ethereum (ETH)</h2>
					<Line
					  data={formatChartData(ethereumData)}
					  options={{
						responsive: true,
						plugins: {
						  legend: {
							position: 'top',
						  },
						  title: {
							display: true,
							text: 'Ethereum Price (Last 1 Hour)',
						  },
						},
					  }}
					/>
					<button style={styles.button} onClick={()=>setEthPredictorVisible(true)}>Ethereum Price Predictor</button>
				  </div>
				</div>)}
				<div>
				  <p style={styles.epochTime}>Current UNIX Epoch Time: {currentEpochTime}</p>
				</div>
			  </div>
			)}
		  </div>
		</div>
	  );
	};

export default Graph;
