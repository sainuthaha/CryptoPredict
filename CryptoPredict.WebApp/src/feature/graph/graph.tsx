import { useState, useEffect } from 'react';
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
import { useGetBtcMarketRange } from '../../hooks/useGetBtcMarketRange.ts';
import { PricePoint } from '../../models/marketRange.ts';


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface GraphProps {
	userId: string
}

const Graph = ({ userId }: GraphProps) => {
	const [bitcoinData, setBitcoinData] = useState<PricePoint[] | undefined>([]);
	const [ethereumData, setEthereumData] = useState<PricePoint[] | undefined>([]);
	const [currentEpochTime, setCurrentEpochTime] = useState(0);
	const [isBtcPredictorVisible, setBtcPredictorVisible] = useState(false);
	const [isEthPredictorVisible, setEthPredictorVisible] = useState(false);

	const { marketRange: btcMarketRange } = useGetBtcMarketRange('btc');
	const { marketRange: ethMarketRange } = useGetBtcMarketRange('eth');

	useEffect(() => {
		const epochInterval = setInterval(() => {
			setCurrentEpochTime(Math.floor(Date.now() / 1000));
		}, 1000);

		return () => {
			clearInterval(epochInterval);
		};
	}, [])

	useEffect(() => {
		if (btcMarketRange) {
			setBitcoinData(
				btcMarketRange.prices?.map((price: PricePoint) => ({
					timestamp: price.timestamp,
					price: price.price,
				}))
			);

			setEthereumData(
				ethMarketRange?.prices?.map((price: PricePoint) => ({
					timestamp: price.timestamp,
					price: price.price,
				}))
			);
		}
	}, [btcMarketRange, ethMarketRange]);

	const formatChartData = (data: PricePoint[] | undefined) => {
		return {
			labels: data?.map((point) => new Date(point.timestamp).toLocaleTimeString()),
			datasets: [
				{
					label: 'Price (USD)',
					data: data?.map((point) => point.price),
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
				<div>
					{isBtcPredictorVisible == true || isEthPredictorVisible == true ?
						(<>
							<Predict userId={userId} />
							<div style={styles.buttonContainer}>
								<button style={styles.button} onClick={() => { setBtcPredictorVisible(false); setEthPredictorVisible(false) }}>Exit</button>
							</div>
						</>)
						: (
						<><header style={styles.headerStyle}>
							<h1 style={styles.textStyle}>Market Trend Graph</h1>
						</header>
							<div style={styles.chartContainer}>
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
									<div style={styles.buttonContainer}>
										<button style={styles.button} onClick={() => setBtcPredictorVisible(true)}>BTC Price Predictor</button>
									</div>
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
									<div style={styles.buttonContainer}>
										<button style={styles.button} onClick={() => setEthPredictorVisible(true)}>Ethereum Price Predictor</button>
									</div>
								</div>
							</div>
							</>
						)}
					
				</div>

			</div>
		</div>
	);
};

export default Graph;
