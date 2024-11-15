import { styled } from 'styled-components';
import { useCategory } from '../../hooks/useCategory';
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';

const category = [
	{
		id: null,
		name: "전체",
	},
	{
		id: 0,
		name: "동화",
	},
	{
		id: 1,
		name: "소설",
	},
	{
		id: 2,
		name: "사회",
	},
];

function BooksFilter() {

	// const { category } = useCategory();
	const [ searchParams, setSearchParams ] = useSearchParams();

	const handleCategory = (id: number | null) => {
		const newSearchParams = new URLSearchParams(searchParams);

		if (id === null) {
			newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
		} else {
			newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
		}

		setSearchParams(newSearchParams);

	};

	const currentCategory = searchParams.get(QUERYSTRING.CATEGORY_ID);

	const handleNews = () => {
		const newSearchParams = new URLSearchParams(searchParams);

		if (newSearchParams.get(QUERYSTRING.NEWS)) {
			newSearchParams.delete(QUERYSTRING.NEWS);
		} else {
			newSearchParams.set(QUERYSTRING.NEWS, "true");
		}

		setSearchParams(newSearchParams);
	}

	return (
		<BooksFilterStyle>
			<div className="category">
				{
					category.map((item) => (
						<Button 
							size='medium'
							// item.isActive ? "primary" : "normal"
							scheme={currentCategory === item.id?.toString() ? "primary" : "normal" } 
							key={item.id}
							onClick={() => handleCategory(item.id)}
						>
							{item.name}
						</Button>
					))
				}
			</div>
			<div className="new">
				<Button 
					size='medium' 
					scheme={searchParams.get(QUERYSTRING.NEWS) ? "primary" : 'normal'}
					onClick={() => handleNews()}
				>
					신간
				</Button>
			</div>
		</BooksFilterStyle>
	);
}

const BooksFilterStyle = styled.div`
	display: flex;
	gap: 24px;

	.category {
		display: flex;
		gap: 8px;
	}
`;

export default BooksFilter;