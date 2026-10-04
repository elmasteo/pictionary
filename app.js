const DATA = {
  "Animales": {
    "Fácil": ["Perro","Gato","León","Tigre","Mono","Pez","Pájaro","Vaca","Cerdo","Caballo","Conejo","Rana","Oso","Pato","Gallina","Ratón","Mariposa","Serpiente","Tortuga","Elefante"],
    "Medio": ["Pingüino","Jirafa","Canguro","Delfín","Cocodrilo","Pulpo","Koala","Gorila","Flamenco","Cebra","Hipopótamo","Camaleón","Murciélago","Pavo real","Erizo","Castor","Panda","Foca","Avestruz","Ardilla"],
    "Difícil": ["Ornitorrinco","Ajolote","Narval","Suricata","Perezoso","Armadillo","Mantis religiosa","Iguana","Medusa","Escorpión","Ciempiés","Mapache","Tejón","Carpincho","Lémur","Antílope","Búfalo","Hiena","Tucán","Salamandra"]
  },
  "Profesiones": {
    "Fácil": ["Doctor","Chef","Policía","Bombero","Profesor","Piloto","Pintor","Cantante","Actor","Dentista","Mecánico","Cartero","Panadero","Granjero","Fotógrafo","Músico","Veterinario","Cajero","Mesero","Carpintero"],
    "Medio": ["Arquitecto","Abogado","Electricista","Plomero","Periodista","Diseñador","Programador","Enfermero","Astronauta","Detective","Jardinero","Peluquero","Fotoperiodista","Geólogo","Biólogo","Ingeniero","Sastre","Barbero","Locutor","Ilustrador"],
    "Difícil": ["Arqueólogo","Meteorólogo","Oceanógrafo","Neurocirujano","Orfebre","Escenógrafo","Criminólogo","Sommelier","Cartógrafo","Restaurador","Entomólogo","Paleontólogo","Coreógrafo","Guionista","Fonoaudiólogo","Topógrafo","Zootecnista","Etnógrafo","Numismático","Herpetólogo"]
  },
  "Comida": {
    "Fácil": ["Pizza","Hamburguesa","Helado","Pastel","Pan","Arroz","Huevo","Sopa","Queso","Manzana","Banano","Taco","Arepa","Pollo","Salchicha","Galleta","Dona","Palomitas","Sandía","Fresa"],
    "Medio": ["Espagueti","Lasaña","Ceviche","Sushi","Ensalada","Hot dog","Nachos","Empanada","Pancakes","Churros","Brownie","Tostada","Croissant","Guacamole","Waffle","Ramen","Paella","Tiramisú","Fondue","Cupcake"],
    "Difícil": ["Ratatouille","Carbonara","Bruschetta","Moussaka","Gnocchi","Crème brûlée","Boeuf bourguignon","Goulash","Tempura","Banh mi","Couscous","Baklava","Tartiflette","Kimchi","Profiteroles","Macaron","Panna cotta","Strudel","Falafel","Gazpacho"]
  },
  "Objetos": {
    "Fácil": ["Mesa","Silla","Cama","Teléfono","Reloj","Llave","Vaso","Cuchara","Lápiz","Libro","Pelota","Paraguas","Zapato","Sombrero","Gafas","Mochila","Cámara","Bicicleta","Cepillo","Espejo"],
    "Medio": ["Aspiradora","Linterna","Tostadora","Maleta","Micrófono","Auriculares","Control remoto","Martillo","Destornillador","Regla","Brújula","Telescopio","Cafetera","Plancha","Calculadora","Patineta","Trípode","Candelabro","Termómetro","Cerradura"],
    "Difícil": ["Proyector","Grúa","Telescopio espacial","Máquina de escribir","Fonógrafo","Máquina de coser","Polaroid","Brújula náutica","Metrónomo","Microscopio","Proyector de cine","Astrolabio","Gramófono","Telégrafo","Barómetro","Estetoscopio","Podómetro","Periscopio","Sismógrafo","Escáner"]
  },
  "Lugares": {
    "Fácil": ["Casa","Escuela","Parque","Playa","Iglesia","Hospital","Cine","Restaurante","Piscina","Granja","Zoológico","Tienda","Aeropuerto","Estadio","Hotel","Biblioteca","Museo","Circo","Montaña","Bosque"],
    "Medio": ["Castillo","Volcán","Desierto","Isla","Faro","Estación de tren","Supermercado","Universidad","Estación espacial","Acuario","Catarata","Puente","Puerto","Camping","Parque de diversiones","Cafetería","Teatro","Oficina","Gimnasio","Cueva"],
    "Difícil": ["Pirámides de Egipto","Torre Eiffel","Machu Picchu","Gran Cañón","Antártida","Selva amazónica","Coliseo romano","Taj Mahal","Stonehenge","Estación polar","Observatorio","Catacumbas","Muralla China","Arrecife de coral","Templo maya","Fiordo","Glaciar","Volcán submarino","Palacio real","Ruinas antiguas"]
  },
  "Acciones": {
    "Fácil": ["Correr","Saltar","Dormir","Comer","Beber","Nadar","Bailar","Llorar","Reír","Cantar","Caminar","Leer","Escribir","Cocinar","Limpiar","Barrer","Saltar la cuerda","Aplaudir","Silbar","Trepar"],
    "Medio": ["Pescar","Patinar","Esquiar","Bucear","Trotar","Pintar","Besar","Abrazar","Estornudar","Toser","Peinarse","Cepillarse","Planchar","Bostezar","Regar plantas","Lavar platos","Hacer ejercicio","Tomar una foto","Abrir un regalo","Inflar un globo"],
    "Difícil": ["Hacer malabares","Montar en monociclo","Armar un rompecabezas","Tocar batería","Hacer yoga","Pescar un pez","Perder el equilibrio","Escalar una pared","Hacer magia","Manejar una excavadora","Hacer una reverencia","Tocar el violín","Hacer snowboard","Montar a caballo","Lanzar un boomerang","Hacer una pirueta","Atrapar una mariposa","Hacer una cometa","Plantar un árbol","Construir un muñeco de nieve"]
  },
  "Películas y personajes": {
    "Fácil": ["Superman","Batman","Spider-Man","Hulk","Shrek","Barbie","Tarzán","Cenicienta","Pinocho","Aladdín","Elsa","Nemo","Simba","Woody","Buzz Lightyear","Minion","Mickey Mouse","Pikachu","Harry Potter","Kung Fu Panda"],
    "Medio": ["Jack Sparrow","Indiana Jones","Sherlock Holmes","Mulan","Rapunzel","Hércules","Ariel","Willy Wonka","Rocky","Terminator","Godzilla","King Kong","Darth Vader","Yoda","Gandalf","Frodo","Joker","Deadpool","Iron Man","Capitán América"],
    "Difícil": ["El Sombrerero Loco","Mary Poppins","Beetlejuice","Forrest Gump","Neo","John Wick","Gollum","Drácula","Frankenstein","El Principito","Cruella","Maléfica","Hannibal Lecter","Amélie","Tony Stark","Wednesday Addams","Jack Skellington","Buzz Aldrin","Don Vito Corleone","Rocky Balboa"]
  },
  "Naturaleza": {
    "Fácil": ["Sol","Luna","Nube","Lluvia","Árbol","Flor","Río","Lago","Mar","Nieve","Volcán","Montaña","Piedra","Arena","Hoja","Tronco","Cueva","Isla","Arcoíris","Estrella"],
    "Medio": ["Tormenta","Huracán","Tornado","Cascada","Glaciar","Arrecife","Bosque","Selva","Desierto","Eclipse","Aurora boreal","Marea","Trueno","Relámpago","Avalancha","Terremoto","Géiser","Acantilado","Pantano","Pradera"],
    "Difícil": ["Erosión","Erupción volcánica","Placa tectónica","Ciclo del agua","Corriente marina","Arco volcánico","Falla geológica","Bosque de manglar","Cañón submarino","Bioluminiscencia","Deslizamiento de tierra","Formación de nubes","Ojo del huracán","Aurora polar","Corriente de lava","Duna de arena","Glaciar derritiéndose","Mar de nubes","Anillo de fuego","Maremoto"]
  },
  "Deportes": {
    "Fácil": ["Fútbol","Tenis","Golf","Béisbol","Baloncesto","Voleibol","Natación","Boxeo","Ciclismo","Atletismo","Bolos","Surf","Esquí","Patinaje","Gimnasia","Hockey","Rugby","Bádminton","Karate","Pesca"],
    "Medio": ["Escalada","Esgrima","Halterofilia","Triatlón","Maratón","Waterpolo","Buceo","Polo","Remo","Canotaje","Judo","Taekwondo","Skateboarding","Snowboard","Tiro con arco","Lucha","BMX","Parapente","Motocross","Equitación"],
    "Difícil": ["Pentatlón moderno","Decatlón","Curling","Skeleton","Biatlón","Lacrosse","Críquet","Kitesurf","Windsurf","Ciclismo de pista","Gimnasia rítmica","Salto ecuestre","Esquí acrobático","Kayak de aguas bravas","Marcha atlética","Surf de remo","Tiro deportivo","Bobsleigh","Sambo","Ultimate frisbee"]
  }
};

