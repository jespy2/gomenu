import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { URLSearch } from "../../forms/url-search/URLSearch";

import apis from "../../api";

import styles from "./Start.module.scss";
import { IRecipe } from "../../index.types";

interface IProps {
	userURL: string | undefined;
	setUserURL: Dispatch<SetStateAction<string | undefined>>;
	setRecipe: Dispatch<SetStateAction<any>>;
	userName: string;
}

export const Start = (props: IProps) => {
	const { userURL, setUserURL, setRecipe, userName } = props;
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		userURL &&
			(async () => {
				await apis.getRecipe(userURL)
					.then((data) => {
						console.log('data: ', data)
						let _recipe = {} as IRecipe
						if (data.data.length === 1){ _recipe = data.data[0]}
						else _recipe = { ...data.data }["@graph"].find(
							(recipe: any) => recipe["@type"].includes("Recipe")
						);
						_recipe.userName = userName;
						setRecipe(_recipe);
						console.log("data: ", data);
						console.log("_recipe: ", _recipe);
					})
					.then(() => navigate("/newrecipe"))
			})();
	}, [userURL]);
	
	return (
		<Container disableGutters={true} maxWidth={false} >
				<Box className={styles.startContainer} >
					<Box className={styles.navbarContainer}>
						<Navbar>
							<Container disableGutters={true} maxWidth={false} >
								<h1 style={{textAlign: 'center'}}>Welcome back, username</h1>
								<Box className={styles.navbarButtonsContainer}>
									<Button variant="contained" onClick={ () => setShowSearch(!showSearch)}>Grab a new recipe</Button>
									<Button variant="contained" onClick={() => navigate('/cookbook')} >Go to my cookbook</Button>
								</Box>
								{showSearch && <URLSearch setUserURL={setUserURL} />}
							</Container>							
						</Navbar>
					</Box>
				</Box>
		</Container>
	);
};
