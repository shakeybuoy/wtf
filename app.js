const oneFish = document.getElementById('btn1');
const twoFish = document.getElementById('btn2');
const numFish = document.getElementById('fish_no');
const roundNum = document.getElementById('roundNum');
const you = document.getElementById('you')
const compOne = document.getElementById('compOne');
const compTwo = document.getElementById('compTwo');
const compThree = document.getElementById('compThree');
const yourScore = document.getElementById('yourScore');
const scoreThisRound = document.getElementById('scoreThisRound');
const txt = document.getElementById('txt');
let score = 0;

const computer = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

oneFish.addEventListener('click', function () {
    numFish.textContent = 1;
})

twoFish.addEventListener('click', function () {
    numFish.textContent = 2;
})


var x = 0;
var array1 = Array();
var array2 = Array();
var array3 = Array();
var array4 = Array();
const mergeResult = [];
var arr = Array();
let num = numFish.innerHTML;

var myFuncCalls = 0;
function add_element() {
    if (mergeResult.length < 32 && Number(numFish.innerHTML) != 0) {
        myFuncCalls++;
        let round_no = myFuncCalls+1
        if(round_no<9){
        roundNum.innerHTML = `Round: ${round_no}`}
        else{
            roundNum.innerHTML = `THE END`
            txt.innerHTML = `<h1>NO ONE WINS!!</h1> <br> The Programmer was too busy <br> making the Animations <br> Sorry `
        }

        array1 = [Number(numFish.innerHTML)];
        array2 = [computer(1, 2)];
        array3 = [computer(1, 2)];
        array4 = [computer(1, 2)];

        you.innerHTML = `You Chose : ${array1}`;

        compOne.innerHTML = `Comp 1 Chose : ${array2}`;

        compTwo.innerHTML = `Comp 2 Chose : ${array3}`;

        compThree.innerHTML = `Comp 3 Chose : ${array4}`;

        mergeResult.push(...array1, ...array2, ...array3, ...array4);

        // console.log(mergeResult)
        n = 4;
        sum = mergeResult.slice(-n).reduceRight((prev, curr) => prev + curr, 0)
        // console.log(`Total is : ${sum}`);


        score_logic();
        scoreThisRound.innerHTML = `Your score this round : ${score}`;
        arr.push(score);
        score_sum = arr.slice(-n).reduceRight((prev, curr) => prev + curr, 0)
        // console.log(`Total is : ${score_sum}`);

        yourScore.innerHTML = `Your Total is: ${score_sum}`;

        numFish.innerHTML = 0;
    }
    else if (Number(numFish.innerHTML) == 0) {
        alert("Choose 1 or 2");
    }
    else if (mergeResult.length == 32) {
        alert("The end")
    }
}

function score_logic() {
    if (sum == 8) {
        {
            score = -25;
        }
    } else
        if (sum == 7) {
            if (parseInt(num) == 2) {
                score = 25;
            } else {
                score = -25;
            }
        } else
            if (sum == 6) {
                if (parseInt(num) == 2) {
                    score = 50;
                } else {
                    score = -12.5;
                }
            } else
                if (sum == 5) {
                    if (parseInt(num) == 2) {
                        score = 75;
                    } else {
                        score = 0;
                    }
                } else {
                    {
                        score = 25;
                    }
                }
}


