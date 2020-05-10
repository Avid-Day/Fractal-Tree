function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run_timer() {
  let ind = slider.value;
  while (ind < branches.length) {
    if (changePos) {
      changePos = false;
      ind = slider.value;
    }
    slider.value = ind;
    update(ind);
    ind++;
    await sleep(10);
  }
}

//run_timer();
