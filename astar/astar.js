const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scl = 20;
const inf = 300000;

ctx.scale(scl, scl);

class Node {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.gScore = inf;
		this.fScore = inf;

		this.wall = Math.random() < 0.2 ? 1 : 0; 
	}

	render (signal) {
		if(this.wall) {
			ctx.fillStyle = '#000';
		} else {
			ctx.fillStyle = signal;
		}
		ctx.fillRect(this.y, this.x, 1, 1);
	}
}

let nodes = [];
function initNodes() {
	for (let i = 0; i <	Math.pow(canvas.width/scl, 2); i++) {
		nodes.push(new Node(i % 20, Math.floor(i / 20)));
	}
}
initNodes();

function euclidDist(n1, n2) {
	let a = n1.x - n2.x;
	let b = n1.y - n2.y;
	return Math.sqrt(a*a + b*b);
}

function lowestNodeOpenSet() {
	let min = inf;
	let minNode;
	for (let i = 0; i < openSet.length; i++) {
		if(openSet[i].fScore < min) {
			min = openSet[i].fScore;
			minNode = openSet[i];
		}
	}

	return minNode;
}

function getNeighbours(node) {
	let dirs = [scl, -scl, 1, -1];
	let idx = node.y * scl + node.x;
	let neighbours = [];
	for (let d of dirs) {
		let k = (idx + d);
		if(nodes[k] != undefined) {
			if(!nodes[k].wall) {
				neighbours.push(nodes[k]);
			}
		}
	}

	return neighbours;
}

let start = nodes[0];
let goal = nodes[nodes.length - 1];

let openSet = [start];
let cameFrom = {};

start.gScore = 0;
start.fScore = euclidDist(start, goal);

let current;
function AStar() {
	for (let i = 0; i <	Math.pow(canvas.width/scl, 2); i++) {
		nodes[i].render('#FF5555');
	}

	current = lowestNodeOpenSet();
	if(current == goal) {
		return false;
	}

	openSet = arrayRemove(openSet, current);
	let neighbours = getNeighbours(current);

	for(let neighbour of neighbours) {
		let tentative = current.gScore + 1;
		let idx = neighbour.y * scl + neighbour.x;
		if(tentative <= neighbour.gScore) {
			cameFrom[idx] = current;
			neighbour.gScore = tentative;
			neighbour.fScore = neighbour.gScore + euclidDist(neighbour, goal);

			if(!openSet.includes(neighbour)) {
				openSet.push(neighbour);
			}
		}
	}
}

let interval = 0;
function render(time) {
	if((time-interval) >= 100) {
		interval = time;
		AStar();
	}
	window.requestAnimationFrame(render);
} 
window.requestAnimationFrame(render);

