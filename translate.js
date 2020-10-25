async function main(params) {
    const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const languageTranslator = new LanguageTranslatorV3({
        version: '2018-05-01',
        authenticator: new IamAuthenticator({
        apikey: '<API_KEY>',
    }),
    serviceUrl: '<SERVICE_URL>',
    });

    const translateParams = {
    text: params.input,
    modelId: 'ga-en',
    };

    var obj;

    await languageTranslator.translate(translateParams)
    .then(translationResult => {
    obj = translationResult;
    })
    .catch(err => {
    console.log('error:', err);
    });

    return obj.result;
}