const state = {
  category: "Animales",
  difficulty: "Fácil",
  seconds: 45,
  remaining: 45,
  round: 1,
  word: "",
  timer: null,
  paused: false,
  sound: localStorage.getItem("pictionarySound") !== "off",
  used: new Set()
};

const $ = id => document.getElementById(id);
const setup = $("setupScreen"), game = $("gameScreen"), settings = $("settingsScreen");

function renderChoices(){
  $("categoryGrid").innerHTML = Object.keys(DATA).map(c =>
    `<button class="${c===state.category?'selected':''}" data-category="${c}">${iconFor(c)} ${c}</button>`
  ).join("");
  $("difficultyGrid").innerHTML = ["Fácil","Medio","Difícil"].map(d =>
    `<button class="${d===state.difficulty?'selected':''}" data-difficulty="${d}">${d}</button>`
  ).join("");
}
function iconFor(c){
  return {"Animales":"🐾","Profesiones":"👨‍🍳","Comida":"🍕","Objetos":"🧸","Lugares":"📍","Acciones":"🏃","Películas y personajes":"🎬","Naturaleza":"🌳","Deportes":"⚽"}[c] || "🎨";
}
function getWord(){
  const list = DATA[state.category][state.difficulty];
  if(state.used.size >= list.length) state.used.clear();
  let i, word;
  do { i = Math.floor(Math.random()*list.length); word=list[i]; } while(state.used.has(word) && list.length>1);
  state.used.add(word);
  return word;
}
function showScreen(s){
  [setup,game,settings].forEach(x=>x.classList.add("hidden"));
  s.classList.remove("hidden");
}
function start(){
  state.round=1; state.used.clear(); state.word=getWord(); state.remaining=state.seconds; state.paused=false;
  $("result").classList.add("hidden");
  $("pauseBtn").textContent="⏸ Pausar";
  $("roundLabel").textContent="Ronda 1";
  updateWord(); updateTimer();
  showScreen(game);
  runTimer();
}
function updateWord(){
  $("word").textContent=state.word;
  $("wordCategory").textContent=state.category.toUpperCase();
  $("difficultyBadge").textContent=state.difficulty;
}
function updateTimer(){
  $("timer").textContent=state.remaining;
  $("timer").style.opacity=state.paused ? ".45" : "1";
}
function runTimer(){
  clearInterval(state.timer);
  state.timer=setInterval(()=>{
    if(state.paused)return;
    state.remaining--;
    updateTimer();
    if(state.remaining<=0){
      clearInterval(state.timer);
      finish(false);
    }
  },1000);
}
function finish(success){
  clearInterval(state.timer);
  $("result").classList.remove("hidden");
  $("resultIcon").textContent=success?"🎉":"⏰";
  $("resultTitle").textContent=success?"¡Adivinaron!":"¡Se acabó el tiempo!";
  $("resultText").textContent=success ? `La palabra era “${state.word}”.` : `La palabra era “${state.word}”.`;
  beep(success?660:220,180);
}
function nextRound(){
  state.round++;
  state.word=getWord();
  state.remaining=state.seconds;
  state.paused=false;
  $("result").classList.add("hidden");
  $("pauseBtn").textContent="⏸ Pausar";
  $("roundLabel").textContent=`Ronda ${state.round}`;
  updateWord(); updateTimer(); runTimer();
}
function beep(freq=440,duration=100){
  if(!state.sound)return;
  try{
    const C=window.AudioContext||window.webkitAudioContext;
    const ctx=new C(), osc=ctx.createOscillator(), gain=ctx.createGain();
    osc.frequency.value=freq; gain.gain.value=.05; osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); setTimeout(()=>{osc.stop();ctx.close()},duration);
  }catch(e){}
}
function toast(msg){
  const t=$("toast"); t.textContent=msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),1600);
}

