import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid} from "@mui/material";

import { Navbar } from "../../components/navbar/Navbar";
import { URLSearch } from "../../forms/url-search/URLSearch";
import { MainDisplay } from "../../components/main-display/MainDisplay";

import apis from "../../api";

import styles from "./Start.module.scss";

interface IProps {
	userURL: string | undefined;
	setUserURL: Dispatch<SetStateAction<string | undefined>>;
	setRecipe: Dispatch<SetStateAction<any>>;
	userName: string;
}

export const Start = (props: IProps) => {
	const { userURL, setUserURL, setRecipe, userName } = props;
	const navigate = useNavigate();

	useEffect(() => {
		userURL &&
			(async () => {
				await apis.getRecipe(userURL)
					.then((data) => {
						const _recipe = { ...data.data }["@graph"].find(
							(recipe: any) => recipe["@type"] === "Recipe"
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
							<URLSearch setUserURL={setUserURL} />
						</Navbar>
					</Box>
				</Box>
		</Container>
	);
};
