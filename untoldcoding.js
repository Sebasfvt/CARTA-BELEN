const text =
  "Querida Belén, hace mucho que no te escribo una carta, es complicado pq estamos lejos, pero siempre existen maneras de poderte transmitir lo que siento, es por eso que hice esto, quisiera hablarte de muchas cosas. En primer lugar, me gustaría pedirte perdón por todo lo que ha pasado estas semanas, mis dramas y mis exageraciones, perdón si es que te hice sentir mal en algún momento o algo relacionado con eso, si quieres saber como me esta yendo ahora pues bien, ya he pensado mejor las cosas y con este corto tiempo desde lo que pasó, aprendí que no necesito hablar todos los días contigo ni en cada momento, para poder sentirte conmigo y a mi lado, fue algo complicado pero ya pude aprender sobre eso y te agradezco realmente, siento que a veces tenemos altos y bajos en la relación y créeme que siempre trato de hacer lo posible para evitar peleas porque ese tipo de cosas nos dañan mucho mas que antes, porque estamos mas vulnerables al estar lejos, pero de verdad esto será momentáneo, pronto nos veremos, y en un próximo abrir y cerrar de ojos, ya estaremos los dos aquí juntos, se que no te gusta que hable del futuro ahora, pero lo veo como una posibilidad que me gustaría que pase, siempre y cuando tu quieras claro, pero dejemos el futuro a un lado y te pido que vivamos el presente mas que nunca, estoy pasando por muchas cosas ahora y lo único que quiero es poder compartir contigo momentos que me hagan permanecer feliz y contento, sé que es un poco mas complicado demostrarte que te amo ahora que estamos así, pero me gustaría que sepas que te amo cada día mas, y nunca dudes de eso porque jamás cambiará. Por otro lado, quiero que también sepas que siempre estaré para ti, nunca me alejaré porque me gusta tenerte a mi lado y aún así terminemos (no va a pasar dasdkajsd), estare un contigo y cada vez que me necesites estaré ahí, nunca dudes en contarme cuando te sientas mal porque aunque a veces me cueste hacerte sentir mejor o consolarte, estare a tu lado, escuchándote y no me separare de ti, porque siempre te he demostrado que me importa demasiado como te sientes y me duele verte mal, asi que ya lo sabes, siempre tendrás un hombro en donde llorar y un corazón donde refugiarte. Finalmente, sé que hoy tienes la final de voley, aunque lo niegues, sé que te hace ilusión ganarlo. Si te soy sincero, para mi tu ya eres ganadora (se que es una frase cliché pero igual), lo digo porque aunque no sea testigo por completo de tu proceso de entrenamiento y demás, sé las ganas que le pones y el afecto que le tienes al deporte y para mí eso ya es ganar. Sé que ganarán (por ti asdjkasd, y si no ganan, te pido que no te sientas mal ni te sientas culpable ni mucho menos que no lo diste tuyo, porque te conozco Belén, tu siempre pones todo de ti y no me vas a negar eso, a veces te pones nerviosa si, pero aun asi pones todo tu empeño y no deberías sentirte mal por eso. Confío en ti mi amor porque te conozco 2 años y medio y llevo 2 años enamorado de ti, se que lo harás genial asi ganes o pierdas, se que eres la mejor y este partido solo será uno mas en tu proceso, aun tienes que seguir entrenando y mejorando. Te diría suerte, pero no la necesitas (otra frase cliché aksdjkas), pero de verdad se que lo harás genial porque eres Maria belén Bossio portugal, alguien que a pesar que se le caiga el mundo encima nunca se da por vencida, se pone nerviosa? Si, pero aun asi da todo de si misma, pero le falta aprender a no echarse la culpa y sentirse bien ante una derrota que solo marca el inicio de un largo proceso. Te adoro mi niña, se que eres la mejor entre todas esas chicas y chicos que jugarán y como te dije para mi ya eres ganadora y yo tmb, por tener una novia como tu, espero te vaya muy bien hoy mi amor. Te amo hoy y siempre. Sebastián";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  } else {
    mostrarImagen(); // Llamar a la función para mostrar la imagen cuando el texto termine
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

function mostrarImagen() {
  const imagen = document.getElementById("imagen");
  imagen.style.display = "block"; // Mostrar imagen
  imagen.classList.add("show"); // Activar animación de aparición
  generarCorazones(); // Llamar a la función para generar corazones
}

// Función para generar corazones
function generarCorazones() {
  const heartsContainer = document.getElementById("hearts");

  // Generar corazones en un intervalo de tiempo
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️"; // Aquí puedes usar el emoji de corazón
    heart.style.left = Math.random() * 100 + "vw"; // Posición horizontal aleatoria
    heart.style.animationDelay = Math.random() * 2 + "s"; // Retraso de animación aleatorio
    heartsContainer.appendChild(heart);

    // Si deseas que los corazones se mantengan, no incluyas setTimeout aquí
  }, 400); // Cambia este valor para aumentar o disminuir la frecuencia de aparición
}

// Iniciar la animación al cargar la página
window.onload = startFromBegin;
