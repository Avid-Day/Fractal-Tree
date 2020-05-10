let dpi = window.devicePixelRatio;

const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      deg_rad_ratio = Math.PI / 180.0;

ctx.fillStyle = "#C0C0C0";

canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;

let MAX_DEPTH = 7; // placeholder value

let branches = [];

function fix_dpi() {
  let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2),
      style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
      canvas.setAttribute("height", style_height * dpi);
      canvas.setAttribute("width", style_width * dpi);
}

fix_dpi();

function line(x, y, nx, ny, width) {
  ctx.lineWidth = Math.pow(width, 1.3);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(nx, ny);
  ctx.stroke();
}

function make_tree(x, y, angle, depth) {
  if (depth == MAX_DEPTH) {
    // ctx.beginPath();
    // ctx.fillStyle = "white";
    // ctx.arc(x, y, 30 / depth, 0, 2 * Math.PI);
    // ctx.fill();
    branches.push([x, y, depth]);
    return;
  }
  let n_angle = angle * deg_rad_ratio;
  let hypo = Math.floor(Math.random() * 24) + 20;
  let nx = x + (Math.cos(n_angle) * (MAX_DEPTH - depth) * hypo),
      ny = y + (Math.sin(n_angle) * (MAX_DEPTH - depth) * hypo);
  //line(x, y, nx, ny, MAX_DEPTH - depth + 2);
  branches.push([x, y, nx, ny, depth]);
  for (let i = 2; i <= 3 + Math.floor(depth / 2); i++) {
    let rotate = Math.floor(Math.random() * 12) + 10;
    if (i % 2 == 0) rotate *= -1;
    make_tree(nx, ny, angle + rotate, depth + 1);
  }
}

make_tree(Math.floor(canvas.width / 2), Math.floor(canvas.height * 0.9), -90, 0);
