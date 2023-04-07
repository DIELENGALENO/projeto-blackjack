/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartasUsuario = []
let cartasComputador = []


console.log("Boas vindas ao jogo de BlackJack!")

if (confirm("Quer iniciar uma nova rodada? ")) {

   // Sortear cartas para cada jogador.

   const cartaUsuario = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaComputador = comprarCarta()
   const cartaComputador2 = comprarCarta()
   // const cartaComputador = { texto: 'A♥️', valor: 11 }
   // const cartaComputador2 = { texto: 'A♥️', valor: 11 }

   cartasUsuario.push(cartaUsuario)
   cartasUsuario.push(cartaUsuario2)
   cartasComputador.push(cartaComputador)
   cartasComputador.push(cartaComputador2)



   while (asDuasCartasSaoAses(cartasUsuario, cartasComputador)) {
      cartasUsuario.pop()
      cartasUsuario.pop()
      cartasComputador.pop()
      cartasComputador.pop()
      const cartaUsuario = comprarCarta();
      const cartaUsuario2 = comprarCarta();
      const cartaComputador = comprarCarta()
      const cartaComputador2 = comprarCarta()
      cartasUsuario.push(cartaUsuario)
      cartasUsuario.push(cartaUsuario2)
      cartasComputador.push(cartaComputador)
      cartasComputador.push(cartaComputador2)
   }


   let comprarMaisCartas = true

   if (cartasUsuario[0].valor + cartasUsuario[1].valor >= 21) {
      comprarMaisCartas = false
   }

   while (comprarMaisCartas) {

      let textoDasCartas = ""

      for (let i = 0; i < cartasUsuario.length; i++) {
         textoDasCartas = textoDasCartas + cartasUsuario[i].texto + " "
      }

      // MOSTRAR O CONFIRM
      let resultadoDaEnquete = confirm(
         `Suas cartas são ${textoDasCartas}. A carta revelada do computador é ${cartasComputador[0].texto}.` +
         "\nDeseja comprar mais uma carta?"
      )

      if (resultadoDaEnquete) {
         const novaCartaComprada = comprarCarta()
         cartasUsuario.push(novaCartaComprada)

         // parar de comprar caso ele passou de 21

         let valorDasCartasDoUsuario = 0

         for (let i = 0; i < cartasUsuario.length; i++) {
            valorDasCartasDoUsuario = valorDasCartasDoUsuario + cartasUsuario[i].valor
         }



         if (valorDasCartasDoUsuario >= 21) {
            comprarMaisCartas = false
         }



      } else {
         comprarMaisCartas = false
      }

   }


   // nesse lugar o usuario parou de comprar cartas



   let pontuacaoUsuario = 0

   for (let i = 0; i < cartasUsuario.length; i++) {
      pontuacaoUsuario = pontuacaoUsuario + cartasUsuario[i].valor
   }


   let pontuacaoComputador = 0

   for (let i = 0; i < cartasComputador.length; i++) {
      pontuacaoComputador = pontuacaoComputador + cartasComputador[i].valor
   }


   let computadroComprarMaisCartas = true


   if (pontuacaoUsuario > 21) {
      computadroComprarMaisCartas = false
   }

   while (computadroComprarMaisCartas) {

      if (pontuacaoComputador < pontuacaoUsuario) {
         const novaCartaComprada = comprarCarta()
         cartasComputador.push(novaCartaComprada)
         pontuacaoComputador = 0

         for (let i = 0; i < cartasComputador.length; i++) {
            pontuacaoComputador = pontuacaoComputador + cartasComputador[i].valor
         }
      } else {
         computadroComprarMaisCartas = false
      }

   }


   pontuacaoComputador = 0

   for (let i = 0; i < cartasComputador.length; i++) {
      pontuacaoComputador = pontuacaoComputador + cartasComputador[i].valor
   }


   let textoDasCartasDoUsuario = ""

   for (let i = 0; i < cartasUsuario.length; i++) {
      textoDasCartasDoUsuario = textoDasCartasDoUsuario + cartasUsuario[i].texto + " "
   }

   let textoDasCartasDoComputador = ""

   for (let i = 0; i < cartasComputador.length; i++) {
      textoDasCartasDoComputador = textoDasCartasDoComputador + cartasComputador[i].texto + " "
   }

   //Imprimir cartas e pontuação de cada jogador.
   // console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontuacaoUsuario}`)
   // console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontuacaoComputador}`)
   //Imprimir vencedor ou empate.



   let textoFinal = `Suas cartas são ${textoDasCartasDoUsuario}. Sua pontuação é ${pontuacaoUsuario}.\n`
      + `As cartas do computador são ${textoDasCartasDoComputador}. A pontuação do computador é ${pontuacaoComputador}.\n`



   if (pontuacaoUsuario > 21) {
      textoFinal = textoFinal + "O computador ganhou!"
   } else if (pontuacaoComputador > 21) {
      textoFinal = textoFinal + "O usuário ganhou!"
   } else if (pontuacaoUsuario > pontuacaoComputador) {
      textoFinal = textoFinal + "O usuário ganhou!"
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      textoFinal = textoFinal + "O computador ganhou!"
   } else if (pontuacaoComputador === pontuacaoUsuario) {
      textoFinal = textoFinal + "Empate!"
   }

   alert(textoFinal)

}



function asDuasCartasSaoAses(cartasUsuario, cartasComputador) {

   if (cartasUsuario[0].texto.includes("A") && cartasUsuario[1].texto.includes("A")) {
      return true
   }

   if (cartasComputador[0].texto.includes("A") && cartasComputador[1].texto.includes("A")) {
      return true
   }

   return false
}