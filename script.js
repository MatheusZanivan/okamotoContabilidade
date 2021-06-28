alert("Bem vindo(a)!")
const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Ola mundo!';
let sorvete = 'chocolate';
if (sorvete === 'chocolate') {
  alert('Opa, Eu amo sorvete de chocolate!');
} else {
  alert('Ahh, mas chocolate é o meu favorito...');
}
let minhaVariavel = document.querySelector('h1');
function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
  }
  multiplica(20, 20);
  let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/firefox-icon.png');
    }
}