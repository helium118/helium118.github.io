export { }

const getMeme = async () => {
    let meme = await fetch('https://www.reddit.com/r/memes.json', {
        method: 'GET',
    });
    let memeJson = await meme.json();
    console.log(memeJson);
};


getMeme().then(data => console.log(data))
