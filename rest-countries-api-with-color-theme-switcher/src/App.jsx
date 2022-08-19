import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import CountryInfo from './components/CountryInfo';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Content />} />
				<Route path='/:id' element={<CountryInfo />} />
			</Routes>
		</>
	);
}

export default App;
