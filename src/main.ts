export async function run() {
  console.log('hello, world')
}

run()
  .then(() => console.log('process end'))
  .catch(error => console.error(`${error}`))