const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let timerId
document.body.append(canvas);

onresize = start;

start();

function drawPolygon(points) {
	ctx.beginPath()
	ctx.moveTo(points[0].x, points[0].y);
	ctx.lineTo(points[1].x, points[1].y);
	ctx.lineTo(points[2].x, points[2].y);
	ctx.lineTo(points[3].x, points[3].y);
	ctx.lineTo(points[0].x, points[0].y);

	ctx.strokeStyle = 'red'
	ctx.lineWidth = 5;
	ctx.fillStyle = 'gold'
	ctx.lineCap = 'round'
	ctx.stroke();
	ctx.fill();
};

function start() {
	cancelAnimationFrame(timerId);

	canvas.width = innerWidth;
	canvas.height = innerHeight;
	let step = 1;

	let points = [
		{ x: (innerWidth / 100), y: (innerHeight / 2) },
		{ x: (innerWidth / 2), y: (innerHeight / 100) },
		{ x: (innerWidth * 0.99), y: (innerHeight / 2) },
		{ x: (innerWidth / 2), y: (innerHeight * 0.99) },
	]

	animate();

	function animate() {
		if (points[0].y < innerHeight * 0.01 || points[2].y < innerHeight * 0.01) { step *= -1 };

		points[0].y -= step;
		points[1].x += step;
		points[2].y += step;
		points[3].x -= step;
		drawPolygon(points)

		timerId = requestAnimationFrame(animate);
	};

}