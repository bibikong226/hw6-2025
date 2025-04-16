var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	video.load();
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	});

	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("New speed:", video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("New speed:", video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current time:", video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
		} else {
			video.muted = true;
			this.textContent = "Unmute";
		}
	});

	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").textContent = this.value + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});
