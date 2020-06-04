const canvas = document.getElementById("view");
const context = canvas.getContext("2d");

const chatElement = document.getElementById("chat");

function logChat(message, source) {
	const chatLine = document.createElement("p");
	if(source) {
		const sourceName = document.createElement("b");
		sourceName.innerText = source;
		chatLine.appendChild(sourceName);
	} else {
		chatLine.style.fontStyle = "italic";
	}
	const messageNode = document.createTextNode(" " + message.trim());
	chatLine.appendChild(messageNode);
	chatElement.appendChild(chatLine);
	while(chatElement.childElementCount > 12) {
		chatElement.removeChild(chatElement.firstChild);
	}
}

resize();
window.addEventListener("resize", resize);

function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

const utf8Encoder = new TextEncoder("utf-8");
const urf8Decoder = new TextDecoder;

const peerIds = new Set;

peerEvents = beaker.peersockets.watch();
peerEvents.addEventListener("join", event => peerIds.add(event.peerId));
peerEvents.addEventListener("leave", event => peerIds.delete(event.peerId));

const speakTopic = beaker.peersockets.join("speak");
const moveTopic = beaker.peersockets.join("move");

class Player {
	static skinTones = [ "#c58c85", "#ecbcb4", "#d1a3a4", "#a1665e", "#503335", "#592f2a" ];
	static moveFactor = 4;
	movement = {
		up: false,
		down: false,
		left: false,
		right: false
	};
	skinTone = Player.skinTones[Math.floor(Math.random() * 6)];
	shirtColor = `hsl(${ Math.floor(Math.random() * 360) }, 72%, 54%)`;
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	speak(message) {
		this.message = message;
		if(this.timeout != null) clearTimeout(this.timeout);
		this.timeout = setTimeout(function(player) {
			player.message = null;
			player.timeout = null;
		}, 5000, this);
		const encodedMessage = utf8Encoder.encode(message);
		for(const peerId of peerIds) speakTopic.send(peerId, encodedMessage);
	}
	move() {
		const dy = this.movement.up && this.movement.down
			? 0
			: (this.movement.down - this.movement.up) * Player.moveFactor; 
		const dx = this.movement.left && this.movement.right
			? 0
			: (this.movement.right - this.movement.left) * Player.moveFactor;
		const targetGround = getTile(
			Math.floor((this.x + dx) / TILE_WIDTH),
			Math.floor((this.y + dy) / TILE_HEIGHT)
		);
		switch(targetGround) {
			case "~":
			case undefined:
				return;
		}
		this.x += dx;
		this.y += dy;
	}
	draw() {
		if(this.x == null || this.y == null) return;
		const offsetX = this.x - camera.x;
		const offsetY = this.y - camera.y;
		// Shadow
		context.fillStyle = "#333333";
		context.fillRect(offsetX - 12, offsetY + 2, 24, 4);
		// Outline
		context.fillStyle = "rgba(0, 0, 0, 0.08)";
		context.fillRect(offsetX - 14, offsetY - 42, 28, 46);
		// Head
		context.fillStyle = this.skinTone;
		context.fillRect(offsetX - 12, offsetY - 40, 24, 20);
		// Shirt
		context.fillStyle = this.shirtColor;
		context.fillRect(offsetX - 12, offsetY - 20, 24, 22);
		// Talk bubble
		if(this.message) {
			const shortMessage = this.message.length > 60
				? this.message.slice(0, 60) + "..."
				: this.message;
			const width = context.measureText(shortMessage).width;
			context.fillStyle = "#f2f2f2";
			context.fillRect(offsetX - width / 2 - 8, offsetY - 84, width + 16, 32);
			context.fillStyle = "black";
			context.font = "1rem sans-serif";
			context.fillText(shortMessage, offsetX - width / 2, offsetY - 62);
		}
	}
	get vector() {
		const buffer = new Uint8Array(8);
		for(let i = 0; i < 4; ++i) {
			buffer[i] = (this.x >> (i * 8)) % 256;
			buffer[i + 4] = (this.y >> (i * 8)) % 256;
		}
		return buffer;
	}
	set vector(buffer) {
		this.x = 0;
		this.y = 0;
		for(let i = 0; i < 4; ++i) {
			this.x += buffer[i] << (i * 8);
			this.y += buffer[i + 4] << (i * 8);
		}
	}
}

const players = new Map;

const ownPlayer = new Player(
	+localStorage.getItem("playerX") || TILE_WIDTH * 50,
	+localStorage.getItem("playerY") || TILE_HEIGHT * 50
);

players.set("self", ownPlayer);

function getPlayer(id) {
	if(!players.has(id)) {
		players.set(id, new Player);
		logChat(`Peer ${ id } joined.`);
	}
	return players.get(id);
}

speakTopic.addEventListener("message", event => {
	const player = getPlayer(event.peerId);
	const message = urf8Decoder.decode(event.message);
	player.message = message;
	logChat(message, event.peerId);
});

moveTopic.addEventListener("message", event => getPlayer(event.peerId).vector = event.message);

window.addEventListener("unload", save);
setInterval(save, 1000);

