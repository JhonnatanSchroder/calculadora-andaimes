const button = document.getElementById("butao");
const total = document.getElementById("total");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const pecas = document.getElementById("pecas").value;
    const dias = document.getElementById("dias").value;
    const preco = document.getElementById("preco").value;

    total.innerText = (pecas * preco * dias).toLocaleString("pt-Br", {
        currency: "BRL",
    });

    form.reset();
});
