document.addEventListener('DOMContentLoaded', function () {
    const btnHeart = document.getElementById('btn-heart');
    const wrapper = document.querySelector('.wrapper');
    const titulo = document.getElementById('titulo');

    btnHeart.addEventListener('click', () => {
        wrapper.classList.toggle('flipped');
        titulo.textContent = 'Uma cartinhaaaaa';
    });

    const modalContent = {
        'modal-1': {
            title: 'Pra Você',
            text: 'Fiz esse reggae pra você\nPra nunca mais se esquecer\nQue eu ainda tô aqui\nE que não tem por que fugir\nE quando ouvir cê vai saber\nQue nada foi em vão\nFoi tudo por você\nDeixa acontecer!',
            audio: 'pravoce.mp4'
        },
        'modal-2': { 
            title: 'White Ferrari', 
            text: "White Ferrari, good times\nStick by me, close by me\nYou were fine, you were fine here\nThat's just a slow body\nYou left when I forgot to speak\nSo I text the speech, lesser speeds, Texas speed, yes\nBasic takes its toll on me, 'ventually, 'ventually, yes\nAh, on me, 'ventually, 'ventually, yes", 
            audio: 'whiteferrari.mp4' 
        },
        'modal-3': { 
            title: 'Who Knows', 
            text: "Is it a crime to be unsure? \n(Let me know, let me know, let me know, let me)\nIn time we'll find \n(let me know, let me know, let me know, let me)\nIf it's sustainable \n(let me know, let me know, let me know, let me)\nYou're pure, you're kind \n(let me know, let me know, let me know, let me)\nMature, divine \n(let me know, let me know, let me know, let me)\nYou might be too good for me, unattainable \n(let me know, let me know, let me know, let me)", 
            audio: 'whoknows.mp4' 
        },
        'modal-4': {
            title: 'The First Time',
            text: "Before you, I was just a flare in the sky\nA kid too afraid to go play in the light\nA colorless painter, a man with no sight\nBefore you, I was nothing, was nothing, had nothing\nI only had\n\nA kiss, a touch, a song that made me cry\nAnd all the drugs I've done, they never got me higher\nThan the first time we met \nThere's nothing like the first time, the first time we met",
            audio: 'thefirsttime.mp4'
        },
        'modal-5': {
            title: 'Those Eyes',
            text: "'Cause all of the small things that you do\nAre what remind me why I fell for you\nAnd when we're apart and I'm missing you\nI close my eyes and all I see is you\nAnd the small things you do",
            audio: 'thoseeyes.mp4'
        },
        'modal-6': {
            title: 'Vagalumes',
            text: "Vou caçar mais de um milhão de vagalumes por aí\nPra te ver sorrir, eu posso colorir o céu de outra cor\nEu só quero amar você\nE, quando amanhecer, eu quero acordar\nDo seu lado",
            audio: 'vagalumes.mp4'
        },
        'modal-7': {
            title: 'Te Amar Demais',
            text: "Aquela música me faz lembrar do tempo\nEm que ela ainda estava aqui, tava aqui\n\nSei lá só queria você perto de mim\nSei que é difícil ter que aceitar\nEssa saudade é muito ruim, muito ruim\nComo fui te amar demais\nComo me entreguei demais\nVivendo sem pensar no mais\nE agora ela\nVendo que eu sou incapaz de viver sem ela\nCoisas tão especiais\nQue me lembram ela",
            audio: 'teamardemais.mp4'
        },
        'modal-8': {
            title: 'Eternity',
            text: "But it feels like an eternity\nSince I had you here with me\nSince I had to learn to be\nSomeone you don't know\nTo be with you in paradise\nWhat I wouldn't sacrifice\nWhy'd you have to chase the light\nSomewhere I can't go?\n \nAs I walk this world alone",
            audio: 'eternity.mp4'
        },
        'modal-9': {
            title: 'What Makes You Beautiful',
            text: "Baby, you light up my world like nobody else\nThe way that you flip your hair gets me overwhelmed\nBut when you smile at the ground, it ain't hard to tell\nYou don't know, oh, oh\nYou don't know you're beautiful\n \nIf only you saw what I can see\nYou'll understand why I want you so desperately\nRight now I'm looking at you and I can't believe\nYou don't know, oh, oh\nYou don't know you're beautiful, oh, oh\nBut that's what makes you beautiful",
            audio: 'whatmakesyoubeautiful.mp4'
        },
        'modal-10': {
            title: 'Good Day',
            text: "It's gonna be a good day, a good vibe\nOrder in a little Postmates and Mai Tais\nTurn the music up on a long drive\nMake a little love in the sunshine\nIt's gonna be a good day, a good time\nAs long as I got your hand in mine\nWouldn't wanna live any other way\nWake up every morning, look at you and say\n \nIt's gonna be a good day",
            audio: 'goodday.mp4'
        },
        'modal-11': {
            title: 'Best Part',
            text: "You're the coffee that I need in the morning\nYou're my sunshine in the rain when it's pouring\nWon't you give yourself to me?\nGive it all, oh\nI just wanna see\nI just wanna see how beautiful you are\nYou know that I see it\nI know you're a star\nWhere you go, I'll follow\nNo matter how far\nIf life is a movie\nOh, you're the best part",
            audio: 'bestpart.mp4'
        },
    };

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const divText = document.querySelector('.div-text');
    const modalAudio = document.getElementById('modal-audio');

    const progressFill = document.getElementById('progress-fill');
    const waveform = document.getElementById('waveform');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');
    const btnPlayPause = document.getElementById('btn-play-pause');
    const iconPlayPause = document.getElementById('icon-play-pause');

    function ajustarTamanhoTexto() {
        modalText.style.fontSize = ''; // reseta antes de checar

        if (divText.scrollWidth > divText.clientWidth || 
            divText.scrollHeight > divText.clientHeight) {
            modalText.style.fontSize = '0.8em';
        }
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    function resetPlayer() {
        progressFill.style.width = '0%';
        waveform.classList.remove('playing');
        iconPlayPause.classList.remove('fa-pause');
        iconPlayPause.classList.add('fa-play');
        timeCurrent.textContent = '0:00';
        timeTotal.textContent = '0:00';
    }

    const openButtons = document.querySelectorAll('.btn-open-modal');
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-content');
            const content = modalContent[key];

            if (content) {
                modalTitle.textContent = content.title;
                modalText.textContent = content.text;
                resetPlayer();

                modalAudio.src = content.audio;
                modalAudio.volume = 1.0;
                modalAudio.load(); // garante que o novo source seja carregado

                modal.showModal();
                modal.classList.add('modal-open');

                ajustarTamanhoTexto();
            }
        });
    });

    const closeButton = document.querySelector('.btn-close-modal');
    closeButton.addEventListener('click', () => {
        modal.close();
        modal.classList.remove('modal-open');
        modalAudio.pause();
        modalAudio.currentTime = 0;
        modalAudio.removeAttribute('src');
        modalAudio.load();
        resetPlayer();
    });

    btnPlayPause.addEventListener('click', () => {
        if (!modalAudio.src) return; // evita erro se não tiver áudio carregado

        if (modalAudio.paused) {
            modalAudio.play().catch(err => {
                console.error('Erro ao tocar áudio:', err);
            });
            iconPlayPause.classList.remove('fa-play');
            iconPlayPause.classList.add('fa-pause');
            waveform.classList.add('playing');
        } else {
            modalAudio.pause();
            iconPlayPause.classList.remove('fa-pause');
            iconPlayPause.classList.add('fa-play');
            waveform.classList.remove('playing');
        }
    });

    modalAudio.addEventListener('loadedmetadata', () => {
        timeTotal.textContent = formatTime(modalAudio.duration);
    });

    modalAudio.addEventListener('timeupdate', () => {
        if (modalAudio.duration) {
            const percent = (modalAudio.currentTime / modalAudio.duration) * 100;
            progressFill.style.width = `${percent}%`;
            timeCurrent.textContent = formatTime(modalAudio.currentTime);
        }
    });

    modalAudio.addEventListener('ended', () => {
        iconPlayPause.classList.remove('fa-pause');
        iconPlayPause.classList.add('fa-play');
        waveform.classList.remove('playing');
    });
});