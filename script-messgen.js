const horoscopeList = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const horoscopeMotol = ['you are invincible.', 'You know nothing worth having comes easy.', 'Manifest your reality.', 'I Feel therefore I am.', 'If you know the way go the way and show the way.', 'My best can always be better', 'No person is an island', 'You never know what you are capable of until you try.', 'Towering genius disdains a beaten path.', 'There is no me there is only we.', 'I have no motol only love to give.'];

//user input returning the corresponding horoscope sign

const monthHoroscope = () => {
    const prompt = require('prompt-sync')();
    let userInput = prompt("saisissez votre mois de naissance: ");
    let userMonth = userInput.toLowerCase();
    switch (userMonth){
        case 'january': 
        return horoscopeList[0];
        break;
        case 'february': 
        return horoscopeList[1];
        break;
        case 'march':
            return horoscopeList[2];
        break;
        case 'april':
            return horoscopeList[3];
        break;
        case 'may':
            return horoscopeList[4];
        break;
        case 'june':
            return horoscopeList[5];
        case 'july':
            return horoscopeList[6];
        break;
        case 'august':
            return horoscopeList[7];
        break;
        case 'september':
            return horoscopeList[8];
        break
        case 'october':
            return horoscopeList[9];
        break;
        case 'november':
            return horoscopeList[10];
        break;
        case 'december':
            return horoscopeList[11];
        break;
        default:
            return 'wrong month, please check the spelling!';
        break;
      
    }
   
};