function save() {
	localStorage.setItem("playerX", ownPlayer.x);
	localStorage.setItem("playerY", ownPlayer.y);
}

window.addEventListener("keydown", event => {
	switch(event.code) {
		case "ArrowUp":
			ownPlayer.movement.up = true;
			event.preventDefault();
			break;
		case "ArrowDown":
			ownPlayer.movement.down = true;
			event.preventDefault();
			break;
		case "ArrowLeft":
			ownPlayer.movement.left = true;
			event.preventDefault();
			break;
		case "ArrowRight":
			ownPlayer.movement.right = true;
			event.preventDefault();
			break;
		case "Enter":
			const message = prompt("Enter a message");
			if(message) {
				ownPlayer.speak(message);
				logChat(message, "You");
			}
			break;
	}
});

window.addEventListener("keyup", event => {
	switch(event.code) {
		case "ArrowUp":
			ownPlayer.movement.up = false;
			event.preventDefault();
			break;
		case "ArrowDown":
			ownPlayer.movement.down = false;
			event.preventDefault();
			break;
		case "ArrowLeft":
			ownPlayer.movement.left = false;
			event.preventDefault();
			break;
		case "ArrowRight":
			ownPlayer.movement.right = false;
			event.preventDefault();
			break;
	}
});

// Main loop
setInterval(() => {
	for(const player of players.values()) player.move();
	for(const peerId of peerIds) moveTopic.send(peerId, ownPlayer.vector);
}, 10);

const camera = {
	x: ownPlayer.x - canvas.width / 2,
	y: ownPlayer.y - canvas.height / 2
};

let time;

const cameraFlex = 0.7;

function adjustCamera() {
	if(ownPlayer.x > camera.x + canvas.width * cameraFlex) {
		camera.x = ownPlayer.x - canvas.width * cameraFlex;
	}
	if(ownPlayer.x < camera.x + canvas.width * (1 - cameraFlex)) {
		camera.x = ownPlayer.x - canvas.width * (1 - cameraFlex);
	}
	if(ownPlayer.y > camera.y + canvas.height * cameraFlex) {
		camera.y = ownPlayer.y - canvas.height * cameraFlex;
	}
	if(ownPlayer.y < camera.y + canvas.height * (1 - cameraFlex)) {
		camera.y = ownPlayer.y - canvas.height * (1 - cameraFlex);
	}
	camera.x = Math.floor(camera.x);
	camera.y = Math.floor(camera.y);
}

function render() {
	const startCol = Math.floor(camera.x / TILE_WIDTH);
	const endCol = startCol + (canvas.width / TILE_WIDTH) + 1;
	const offsetX = -camera.x + startCol * TILE_WIDTH;
	const startRow = Math.floor(camera.y / TILE_HEIGHT);
	const endRow = startRow + (canvas.height / TILE_HEIGHT) + 1;
  const offsetY = -camera.y + startRow * TILE_HEIGHT;
	time = Date.now();
	context.clearRect(0, 0, canvas.width, canvas.height);
	adjustCamera();
	for(let col = startCol; col < endCol; ++col) {
		for(let row = startRow; row < endRow; ++row) {
			const tile = getTile(col, row);
			const x = (col - startCol) * TILE_WIDTH + offsetX;
			const y = (row - startRow) * TILE_HEIGHT + offsetY;
			getDrawRoutine(tile)(x, y, col, row);
		}
	}
	const playersSorted = [ ...players.values() ].sort((a, b) => a.y < b.y);
	for(const player of playersSorted) player.draw();
	requestAnimationFrame(render);
}

render();

function genRand(x, y) {
	let q = (x + 100) ** 2 * (y + 100);
	q ^= (q >> 12);
	q ^= (q << 25);
	q ^= (q >> 27);
	return (q % 100) / 100;
}

function getDrawRoutine(key) {
	switch(key) {
		case ":": return drawGrass;
		case "#": return drawPath;
		case "W": return drawWood;
		default: return drawWater;
	}
}

function drawGrass(x, y, col, row) {
	context.fillStyle = `rgb(96, ${ 182 + genRand(col, row) * 20 }, 120)`;
	context.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT);
}

function drawPath(x, y, col, row) {
	const rand = genRand(col, row);
	const redChannel = 188 + rand * 12;
	const greenChannel = 188 + rand * 8;
	context.fillStyle = `rgb(${ redChannel }, ${ greenChannel }, 172)`;
	context.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT);
}

function drawWood(x, y, col, row) {
	const rand = genRand(col, row);
	const redChannel = 128 + rand * 12;
	const greenChannel = 110 + rand * 8;
	context.fillStyle = `rgb(${ redChannel }, ${ greenChannel }, 101)`;
	context.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT);
}

function drawWater(x, y, col, row) {
	const blueChannel = 240 + Math.sin(genRand(col, row) * Math.floor(time / 150)) * 20;
	context.fillStyle = `rgb(60, 60, ${ blueChannel })`;
	const tileAbove = getTile(col, row - 1);
	context.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT);
	if(tileAbove != "~" && tileAbove != undefined) {
		context.fillStyle = `rgb(0, 0, 160)`;
		context.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT * 0.25);
	}
}
