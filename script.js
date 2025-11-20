// --- FUNCIÓN DE BARAJADO (Fisher-Yates) ---
function shuffleArray(array) {
    var newArray = array.slice();
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}
// --- FIN FUNCIÓN DE BARAJADO ---


// --- Bancos de Preguntas (Organizados por Continente) ---

var questionsMaps = {
    //--- EUROPA ---
    'europa': [
        { question: '¿Qué país es?', code: 'es', map: 'Spain_in_Europe.svg', answers: [{ text: 'España', correct: true }, { text: 'Portugal', correct: false }, { text: 'Francia', correct: false }, { text: 'Italia', correct: false }] },
        { question: '¿Qué país es?', code: 'fr', map: 'France_in_Europe.svg', answers: [{ text: 'Francia', correct: true }, { text: 'Bélgica', correct: false }, { text: 'Alemania', correct: false }, { text: 'Suiza', correct: false }] },
        { question: '¿Qué país es?', code: 'de', map: 'Germany_in_Europe.svg', answers: [{ text: 'Austria', correct: false }, { text: 'Alemania', correct: true }, { text: 'Polonia', correct: false }, { text: 'Dinamarca', correct: false }] },
        { question: '¿Qué país es?', code: 'it', map: 'Italy_in_Europe.svg', answers: [{ text: 'Grecia', correct: false }, { text: 'Croacia', correct: false }, { text: 'Italia', correct: true }, { text: 'España', correct: false }] },
        { question: '¿Qué país es?', code: 'gb', map: 'United_Kingdom_in_Europe.svg', answers: [{ text: 'Irlanda', correct: false }, { text: 'Noruega', correct: false }, { text: 'Islandia', correct: false }, { text: 'Reino Unido', correct: true }] },
        { question: '¿Qué país es?', code: 'pt', map: 'Portugal_in_Europe.svg', answers: [{ text: 'Portugal', correct: true }, { text: 'España', correct: false }, { text: 'Italia', correct: false }, { text: 'Grecia', correct: false }] },
        { question: '¿Qué país es?', code: 'gr', map: 'Greece_in_Europe.svg', answers: [{ text: 'Bulgaria', correct: false }, { text: 'Grecia', correct: true }, { text: 'Turquía', correct: false }, { text: 'Chipre', correct: false }] },
        { question: '¿Qué país es?', code: 'no', map: 'Norway_in_Europe.svg', answers: [{ text: 'Suecia', correct: false }, { text: 'Finlandia', correct: false }, { text: 'Noruega', correct: true }, { text: 'Dinamarca', correct: false }] },
        { question: '¿Qué país es?', code: 'se', map: 'Sweden_in_Europe.svg', answers: [{ text: 'Noruega', correct: false }, { text: 'Finlandia', correct: false }, { text: 'Suecia', correct: true }, { text: 'Estonia', correct: false }] },
        { question: '¿Qué país es?', code: 'fi', map: 'Finland_in_Europe.svg', answers: [{ text: 'Suecia', correct: false }, { text: 'Rusia', correct: false }, { text: 'Finlandia', correct: true }, { text: 'Noruega', correct: false }] },
        { question: '¿Qué país es?', code: 'ie', map: 'Ireland_in_Europe.svg', answers: [{ text: 'Reino Unido', correct: false }, { text: 'Islandia', correct: false }, { text: 'Irlanda', correct: true }, { text: 'Francia', correct: false }] },
        { question: '¿Qué país es?', code: 'pl', map: 'Poland_in_Europe.svg', answers: [{ text: 'Polonia', correct: true }, { text: 'Alemania', correct: false }, { text: 'Ucrania', correct: false }, { text: 'Bielorrusia', correct: false }] },
        { question: '¿Qué país es?', code: 'be', map: 'Belgium_in_Europe.svg', answers: [{ text: 'Países Bajos', correct: false }, { text: 'Bélgica', correct: true }, { text: 'Luxemburgo', correct: false }, { text: 'Francia', correct: false }] },
        { question: '¿Qué país es?', code: 'nl', map: 'Netherlands_in_Europe.svg', answers: [{ text: 'Bélgica', correct: false }, { text: 'Dinamarca', correct: false }, { text: 'Países Bajos', correct: true }, { text: 'Alemania', correct: false }] },
        { question: '¿Qué país es?', code: 'ch', map: 'Switzerland_in_Europe.svg', answers: [{ text: 'Austria', correct: false }, { text: 'Italia', correct: false }, { text: 'Suiza', correct: true }, { text: 'Eslovenia', correct: false }] },
        { question: '¿Qué país es?', code: 'at', map: 'Austria_in_Europe.svg', answers: [{ text: 'Suiza', correct: false }, { text: 'Alemania', correct: false }, { text: 'Hungría', correct: false }, { text: 'Austria', correct: true }] },
        { question: '¿Qué país es?', code: 'cz', map: 'Czech_Republic_in_Europe.svg', answers: [{ text: 'Eslovaquia', correct: false }, { text: 'República Checa', correct: true }, { text: 'Polonia', correct: false }, { text: 'Austria', correct: false }] },
        { question: '¿Qué país es?', code: 'hu', map: 'Hungary_in_Europe.svg', answers: [{ text: 'Rumanía', correct: false }, { text: 'Austria', correct: false }, { text: 'Hungría', correct: true }, { text: 'Serbia', correct: false }] },
        { question: '¿Qué país es?', code: 'dk', map: 'Denmark_in_Europe.svg', answers: [{ text: 'Dinamarca', correct: true }, { text: 'Noruega', correct: false }, { text: 'Suecia', correct: false }, { text: 'Alemania', correct: false }] },
        { question: '¿Qué país es?', code: 'ro', map: 'Romania_in_Europe.svg', answers: [{ text: 'Bulgaria', correct: false }, { text: 'Moldavia', correct: false }, { text: 'Hungría', correct: false }, { text: 'Rumanía', correct: true }] },
        { question: '¿Qué país es?', code: 'ua', map: 'Ukraine_in_Europe.svg', answers: [{ text: 'Bielorrusia', correct: false }, { text: 'Ucrania', correct: true }, { text: 'Polonia', correct: false }, { text: 'Rusia', correct: false }] },
        // RUSIA CORREGIDA:
        { question: '¿Qué país es?', code: 'ru', map: 'Russia_(orthographic_projection).svg', answers: [{ text: 'Rusia', correct: true }, { text: 'Ucrania', correct: false }, { text: 'Finlandia', correct: false }, { text: 'Kazajistán', correct: false }] },
        { question: '¿Qué país es?', code: 'hr', map: 'Croatia_in_Europe.svg', answers: [{ text: 'Eslovenia', correct: false }, { text: 'Croacia', correct: true }, { text: 'Bosnia', correct: false }, { text: 'Serbia', correct: false }] },
        { question: '¿Qué país es?', code: 'bg', map: 'Bulgaria_in_Europe.svg', answers: [{ text: 'Grecia', correct: false }, { text: 'Rumanía', correct: false }, { text: 'Bulgaria', correct: true }, { text: 'Macedonia del Norte', correct: false }] },
        { question: '¿Qué país es?', code: 'is', map: 'Iceland_in_Europe.svg', answers: [{ text: 'Irlanda', correct: false }, { text: 'Groenlandia', correct: false }, { text: 'Islandia', correct: true }, { text: 'Noruega', correct: false }] },
        { question: '¿Qué país es?', code: 'sk', map: 'Slovakia_in_Europe.svg', answers: [{ text: 'República Checa', correct: false }, { text: 'Eslovenia', correct: false }, { text: 'Eslovaquia', correct: true }, { text: 'Hungría', correct: false }] },
        { question: '¿Qué país es?', code: 'rs', map: 'Serbia_in_Europe.svg', answers: [{ text: 'Bosnia', correct: false }, { text: 'Montenegro', correct: false }, { text: 'Serbia', correct: true }, { text: 'Croacia', correct: false }] },
        { question: '¿Qué país es?', code: 'lt', map: 'Lithuania_in_Europe.svg', answers: [{ text: 'Letonia', correct: false }, { text: 'Lituania', correct: true }, { text: 'Estonia', correct: false }, { text: 'Polonia', correct: false }] },
        { question: '¿Qué país es?', code: 'lv', map: 'Latvia_in_Europe.svg', answers: [{ text: 'Lituania', correct: false }, { text: 'Estonia', correct: false }, { text: 'Letonia', correct: true }, { text: 'Finlandia', correct: false }] },
        { question: '¿Qué país es?', code: 'ee', map: 'Estonia_in_Europe.svg', answers: [{ text: 'Letonia', correct: false }, { text: 'Finlandia', correct: false }, { text: 'Lituania', correct: false }, { text: 'Estonia', correct: true }] },
        { question: '¿Qué país es?', code: 'si', map: 'Slovenia_in_Europe.svg', answers: [{ text: 'Eslovaquia', correct: false }, { text: 'Eslovenia', correct: true }, { text: 'Croacia', correct: false }, { text: 'Austria', correct: false }] },
        { question: '¿Qué país es?', code: 'by', map: 'Belarus_in_Europe.svg', answers: [{ text: 'Ucrania', correct: false }, { text: 'Bielorrusia', correct: true }, { text: 'Rusia', correct: false }, { text: 'Lituania', correct: false }] },
        { question: '¿Qué país es?', code: 'al', map: 'Albania_in_Europe.svg', answers: [{ text: 'Macedonia del Norte', correct: false }, { text: 'Albania', correct: true }, { text: 'Grecia', correct: false }, { text: 'Montenegro', correct: false }] },
        { question: '¿Qué país es?', code: 'mk', map: 'North_Macedonia_in_Europe.svg', answers: [{ text: 'Albania', correct: false }, { text: 'Bulgaria', correct: false }, { text: 'Macedonia del Norte', correct: true }, { text: 'Kosovo', correct: false }] },
        { question: '¿Qué país es?', code: 'ad', map: 'Andorra_in_Europe.svg', answers: [{ text: 'Mónaco', correct: false }, { text: 'San Marino', correct: false }, { text: 'Liechtenstein', correct: false }, { text: 'Andorra', correct: true }] }
    ],

    //--- ASIA (CORREGIDO) ---
    'asia': [
        // --- PAÍSES CON MAPA DE GLOBO (ARREGLADOS) ---
        { question: '¿Qué país es?', code: 'cn', map: 'China_(orthographic_projection).svg', answers: [{ text: 'China', correct: true }, { text: 'Corea del Sur', correct: false }, { text: 'Japón', correct: false }, { text: 'Mongolia', correct: false }] },
        { question: '¿Qué país es?', code: 'in', map: 'India_(orthographic_projection).svg', answers: [{ text: 'Pakistán', correct: false }, { text: 'India', correct: true }, { text: 'Nepal', correct: false }, { text: 'Bangladés', correct: false }] },
        { question: '¿Qué país es?', code: 'jp', map: 'Japan_(orthographic_projection).svg', answers: [{ text: 'China', correct: false }, { text: 'Corea del Sur', correct: false }, { text: 'Japón', correct: true }, { text: 'Filipinas', correct: false }] },
        
        // PAKISTÁN ARREGLADO:
        { question: '¿Qué país es?', code: 'pk', map: 'Pakistan_(orthographic_projection).svg', answers: [{ text: 'India', correct: false }, { text: 'Pakistán', correct: true }, { text: 'Afganistán', correct: false }, { text: 'Irán', correct: false }] },
        
        // SIRIA ARREGLADO:
        { question: '¿Qué país es?', code: 'sy', map: 'Syria_(orthographic_projection).svg', answers: [{ text: 'Líbano', correct: false }, { text: 'Jordania', correct: false }, { text: 'Siria', correct: true }, { text: 'Irak', correct: false }] },


        // --- EL RESTO DE ASIA (MAPAS PLANOS QUE FUNCIONAN BIEN) ---
        { question: '¿Qué país es?', code: 'kr', map: 'South_Korea_in_Asia.svg', answers: [{ text: 'Corea del Norte', correct: false }, { text: 'Japón', correct: false }, { text: 'China', correct: false }, { text: 'Corea del Sur', correct: true }] },
        { question: '¿Qué país es?', code: 'th', map: 'Thailand_in_Asia.svg', answers: [{ text: 'Tailandia', correct: true }, { text: 'Vietnam', correct: false }, { text: 'Camboya', correct: false }, { text: 'Malasia', correct: false }] },
        { question: '¿Qué país es?', code: 'tr', map: 'Turkey_in_Asia.svg', answers: [{ text: 'Grecia', correct: false }, { text: 'Turquía', correct: true }, { text: 'Siria', correct: false }, { text: 'Irán', correct: false }] },
        { question: '¿Qué país es?', code: 'sa', map: 'Saudi_Arabia_in_Asia.svg', answers: [{ text: 'Emiratos Árabes Unidos', correct: false }, { text: 'Catar', correct: false }, { text: 'Arabia Saudita', correct: true }, { text: 'Omán', correct: false }] },
        { question: '¿Qué país es?', code: 'vn', map: 'Vietnam_in_Asia.svg', answers: [{ text: 'Tailandia', correct: false }, { text: 'Laos', correct: false }, { text: 'Camboya', correct: false }, { text: 'Vietnam', correct: true }] },
        { question: '¿Qué país es?', code: 'id', map: 'Indonesia_in_Asia.svg', answers: [{ text: 'Indonesia', correct: true }, { text: 'Malasia', correct: false }, { text: 'Singapur', correct: false }, { text: 'Filipinas', correct: false }] },
        { question: '¿Qué país es?', code: 'ph', map: 'Philippines_in_Asia.svg', answers: [{ text: 'Indonesia', correct: false }, { text: 'Filipinas', correct: true }, { text: 'Malasia', correct: false }, { text: 'Taiwán', correct: false }] },
        { question: '¿Qué país es?', code: 'ir', map: 'Iran_in_Asia.svg', answers: [{ text: 'Irak', correct: false }, { text: 'Afganistán', correct: false }, { text: 'Irán', correct: true }, { text: 'Arabia Saudita', correct: false }] },
        { question: '¿Qué país es?', code: 'iq', map: 'Iraq_in_Asia.svg', answers: [{ text: 'Irán', correct: false }, { text: 'Siria', correct: false }, { text: 'Jordania', correct: false }, { text: 'Irak', correct: true }] },
        { question: '¿Qué país es?', code: 'my', map: 'Malaysia_in_Asia.svg', answers: [{ text: 'Singapur', correct: false }, { text: 'Indonesia', correct: false }, { text: 'Malasia', correct: true }, { text: 'Tailandia', correct: false }] },
        { question: '¿Qué país es?', code: 'af', map: 'Afghanistan_in_Asia.svg', answers: [{ text: 'Irán', correct: false }, { text: 'Pakistán', correct: false }, { text: 'Afganistán', correct: true }, { text: 'Tayikistán', correct: false }] },
        { question: '¿Qué país es?', code: 'kp', map: 'North_Korea_in_Asia.svg', answers: [{ text: 'Corea del Sur', correct: false }, { text: 'Corea del Norte', correct: true }, { text: 'China', correct: false }, { text: 'Mongolia', correct: false }] },
        { question: '¿Qué país es?', code: 'ae', map: 'United_Arab_Emirates_in_Asia.svg', answers: [{ text: 'Catar', correct: false }, { text: 'Arabia Saudita', correct: false }, { text: 'Omán', correct: false }, { text: 'Emiratos Árabes Unidos', correct: true }] },
        { question: '¿Qué país es?', code: 'il', map: 'Israel_in_Asia.svg', answers: [{ text: 'Israel', correct: true }, { text: 'Líbano', correct: false }, { text: 'Jordania', correct: false }, { text: 'Siria', correct: false }] },
        { question: '¿Qué país es?', code: 'np', map: 'Nepal_in_Asia.svg', answers: [{ text: 'Bangladés', correct: false }, { text: 'Bután', correct: false }, { text: 'Nepal', correct: true }, { text: 'India', correct: false }] },
        { question: '¿Qué país es?', code: 'qa', map: 'Qatar_in_Asia.svg', answers: [{ text: 'Emiratos Árabes Unidos', correct: false }, { text: 'Baréin', correct: false }, { text: 'Kuwait', correct: false }, { text: 'Catar', correct: true }] },
        { question: '¿Qué país es?', code: 'jo', map: 'Jordan_in_Asia.svg', answers: [{ text: 'Siria', correct: false }, { text: 'Jordania', correct: true }, { text: 'Israel', correct: false }, { text: 'Líbano', correct: false }] },
        { question: '¿Qué país es?', code: 'sg', map: 'Singapore_in_Asia.svg', answers: [{ text: 'Malasia', correct: false }, { text: 'Indonesia', correct: false }, { text: 'Singapur', correct: true }, { text: 'Brunéi', correct: false }] },
        { question: '¿Qué país es?', code: 'mn', map: 'Mongolia_in_Asia.svg', answers: [{ text: 'China', correct: false }, { text: 'Kazajistán', correct: false }, { text: 'Mongolia', correct: true }, { text: 'Rusia', correct: false }] },
        { question: '¿Qué país es?', code: 'lb', map: 'Lebanon_in_Asia.svg', answers: [{ text: 'Siria', correct: false }, { text: 'Líbano', correct: true }, { text: 'Israel', correct: false }, { text: 'Jordania', correct: false }] },
        { question: '¿Qué país es?', code: 'kh', map: 'Cambodia_in_Asia.svg', answers: [{ text: 'Laos', correct: false }, { text: 'Vietnam', correct: false }, { text: 'Camboya', correct: true }, { text: 'Tailandia', correct: false }] },
        { question: '¿Qué país es?', code: 'kz', map: 'Kazakhstan_in_Asia.svg', answers: [{ text: 'Uzbekistán', correct: false }, { text: 'Mongolia', correct: false }, { text: 'Kazajistán', correct: true }, { text: 'Rusia', correct: false }] },
        { question: '¿Qué país es?', code: 'uz', map: 'Uzbekistan_in_Asia.svg', answers: [{ text: 'Turkmenistán', correct: false }, { text: 'Uzbekistán', correct: true }, { text: 'Tayikistán', correct: false }, { text: 'Kirguistán', correct: false }] },
        { question: '¿Qué país es?', code: 'lk', map: 'Sri_Lanka_in_Asia.svg', answers: [{ text: 'Maldivas', correct: false }, { text: 'India', correct: false }, { text: 'Sri Lanka', correct: true }, { text: 'Bangladés', correct: false }] },
        { question: '¿Qué país es?', code: 'la', map: 'Laos_in_Asia.svg', answers: [{ text: 'Vietnam', correct: false }, { text: 'Camboya', correct: false }, { text: 'Laos', correct: true }, { text: 'Tailandia', correct: false }] },
        { question: '¿Qué país es?', code: 'bd', map: 'Bangladesh_in_Asia.svg', answers: [{ text: 'India', correct: false }, { text: 'Bangladés', correct: true }, { text: 'Birmania', correct: false }, { text: 'Pakistán', correct: false }] },
        { question: '¿Qué país es?', code: 'kg', map: 'Kyrgyzstan_in_Asia.svg', answers: [{ text: 'Tayikistán', correct: false }, { text: 'Uzbekistán', correct: false }, { text: 'Kirguistán', correct: true }, { text: 'Kazajistán', correct: false }] },
        { question: '¿Qué país es?', code: 'om', map: 'Oman_in_Asia.svg', answers: [{ text: 'Yemen', correct: false }, { text: 'Omán', correct: true }, { text: 'Emiratos Árabes Unidos', correct: false }, { text: 'Arabia Saudita', correct: false }] },
        { question: '¿Qué país es?', code: 'bt', map: 'Bhutan_in_Asia.svg', answers: [{ text: 'Nepal', correct: false }, { text: 'Bangladés', correct: false }, { text: 'Bután', correct: true }, { text: 'India', correct: false }] },
        { question: '¿Qué país es?', code: 'kw', map: 'Kuwait_in_Asia.svg', answers: [{ text: 'Baréin', correct: false }, { text: 'Catar', correct: false }, { text: 'Irak', correct: false }, { text: 'Kuwait', correct: true }] }
    ],

    //--- AMÉRICA (CORREGIDO) ---
    'america': [
        { question: '¿Qué país es?', code: 'us', map: 'United_States_(orthographic_projection).svg', answers: [{ text: 'Estados Unidos', correct: true }, { text: 'Canadá', correct: false }, { text: 'México', correct: false }, { text: 'Brasil', correct: false }] },
        { question: '¿Qué país es?', code: 'ca', map: 'Canada_in_North_America.svg', answers: [{ text: 'Estados Unidos', correct: false }, { text: 'Canadá', correct: true }, { text: 'Groenlandia', correct: false }, { text: 'México', correct: false }] },
        { question: '¿Qué país es?', code: 'mx', map: 'Mexico_in_North_America.svg', answers: [{ text: 'Colombia', correct: false }, { text: 'Guatemala', correct: false }, { text: 'México', correct: true }, { text: 'Estados Unidos', correct: false }] },
        { question: '¿Qué país es?', code: 'br', map: 'Brazil_in_South_America.svg', answers: [{ text: 'Argentina', correct: false }, { text: 'Perú', correct: false }, { text: 'Venezuela', correct: false }, { text: 'Brasil', correct: true }] },
        { question: '¿Qué país es?', code: 'ar', map: 'Argentina_in_South_America.svg', answers: [{ text: 'Argentina', correct: true }, { text: 'Chile', correct: false }, { text: 'Uruguay', correct: false }, { text: 'Paraguay', correct: false }] },
        { question: '¿Qué país es?', code: 'co', map: 'Colombia_in_South_America.svg', answers: [{ text: 'Venezuela', correct: false }, { text: 'Colombia', correct: true }, { text: 'Ecuador', correct: false }, { text: 'Perú', correct: false }] },
        { question: '¿Qué país es?', code: 'pe', map: 'Peru_in_South_America.svg', answers: [{ text: 'Ecuador', correct: false }, { text: 'Chile', correct: false }, { text: 'Perú', correct: true }, { text: 'Bolivia', correct: false }] },
        { question: '¿Qué país es?', code: 'cl', map: 'Chile_in_South_America.svg', answers: [{ text: 'Argentina', correct: false }, { text: 'Perú', correct: false }, { text: 'Chile', correct: true }, { text: 'Bolivia', correct: false }] },
        { question: '¿Qué país es?', code: 've', map: 'Venezuela_in_South_America.svg', answers: [{ text: 'Colombia', correct: false }, { text: 'Guyana', correct: false }, { text: 'Venezuela', correct: true }, { text: 'Brasil', correct: false }] },
        { question: '¿Qué país es?', code: 'cu', map: 'Cuba_in_North_America.svg', answers: [{ text: 'Jamaica', correct: false }, { text: 'República Dominicana', correct: false }, { text: 'Puerto Rico', correct: false }, { text: 'Cuba', correct: true }] },
        { question: '¿Qué país es?', code: 'ec', map: 'Ecuador_in_South_America.svg', answers: [{ text: 'Ecuador', correct: true }, { text: 'Perú', correct: false }, { text: 'Colombia', correct: false }, { text: 'Venezuela', correct: false }] },
        { question: '¿Qué país es?', code: 'gt', map: 'Guatemala_in_North_America.svg', answers: [{ text: 'El Salvador', correct: false }, { text: 'Guatemala', correct: true }, { text: 'Honduras', correct: false }, { text: 'México', correct: false }] },
        { question: '¿Qué país es?', code: 'cr', map: 'Costa_Rica_in_North_America.svg', answers: [{ text: 'Panamá', correct: false }, { text: 'Nicaragua', correct: false }, { text: 'Costa Rica', correct: true }, { text: 'Honduras', correct: false }] },
        { question: '¿Qué país es?', code: 'pa', map: 'Panama_in_North_America.svg', answers: [{ text: 'Costa Rica', correct: false }, { text: 'Colombia', correct: false }, { text: 'Panamá', correct: true }, { text: 'Venezuela', correct: false }] },
        { question: '¿Qué país es?', code: 'do', map: 'Dominican_Republic_in_North_America.svg', answers: [{ text: 'Cuba', correct: false }, { text: 'Haití', correct: false }, { text: 'Puerto Rico', correct: false }, { text: 'República Dominicana', correct: true }] },
        { question: '¿Qué país es?', code: 'bo', map: 'Bolivia_in_South_America.svg', answers: [{ text: 'Bolivia', correct: true }, { text: 'Paraguay', correct: false }, { text: 'Perú', correct: false }, { text: 'Brasil', correct: false }] },
        { question: '¿Qué país es?', code: 'hn', map: 'Honduras_in_North_America.svg', answers: [{ text: 'Nicaragua', correct: false }, { text: 'Honduras', correct: true }, { text: 'El Salvador', correct: false }, { text: 'Guatemala', correct: false }] },
        { question: '¿Qué país es?', code: 'py', map: 'Paraguay_in_South_America.svg', answers: [{ text: 'Uruguay', correct: false }, { text: 'Bolivia', correct: false }, { text: 'Paraguay', correct: true }, { text: 'Argentina', correct: false }] },
        { question: '¿Qué país es?', code: 'sv', map: 'El_Salvador_in_North_America.svg', answers: [{ text: 'Honduras', correct: false }, { text: 'Nicaragua', correct: false }, { text: 'Guatemala', correct: false }, { text: 'El Salvador', correct: true }] },
        { question: '¿Qué país es?', code: 'uy', map: 'Uruguay_in_South_America.svg', answers: [{ text: 'Uruguay', correct: true }, { text: 'Paraguay', correct: false }, { text: 'Argentina', correct: false }, { text: 'Brasil', correct: false }] },
        { question: '¿Qué país es?', code: 'ni', map: 'Nicaragua_in_North_America.svg', answers: [{ text: 'Costa Rica', correct: false }, { text: 'Nicaragua', correct: true }, { text: 'Honduras', correct: false }, { text: 'El Salvador', correct: false }] },
        { question: '¿Qué país es?', code: 'jm', map: 'Jamaica_in_North_America.svg', answers: [{ text: 'Cuba', correct: false }, { text: 'Jamaica', correct: true }, { text: 'Bahamas', correct: false }, { text: 'Haití', correct: false }] },
        { question: '¿Qué país es?', code: 'pr', map: 'Puerto_Rico_in_North_America.svg', answers: [{ text: 'República Dominicana', correct: false }, { text: 'Cuba', correct: false }, { text: 'Puerto Rico', correct: true }, { text: 'Jamaica', correct: false }] },
        { question: '¿Qué país es?', code: 'ht', map: 'Haiti_in_North_America.svg', answers: [{ text: 'Jamaica', correct: false }, { text: 'República Dominicana', correct: false }, { text: 'Haití', correct: true }, { text: 'Cuba', correct: false }] },
        { question: '¿Qué país es?', code: 'bz', map: 'Belize_in_North_America.svg', answers: [{ text: 'Guatemala', correct: false }, { text: 'Belice', correct: true }, { text: 'Honduras', correct: false }, { text: 'México', correct: false }] },
        { question: '¿Qué país es?', code: 'bs', map: 'Bahamas_in_North_America.svg', answers: [{ text: 'Cuba', correct: false }, { text: 'Jamaica', correct: false }, { text: 'Bahamas', correct: true }, { text: 'Puerto Rico', correct: false }] },
        { question: '¿Qué país es?', code: 'gy', map: 'Guyana_in_South_America.svg', answers: [{ text: 'Surinam', correct: false }, { text: 'Venezuela', correct: false }, { text: 'Guyana', correct: true }, { text: 'Colombia', correct: false }] },
        { question: '¿Qué país es?', code: 'sr', map: 'Suriname_in_South_America.svg', answers: [{ text: 'Guyana', correct: false }, { text: 'Surinam', correct: true }, { text: 'Guayana Francesa', correct: false }, { text: 'Brasil', correct: false }] }
    ],

    //--- ÁFRICA ---
    'africa': [
        { question: '¿Qué país es?', code: 'eg', map: 'Egypt_in_Africa.svg', answers: [{ text: 'Egipto', correct: true }, { text: 'Libia', correct: false }, { text: 'Sudán', correct: false }, { text: 'Argelia', correct: false }] },
        { question: '¿Qué país es?', code: 'za', map: 'South_Africa_in_Africa.svg', answers: [{ text: 'Namibia', correct: false }, { text: 'Sudáfrica', correct: true }, { text: 'Botsuana', correct: false }, { text: 'Zimbabue', correct: false }] },
        { question: '¿Qué país es?', code: 'ng', map: 'Nigeria_in_Africa.svg', answers: [{ text: 'Camerún', correct: false }, { text: 'Ghana', correct: false }, { text: 'Nigeria', correct: true }, { text: 'Níger', correct: false }] },
        { question: '¿Qué país es?', code: 'ma', map: 'Morocco_in_Africa.svg', answers: [{ text: 'Argelia', correct: false }, { text: 'Túnez', correct: false }, { text: 'Mauritania', correct: false }, { text: 'Marruecos', correct: true }] },
        { question: '¿Qué país es?', code: 'ke', map: 'Kenya_in_Africa.svg', answers: [{ text: 'Etiopía', correct: false }, { text: 'Kenia', correct: true }, { text: 'Somalia', correct: false }, { text: 'Tanzania', correct: false }] },
        { question: '¿Qué país es?', code: 'et', map: 'Ethiopia_in_Africa.svg', answers: [{ text: 'Sudán', correct: false }, { text: 'Kenia', correct: false }, { text: 'Etiopía', correct: true }, { text: 'Somalia', correct: false }] },
        { question: '¿Qué país es?', code: 'dz', map: 'Algeria_in_Africa.svg', answers: [{ text: 'Argelia', correct: true }, { text: 'Túnez', correct: false }, { text: 'Marruecos', correct: false }, { text: 'Libia', correct: false }] },
        { question: '¿Qué país es?', code: 'gh', map: 'Ghana_in_Africa.svg', answers: [{ text: 'Togo', correct: false }, { text: 'Ghana', correct: true }, { text: 'Costa de Marfil', correct: false }, { text: 'Nigeria', correct: false }] },
        { question: '¿Qué país es?', code: 'sn', map: 'Senegal_in_Africa.svg', answers: [{ text: 'Malí', correct: false }, { text: 'Mauritania', correct: false }, { text: 'Senegal', correct: true }, { text: 'Guinea', correct: false }] },
        { question: '¿Qué país es?', code: 'mg', map: 'Madagascar_in_Africa.svg', answers: [{ text: 'Mozambique', correct: false }, { text: 'Sudáfrica', correct: false }, { text: 'Madagascar', correct: true }, { text: 'Kenia', correct: false }] },
        { question: '¿Qué país es?', code: 'tn', map: 'Tunisia_in_Africa.svg', answers: [{ text: 'Marruecos', correct: false }, { text: 'Argelia', correct: false }, { text: 'Libia', correct: false }, { text: 'Túnez', correct: true }] },
        { question: '¿Qué país es?', code: 'ao', map: 'Angola_in_Africa.svg', answers: [{ text: 'Angola', correct: true }, { text: 'Namibia', correct: false }, { text: 'Zambia', correct: false }, { text: 'Congo', correct: false }] },
        { question: '¿Qué país es?', code: 'cd', map: 'Democratic_Republic_of_the_Congo_in_Africa.svg', answers: [{ text: 'Congo', correct: false }, { text: 'Rep. Dem. del Congo', correct: true }, { text: 'Angola', correct: false }, { text: 'Zambia', correct: false }] },
        { question: '¿Qué país es?', code: 'tz', map: 'Tanzania_in_Africa.svg', answers: [{ text: 'Kenia', correct: false }, { text: 'Uganda', correct: false }, { text: 'Tanzania', correct: true }, { text: 'Mozambique', correct: false }] },
        { question: '¿Qué país es?', code: 'cm', map: 'Cameroon_in_Africa.svg', answers: [{ text: 'Nigeria', correct: false }, { text: 'Gabón', correct: false }, { text: 'Camerún', correct: true }, { text: 'Congo', correct: false }] },
        { question: '¿Qué país es?', code: 'ci', map: 'Ivory_Coast_in_Africa.svg', answers: [{ text: 'Ghana', correct: false }, { text: 'Liberia', correct: false }, { text: 'Costa de Marfil', correct: true }, { text: 'Mali', correct: false }] },
        { question: '¿Qué país es?', code: 'sd', map: 'Sudan_in_Africa.svg', answers: [{ text: 'Sudán del Sur', correct: false }, { text: 'Egipto', correct: false }, { text: 'Chad', correct: false }, { text: 'Sudán', correct: true }] },
        { question: '¿Qué país es?', code: 'ly', map: 'Libya_in_Africa.svg', answers: [{ text: 'Libia', correct: true }, { text: 'Argelia', correct: false }, { text: 'Egipto', correct: false }, { text: 'Sudán', correct: false }] },
        { question: '¿Qué país es?', code: 'ml', map: 'Mali_in_Africa.svg', answers: [{ text: 'Mauritania', correct: false }, { text: 'Malí', correct: true }, { text: 'Níger', correct: false }, { text: 'Argelia', correct: false }] },
        { question: '¿Qué país es?', code: 'zm', map: 'Zambia_in_Africa.svg', answers: [{ text: 'Zimbabue', correct: false }, { text: 'Angola', correct: false }, { text: 'Zambia', correct: true }, { text: 'Mozambique', correct: false }] },
        { question: '¿Qué país es?', code: 'mz', map: 'Mozambique_in_Africa.svg', answers: [{ text: 'Mozambique', correct: true }, { text: 'Tanzania', correct: false }, { text: 'Zimbabue', correct: false }, { text: 'Sudáfrica', correct: false }] },
        { question: '¿Qué país es?', code: 'ug', map: 'Uganda_in_Africa.svg', answers: [{ text: 'Ruanda', correct: false }, { text: 'Kenia', correct: false }, { text: 'Kampala', correct: false }, { text: 'Uganda', correct: true }] },
        { question: '¿Qué país es?', code: 'ne', map: 'Niger_in_Africa.svg', answers: [{ text: 'Nigeria', correct: false }, { text: 'Malí', correct: false }, { text: 'Níger', correct: true }, { text: 'Chad', correct: false }] },
        { question: '¿Qué país es?', code: 'td', map: 'Chad_in_Africa.svg', answers: [{ text: 'Sudán', correct: false }, { text: 'Níger', correct: false }, { text: 'Chad', correct: true }, { text: 'Libia', correct: false }] },
        { question: '¿Qué país es?', code: 'zw', map: 'Zimbabwe_in_Africa.svg', answers: [{ text: 'Zambia', correct: false }, { text: 'Botsuana', correct: false }, { text: 'Zimbabue', correct: true }, { text: 'Sudáfrica', correct: false }] },
        { question: '¿Qué país es?', code: 'rw', map: 'Rwanda_in_Africa.svg', answers: [{ text: 'Burundi', correct: false }, { text: 'Uganda', correct: false }, { text: 'Ruanda', correct: true }, { text: 'Tanzania', correct: false }] },
        { question: '¿Qué país es?', code: 'so', map: 'Somalia_in_Africa.svg', answers: [{ text: 'Etiopía', correct: false }, { text: 'Somalia', correct: true }, { text: 'Kenia', correct: false }, { text: 'Yibuti', correct: false }] },
        { question: '¿Qué país es?', code: 'na', map: 'Namibia_in_Africa.svg', answers: [{ text: 'Botsuana', correct: false }, { text: 'Namibia', correct: true }, { text: 'Angola', correct: false }, { text: 'Sudáfrica', correct: false }] },
        { question: '¿Qué país es?', code: 'cg', map: 'Republic_of_the_Congo_in_Africa.svg', answers: [{ text: 'Rep. Dem. del Congo', correct: false }, { text: 'Gabón', correct: false }, { text: 'República del Congo', correct: true }, { text: 'Camerún', correct: false }] },
        { question: '¿Qué país es?', code: 'mr', map: 'Mauritania_in_Africa.svg', answers: [{ text: 'Senegal', correct: false }, { text: 'Malí', correct: false }, { text: 'Marruecos', correct: false }, { text: 'Mauritania', correct: true }] }
    ],

    //--- OCEANÍA ---
    'oceania': [
        { question: '¿Qué país es?', code: 'au', map: 'Australia_in_Oceania.svg', answers: [{ text: 'Nueva Zelanda', correct: false }, { text: 'Indonesia', correct: false }, { text: 'Australia', correct: true }, { text: 'Papúa Nueva Guinea', correct: false }] },
        { question: '¿Qué país es?', code: 'nz', map: 'New_Zealand_in_Oceania.svg', answers: [{ text: 'Australia', correct: false }, { text: 'Nueva Zelanda', correct: true }, { text: 'Fiyi', correct: false }, { text: 'Samoa', correct: false }] },
        { question: '¿Qué país es?', code: 'fj', map: 'Fiji_in_Oceania.svg', answers: [{ text: 'Fiyi', correct: true }, { text: 'Samoa', correct: false }, { text: 'Tonga', correct: false }, { text: 'Vanuatu', correct: false }] },
        { question: '¿Qué país es?', code: 'pg', map: 'Papua_New_Guinea_in_Oceania.svg', answers: [{ text: 'Indonesia', correct: false }, { text: 'Papúa Nueva Guinea', correct: true }, { text: 'Australia', correct: false }, { text: 'Islas Salomón', correct: false }] },
        { question: '¿Qué país es?', code: 'ws', map: 'Samoa_in_Oceania.svg', answers: [{ text: 'Tonga', correct: false }, { text: 'Fiyi', correct: false }, { text: 'Samoa', correct: true }, { text: 'Tuvalu', correct: false }] },
        { question: '¿Qué país es?', code: 'to', map: 'Tonga_in_Oceania.svg', answers: [{ text: 'Tonga', correct: true }, { text: 'Fiyi', correct: false }, { text: 'Samoa', correct: false }, { text: 'Vanuatu', correct: false }] },
        { question: '¿Qué país es?', code: 'pw', map: 'Palau_in_Oceania.svg', answers: [{ text: 'Micronesia', correct: false }, { text: 'Filipinas', correct: false }, { text: 'Palaos', correct: true }, { text: 'Guam', correct: false }] },
        { question: '¿Qué país es?', code: 'vu', map: 'Vanuatu_in_Oceania.svg', answers: [{ text: 'Vanuatu', correct: true }, { text: 'Fiyi', correct: false }, { text: 'Islas Salomón', correct: false }, { text: 'Nueva Caledonia', correct: false }] },
        { question: '¿Qué país es?', code: 'mh', map: 'Marshall_Islands_in_Oceania.svg', answers: [{ text: 'Micronesia', correct: false }, { text: 'Islas Marshall', correct: true }, { text: 'Kiribati', correct: false }, { text: 'Palaos', correct: false }] },
        { question: '¿Qué país es?', code: 'ki', map: 'Kiribati_in_Oceania.svg', answers: [{ text: 'Tuvalu', correct: false }, { text: 'Nauru', correct: false }, { text: 'Islas Marshall', correct: false }, { text: 'Kiribati', correct: true }] },
        { question: '¿Qué país es?', code: 'sb', map: 'Solomon_Islands_in_Oceania.svg', answers: [{ text: 'Papúa Nueva Guinea', correct: false }, { text: 'Islas Salomón', correct: true }, { text: 'Vanuatu', correct: false }, { text: 'Fiyi', correct: false }] },
        { question: '¿Qué país es?', code: 'tv', map: 'Tuvalu_in_Oceania.svg', answers: [{ text: 'Kiribati', correct: false }, { text: 'Fiyi', correct: false }, { text: 'Tuvalu', correct: true }, { text: 'Nauru', correct: false }] },
        { question: '¿Qué país es?', code: 'fm', map: 'Federated_States_of_Micronesia_in_Oceania.svg', answers: [{ text: 'Islas Marshall', correct: false }, { text: 'Micronesia', correct: true }, { text: 'Palaos', correct: false }, { text: 'Guam', correct: false }] },
        { question: '¿Qué país es?', code: 'nr', map: 'Nauru_in_Oceania.svg', answers: [{ text: 'Tuvalu', correct: false }, { text: 'Kiribati', correct: false }, { text: 'Nauru', correct: true }, { text: 'Islas Marshall', correct: false }] }
    ]
};

