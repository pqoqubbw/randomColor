document.addEventListener('click', generateColor);

function generateColor(e){
    if(e.target.id === 'hex' || e.target.id === 'rgb'){
        navigator.clipboard.writeText(e.target.innerHTML).then(() => e.target.classList.add('copied')).then(() => {
            setTimeout(() => {
                e.target.classList.remove('copied');
            }, 2000);
        });
        return;
    }

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    let hex = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;

    if( red > 127 || green > 127 || blue > 127) {
        document.documentElement.style.setProperty('--color', '#000000');
    } else {
        document.documentElement.style.setProperty('--color', '#FFFFFF90');
    };

    document.documentElement.style.setProperty('--bgcolor', rgb);
    document.querySelector('#hex').innerHTML = hex;
    document.querySelector('#rgb').innerHTML = rgb;

    function rgbToHex(color){
        return color.toString(16).padStart(2, 0).toUpperCase();
    };
};
