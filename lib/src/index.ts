import moment from "moment";

export function goCrazy(array: unknown[]): void {
	console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

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
