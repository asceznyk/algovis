const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scl = 20;
const inf = 300000;
const unit = canvas.width / scl; 

ctx.scale(scl, scl);

class Node {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.gScore = inf;
		this.fScore = inf;
		this.cameFrom = null;

		this.wall = Math.random() < 0.2 ? 1 : 0; 
	}

	render(signal) {
		if(this.wall) {
			ctx.fillStyle = '#000';
		} else {
			ctx.fillStyle = signal;
		}
		ctx.fillRect(this.x, this.y, 1, 1);
	}
}

let nodes = [];
function initNodes() {
	for (let y = 0; y <	unit; y++) {
		nodes[y] = [];
		for(let x = 0; x < unit; x++) {
			nodes[y][x] = new Node(x, y);
		}
	}
}
initNodes();

function heuristic(n1, n2) {
	return Math.abs(n2.x - n1.x) + Math.abs(n2.y-n1.y);
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
	let neighbours = [];
	for (let d of [[0,1], [0,-1], [1,0], [-1,0]]) {
		let [dy, dx] = d;
		if(nodes[node.y + dy] != undefined && nodes[node.y + dy][node.x + dx] != undefined) {
			let next = nodes[node.y + dy][node.x + dx];
			if(!next.wall) {
				neighbours.push(next);
			}
		}
	}

	return neighbours;
}

function showNodes() {
	for(let y = 0; y < unit; y++) {
		for(let x = 0; x < unit; x++) {
			nodes[y][x].render('#fff');
		}
	}
}

function renderPath(current) {
	while(current != null) {
		current.render('#E4F34A');
		current = current.cameFrom;
	}
}

let start = nodes[0][0];
let goal = nodes[nodes.length-1][nodes.length-1];

let openSet = [start];

start.gScore = 0;
start.fScore = heuristic(start, goal);

let current;

function AStar() {
	current = lowestNodeOpenSet();
	if(current == goal) {
		return true;
	}
	showNodes();
	current.render('#8BE9FD');
	renderPath(current);

	openSet = arrayRemove(openSet, current);

	for(let node of openSet) {
		node.render('#6272A4');
	}

	for (let next of getNeighbours(current)) {
		let tentative = current.gScore + 1;
		if(tentative < next.gScore) {
			next.cameFrom = current;
			next.gScore = tentative;
			next.fScore = tentative + heuristic(next, goal);	

			if(!containsObject(next, openSet)) {
				openSet.push(next);
			}
		}
	}
}

let interval = 0;
let done = false;
function render(time) {
	if((time-interval) >= 25) {
		interval = time;
		done = AStar();	
	}
	if (done) {
		console.log('Done!');
		window.cancelAnimationFrame(anim);
	}
	window.requestAnimationFrame(render);
} 
let anim = window.requestAnimationFrame(render);

