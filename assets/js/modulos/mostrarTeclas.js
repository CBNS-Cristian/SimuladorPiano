export default function mostrarTeclas(){
    const mostrar = document.querySelectorAll('.key span');
    const teclaInput = document.querySelector('.teclas-input input');
   
    teclaInput.addEventListener('click',(e)=>{
        if(teclaInput.hasAttribute('checked')){
            teclaInput.removeAttribute('checked')
            mostrar.forEach((item)=>{
            item.style.display = 'block'
            })
        }else{       
        teclaInput.setAttribute('checked', 'true')
        if(teclaInput.checked === true){
        mostrar.forEach((item)=>{
            item.style.display = 'none'
        })
        }
    }
    })

}