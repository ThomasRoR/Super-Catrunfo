var carta1 = {
  nome: "Meowth | Pokemon",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta2 = {
  nome: "Blair | Soul Eater",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta3 = {
  nome: "Happy | Fairy Tail",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta4 = {
  nome: "Luna | Sailor Moon",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta5 = {
  nome: "Korin | Dragon Ball",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta6 = {
  nome: "Artemis | Sailor Moon",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta7 = {
  nome: "Meowy | Chainsaw Man",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta8 = {
  nome: "Arthur | Code Geass",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta9 = {
  nome: "Chomusuke | Konosuba",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta10 = {
  nome: "Anpu | Saiki Kusuo no ψ-nan",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta11 = {
  nome: "Morgana | Persona 5",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta12 = {
  nome: "Chi | Chi's Sweet Home",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta13 = {
  nome: "Yoruichi | Bleach",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta14 = {
  nome: "Baron | The Cat Returns",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta15 = {
  nome: "Kirara | InuYasha",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta16 = {
  nome: "Kuro | Blue No Exorcist",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var carta17 = {
  nome: "Madara | Natsume Yuujinchou",
  atributos: {
    fofura: 1,
    inteligencia: 3,
    magia: 2,
  },
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
  carta14,
  carta15,
  carta16,
  carta17,
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 17);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 17);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 17);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você Venceu!!!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você Perdeu!!!";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(cartaMaquina);
}
