var speaking = false;

function speak(name) {
    if (!speaking) {
        speaking = true;
        var synth = window.speechSynthesis;
        var utterance = new SpeechSynthesisUtterance(name);
        synth.speak(utterance);
        utterance.onend = function() {
            setTimeout(function() {
                speaking = false;
            }, 2000); // 2000 milliseconds = 2 seconds
        };
    }
}


// function leave(name) {
//     // You can use Text-to-Speech (TTS) APIs or a pre-recorded voice here
//     // For simplicity, let's use the SpeechSynthesis API for basic text-to-speech
//     var synth = window.speechSynthesis;
//     var not = new SpeechSynthesisUtterance(name);
//     synth.speak(not);
// }