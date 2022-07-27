const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="RYBOY" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
