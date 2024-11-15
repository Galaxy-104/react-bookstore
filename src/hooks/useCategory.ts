import { useEffect, useState } from "react";
import { Category } from "../models/category.models";
import { fetchCategory } from "../api/category.api";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
	const location = useLocation();
	const [ category, setCategory ] = useState<Category[]>([])

	console.log('location', location.search);

	const setActive = () => {
		const param = new URLSearchParams(location.search);
		
		if (param.get('category_id')) {
			setCategory((prev) => {
				return prev.map((item) => {
					return {
						...item,
						isActive: item.id === Number(param.get("category_id")),
					};
				});
			})
		} else {
			setCategory((prev) => {
				return prev.map((item) => {
					return {
						...item,
						isActive: false,
					};
				});
			})
		}
	};

	useEffect(() => {
		fetchCategory().then((category) => {
			if(!category) return;

			const categoryWithAll = [
				{
					id: null,
					name: "전체",
				},
				...category,
			]

			
			setCategory(categoryWithAll);
			setActive();
		})
	}, [])

	useEffect(() => {
		setActive();
	}, [location.search]);

	return { category };
}