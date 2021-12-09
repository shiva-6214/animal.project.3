//next project
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kdKeBxCHc/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }

    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("change_img");

        if (results[0].label == "Barking") {
            img.src = "dog.jpg";
        }
        else if (results[0].label == "Meowing") {
            img.src = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg";
        }
        else if (results[0].label == "Mooing") {
            img.src = "https://media.4-paws.org/d/7/a/1/d7a1085419777be3e19af2c3db8ab157d1d49f67/VIER%20PFOTEN_2015-04-27_010.jpg";
        }
        else if(results[0].label == "Goat") {
            img.src = "goat.jpg";
        }
        else {
            img.src="ear.png";
        }
    }
}