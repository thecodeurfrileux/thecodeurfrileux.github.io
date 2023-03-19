const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"]'
);
let pseudo, email;

/**
 * 
 * @param {prefixe class html} tag
 * @param {diplay message d'erreur} message
 * @param {boolean} valid
 */
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    // add class CSS error
    container.classList.add("error");
    // message error
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  // console(value)
  if ((value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le prénom doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    //  Regex accept : digit, case(UPPER, lower)
    errorDisplay(
      "pseudo",
      "Le prénom ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    // assigne string a value
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

/**
 * Fonction main
 * Appelle toutes les fonctions checkers en fonction de l'id du container.
 * console.log(inputs)
 */
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e.target.id);
    // Le switch teste la valeur d'e.target.id
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

form.addEventListener("submit", (e) => {
  // empeche le comportement par défault
  e.preventDefault();

  if (pseudo && email) {
    const data = {
      pseudo,
      email,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";

    // remettre les valeurs a null
    pseudo = null;
    email = null;
    alert("Inscription validée !");
  } else {
    alert("veuillez remplir correctement les champs");
  }
});