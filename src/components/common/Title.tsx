import styled from "styled-components"
import { ColorKey, HeadingSize } from "../../style/theme";

interface Props {
	children: React.ReactNode;
	size: HeadingSize;
	color?: ColorKey;
}

function Title({ children, size, color }: Props) {
	return (
		<TitleSytle size={size} color={color}>
			{children}
		</TitleSytle>
	)
}

const TitleSytle = styled.h1<Omit<Props, "children">>`
	font-size: ${({ theme, size }) => theme.heading[size].fontSize};
	color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.primary)};
`;

export default Title;