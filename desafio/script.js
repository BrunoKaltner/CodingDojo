//Sistema de Estacionamento Inteligente
// Nível 1 — Cálculo básico
// Criar uma função calcularValor(horas) que calcula o valor a pagar, sabendo que:
// ●	A hora custa R$ 6,00.
// ●	Qualquer fração de hora conta como hora cheia (arredonda pra cima).
// calcularValor(1);    // 6
// calcularValor(1.2);  // 12  (arredondou pra 2h)
// calcularValor(3);    // 18


// function calcularValorNivel1(horas) {
//     const horasCobradas = Math.ceil(horas);
//     return horasCobradas * 6;
// }

// console.log(calcularValorNivel1(1));
// console.log(calcularValorNivel1(6));

//Nível 2 — Tipos de veículo
/*O estacionamento agora recebe carros e motos, com preços diferentes:
●	Carro: R$ 6,00/hora
●	Moto: R$ 3,00/hora
calcularValor(1, 'carro'); // 6
calcularValor(1, 'moto');  // 3
calcularValor(3, 'moto');  // 9*/


// function calcularValorNivel2(horas, tipo) {
//     const horasCobradas = Math.ceil(horas);
//     if (tipo === "carro") {
//     return horasCobradas * 6;
//     } else {
//      return horasCobradas * 3
//     }
// }
// console.log(calcularValorNivel2(1, "carro"));
// console.log(calcularValorNivel2(3, "Moto"));


// Nível 3 — Tolerância e primeira hora diferenciada
// Novas regras de negócio:
// ●	Os primeiros 15 minutos são grátis (até 0,25h não cobra nada).
// ●	A primeira hora tem tarifa fixa: R$ 8,00 (carro) / R$ 4,00 (moto).
// ●	Cada hora adicional custa R$ 4,00 (carro) / R$ 2,00 (moto), sempre arredondando fração pra hora cheia.
// calcularValor(0.2, 'carro');  // 0   (dentro da tolerância)
// calcularValor(1, 'carro');    // 8
// calcularValor(1.5, 'carro');  // 12  (1ª hora + 1 adicional arredondada)
// calcularValor(3, 'moto');     // 8   (4 + 2 + 2)



// function calcularValorNivel3(horas, tipo) {
//     const horasCobradas = Math.ceil(horas);
//     const horaCheia = hor
//     const horaAdicional =
//     if (horas <= 0.25) {
//         return 0;
//     } else if (horas >= 0.26 && tipo === "Carro") {
//         return 8;
//     } else {
//         return 4;
//     }

// }

// console.log(calcularValorNivel3(1, "Carro"));
// console.log(calcularValorNivel3(1));
// console.log(calcularValorNivel3(0.24));


// do proff

// function calcularValorNivel3 (horas, tipo) {
//     if (horas <= 0.25) return 0;

//     const precoPrimeiraHora = tipo === "moto" ? 4 : 8;
//     const precoHoraAdicional = tipo === "moto" ? 2 : 4;

//     if (horas <= 1) return precoPrimeiraHora;

//     const horaAdicionais = Math.ceil(horas -1);
//     return precoPrimeiraHora + horaAdicionais * precoHoraAdicional;
// }

// console.log(calcularValorNivel3(5, "moto"));



// Nível 4 — Período noturno e diária máxima
// ●	Entre 22h e 6h, a hora adicional custa o dobro (período noturno).
// ●	Existe uma diária máxima: R$ 40,00 (carro) e R$ 20,00 (moto) — o veículo nunca paga mais que isso, não importa quantas horas ficou.
// A função agora precisa saber o horário de entrada e saída. Sugestão de formato (podem discutir outro):
// calcularValor({ horaEntrada: 8, horaSaida: 11, tipo: 'carro' });
// // horaEntrada/horaSaida em formato 24h (números inteiros, de 0 a 23)

function calcularValorNivel4({horaEntrada, horaSaida, tipo}) {
    const diariaMaxima = tipo === "carro" ? 40 : 20;
    const HoraAdicional = tipo === "carro" ? 4 : 2;
    const primeiraHora = tipo === "carro" ?  8 : 4;
    
const totalHoras = horaSaida > horaEntrada
? horaSaida - horaEntrada
:(24 - horaEntrada) + horaSaida;

if (totalHoras === 0){
    return 0;
}
 let horaAtual = (horaEntrada +1) % 24; 
    }
        

    