$("categoryGrid").addEventListener("click",e=>{
  const b=e.target.closest("[data-category]"); if(!b)return;
  state.category=b.dataset.category; renderChoices();
});
$("difficultyGrid").addEventListener("click",e=>{
  const b=e.target.closest("[data-difficulty]"); if(!b)return;
  state.difficulty=b.dataset.difficulty; renderChoices();
});
document.querySelector(".time-row").addEventListener("click",e=>{
  const b=e.target.closest("[data-time]"); if(!b)return;
  state.seconds=Number(b.dataset.time); state.remaining=state.seconds;
  document.querySelectorAll("[data-time]").forEach(x=>x.classList.remove("selected")); b.classList.add("selected");
});
$("startBtn").onclick=start;
$("doneBtn").onclick=()=>finish(true);
$("nextBtn").onclick=nextRound;
$("newWordBtn").onclick=()=>{
  state.word=getWord(); state.remaining=state.seconds; updateWord(); updateTimer(); toast("Nueva palabra"); beep(520,80);
};
$("pauseBtn").onclick=()=>{
  state.paused=!state.paused;
  $("pauseBtn").textContent=state.paused?"▶ Continuar":"⏸ Pausar";
  updateTimer();
};
$("backBtn").onclick=()=>{clearInterval(state.timer);showScreen(setup)};
$("settingsBtn").onclick=()=>showScreen(settings);
$("closeSettingsBtn").onclick=()=>showScreen(setup);
$("soundBtn").onclick=()=>{
  state.sound=!state.sound;
  localStorage.setItem("pictionarySound",state.sound?"on":"off");
  $("soundBtn").textContent=state.sound?"🔊 Sonidos activados":"🔇 Sonidos desactivados";
};
$("clearBtn").onclick=()=>{localStorage.removeItem("pictionarySound");state.sound=true;$("soundBtn").textContent="🔊 Sonidos activados";toast("Configuración restablecida")};

renderChoices();
$("soundBtn").textContent=state.sound?"🔊 Sonidos activados":"🔇 Sonidos desactivados";
