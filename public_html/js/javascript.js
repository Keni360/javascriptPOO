/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



   /*============================================
   ||         Classe Slideshow                 ||
     ============================================
   */
   function Slideshow(seletor){
       
        //Atributos
        this.seletor = seletor; //Construtor que indica em qual seletor será aplicada o slideshow
        this.slideshow = document.querySelector(seletor);
        this.i = 1; //contador para percorer o total de slides
        this.slideAtual = document.querySelector(seletor+" :nth-child("+this.i+")"); // retorna o slide atual de acordo com o valor do contador
        this.qntSlides = this.slideshow.children.length; // Retorna o valor total de slides

       // Método para slide tipo fade-in/fade-out
       this.SlideFade = function()
        {
            document.querySelector(this.seletor+" :nth-child(2)").style.opacity = "0";
            this.slideAtual.style.opacity = "0";
            if( this.i <= this.qntSlides){
                this.slideAtual = document.querySelector(seletor+" :nth-child("+this.i+")");
                this.slideAtual.style.opacity = "1";
                this.i++;
            }else{
                this.i = 1;

            }
        } // Fim do método SlideFade 

       //Método que inicia o slideshow
       this.iniciarSlide = function()
       {
           this.SlideFade();

       }
  
}

   window.onload = function(){    
       
       var teste = new Slideshow(".slideshow");
       slide = setInterval(function(){
           teste.iniciarSlide();
       },2000);
       
    var stop = true;
    document.querySelector("#stop").onclick = function(){
        var btn = document.querySelector("#stop");
            if(stop)
            {
               //alert(stop);
               stop = false;
               btn.innerHTML = "Play";
               clearInterval(slide);
            }
            else
            {
               // alert(stop);
                stop = true;
                btn.innerHTML = "Stop";
                setInterval(function(){
                    teste.iniciarSlide();
                },2000);
            }
        
        
};
   }





/*
function Pessoa(){
    this.nome = "Mauro";
   
   
   this.MudarNome = function(){
       this.nome =  prompt("Qual é o seu nome?");
   }
}

window.onload = function(){
    var mauro = new Pessoa();
    
    window.alert(mauro.nome);
    mauro.MudarNome();
    window.alert(mauro.nome);

}
 */