var questionsCapitals = {
    'europa': [
        { question: 'España', code: 'es', answers: [{ text: 'Madrid', correct: true }, { text: 'Lisboa', correct: false }, { text: 'París', correct: false }, { text: 'Roma', correct: false }] },
        { question: 'Francia', code: 'fr', answers: [{ text: 'París', correct: true }, { text: 'Berlín', correct: false }, { text: 'Bruselas', correct: false }, { text: 'Madrid', correct: false }] },
        { question: 'Alemania', code: 'de', answers: [{ text: 'Viena', correct: false }, { text: 'Berlín', correct: true }, { text: 'Praga', correct: false }, { text: 'Varsovia', correct: false }] },
        { question: 'Italia', code: 'it', answers: [{ text: 'Atenas', correct: false }, { text: 'Zagreb', correct: false }, { text: 'Roma', correct: true }, { text: 'Viena', correct: false }] },
        { question: 'Reino Unido', code: 'gb', answers: [{ text: 'Dublín', correct: false }, { text: 'Oslo', correct: false }, { text: 'Copenhague', correct: false }, { text: 'Londres', correct: true }] },
        { question: 'Portugal', code: 'pt', answers: [{ text: 'Lisboa', correct: true }, { text: 'Madrid', correct: false }, { text: 'Roma', correct: false }, { text: 'Atenas', correct: false }] },
        { question: 'Grecia', code: 'gr', answers: [{ text: 'Sofía', correct: false }, { text: 'Atenas', correct: true }, { text: 'Bucarest', correct: false }, { text: 'Zagreb', correct: false }] },
        { question: 'Noruega', code: 'no', answers: [{ text: 'Estocolmo', correct: false }, { text: 'Helsinki', correct: false }, { text: 'Oslo', correct: true }, { text: 'Copenhague', correct: false }] },
        { question: 'Suecia', code: 'se', answers: [{ text: 'Reikiavik', correct: false }, { text: 'Oslo', correct: false }, { text: 'Estocolmo', correct: true }, { text: 'Helsinki', correct: false }] },
        { question: 'Finlandia', code: 'fi', answers: [{ text: 'Tallin', correct: false }, { text: 'Riga', correct: false }, { text: 'Helsinki', correct: true }, { text: 'Vilna', correct: false }] },
        { question: 'Irlanda', code: 'ie', answers: [{ text: 'Londres', correct: false }, { text: 'Reikiavik', correct: false }, { text: 'Dublín', correct: true }, { text: 'Oslo', correct: false }] },
        { question: 'Polonia', code: 'pl', answers: [{ text: 'Varsovia', correct: true }, { text: 'Praga', correct: false }, { text: 'Bratislava', correct: false }, { text: 'Berlín', correct: false }] },
        { question: 'Bélgica', code: 'be', answers: [{ text: 'Ámsterdam', correct: false }, { text: 'Bruselas', correct: true }, { text: 'Luxemburgo', correct: false }, { text: 'París', correct: false }] },
        { question: 'Países Bajos', code: 'nl', answers: [{ text: 'Bruselas', correct: false }, { text: 'Copenhague', correct: false }, { text: 'Ámsterdam', correct: true }, { text: 'Luxemburgo', correct: false }] },
        { question: 'Suiza', code: 'ch', answers: [{ text: 'Vaduz', correct: false }, { text: 'Viena', correct: false }, { text: 'Berna', correct: true }, { text: 'Liubliana', correct: false }] },
        { question: 'Austria', code: 'at', answers: [{ text: 'Berna', correct: false }, { text: 'Praga', correct: false }, { text: 'Budapest', correct: false }, { text: 'Viena', correct: true }] },
        { question: 'República Checa', code: 'cz', answers: [{ text: 'Bratislava', correct: false }, { text: 'Praga', correct: true }, { text: 'Varsovia', correct: false }, { text: 'Viena', correct: false }] },
        { question: 'Hungría', code: 'hu', answers: [{ text: 'Bucarest', correct: false }, { text: 'Sofía', correct: false }, { text: 'Budapest', correct: true }, { text: 'Belgrado', correct: false }] },
        { question: 'Dinamarca', code: 'dk', answers: [{ text: 'Copenhague', correct: true }, { text: 'Oslo', correct: false }, { text: 'Estocolmo', correct: false }, { text: 'Helsinki', correct: false }] },
        { question: 'Rumanía', code: 'ro', answers: [{ text: 'Sofía', correct: false }, { text: 'Kiev', correct: false }, { text: 'Budapest', correct: false }, { text: 'Bucarest', correct: true }] },
        { question: 'Ucrania', code: 'ua', answers: [{ text: 'Minsk', correct: false }, { text: 'Kiev', correct: true }, { text: 'Varsovia', correct: false }, { text: 'Moscú', correct: false }] },
        { question: 'Rusia', code: 'ru', answers: [{ text: 'Moscú', correct: true }, { text: 'Kiev', correct: false }, { text: 'Minsk', correct: false }, { text: 'Ankara', correct: false }] },
        { question: 'Croacia', code: 'hr', answers: [{ text: 'Liubliana', correct: false }, { text: 'Zagreb', correct: true }, { text: 'Sarajevo', correct: false }, { text: 'Belgrado', correct: false }] },
        { question: 'Bulgaria', code: 'bg', answers: [{ text: 'Atenas', correct: false }, { text: 'Bucarest', correct: false }, { text: 'Sofía', correct: true }, { text: 'Skopie', correct: false }] },
        { question: 'Islandia', code: 'is', answers: [{ text: 'Dublín', correct: false }, { text: 'Oslo', correct: false }, { text: 'Reikiavik', correct: true }, { text: 'Copenhague', correct: false }] },
        { question: 'Eslovaquia', code: 'sk', answers: [{ text: 'Praga', correct: false }, { text: 'Liubliana', correct: false }, { text: 'Bratislava', correct: true }, { text: 'Viena', correct: false }] },
        { question: 'Serbia', code: 'rs', answers: [{ text: 'Sarajevo', correct: false }, { text: 'Podgorica', correct: false }, { text: 'Belgrado', correct: true }, { text: 'Zagreb', correct: false }] },
        { question: 'Lituania', code: 'lt', answers: [{ text: 'Riga', correct: false }, { text: 'Vilna', correct: true }, { text: 'Tallin', correct: false }, { text: 'Minsk', correct: false }] },
        { question: 'Letonia', code: 'lv', answers: [{ text: 'Vilna', correct: false }, { text: 'Tallin', correct: false }, { text: 'Riga', correct: true }, { text: 'Helsinki', correct: false }] },
        { question: 'Estonia', code: 'ee', answers: [{ text: 'Riga', correct: false }, { text: 'Helsinki', correct: false }, { text: 'Vilna', correct: false }, { text: 'Tallin', correct: true }] },
        { question: 'Eslovenia', code: 'si', answers: [{ text: 'Bratislava', correct: false }, { text: 'Liubliana', correct: true }, { text: 'Zagreb', correct: false }, { text: 'Viena', correct: false }] },
        { question: 'Bielorrusia', code: 'by', answers: [{ text: 'Kiev', correct: false }, { text: 'Minsk', correct: true }, { text: 'Moscú', correct: false }, { text: 'Varsovia', correct: false }] },
        { question: 'Albania', code: 'al', answers: [{ text: 'Skopie', correct: false }, { text: 'Tirana', correct: true }, { text: 'Atenas', correct: false }, { text: 'Podgorica', correct: false }] },
        { question: 'Macedonia del Norte', code: 'mk', answers: [{ text: 'Tirana', correct: false }, { text: 'Sofía', correct: false }, { text: 'Skopie', correct: true }, { text: 'Pristina', correct: false }] },
        { question: 'Andorra', code: 'ad', answers: [{ text: 'Mónaco', correct: false }, { text: 'San Marino', correct: false }, { text: 'Vaduz', correct: false }, { text: 'Andorra la Vella', correct: true }] }
    ],
    'asia': [
        {question: 'China', code: 'cn', answers: [{ text: 'Pekín', correct: true }, { text: 'Seúl', correct: false }, { text: 'Tokio', correct: false }, { text: 'Taipéi', correct: false }] },
        { question: 'India', code: 'in', answers: [{ text: 'Islamabad', correct: false }, { text: 'Nueva Delhi', correct: true }, { text: 'Katmandú', correct: false }, { text: 'Daca', correct: false }] },
        { question: 'Japón', code: 'jp', answers: [{ text: 'Pekín', correct: false }, { text: 'Seúl', correct: false }, { text: 'Tokio', correct: true }, { text: 'Hanói', correct: false }] },
        { question: 'Corea del Sur', code: 'kr', answers: [{ text: 'Pionyang', correct: false }, { text: 'Tokio', correct: false }, { text: 'Pekín', correct: false }, { text: 'Seúl', correct: true }] },
        { question: 'Tailandia', code: 'th', answers: [{ text: 'Bangkok', correct: true }, { text: 'Hanói', correct: false }, { text: 'Manila', correct: false }, { text: 'Kuala Lumpur', correct: false }] },
        { question: 'Turquía', code: 'tr', answers: [{ text: 'Estambul', correct: false }, { text: 'Ankara', correct: true }, { text: 'Damasco', correct: false }, { text: 'Teherán', correct: false }] },
        { question: 'Arabia Saudita', code: 'sa', answers: [{ text: 'Abu Dabi', correct: false }, { text: 'Doha', correct: false }, { text: 'Riad', correct: true }, { text: 'Mascate', correct: false }] },
        { question: 'Vietnam', code: 'vn', answers: [{ text: 'Bangkok', correct: false }, { text: 'Nom Pen', correct: false }, { text: 'Vientián', correct: false }, { text: 'Hanói', correct: true }] },
        { question: 'Indonesia', code: 'id', answers: [{ text: 'Yakarta', correct: true }, { text: 'Kuala Lumpur', correct: false }, { text: 'Singapur', correct: false }, { text: 'Manila', correct: false }] },
        { question: 'Filipinas', code: 'ph', answers: [{ text: 'Yakarta', correct: false }, { text: 'Manila', correct: true }, { text: 'Kuala Lumpur', correct: false }, { text: 'Bangkok', correct: false }] },
        { question: 'Irán', code: 'ir', answers: [{ text: 'Bagdad', correct: false }, { text: 'Kabul', correct: false }, { text: 'Teherán', correct: true }, { text: 'Riad', correct: false }] },
        { question: 'Irak', code: 'iq', answers: [{ text: 'Teherán', correct: false }, { text: 'Damasco', correct: false }, { text: 'Ammán', correct: false }, { text: 'Bagdad', correct: true }] },
        { question: 'Pakistán', code: 'pk', answers: [{ text: 'Nueva Delhi', correct: false }, { text: 'Islamabad', correct: true }, { text: 'Kabul', correct: false }, { text: 'Katmandú', correct: false }] },
        { question: 'Malasia', code: 'my', answers: [{ text: 'Singapur', correct: false }, { text: 'Yakarta', correct: false }, { text: 'Kuala Lumpur', correct: true }, { text: 'Manila', correct: false }] },
        { question: 'Afganistán', code: 'af', answers: [{ text: 'Teherán', correct: false }, { text: 'Islamabad', correct: false }, { text: 'Kabul', correct: true }, { text: 'Dusambé', correct: false }] },
        { question: 'Corea del Norte', code: 'kp', answers: [{ text: 'Seúl', correct: false }, { text: 'Pionyang', correct: true }, { text: 'Pekín', correct: false }, { text: 'Ulán Bator', correct: false }] },
        { question: 'Emiratos Árabes Unidos', code: 'ae', answers: [{ text: 'Doha', correct: false }, { text: 'Riad', correct: false }, { text: 'Mascate', correct: false }, { text: 'Abu Dabi', correct: true }] },
        { question: 'Israel', code: 'il', answers: [{ text: 'Jerusalén', correct: true }, { text: 'Beirut', correct: false }, { text: 'Ammán', correct: false }, { text: 'Damasco', correct: false }] },
        { question: 'Nepal', code: 'np', answers: [{ text: 'Daca', correct: false }, { text: 'Timbu', correct: false }, { text: 'Katmandú', correct: true }, { text: 'Nueva Delhi', correct: false }] },
        { question: 'Siria', code: 'sy', answers: [{ text: 'Beirut', correct: false }, { text: 'Ammán', correct: false }, { text: 'Damasco', correct: true }, { text: 'Bagdad', correct: false }] },
        { question: 'Catar', code: 'qa', answers: [{ text: 'Abu Dabi', correct: false }, { text: 'Manama', correct: false }, { text: 'Kuwait', correct: false }, { text: 'Doha', correct: true }] },
        { question: 'Jordania', code: 'jo', answers: [{ text: 'Damasco', correct: false }, { text: 'Ammán', correct: true }, { text: 'Jerusalén', correct: false }, { text: 'Beirut', correct: false }] },
        { question: 'Singapur', code: 'sg', answers: [{ text: 'Kuala Lumpur', correct: false }, { text: 'Yakarta', correct: false }, { text: 'Singapur', correct: true }, { text: 'Bangkok', correct: false }] },
        { question: 'Mongolia', code: 'mn', answers: [{ text: 'Pekín', correct: false }, { text: 'Astaná', correct: false }, { text: 'Ulán Bator', correct: true }, { text: 'Moscú', correct: false }] },
        { question: 'Líbano', code: 'lb', answers: [{ text: 'Damasco', correct: false }, { text: 'Beirut', correct: true }, { text: 'Jerusalén', correct: false }, { text: 'Ammán', correct: false }] },
        { question: 'Camboya', code: 'kh', answers: [{ text: 'Vientián', correct: false }, { text: 'Hanói', correct: false }, { text: 'Nom Pen', correct: true }, { text: 'Bangkok', correct: false }] },
        { question: 'Kazajistán', code: 'kz', answers: [{ text: 'Taskent', correct: false }, { text: 'Biskek', correct: false }, { text: 'Astaná', correct: true }, { text: 'Ulán Bator', correct: false }] },
        { question: 'Uzbekistán', code: 'uz', answers: [{ text: 'Asjabad', correct: false }, { text: 'Taskent', correct: true }, { text: 'Dusambé', correct: false }, { text: 'Biskek', correct: false }] },
        { question: 'Sri Lanka', code: 'lk', answers: [{ text: 'Malé', correct: false }, { text: 'Nueva Delhi', correct: false }, { text: 'Colombo', correct: true }, { text: 'Katmandú', correct: false }] },
        { question: 'Laos', code: 'la', answers: [{ text: 'Hanói', correct: false }, { text: 'Nom Pen', correct: false }, { text: 'Vientián', correct: true }, { text: 'Bangkok', correct: false }] },
        { question: 'Bangladés', code: 'bd', answers: [{ text: 'Nueva Delhi', correct: false }, { text: 'Daca', correct: true }, { text: 'Birmania', correct: false }, { text: 'Pakistán', correct: false }] },
        { question: 'Kirguistán', code: 'kg', answers: [{ text: 'Dusambé', correct: false }, { text: 'Taskent', correct: false }, { text: 'Biskek', correct: true }, { text: 'Astaná', correct: false }] },
        { question: 'Omán', code: 'om', answers: [{ text: 'Saná', correct: false }, { text: 'Mascate', correct: true }, { text: 'Abu Dabi', correct: false }, { text: 'Riad', correct: false }] },
        { question: 'Bután', code: 'bt', answers: [{ text: 'Katmandú', correct: false }, { text: 'Daca', correct: false }, { text: 'Timbu', correct: true }, { text: 'Nueva Delhi', correct: false }] },
        { question: 'Kuwait', code: 'kw', answers: [{ text: 'Manama', correct: false }, { text: 'Doha', correct: false }, { text: 'Bagdad', correct: false }, { text: 'Kuwait', correct: true }] }
    ],
    'america': [
        {question: 'Estados Unidos', code: 'us', answers: [{ text: 'Washington D.C.', correct: true }, { text: 'Nueva York', correct: false }, { text: 'Ottawa', correct: false }, { text: 'Ciudad de México', correct: false }] },
        { question: 'Canadá', code: 'ca', answers: [{ text: 'Toronto', correct: false }, { text: 'Ottawa', correct: true }, { text: 'Vancouver', correct: false }, { text: 'Washington D.C.', correct: false }] },
        { question: 'México', code: 'mx', answers: [{ text: 'Bogotá', correct: false }, { text: 'Lima', correct: false }, { text: 'Ciudad de México', correct: true }, { text: 'La Habana', correct: false }] },
        { question: 'Brasil', code: 'br', answers: [{ text: 'Río de Janeiro', correct: false }, { text: 'São Paulo', correct: false }, { text: 'Buenos Aires', correct: false }, { text: 'Brasilia', correct: true }] },
        { question: 'Argentina', code: 'ar', answers: [{ text: 'Buenos Aires', correct: true }, { text: 'Santiago', correct: false }, { text: 'Montevideo', correct: false }, { text: 'Lima', correct: false }] },
        { question: 'Colombia', code: 'co', answers: [{ text: 'Caracas', correct: false }, { text: 'Bogotá', correct: true }, { text: 'Quito', correct: false }, { text: 'Lima', correct: false }] },
        { question: 'Perú', code: 'pe', answers: [{ text: 'Quito', correct: false }, { text: 'Santiago', correct: false }, { text: 'Lima', correct: true }, { text: 'La Paz', correct: false }] },
        { question: 'Chile', code: 'cl', answers: [{ text: 'Buenos Aires', correct: false }, { text: 'Montevideo', correct: false }, { text: 'Santiago', correct: true }, { text: 'Asunción', correct: false }] },
        { question: 'Venezuela', code: 've', answers: [{ text: 'Bogotá', correct: false }, { text: 'Georgetown', correct: false }, { text: 'Caracas', correct: true }, { text: 'Quito', correct: false }] },
        { question: 'Cuba', code: 'cu', answers: [{ text: 'Kingston', correct: false }, { text: 'Santo Domingo', correct: false }, { text: 'San Juan', correct: false }, { text: 'La Habana', correct: true }] },
        { question: 'Ecuador', code: 'ec', answers: [{ text: 'Quito', correct: true }, { text: 'Lima', correct: false }, { text: 'Colombia', correct: false }, { text: 'Venezuela', correct: false }] },
        { question: 'Guatemala', code: 'gt', answers: [{ text: 'San Salvador', correct: false }, { text: 'Ciudad de Guatemala', correct: true }, { text: 'Tegucigalpa', correct: false }, { text: 'Managua', correct: false }] },
        { question: 'Costa Rica', code: 'cr', answers: [{ text: 'Panamá', correct: false }, { text: 'San Salvador', correct: false }, { text: 'San José', correct: true }, { text: 'Tegucigalpa', correct: false }] },
        { question: 'Panamá', code: 'pa', answers: [{ text: 'San José', correct: false }, { text: 'Bogotá', correct: false }, { text: 'Panamá', correct: true }, { text: 'Caracas', correct: false }] },
        { question: 'República Dominicana', code: 'do', answers: [{ text: 'La Habana', correct: false }, { text: 'San Juan', correct: false }, { text: 'Puerto Príncipe', correct: false }, { text: 'Santo Domingo', correct: true }] },
        { question: 'Bolivia', code: 'bo', answers: [{ text: 'Sucre', correct: true }, { text: 'Lima', correct: false }, { text: 'Asunción', correct: false }, { text: 'Santiago', correct: false }] },
        { question: 'Honduras', code: 'hn', answers: [{ text: 'Managua', correct: false }, { text: 'Tegucigalpa', correct: true }, { text: 'San Salvador', correct: false }, { text: 'Ciudad de Guatemala', correct: false }] },
        { question: 'Paraguay', code: 'py', answers: [{ text: 'Montevideo', correct: false }, { text: 'Sucre', correct: false }, { text: 'Asunción', correct: true }, { text: 'Buenos Aires', correct: false }] },
        { question: 'El Salvador', code: 'sv', answers: [{ text: 'Tegucigalpa', correct: false }, { text: 'Managua', correct: false }, { text: 'Ciudad de Guatemala', correct: false }, { text: 'San Salvador', correct: true }] },
        { question: 'Uruguay', code: 'uy', answers: [{ text: 'Montevideo', correct: true }, { text: 'Buenos Aires', correct: false }, { text: 'Asunción', correct: false }, { text: 'Santiago', correct: false }] },
        { question: 'Nicaragua', code: 'ni', answers: [{ text: 'San José', correct: false }, { text: 'Managua', correct: true }, { text: 'Tegucigalpa', correct: false }, { text: 'San Salvador', correct: false }] },
        { question: 'Jamaica', code: 'jm', answers: [{ text: 'La Habana', correct: false }, { text: 'Kingston', correct: true }, { text: 'Nasáu', correct: false }, { text: 'Santo Domingo', correct: false }] },
        { question: 'Puerto Rico', code: 'pr', answers: [{ text: 'Santo Domingo', correct: false }, { text: 'La Habana', correct: false }, { text: 'San Juan', correct: true }, { text: 'Kingston', correct: false }] },
        { question: 'Haití', code: 'ht', answers: [{ text: 'Kingston', correct: false }, { text: 'Santo Domingo', correct: false }, { text: 'Puerto Príncipe', correct: true }, { text: 'La Habana', correct: false }] },
        { question: 'Belice', code: 'bz', answers: [{ text: 'Ciudad de Guatemala', correct: false }, { text: 'Belmopán', correct: true }, { text: 'San Salvador', correct: false }, { text: 'Tegucigalpa', correct: false }] },
        { question: 'Bahamas', code: 'bs', answers: [{ text: 'La Habana', correct: false }, { text: 'Jamaica', correct: false }, { text: 'Nasáu', correct: true }, { text: 'San Juan', correct: false }] },
        { question: 'Barbados', code: 'bb', answers: [{ text: 'Castries', correct: false }, { text: 'Puerto España', correct: false }, { text: 'Kingstown', correct: false }, { text: 'Bridgetown', correct: true }] },
        { question: 'Santa Lucía', code: 'lc', answers: [{ text: 'Bridgetown', correct: false }, { text: 'Castries', correct: true }, { text: 'Kingstown', correct: false }, { text: 'Saint George', correct: false }] },
        { question: 'Trinidad y Tobago', code: 'tt', answers: [{ text: 'Caracas', correct: false }, { text: 'Georgetown', correct: false }, { text: 'Puerto España', correct: true }, { text: 'Paramaribo', correct: false }] },
        { question: 'Guyana', code: 'gy', answers: [{ text: 'Paramaribo', correct: false }, { text: 'Caracas', correct: false }, { text: 'Georgetown', correct: true }, { text: 'Bogotá', correct: false }] },
        { question: 'Surinam', code: 'sr', answers: [{ text: 'Georgetown', correct: false }, { text: 'Paramaribo', correct: true }, { text: 'Cayena', correct: false }, { text: 'Caracas', correct: false }] },
        { question: 'Antigua y Barbuda', code: 'ag', answers: [{ text: 'Saint John\'s', correct: true }, { text: 'Kingstown', correct: false }, { text: 'Castries', correct: false }, { text: 'Bridgetown', correct: false }] },
        { question: 'San Vicente y las Granadinas', code: 'vc', answers: [{ text: 'Castries', correct: false }, { text: 'Saint George\'s', correct: false }, { text: 'Bridgetown', correct: false }, { text: 'Kingstown', correct: true }] },
        { question: 'Granada', code: 'gd', answers: [{ text: 'Kingstown', correct: false }, { text: 'Saint George\'s', correct: true }, { text: 'Puerto España', correct: false }, { text: 'Castries', correct: false }] },
        { question: 'San Cristóbal y Nieves', code: 'kn', answers: [{ text: 'Saint John\'s', correct: false }, { text: 'Roseau', correct: false }, { text: 'Basseterre', correct: true }, { text: 'Castries', correct: false }] }
    ],
    'africa': [
        { question: 'Egipto', code: 'eg', answers: [{ text: 'El Cairo', correct: true }, { text: 'Argel', correct: false }, { text: 'Rabat', correct: false }, { text: 'Trípoli', correct: false }] },
        { question: 'Sudáfrica', code: 'za', answers: [{ text: 'Nairobi', correct: false }, { text: 'Pretoria', correct: true }, { text: 'Kinsasa', correct: false }, { text: 'Lagos', correct: false }] },
        { question: 'Nigeria', code: 'ng', answers: [{ text: 'Lagos', correct: false }, { text: 'Acra', correct: false }, { text: 'Abuya', correct: true }, { text: 'Dakar', correct: false }] },
        { question: 'Marruecos', code: 'ma', answers: [{ text: 'Casablanca', correct: false }, { text: 'Argel', correct: false }, { text: 'Túnez', correct: false }, { text: 'Rabat', correct: true }] },
        { question: 'Kenia', code: 'ke', answers: [{ text: 'Adís Abeba', correct: false }, { text: 'Nairobi', correct: true }, { text: 'Mogadiscio', correct: false }, { text: 'Dodoma', correct: false }] },
        { question: 'Etiopía', code: 'et', answers: [{ text: 'Jartum', correct: false }, { text: 'Yuba', correct: false }, { text: 'Adís Abeba', correct: true }, { text: 'Nairobi', correct: false }] },
        { question: 'Argelia', code: 'dz', answers: [{ text: 'Argel', correct: true }, { text: 'Túnez', correct: false }, { text: 'Rabat', correct: false }, { text: 'Trípoli', correct: false }] },
        { question: 'Ghana', code: 'gh', answers: [{ text: 'Lomé', correct: false }, { text: 'Acra', correct: true }, { text: 'Abuya', correct: false }, { text: 'Dakar', correct: false }] },
        { question: 'Senegal', code: 'sn', answers: [{ text: 'Bamako', correct: false }, { text: 'Nuakchot', correct: false }, { text: 'Dakar', correct: true }, { text: 'Conakri', correct: false }] },
        { question: 'Madagascar', code: 'mg', answers: [{ text: 'Maputo', correct: false }, { text: 'Sudáfrica', correct: false }, { text: 'Antananarivo', correct: true }, { text: 'Pretoria', correct: false }] },
        { question: 'Túnez', code: 'tn', answers: [{ text: 'Rabat', correct: false }, { text: 'Argel', correct: false }, { text: 'Trípoli', correct: false }, { text: 'Túnez', correct: true }] },
        { question: 'Angola', code: 'ao', answers: [{ text: 'Luanda', correct: true }, { text: 'Kinsasa', correct: false }, { text: 'Lusaka', correct: false }, { text: 'Windhoek', correct: false }] },
        { question: 'Rep. Dem. del Congo', code: 'cd', answers: [{ text: 'Brazzaville', correct: false }, { text: 'Kinsasa', correct: true }, { text: 'Luanda', correct: false }, { text: 'Yaundé', correct: false }] },
        { question: 'Tanzania', code: 'tz', answers: [{ text: 'Nairobi', correct: false }, { text: 'Kampala', correct: false }, { text: 'Dodoma', correct: true }, { text: 'Maputo', correct: false }] },
        { question: 'Camerún', code: 'cm', answers: [{ text: 'Abuya', correct: false }, { text: 'Libreville', correct: false }, { text: 'Yaundé', correct: true }, { text: 'Kinsasa', correct: false }] },
        { question: 'Costa de Marfil', code: 'ci', answers: [{ text: 'Acra', correct: false }, { text: 'Dakar', correct: false }, { text: 'Yamusukro', correct: true }, { text: 'Lomé', correct: false }] },
        { question: 'Sudán', code: 'sd', answers: [{ text: 'Yuba', correct: false }, { text: 'El Cairo', correct: false }, { text: 'Adís Abeba', correct: false }, { text: 'Jartum', correct: true }] },
        { question: 'Libia', code: 'ly', answers: [{ text: 'Trípoli', correct: true }, { text: 'Argel', correct: false }, { text: 'Egipto', correct: false }, { text: 'Sudán', correct: false }] },
        { question: 'Malí', code: 'ml', answers: [{ text: 'Nuakchot', correct: false }, { text: 'Bamako', correct: true }, { text: 'Níger', correct: false }, { text: 'Argelia', correct: false }] },
        { question: 'Zambia', code: 'zm', answers: [{ text: 'Harare', correct: false }, { text: 'Maputo', correct: false }, { text: 'Lusaka', correct: true }, { text: 'Luanda', correct: false }] },
        { question: 'Mozambique', code: 'mz', answers: [{ text: 'Maputo', correct: true }, { text: 'Lusaka', correct: false }, { text: 'Harare', correct: false }, { text: 'Pretoria', correct: false }] },
        { question: 'Uganda', code: 'ug', answers: [{ text: 'Kigali', correct: false }, { text: 'Nairobi', correct: false }, { text: 'Kampala', correct: true }, { text: 'Dodoma', correct: false }] },
        { question: 'Níger', code: 'ne', answers: [{ text: 'Abuya', correct: false }, { text: 'Bamako', correct: false }, { text: 'Niamey', correct: true }, { text: 'Yamena', correct: false }] },
        { question: 'Chad', code: 'td', answers: [{ text: 'Jartum', correct: false }, { text: 'Niamey', correct: false }, { text: 'Yamena', correct: true }, { text: 'Abuya', correct: false }] },
        { question: 'Zimbabue', code: 'zw', answers: [{ text: 'Lusaka', correct: false }, { text: 'Gaborone', correct: false }, { text: 'Harare', correct: true }, { text: 'Sudáfrica', correct: false }] },
        { question: 'Ruanda', code: 'rw', answers: [{ text: 'Kampala', correct: false }, { text: 'Brazzaville', correct: false }, { text: 'Kigali', correct: true }, { text: 'Kinsasa', correct: false }] },
        { question: 'Guinea', code: 'gn', answers: [{ text: 'Conakri', correct: true }, { text: 'Dakar', correct: false }, { text: 'Freetown', correct: false }, { text: 'Bamako', correct: false }] },
        { question: 'Benín', code: 'bj', answers: [{ text: 'Lomé', correct: false }, { text: 'Acra', correct: false }, { text: 'Porto Novo', correct: true }, { text: 'Abuya', correct: false }] },
        { question: 'Somalia', code: 'so', answers: [{ text: 'Adís Abeba', correct: false }, { text: 'Mogadiscio', correct: true }, { text: 'Jartum', correct: false }, { text: 'Nairobi', correct: false }] },
        { question: 'Burkina Faso', code: 'bf', answers: [{ text: 'Bamako', correct: false }, { text: 'Acra', correct: false }, { text: 'Uagadugú', correct: true }, { text: 'Niamey', correct: false }] },
        { question: 'Namibia', code: 'na', answers: [{ text: 'Gaborone', correct: false }, { text: 'Windhoek', correct: true }, { text: 'Luanda', correct: false }, { text: 'Pretoria', correct: false }] },
        { question: 'República del Congo', code: 'cg', answers: [{ text: 'Kinsasa', correct: false }, { text: 'Yaundé', correct: false }, { text: 'Brazzaville', correct: true }, { text: 'Libreville', correct: false }] },
        { question: 'Togo', code: 'tg', answers: [{ text: 'Porto Novo', correct: false }, { text: 'Lomé', correct: true }, { text: 'Acra', correct: false }, { text: 'Uagadugú', correct: false }] },
        { question: 'Sierra Leona', code: 'sl', answers: [{ text: 'Monrovia', correct: false }, { text: 'Conakri', correct: false }, { text: 'Freetown', correct: true }, { text: 'Dakar', correct: false }] },
        { question: 'Mauritania', code: 'mr', answers: [{ text: 'Dakar', correct: false }, { text: 'Bamako', correct: false }, { text: 'Rabat', correct: false }, { text: 'Nuakchot', correct: true }] }
    ],
    'oceania': [
        { question: 'Australia', code: 'au', answers: [{ text: 'Sídney', correct: false }, { text: 'Melbourne', correct: false }, { text: 'Canberra', correct: true }, { text: 'Wellington', correct: false }] },
        { question: 'Nueva Zelanda', code: 'nz', answers: [{ text: 'Auckland', correct: false }, { text: 'Wellington', correct: true }, { text: 'Suva', correct: false }, { text: 'Canberra', correct: false }] },
        { question: 'Fiyi', code: 'fj', answers: [{ text: 'Suva', correct: true }, { text: 'Apia', correct: false }, { text: 'Port Moresby', correct: false }, { text: 'Ngerulmud', correct: false }] },
        { question: 'Papúa Nueva Guinea', code: 'pg', answers: [{ text: 'Honiara', correct: false }, { text: 'Port Moresby', correct: true }, { text: 'Canberra', correct: false }, { text: 'Suva', correct: false }] },
        { question: 'Samoa', code: 'ws', answers: [{ text: 'Nukualofa', correct: false }, { text: 'Wellington', correct: false }, { text: 'Apia', correct: true }, { text: 'Funafuti', correct: false }] },
        { question: 'Tonga', code: 'to', answers: [{ text: 'Nukualofa', correct: true }, { text: 'Suva', correct: false }, { text: 'Apia', correct: false }, { text: 'Palikir', correct: false }] },
        { question: 'Palaos', code: 'pw', answers: [{ text: 'Yaren', correct: false }, { text: 'Majuro', correct: false }, { text: 'Ngerulmud', correct: true }, { text: 'Canberra', correct: false }] },
        { question: 'Vanuatu', code: 'vu', answers: [{ text: 'Port Vila', correct: true }, { text: 'Suva', correct: false }, { text: 'Honiara', correct: false }, { text: 'Wellington', correct: false }] },
        { question: 'Islas Marshall', code: 'mh', answers: [{ text: 'Palikir', correct: false }, { text: 'Majuro', correct: true }, { text: 'Tarawa', correct: false }, { text: 'Apia', correct: false }] },
        { question: 'Kiribati', code: 'ki', answers: [{ text: 'Funafuti', correct: false }, { text: 'Yaren', correct: false }, { text: 'Honiara', correct: false }, { text: 'Tarawa', correct: true }] },
        { question: 'Islas Salomón', code: 'sb', answers: [{ text: 'Port Moresby', correct: false }, { text: 'Honiara', correct: true }, { text: 'Suva', correct: false }, { text: 'Apia', correct: false }] },
        { question: 'Tuvalu', code: 'tv', answers: [{ text: 'Tarawa', correct: false }, { text: 'Nukualofa', correct: false }, { text: 'Funafuti', correct: true }, { text: 'Yaren', correct: false }] },
        { question: 'Micronesia', code: 'fm', answers: [{ text: 'Majuro', correct: false }, { text: 'Palikir', correct: true }, { text: 'Ngerulmud', correct: false }, { text: 'Tarawa', correct: false }] },
        { question: 'Nauru', code: 'nr', answers: [{ text: 'Funafuti', correct: false }, { text: 'Majuro', correct: false }, { text: 'Yaren', correct: true }, { text: 'Palikir', correct: false }] }
    ]
};

