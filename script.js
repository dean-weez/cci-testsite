console.log("psssst secret h@ck3r message");

let bucket = document.getElementById("bucket");
let bug = document.getElementById("bug");
let infoText = document.getElementById("info-text");

bucket.addEventListener("click", () => {
  bucket.style.transition = 'transform 1s ease-in-out';
  bucket.style.transform = 'rotate(180deg)';

  setTimeout(() => {
    bug.style.transition = 'transform 1s ease-in-out';
    bug.style.transform = 'translate(0, 300px)';
  }, 1000);
});

