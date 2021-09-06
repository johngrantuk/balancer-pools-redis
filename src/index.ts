function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    while(true){
        console.log('YO');
        await sleep(10000);
    }
}

main();
