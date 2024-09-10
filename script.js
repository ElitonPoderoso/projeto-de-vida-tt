const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "o Daniel é gay?",
    alternativas: [
           {
               texto:"sim",
               afirmacao: "afirmação"
           },
           {
               texto:"não",
               afirmação: "afirmação"
           }

        ]
    },
    {
        enunciado: "palmeiras tem mundial?",
        alternativas: [
            {
                texto:"não",
                afirmação: "afirmação"
            },
            {
                texto:"a primeira altenativa",
                afirmação:"afirmação"
            }
            
        ]
    },
    {
        enunciado: "o Gabriel e manco?",
        alternativas: [
            {
                texto: "sim",
                afirmação: "afirmacao"
            },
            {
                texto:"não",
                afirmação:"afirmação"
            }
                        
        ]
    },
    {
        enunciado: "vai chove hoje?",
        alternativas: [
            {
                texto:"talvez",
                afirmação:"afirmação"
            },
            {
                texto:"ja está chovendo faz um tempo",
                afirmação:"afirmação"
            }
            
        ]
    },
    {
        enunciado: "o matheus vai ir para a noite? ",
        alternativas: [
            {
                texto:"sim, talvez",
                afirmação: "afirmação"
            },
            {
                texto:"não",
                afirmação:"afirmação"
            }
            
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        MostrarResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => RespostaSelecionada(Alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    textoPergunta.textContent = "Em 2049…";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