// Creación de modos 'Mundo' para ambos
questionsMaps['mundo'] = [].concat(questionsMaps.europa, questionsMaps.asia, questionsMaps.america, questionsMaps.africa, questionsMaps.oceania);

// Solo creamos mundo capitales si has rellenado los datos, para que no de error
questionsCapitals['mundo'] = []; 
if(questionsCapitals.europa) questionsCapitals['mundo'] = questionsCapitals['mundo'].concat(questionsCapitals.europa);
if(questionsCapitals.asia) questionsCapitals['mundo'] = questionsCapitals['mundo'].concat(questionsCapitals.asia);
if(questionsCapitals.america) questionsCapitals['mundo'] = questionsCapitals['mundo'].concat(questionsCapitals.america);
if(questionsCapitals.africa) questionsCapitals['mundo'] = questionsCapitals['mundo'].concat(questionsCapitals.africa);
if(questionsCapitals.oceania) questionsCapitals['mundo'] = questionsCapitals['mundo'].concat(questionsCapitals.oceania);


// --- Elementos del DOM ---
var modeMenu = document.getElementById('mode-menu'); // Nuevo menú de modos
var modeButtons = document.querySelectorAll('.mode-select-btn'); // Botones de modo

var mainMenu = document.getElementById('main-menu');
var difficultySelector = document.getElementById('difficulty-selector'); 
var quizMain = document.getElementById('quiz-main');

