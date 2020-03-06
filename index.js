const axios = require('axios')
const url = require('url')
const http = require('http')
//to set the language!!!
const Language = "/en-gb"
const WordId = "example"
const apiId = '3a226b9c'
const apiKey = '5076f16b3c19ed62594a7d31584ba785';
const ApiUrl = 'https://od-api.oxforddictionaries.com/api/v2';
const Args  = process.argv


//this is the function which is about getting word!!!
async function GetTheWord(finalword){
     //the first part of url + /entries + the language + the url of the word
      const FinalUrl = ApiUrl + '/entries' + Language + '/' + finalword  
      
      try{
            const response = await axios.get( FinalUrl, {
                  headers: {
                      "Accept": "application/json",
                      "app_id": apiId,
                      "app_key": apiKey
            }
      }
      
      )
            const data = await response.data
              //the direction of datas that we need
              console.log(data.results[0].lexicalEntries[0].lexicalCategory.text)
            console.log(data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])

      }
      catch(error){
            console.log(error)
      }
}
// to write which word,that you wanna find it meanings(the third index!!!)
GetTheWord(Args[2])