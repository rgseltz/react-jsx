const App = () => (
	<div>
		<Person name="Adrian Grey" age={25} hobbies={[ 'rock climbing', 'videogames', 'snowboarding' ]} />
		<Person name="Bryant Cooper" age={12} hobbies={[ 'family dinner', 'eating candy', 'watching tv' ]} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
