// Como podemos melhorar o esse código usando TS? 

interface pessoa {
    nome: string,
    idade: number,
    profissao: Trabalho
}

enum Trabalho {
    Atriz,
    Padeiro
}

const pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
}


let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}