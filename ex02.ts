import PromptSync from "prompt-sync";
const prompt = PromptSync()

export function ex02() {

    let peso : number = parseFloat(prompt("Digite o seu peso: "));
    let altura : number = parseFloat(prompt("Digite o seu altura: "));
    let IMC : number = peso / (altura * altura)

    if (IMC <= 18.5) {
        console.log(`Abaixo do peso: ${IMC.toFixed(0)}`)
    } else if (IMC >= 25 && IMC <= 29.9) {
        console.log(`Sobrepeso: ${IMC.toFixed(0)}`)
    } else if (IMC >= 30 && IMC <= 34.9) {
        console.log(`Obesidade grau 1: ${IMC.toFixed(0)}`)
    } else if (IMC >= 35.0 && IMC <= 39.9) {
        console.log(`Obesidade grau 2: ${IMC.toFixed(0)}`)
    } else {
        console.log(`Obesidade grau 3: ${IMC.toFixed(0)}`)
    }
}
