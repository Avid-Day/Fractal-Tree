const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      deg_rad_ratio = Math.PI / 180.0;

let MAX_DEPTH = 7; // placeholder value

ctx.fillStyle = "#C0C0C0";
ctx.lineWidth = 1;
ctx.translate(0.5, 0.5); // adjust by 0.5 px for clearness.


function line(x, y, nx, ny) {
  ctx.moveTo(x, y);
  ctx.lineTo(nx, ny);
}

function make_tree(x, y, angle, depth) {
  if (depth == MAX_DEPTH) return;
  let n_angle = angle * deg_rad_ratio;
  let nx = x + (Math.cos(n_angle) * (MAX_DEPTH - depth) * 10.0),
      ny = y + (Math.sin(n_angle) * (MAX_DEPTH - depth) * 10.0);
  line(x, y, nx, ny);
  make_tree(nx, ny, angle - 20, depth + 1);
  make_tree(nx, ny, angle + 20, depth + 1);
}
ctx.beginPath();

make_tree(300, 500, -90, 0);
ctx.closePath();
ctx.stroke();