var topicButtons = document.querySelectorAll('.topic-btn');
var btnBackToTopics = document.getElementById('btn-back-to-topics'); 

var questionContainer = document.getElementById('question-container');
var questionText = document.getElementById('question-text');
var flagImage = document.getElementById('flag-image'); 
var mapImage = document.getElementById('map-image'); 
var answerButtonsElement = document.getElementById('answer-buttons');

var statsBar = document.querySelector('.stats-bar'); 
var quizFooter = document.querySelector('.quiz-footer');
var controlsDiv = document.querySelector('.controls');
var prevButton = document.getElementById('prev-btn');
var menuButton = document.getElementById('menu-btn');
var nextButton = document.getElementById('next-btn');

var scoreText = document.getElementById('score-text');
var errorsText = document.getElementById('errors-text'); 

var endGameControls = document.getElementById('end-game-controls');
var resultText = document.getElementById('result-text');
var restartButton = document.getElementById('restart-btn');

var difficultyTitle = document.getElementById('difficulty-title');
var quizTitle = document.getElementById('quiz-title');

// --- Variables de Estado del Juego ---
var currentQuestions = {}; // Aquí cargaremos Maps o Capitals según lo que elijas
var gameMode = ''; // 'maps' o 'capitals'

var selectedContinent = ''; 
var selectedContinentName = ''; 
var questionsBank = []; 
var shuffledQuestions, currentQuestionIndex;
var score = 0;
var errors = 0; 
var totalQuestions = 0; 
var scoreHistory = {}; 


