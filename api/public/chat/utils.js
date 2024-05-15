const renderalert = () => {
    const alertdiv = document.createElement('div');

    const markup = `
        <div class="alertbox">
            <div class="alertbox__content">
                <p>Thanks for registering</p>
                <p>We'll be in touch</p>
            </div>
        </div>
    `;

    alertdiv.insertAdjacentHTML('beforeend', markup);

    document.body.appendChild(alertdiv);

    document.getElementById('subinput').value = ``;
    document.getElementById('subtextarea').value = ``;

    setTimeout(() => alertdiv.parentNode.removeChild(alertdiv), 5000)
}

const subscribe = async () => {
    const subinput = document.getElementById('subinput');
    const subtextarea = document.getElementById('subtextarea');

    const value = subinput.value;
    const textvalue = subtextarea.value;

    let baseURL


    baseURL = `${window.location.protocol}//${window.location.host}`;

    if (isvalid(value)) {
        try {
            const response = await fetch(`${baseURL}/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value, textvalue }),
            });

            const subbtn = document.getElementById('subbtn');
            subbtn.style.opacity = `.5`;
            subbtn.innerHTML = 'Subscribing...'

            const result = await response.json();

            renderalert();

            console.log(result);
            subbtn.style.opacity = `1`;
            subbtn.innerHTML = 'Subscribe'
        } catch (error) {
            console.log(error)
        }
    } else {
        alert('not valid input');
    }
}

const isvalid = (value) => {
    if (!value.length || /^[a-zA-Z]+$/.test(value)) {
        return false;
    } else {
        return true;
    }
}

export {
    subscribe
}