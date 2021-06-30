import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./components/theme";
import Header from "./components/Header";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<GlobalStyle />
				<Header></Header>
				<Router>
					<Route exact path="/" component={Home}></Route>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
