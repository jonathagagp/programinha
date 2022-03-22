let contador = 0;

const url = "ahsuase asheauseh aesu aehas";

function inicio() {
  contador++;
  console.log(`Iniciou o programa pela ${contador}ª vez`);
  const nomes = ["xablau", "marco", "jonathan"];

  nomes.forEach((nome) => console.log(nome));

  if (true) {
    setTimeout(() => {
      console.log("Passou quatro segundos...");
      inicio();
    }, 4000);
  }
}

console.log(url);

inicio();
