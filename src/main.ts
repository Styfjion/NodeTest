export async function run(): Promise<void> {
    console.log('hello, world')
}

try {
    run().then(() => {
        console.log('process end')
    })
} catch (error) {
    console.error(error)
}
