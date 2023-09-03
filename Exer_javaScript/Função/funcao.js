
 //
 function escreverNome (nome){

    return 'Meu nome é ' + nome;

 }


 function verificarIdade(idade){
   if(idade >= 18){
      console.log(escreverNome('Fernando') + ' é maior de idade');
   } else {
       console.log(escreverNome('Maria') + ' é menor de idade');
   }
  
 }
 
 verificarIdade(2);
 // 
 
 function aplicarDesconto(valor, desconto){
   return (valor - (valor * (desconto / 100)));

 }

 function aplicarJuros(valor, juros){
   return (valor + (valor * (juros / 100)));
 }

 const precoEtiqueta =100;
 const formaDePagamento = 4;

 if(formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));

 }else if(formaDePagamento === 2) {
   console.log(aplicarDesconto(precoEtiqueta, 15));

 } else if(formaDePagamento === 3){
   console .log(precoEtiqueta);

 } else {
   console.log(aplicarJuros(precoEtiqueta, 10));
 }

 