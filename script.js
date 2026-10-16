        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();       
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
            setTimeout(startTime, 500);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
function readPage() {
  const text = document.body.innerText; // raccoglie tutto il testo visibile
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "it-IT"; // imposta lingua italiana
  speechSynthesis.speak(utterance);
}
  let utterance;

  function readPage() {
    const text = document.body.innerText;
    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "it-IT";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  }

  function stopReading() {
    speechSynthesis.cancel(); // Ferma immediatamente la lettura
  }