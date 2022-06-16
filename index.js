const Brightness = document.getElementById("brightness");
const Blur = document.getElementById("blur");
const Saturation = document.getElementById("saturation");
const GrayScale = document.getElementById("grayScale");
const canvas = document.getElementById("canvas");
const canvasCtx = canvas.getContext("2d");
const FileInput = document.getElementById("inputFile");
let image = null;
let brightness = 100;
let blur = 0;
let saturation = 100;
let grayScale = 0;
Brightness.addEventListener("change", (e) => {
  brightness = e.target.value;
  renderImage();
});
Blur.addEventListener("change", (e) => {
  blur = e.target.value;
  renderImage();
});
Saturation.addEventListener("change", (e) => {
  saturation = e.target.value;
  renderImage();
});
GrayScale.addEventListener("change", (e) => {
  grayScale = e.target.value;
  renderImage();
});

const renderImage = () => {
  canvas.width = image.width;
  canvas.height = image.height;
  canvasCtx.filter = `brightness(${brightness}%) blur(${blur}px) saturate(${saturation}%) grayScale(${grayScale}%)`;
  canvasCtx.drawImage(image, 0, 0);
};

FileInput.addEventListener("change", (e) => {
  image = new Image();
  image.addEventListener("load", () => {
    renderImage();
  });
  image.src = URL.createObjectURL(FileInput.files[0]);
});
