import { useState } from "react";
import { Predict } from "../../feature/predict/predict";
import Login from "../../feature/login/login";
import AppDetails from "../../feature/appDetails/appDetails";

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
		window.location.reload();
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
