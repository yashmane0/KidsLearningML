function speak(name) {
    // You can use Text-to-Speech (TTS) APIs or a pre-recorded voice here
    // For simplicity, let's use the SpeechSynthesis API for basic text-to-speech
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(name);
    synth.speak(utterance);
}


// function leave(name) {
//     // You can use Text-to-Speech (TTS) APIs or a pre-recorded voice here
//     // For simplicity, let's use the SpeechSynthesis API for basic text-to-speech
//     var synth = window.speechSynthesis;
//     var not = new SpeechSynthesisUtterance(name);
//     synth.speak(not);
// }