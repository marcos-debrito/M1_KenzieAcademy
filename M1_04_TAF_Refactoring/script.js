// Implemente aqui as funções

function heightPerson(gender, height){
    let result = false
    if (gender == "male"){
        if (height >= 1.70){
            result = true
            return result;
        }
        return result
    }
    if (gender == "female"){
        if (height >= 1.60){
            result = true
            return result;
        }
    }
        return result;
    }  

function barTest(gender, barReps, barSeconds){
    let result = false
    if (gender == "male"){
        if ((barReps >= 6) || (barSeconds <= 15)){
            result = true
            return result;
        } 
            return result;
        }
    if (gender == "female"){
        if ((barReps >= 5) || (barSeconds <= 12)){
            result = true
            return result;
        }
            return result;
        }
    }

function absPerson(gender, abs){
    result = false
    if (gender == "male" || gender =="female"){
        if (abs >= 41){
            result = true
            return result;
        } 
            return result;
        }
    }

function run(gender, runDistance, runTime){
    result = false
    if (gender == "male"){
        if ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200) ){
            result = true
            return result
        }
            return result;
        }
    if (gender == "female") {
        if ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320) ){
            result = true
            return result;
        }
            return result;
        }
    } 

function swim(gender, swimDistance, swimTime, diveTime){
    result = false
    if (gender == "male" || gender == "female"){
        if ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30)){
            result = true
            return result;
        } else {
            return result;
        }
    }
} 

function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime){
    result = false
    if (heightPerson(gender, height) == true && 
        barTest(gender, barReps, barSeconds) == true && 
        absPerson(gender, abs) == true &&
        run(gender, runDistance, runTime) == true &&
        swim(gender, swimDistance, swimTime, diveTime) == true) {
        let result = true
        return result;  
    } 
        return result;
        
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console

function showMessage(message){
    console.log(message.toString().toUpperCase())
}

showMessage(areCandidateValid)