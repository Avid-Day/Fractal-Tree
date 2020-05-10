let slider = document.getElementById("myRange"),
    output = document.getElementById("display-value");

//output.innerHTML = slider.value;

slider.max = branches.length - 1;

let changePos = false;

function update(val) {
  let ind = val;
  output.innerHTML = ind;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i <= ind; i++) {
    if (branches[i].length == 3) {
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(branches[i][0], branches[i][1], 30 / branches[i][2], 0, 2 * Math.PI);
      ctx.fill();
      continue;
    }

    let x = branches[i][0],
        y = branches[i][1],
        nx = branches[i][2],
        ny = branches[i][3],
        depth = branches[i][4];

    line(x, y, nx, ny, MAX_DEPTH - depth + 2);
  }
}

function manual_update(val) {
  update(val);
  changePos = true;
}
