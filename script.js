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
    
    }
    })
}
selectedColor();

function pintarPixels(){
    
    let pixelBord = document.getElementById("pixel-board");
    pixelBord.addEventListener('click', function(event){
        let pixelSelected = event.target;
        console.log(pixelSelected);
        let colorSelecionada = document.querySelector('.selected');
        console.log(colorSelecionada);
        if(pixelSelected.classList == 'pixel'){
        pixelSelected.id = colorSelecionada.id; }


    })

    

}
pintarPixels();
