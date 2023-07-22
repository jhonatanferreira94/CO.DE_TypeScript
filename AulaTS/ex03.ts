import PromptSync from "prompt-sync";
const prompt = PromptSync()

export function ex03() {


    let multiplicador:number = parseFloat(prompt("Digite o multiplicador: "));

    for (let contador:number = 1; contador <= 10; contador++) {
        console.log(`${contador} x ${multiplicador} = ${contador * multiplicador}`);
    }
}
