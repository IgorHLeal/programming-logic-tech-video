/* EXERCÍCIO 3
=========================
Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
EXEMPLO:
Preço: R$60,00
À vista: R$54,00
Ou 3x de: R$20,00
========================= */

let price = 60;
let desconto = 10;
let parcelas = 0;

const calculoAVista = (price - (desconto / 100) * price);
const calculoParcelas = (price / 3);

const messagePrice = `Preço: R$${price.toFixed(2)}`;
const messageAVista = `À vista: R$${calculoAVista.toFixed(2)}`;
const messageParcelas = `Ou 3x de: R$${calculoParcelas.toFixed(2)}`;


console.log(messagePrice);
console.log(messageAVista);
console.log(messageParcelas);
