export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

interface Theme {
	name: ThemeName;
	color: Record<ColorKey, string>;
}

export const ligth: Theme = {
	name: 'light',
	color: {
		primary: 'brown',
		background: "lightgray",
		secondary: "blue",
		third: "green"
	},
};

export const dark: Theme = {
	name: 'dark',
	color: {
		primary: 'coral',
		background: 'midnightblue',
		secondary: "blue",
		third: "green"
	},
};

export const getTheme = (themeName: ThemeName): Theme => {
	switch (themeName) {
		case "light":
			return ligth;
		case "dark":
			return dark;
	}
};