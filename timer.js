function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run_timer() {
  for (let i = 0; i < branches.length; i++) {
    slider.value = i;
    update(i);
    await sleep(10);
  }
}

run_timer();
