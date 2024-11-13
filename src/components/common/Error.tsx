import { useRouteError } from "react-router-dom";

// 리액트 라우트 돔에서 에러 엘리먼트를 통해 에러 정보를 받을 수 있음
interface RouteError {
	statusText?: string;
	message: string;
}

function Error() {

	const error = useRouteError() as RouteError;

	return (
		<div>
			<h1>오류가 발생했습니다.</h1>
			<p>다음과 같은 오류가 발생했습니다.</p>
			<p>{error.statusText || error.message}</p>
		</div>
	);
}

export default Error;