// --- LÓGICA DE SELECCIÓN DE MODO (LO PRIMERO QUE OCURRE) ---
modeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        gameMode = btn.dataset.mode; // Leemos si es 'maps' o 'capitals'
        
        if (gameMode === 'maps') {
            currentQuestions = questionsMaps;
            document.getElementById('topic-header').innerText = "Elige un Continente (Mapas)";
        } else {
            currentQuestions = questionsCapitals;
            document.getElementById('topic-header').innerText = "Elige un Continente (Capitales)";
        }

        // Ocultamos menú de modos y mostramos menú de continentes
        modeMenu.classList.add('hide');
        mainMenu.classList.remove('hide');
    });
});


// --- Funciones del Quiz ---

// PASO 2: Seleccionar Continente
function selectContinent(continent, continentName) {
    selectedContinent = continent; 
    selectedContinentName = continentName; 
    
    // Cargamos el banco de preguntas según el modo elegido (Mapas o Capitales)
    questionsBank = currentQuestions[selectedContinent];

    // Verificación de seguridad
    if (!questionsBank || questionsBank.length === 0) {
        alert("No hay preguntas cargadas para este continente en este modo.");
        return;
    }

    totalQuestions = questionsBank.length; 

    // Gestión de pantallas: Ocultar menú y mostrar el quiz
    mainMenu.classList.add('hide');
    endGameControls.classList.add('hide');
    quizMain.classList.remove('hide');
    quizFooter.classList.remove('hide');
    statsBar.classList.remove('hide'); 

    // Reiniciar estadísticas
    score = 0;
    errors = 0;
    scoreHistory = {};
    updateStats(); 
    
    // Cambiar el título según el modo de juego
    if (gameMode === 'maps') {
        quizTitle.innerText = "Localiza: " + selectedContinentName;
    } else {
        quizTitle.innerText = "Capitales de " + selectedContinentName;
    }
    
    // Barajar preguntas y reiniciar su estado
    shuffledQuestions = shuffleArray(questionsBank);
    shuffledQuestions.forEach(function(q) {
        q.isAnswered = false;
        q.userAnswerText = null; 
    });

    currentQuestionIndex = 0;

    // --- NUEVO: PRECARGA ---
    // Empezamos a descargar "en secreto" las imágenes de la siguiente pregunta (índice 1)
    // para que cuando el jugador pulse "Siguiente", ya esté lista.
    preloadImages(1); 

    // Mostrar la primera pregunta
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


// Muestra una pregunta y sus imágenes según el modo
function showQuestion(question) {
    resetState();
    questionText.innerText = question.question; 
    
    // --- LÓGICA INTELIGENTE DE IMÁGENES ---
    
    if (gameMode === 'maps') {
        // MODO MAPAS: Mapa Grande + Bandera Pequeña
        if (question.code && question.map) {
            // 1. Bandera (Pequeña)
            flagImage.src = 'https://flagcdn.com/w160/' + question.code + '.png';
            flagImage.classList.remove('hide');
            flagImage.style.width = "130px"; // Forzamos tamaño pequeño
            
            // 2. Mapa (Grande)
            mapImage.src = 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/' + question.map + '&width=550';
            mapImage.classList.remove('hide');
            mapImage.style.display = "block"; // Aseguramos que se vea
            preloadImages(currentQuestionIndex + 1);
        }
    } else {
        // MODO CAPITALES: Solo Bandera (Grande)
        if (question.code) {
            // 1. Bandera (Grande)
            flagImage.src = 'https://flagcdn.com/w160/' + question.code + '.png';
            flagImage.classList.remove('hide');
            flagImage.style.width = "250px"; // Forzamos tamaño grande
            
            // 2. Mapa (Oculto)
            mapImage.classList.add('hide');
            mapImage.style.display = "none";
        }
    }
    // --- FIN LÓGICA IMÁGENES ---


    if (currentQuestionIndex > 0) {
        prevButton.classList.remove('invisible');
    } else {
        prevButton.classList.add('invisible');
    }
    
    if (question.isAnswered) {
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.innerText = "Siguiente";
        } else {
            nextButton.innerText = "Finalizar Quiz";
        }
        nextButton.classList.remove('invisible');
    } else {
        nextButton.classList.add('invisible');
    }

    var shuffledAnswers = shuffleArray(question.answers); 

    shuffledAnswers.forEach(function(answer) {
        var button = document.createElement('button');
        button.innerText = answer.text; 
        button.classList.add('btn');
        
        if (answer.correct) {
            button.dataset.correct = true; 
        }
        
        if (!question.isAnswered) {
             button.addEventListener('click', selectAnswer);
        }
       
        answerButtonsElement.appendChild(button);
    });

    if (question.isAnswered) {
        for (var i = 0; i < answerButtonsElement.children.length; i++) {
            var btn = answerButtonsElement.children[i];
            btn.disabled = true; 
            setStatusClass(btn, btn.dataset.correct === "true"); 
        }
    }
}

