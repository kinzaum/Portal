const translations = {
    'en': {
        title: "Welcome to CAAOpen Portal",
        beta: "(Educational)",
        pronunciation: "Train your pronunciation (English ONLY)",
        wordsearch: "Word Search (English/Português)",
        reading: "Reading Challenge (English)",
        math: "Math Practice (English/Português/Español/Deutsch/日本語)",
        aac: "AAC BOARD Communication (19 Languages)",
        keyboard: "KEYBOARD (English ONLY)"
    },
    'pt': {
        title: "Bem-vindo ao Portal CAAOpen",
        beta: "(Educacional)",
        pronunciation: "Treine sua pronúncia (Apenas Inglês)",
        wordsearch: "Caça Palavras (English/Português)",
        reading: "Desafio de Leitura (English)",
        math: "Matemática para Crianças (English/Português/Español/Deutsch/日本語)",
        aac: "Comunicação AAC BOARD (19 Línguas)",
        keyboard: "TECLADO (Apenas Inglês)"
},
    'de': {
        title: "Willkommen beim CAAOpen-Portal",
        beta: "(Bildung)",
        pronunciation: "Trainieren Sie Ihre Aussprache (nur Englisch)",
        wordsearch: "Wortsuche (English/Português)",
        reading: "Lese-Herausforderung (English)",
        math: "Mathe-Übung (English/Português/Español/Deutsch/日本語)",
        aac: "AAC BOARD Kommunikation (19 Sprachen)",
        keyboard: "TASTATUR (nur Englisch)"
    },
    'ja': {
        title: "CAAOpenポータルへようこそ",
        beta: "(教育用)",
        pronunciation: "発音練習 (英語のみ)",
        wordsearch: "単語探し (English/Português)",
        reading: "リーディングチャレンジ (English)",
        math: "数学の練習 (English/Português/Español/Deutsch/日本語)",
        aac: "AACボードコミュニケーション (19言語)",
        keyboard: "キーボード (英語のみ)"
    }
};

function updateLanguage() {
    const lang = navigator.language.split('-')[0];
    const content = translations[lang] || translations['en'];

    if(document.getElementById('title')) document.getElementById('title').innerText = content.title;
    const betaTag = document.querySelector('.beta-tag');
    if(betaTag) betaTag.innerText = content.beta;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (content[key]) el.innerText = content[key];
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateLanguage);