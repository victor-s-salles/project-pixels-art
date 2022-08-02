function selectedColor(){
    let colorSelect = document.querySelector('.selected');
    let colors = document.querySelectorAll('.color')
    let paletaCores = document.getElementById('color-palette');
    paletaCores.addEventListener('click', function(event){
        let colorClicked = event.target;
        if(colorClicked.classList == 'color'){
        for(let index = 0; index < 4 ; index +=1){
            colors[index].classList.remove('selected')
        }
        
        colorClicked.classList.add('selected');
        console.log(colorClicked);
    }
    })
}
selectedColor();