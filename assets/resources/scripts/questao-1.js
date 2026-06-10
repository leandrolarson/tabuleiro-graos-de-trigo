(function () {
  const container = document.getElementById("div-container");
  const spanTotalKilo = document.getElementById("span-total-kilo");

  container.innerHTML = "";

  function formatarAbreviado(valor) {
    if (valor >= 1e12) return (valor / 1e12).toFixed(1) + "T";
    if (valor >= 1e9) return (valor / 1e9).toFixed(1) + "B";
    if (valor >= 1e6) return (valor / 1e6).toFixed(1) + "M";
    if (valor >= 1e3) return (valor / 1e3).toFixed(1) + "k";
    return valor.toFixed(1);
  }

  for (let i = 1; i <= 64; i++) {
    const casa = document.createElement("div");

    const linha = Math.floor((i - 1) / 8);
    const coluna = (i - 1) % 8;

    if ((linha + coluna) % 2 === 0) {
      casa.className = "black";
    } else {
      casa.className = "white";
    }

    const spanNumero = document.createElement("span");
    spanNumero.className = "position";
    spanNumero.innerText = i;
    casa.appendChild(spanNumero);

    const spanTotal = document.createElement("span");
    spanTotal.className = "total";
    casa.appendChild(spanTotal);

    casa.addEventListener("click", function () {
      const graos = Math.pow(2, i - 1);

      const quilos = graos / 12000;

      spanTotal.innerText = formatarAbreviado(quilos);

      spanTotalKilo.innerText = quilos;
    });

    container.appendChild(casa);
  }
})();
