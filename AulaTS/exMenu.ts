import { ex01 } from "./ex01"
import { ex02 } from "./ex02"
import { ex03 } from "./ex03"
import { ex04 } from "./ex04"

import PromptSync from "prompt-sync";
const prompt = PromptSync()


let exercicio: number = 0;
let continuar: string;

do {
    exercicio = parseInt(prompt("Digite um número que representa um exercício de 1 a 4: "));

    switch (exercicio) {
        case 1:
            ex01();
            break;

        case 2:
            ex02();
            break;

        case 3:
            ex03();
            break;

            case 4:
                ex04()
            break;


        default:
            break;
    }

    continuar = prompt("Deseja continuar e ver outros exercícios?");

} while (continuar.toLocaleLowerCase() === "s");