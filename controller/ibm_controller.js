const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');


const api_key= '-QbkdSCsbM86DChG2pkay0CaTpnLzX_MBcpNbKsocf8B';
const url='https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/4f4ee298-7964-4316-a650-fe53025c30c3';

return module.exports = function_profile = async (req, res, next)=>{

  let datos_usuarios = req.body.bodyFormData;
  console.log("parametro");
  console.log(datos_usuarios);
  await saveResultWatson(datos_usuarios);
    const personalityInsights = new PersonalityInsightsV3({
        version: '2017-10-13',
        authenticator: new IamAuthenticator({
            apikey: api_key,
          }),
        url: url,
        disableSslVerification: true
      });
      
    var parametros={ 
        "contentItems": [
            {
              "userid":"jose",
               "content": datos_usuarios.dataPersonality,
               "contenttype": "text/plain",
               "created": 14476391354000,
               "id": "freetexts",
               "language": "es" 
            }
        ]
    };
    const profileParams = {
        // Get the content from the JSON file.
        //content: require('./profile.json'),
        content: parametros,
        contentType: 'application/json',
        contentLanguage:'es-EC',
        consumptionPreferences: true,
        rawScores: true,
      };
    
      personalityInsights.profile(profileParams)
      .then(profile => {
        console.log('successfull');
     //   console.log(profile);
        console.log('successfull 2');
          res.status(200).json({
            estado: true,
            mensaje: "datos correctos",
            datos: profile
        }); 
        //console.log(JSON.stringify(profile, null, 2));
      })
      .catch(err => {
        console.log('errores de la pagina:');  
        console.log('error:', err);
      });
    
}


const saveResultWatson = (resultado_test) => {


 
}