function resetState() {
    flagImage.classList.add('hide'); 
    mapImage.classList.add('hide'); 
    flagImage.src = ""; 
    mapImage.src = "";
    // Limpiamos estilos en línea para que no se queden guardados
    flagImage.style.width = ""; 
    mapImage.style.display = "";
    
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Se ejecuta al hacer clic en una respuesta
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct === "true";
    var selectedText = selectedButton.innerText; 

    var currentQuestion = shuffledQuestions[currentQuestionIndex];
    var firstAttempt = !currentQuestion.isAnswered;
    
    currentQuestion.isAnswered = true;
    currentQuestion.userAnswerText = selectedText; 

    if (correct) {
        scoreHistory[currentQuestionIndex] = 1;
    } else {
        scoreHistory[currentQuestionIndex] = 0;
        if (firstAttempt) { 
            errors++;
        }
    }
    recalculateScore(); 
    updateStats(); 

    for (var i = 0; i < answerButtonsElement.children.length; i++) {
        var button = answerButtonsElement.children[i];
        button.disabled = true; 
        setStatusClass(button, button.dataset.correct === "true");
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.innerText = "Siguiente";
    } else {
        nextButton.innerText = "Finalizar Quiz";
    }
    nextButton.classList.remove('invisible'); 
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        if (element.disabled) { 
             var answeredText = shuffledQuestions[currentQuestionIndex].userAnswerText;
             if (element.innerText === answeredText && !correct) {
                 element.classList.add('wrong');
             }
        }
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function recalculateScore() {
    score = 0;
    for (var key in scoreHistory) {
        score += scoreHistory[key];
    }
}

function updateStats() {
    scoreText.innerText = 'Puntuación: ' + score + ' / ' + totalQuestions;
    errorsText.innerText = 'Errores: ' + errors; 
}

// --- Funciones de Navegación ---
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function showPrevQuestion() {
    currentQuestionIndex--;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Finaliza el quiz
function endQuiz() {
    questionContainer.classList.add('hide');
    answerButtonsElement.classList.add('hide');
    quizFooter.classList.add('hide');
    statsBar.classList.add('hide'); 
    quizMain.classList.add('hide');
    
    // Ocultamos header del quiz
    document.getElementById('quiz-header').classList.add('hide');
    
    quizMain.classList.remove('hide'); // Mostramos contenedor para ver resultados
    
    var finalScore = (score / questionsBank.length) * 10;
    
    var mensaje = "";
    if (finalScore >= 9) mensaje = "¡Excelente trabajo!";
    else if (finalScore >= 7) mensaje = "¡Muy bien hecho!";
    else if (finalScore >= 5) mensaje = "Buen intento.";
    else mensaje = "Sigue practicando.";

    resultText.innerHTML = '<h2>' + mensaje + '</h2>' +
                           '<p>Tu puntuación final es: <strong>' + score + '</strong> de ' + questionsBank.length + '.</p>' +
                           '<p>Total de errores: ' + errors + '</p>' +
                           '<h3>Nota: ' + finalScore.toFixed(1) + '/10</h3>';
    
    endGameControls.classList.remove('hide');
}

// Vuelve al menú de CONTINENTES (manteniendo el modo elegido)
function showMainMenu() {
    quizMain.classList.add('hide');
    quizFooter.classList.add('hide'); 
    statsBar.classList.add('hide'); 
    endGameControls.classList.add('hide');
    
    document.getElementById('quiz-header').classList.remove('hide');
    questionContainer.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
    
    mainMenu.classList.remove('hide');
}

// Botón "Volver al Inicio" (Recarga la página para elegir modo de nuevo)
// Nota: Asegúrate de tener este botón en tu HTML si quieres usarlo, 
// o simplemente usa el botón "Menú" que ya tienes para volver a continentes.
// Si quieres un botón para cambiar de MODO, lo más fácil es recargar:
if(document.getElementById('btn-back-home')) {
    document.getElementById('btn-back-home').addEventListener('click', function() {
        location.reload();
    });
}


// --- Event Listeners ---

// Botones de Continente
topicButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Ignoramos los botones de modo, solo procesamos los de continente
        if(button.classList.contains('mode-select-btn')) return;

        if (button.disabled) return;
        var continent = button.dataset.continent; 
        var continentName = button.innerText.split(' (')[0];
        continentName = continentName.replace('Modo: ', ''); 
        
        selectContinent(continent, continentName);
    });
});

