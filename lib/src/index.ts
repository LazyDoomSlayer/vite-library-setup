export function goCrazy(array: unknown[]): void {
	console.log(array);
}

interface IGoCrazy {
	name: string;
}

const crazyPeople: IGoCrazy[] = [
	{
		name: "LazyDoomSlayer",
	},
];

goCrazy(crazyPeople);
