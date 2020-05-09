let dpi = window.devicePixelRatio;

const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      deg_rad_ratio = Math.PI / 180.0;

let MAX_DEPTH = 7; // placeholder value

ctx.fillStyle = "#C0C0C0";
ctx.translate(0.5, 0.5); // adjust by 0.5 px for clearness.

//ctx.lineWidth = 10

function fix_dpi() {
  let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2),
      style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
      canvas.setAttribute("height", style_height * dpi);
      canvas.setAttribute("width", style_width * dpi);

}

fix_dpi();

function line(x, y, nx, ny, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(x, y);
  ctx.lineTo(nx, ny);
  ctx.stroke();
  //ctx.lineWidth = 1;
}

function make_tree(x, y, angle, depth) {
  if (depth == MAX_DEPTH) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, 30 / depth, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.stroke();
    return;
  }
  let n_angle = angle * deg_rad_ratio;
  let hypo = Math.floor(Math.random() * 14) + 15;
  let nx = x + (Math.cos(n_angle) * (MAX_DEPTH - depth) * hypo),
      ny = y + (Math.sin(n_angle) * (MAX_DEPTH - depth) * hypo);
  line(x, y, nx, ny, MAX_DEPTH - depth);

  for (let i = 2; i <= 3 + Math.floor(depth / 2); i++) {
    let rotate = Math.floor(Math.random() * 20) + 10;
    if (i % 2 == 0) rotate *= -1;
    make_tree(nx, ny, angle + rotate, depth + 1);
  }
  // make_tree(nx, ny, angle - 20, depth + 1);
  // make_tree(nx, ny, angle + 20, depth + 1);
}
//ctx.beginPath();

make_tree(450, 700, -90, 0);

//ctx.closePath();
//ctx.stroke();
