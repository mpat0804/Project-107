function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/RWsLdf-0z/model.json", modelloaded);
}
function modelloaded(){
    console.log("modelloaded");
    classifier.classify(gotResults);
}