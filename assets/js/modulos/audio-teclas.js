export default function audioTeclas(){
    const teclasPiano = document.querySelectorAll('.key');
    let audio = new Audio('./assets/audios/a.mp3')
    const volumeTeclas = document.querySelector('#volume');

    const tocarAudio = async (item) => {
        audio.src = `./assets/audios/${item}.mp3`
        audio.currentTime = 0
        await audio.play()
        const pressionarKey = document.querySelector(`[data-key="${item}"]`)
        pressionarKey.classList.add('ativo')
        setTimeout(()=>{
            pressionarKey.classList.remove('ativo')
        }, 150)
    };

    teclasPiano.forEach((item) =>{  
        item.addEventListener('click', () => {  
            return tocarAudio(item.dataset.key)
        })

        document.addEventListener('keydown', (e) =>{
        if(e.key.toUpperCase() === item.dataset.key){
            return tocarAudio(item.dataset.key)
        }
    })
    });

    function mudarVolume(e){
        audio.volume = e.target.value /100
    }
    volumeTeclas.addEventListener('input', mudarVolume)
}