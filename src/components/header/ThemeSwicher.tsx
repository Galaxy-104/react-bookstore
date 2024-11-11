import { useContext } from "react";
import { dark, ThemeName } from "../../style/theme";
import { ThemeContext } from "../../context/themeContext";

function ThemeSwicher() {

	const { themeName, toggleTheme } = useContext(ThemeContext)

	return (
		<button onClick={toggleTheme}>{themeName}</button>
	);
}

export default ThemeSwicher;