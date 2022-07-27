const Person = (props) => {
	let message;
	props.age >= 18 ? (message = <h3>Go Vote!</h3>) : (message = <h3>You Must Be 18 to Vote. Go Home!</h3>);
	return (
		<div>
			<div>
				<p>Learn Some Information about this Person</p>
				<p>Name: {props.name}</p>
				<p>Age: {props.age}</p>
				<ul>{props.hobbies.map((h) => <li>{h}</li>)}</ul>
			</div>
			{message}
		</div>
	);
};
