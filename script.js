var nome = "Mara";
let qtdeXP = 7000;
let nivel;

console.log ();


if (qtdeXP <= 1000) {
    nivel = "Ferro";   
} else if (qtdeXP>=1001 && qtdeXP <=2000) {
    nivel = "Bronze";
} else if (qtdeXP>=2001 && qtdeXP <=5000) {
    nivel = "Prata";
} else if (qtdeXP>=5001 && qtdeXP <=7000) {
    nivel = "Ouro";
} else if (qtdeXP>=7001 && qtdeXP <=8000) {
    nivel = "Platina";
} else if (qtdeXP>=8001 && qtdeXP <=9000) {
    nivel = "Ascendente";
} else if (qtdeXP>=9001 && qtdeXP <=10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante"
}


console.log ("O Herói ou Heroina " + nome + " está no nível: " + nivel);