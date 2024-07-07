function sleep(seconds) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), seconds);
  });
}

async function main() {
  console.log("one");
  await sleep(20000);
  console.log("two");
}

main();
