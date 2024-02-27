const btn = document.getElementById('btn')
const jokecontainer = document.getElementById('title')
const memeimg = document.getElementById('img')

async function foo(){
    let url = await fetch('https://meme-api.com/gimme/wholesomememes')
    let x = await url.json()
    jokecontainer.textContent = `${x.title}`
    memeimg.src = `${x.url}`;
  console.log(x)
}


async function main(){
    let jokes = foo()
    console.log(jokes)
    
}
main()

btn.addEventListener('click',()=>{
    foo()
})
