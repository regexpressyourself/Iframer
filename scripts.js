
let clipboard;
let handleEnter = (e) => {
    if (e.keyCode == 13) {
        convertUrl()
    }
}

let convertUrl = () => {
    let iframe_val;
    let input = document.getElementById("url-input");
    let answer = document.getElementById("answer");
    let youtube_url = input.value;

    if (youtube_url.length === 0) {
        callError(answer);
        return;
    }

    youtube_url = youtube_url.split("=");
    if (youtube_url.length < 2) {
        callError(answer);
        return;
    }

    youtube_url = youtube_url[1];

    if (!youtube_url || youtube_url.length < 2) {
        callError(answer);
        return;
    }

    iframe_val = '<iframe width="560" height="315" ' +
        'src="https://www.youtube.com/embed/';
    iframe_val = iframe_val + youtube_url;
    iframe_val = iframe_val + '?ecver=1" frameborder="0" ' +
        'allowfullscreen></iframe>';
    clipboard = new Clipboard('#copy-button', {
        text: function() {
            return iframe_val;
        }
    });
    let button_container = document.getElementById("button-container");
    document.getElementById("copy-button").click();
    button_container.innerHTML = "Iframe copied to clipboard!";
    button_container.style.fontSize = "3rem";
    button_container.style.color = "#083D77";

    answer.style.color = "#16444C";
    answer.innerHTML = "<p><xmp>"+iframe_val+"</xmp></p>";


}
let callError = (answer) => {
    answer.innerHTML = "<p id='xmp'><br />Oops. That didn't work.</p>";
    answer.style.color = "#DD1C1A";
}

