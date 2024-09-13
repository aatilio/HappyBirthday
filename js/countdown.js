simplyCountdown('#cuenta', {
	year: 2024, // required
	month: 9, // required
	day: 13, // required
	hours: 0, // Default is 0 [0-23] integer
	minutes: 0, // Default is 0 [0-59] integer
	seconds: 0, // Default is 0 [0-59] integer
	words: { //words displayed into the countdown
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, //use plurals
	inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
	enableUtc: false, // Desactivar UTC
	onEnd: function () {
		window.location.href = "loader1.html";
	}, //Callback on countdown end, put your own function here
	refresh: 1000, // default refresh every 1s
	sectionClass: 'simply-section', //section css class
	amountClass: 'simply-amount', // amount css class
	wordClass: 'simply-word', // word css class
	zeroPad: false,
	countUp: false
});


// const canvas = document.getElementById('sky');
// const ctx = canvas.getContext('2d');

// // Ajusta el tamaño del canvas
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Array para las nubes
// const clouds = [];

// // Crear nubes
// function createCloud() {
// 	const cloud = {
// 		x: Math.random() * canvas.width,
// 		y: Math.random() * (canvas.height / 2),
// 		width: 100 + Math.random() * 100,
// 		height: 60 + Math.random() * 60,
// 		speed: 0.5 + Math.random()
// 	};
// 	clouds.push(cloud);
// }

// // Dibujar nubes
// function drawCloud(cloud) {
// 	ctx.beginPath();
// 	ctx.ellipse(cloud.x, cloud.y, cloud.width, cloud.height, 0, 0, Math.PI * 2);
// 	ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
// 	ctx.fill();
// }

// // Actualizar el canvas
// function updateCanvas() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);

// 	clouds.forEach(cloud => {
// 		cloud.x -= cloud.speed;
// 		if (cloud.x + cloud.width < 0) {
// 			cloud.x = canvas.width;
// 		}
// 		drawCloud(cloud);
// 	});

// 	requestAnimationFrame(updateCanvas);
// }

// // Inicializar nubes
// for (let i = 0; i < 10; i++) {
// 	createCloud();
// }

// // Iniciar animación
// updateCanvas();

// // Ajustar tamaño del canvas al redimensionar la ventana
// window.addEventListener('resize', () => {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// });
