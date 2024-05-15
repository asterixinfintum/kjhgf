import './chat.css';
import { subscribe } from './utils';

const renderformheader = () => {
    const markup = `
        <div class="chat__body">
            <div class="chat__body--header">
                <h2 class="chat__body--subscribe">Subscribe to</h2>
                <h2 class="chat__body--subscribem" id="openform">
                    <span>Subscribe</span>
                    <span class="direction"> 
                        <svg aria-hidden="true" focusable="false" class="ud-icon ud-icon-xsmall show-more-module--show-more--ObEu7"><use xlink:href="#icon-expand"></use></svg>
                    </span>
                </h2>
                <h2 class="chat__body--signals">Join our trading signals group</h2>
                <h3 class="chat__body--h3sub">Your daily dose of Crypto news, Prices & other updates..</h3>
            </div>

            <div class="chat__body--input">
                <input placeholder="Enter your phone number" id="subinput"/>
            </div>

            <div class="chat__body--input">
                <textarea placeholder="Tell us your trading goals" id="subtextarea"></textarea>
            </div>

            <div class="chat__body--subscibebtn">
                <button id="subbtn">Subscribe</button>
            </div>
        </div>
    `;

    return markup;
}

function chatscript() {
    const chatdiv = document.createElement('div');
    chatdiv.id = 'chatdiv';
    chatdiv.classList.add('chat');

    document.body.appendChild(chatdiv);

    chatdiv.insertAdjacentHTML('beforeend', renderformheader());

    const subbtn = document.getElementById('subbtn');

    const openform = document.getElementById('openform');

    if (openform) {
        openform.addEventListener('click', function () {
            const chatform = document.getElementById('chatdiv');

            if (chatform.classList.contains('open')) {
                chatform.classList.remove('open')
            } else {
                chatform.classList.add('open')
            }
        });
    }

    subbtn.addEventListener('click', subscribe)
}

//background: #181A1B!important;

export default chatscript;