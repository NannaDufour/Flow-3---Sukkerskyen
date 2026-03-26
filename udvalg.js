// Udvalg - Array med objekter //

const Slik = [
  {
    navn: "Lakridspiber",
    billede: "Lakridspiber.jpeg",
    pris: 50,
    vægt: "100g",
  },
  {
    navn: "Salt lakridser",
    billede: "Swedish_salty_liquorice.jpg",
    pris: 60,
    vægt: "100g",
  },
  {
    navn: "Lakridsstænger",
    billede: "lakridsstaenger.jpg",
    pris: 60,
    vægt: "100g",
  },
  {
    navn: "Lakridskonfekt",
    billede: "lakridskonfekt.jpg",
    pris: 50,
    vægt: "100g",
  },

  {
    navn: "Jelly Beans",
    billede: "amit-lahav-3t07n27XK-w-unsplash.jpg",
    pris: 50,
    vægt: "100g",
  },
  {
    navn: "Vingummibamser",
    billede: "amit-lahav-LU_fCezP9-o-unsplash.jpg",
    pris: 60,
    vægt: "100g",
  },
  {
    navn: "Vingummifrugter",
    billede: "vingummifrugt.png",
    pris: 60,
    vægt: "100g",
  },
  {
    navn: "Chokoladeknapper",
    billede: "amit-lahav-3oDQKoKPMng-unsplash.jpg",
    pris: 50,
    vægt: "100g",
  },
  {
    navn: "hvid chokolade",
    billede: "hvidchokolade.jpg",
    pris: 60,
    vægt: "100g",
  },
  {
    navn: "Mørk chokolade",
    billede: "darkchocolate.jpg",
    pris: 70,
    vægt: "100g",
  },
  {
    navn: "Chokoladebarer",
    billede: "denny-muller-mGP8gyGb8zY-unsplash.jpg",
    pris: 60,
    vægt: "100g",
  },
];

window.onload = function () {
  Slik.forEach((product) => {
    let temp = document.getElementsByTagName("template")[0];

    let clon = temp.content.cloneNode(true);

    clon.getElementById("navn").textContent = product.navn;
    clon.getElementById("billede").src = product.billede;
    clon.getElementById("pris").textContent = product.pris + " kr";
    clon.getElementById("vægt").textContent = product.vægt;

    // find knappen i klonen
    let button = clon.querySelector(".addToCart");

    // klik event
    button.addEventListener("click", () => {
      addToCart(product);
    });

    document.getElementById("udvalgListe").appendChild(clon);
  });
};

function addToCart(product) {
  // gem valgt produkt midlertidigt
  localStorage.setItem("valgtProdukt", JSON.stringify(product));

  // send til ny side
  window.location.href = "bestil.html";
}

//Burger menu

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
