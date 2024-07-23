import { useState } from "react";
import { Predict } from "../../feature/predict/predict";
import AppDetails from "../../feature/appDetails/appDetails.";
import Login from "../../feature/login/login";

export const HomePage = () => {
	const [userId, setUserId] = useState("");
	const [isGameStarted, setIsGameStarted] = useState(false);

	const onLogin = (userId:string) => {
		setUserId(userId);
		setIsGameStarted(true);
	};


	const changeUser = () => {
		setIsGameStarted(false);
		setUserId("");
	};  

	return (
		<>
			<AppDetails />
			{!isGameStarted ? (
				<Login onLogin={onLogin} />
			) : (<>
					<Predict userId={userId} onChange={changeUser} />
				
			</>)}
			
		</>
	);
};  