// Controles del Quiz
nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPrevQuestion);

// Botón Menú dentro del juego -> Vuelve a selección de continente
menuButton.addEventListener('click', showMainMenu); 

// Botón Reiniciar al final -> Vuelve a selección de continente
restartButton.addEventListener('click', showMainMenu);

// --- LÓGICA DEL BOTÓN DE INICIO FLOTANTE ---
document.addEventListener('DOMContentLoaded', function() {
    // Buscamos el botón una vez que la página ha cargado completamente
    var homeButton = document.getElementById('home-btn');

    if (homeButton) {
        homeButton.addEventListener('click', function() {
            // Forzamos la recarga de la página para ir al inicio
            window.location.reload();
        });
    } else {
        console.log("Error: No se encuentra el botón con id 'home-btn'");
    }
});

// --- FUNCIÓN DE PRECARGA DE IMÁGENES ---
function preloadImages(index) {
    // Verificamos si existe una pregunta siguiente
    if (index < shuffledQuestions.length) {
        var nextQ = shuffledQuestions[index];
        
        // Precargar Bandera
        if (nextQ.code) {
            var imgFlag = new Image();
            imgFlag.src = 'https://flagcdn.com/w160/' + nextQ.code + '.png';
        }
        
        // Precargar Mapa (solo si estamos en modo mapas)
        if (gameMode === 'maps' && nextQ.map) {
            var imgMap = new Image();
            imgMap.src = 'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/' + nextQ.map + '&width=550';
        }
    }
}