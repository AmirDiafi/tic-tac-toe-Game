const elements = document.querySelectorAll('.item')
const userOne = document.querySelector('.user.one')
const userTow = document.querySelector('.user.tow')
const userOneScore = document.querySelector('.score-user1')
const userTowScore = document.querySelector('.score-user2')
const chance1 = ["one", "tow", "three", "four", "five", "six"]
const chance2 = ["seven", "eight", "nine", "ten", "eleven", "twelve"]
const chance3 = ["therteen", "fourteen", "fiveteen", "sixteen", "seventeen", "eighteen"]
const chance4 = ["nineteen","twenty","twentyone", "twentytow", "twentythree", "twentyfour"]
const chance5 = ["twentyfive", "twentysix", "twentyseven", "twentyeight", "twentynine", "thirty" ]
const chance6 = ["thirtyone","thirtytow", "thirtythree", "thirtyfour", "thirtyfive", "thirtysix"]
const chance7 = ["one", "seven", "therteen", "nineteen", "twentyfive", "thirtyone"]
const chance8 = ["tow", "eight", "fourteen","twenty", "twentysix", "thirtytow"]
const chance9 = ["three", "nine", "fiveteen","twentyone", "twentyseven", "thirtythree"]
const chance10 = ["four", "ten", "sixteen","twentytow", "twentyeight", "thirtyfour"]
const chance11 = ["five", "eleven", "seventeen","twentythree", "twentynine", "thirtyfive"]
const chance12 = ["six", "twelve", "eighteen","twentyfour", "thirty", "thirtysix"]
const chance13 = ["one", "eight", "fiveteen","twentytow", "twentynine", "thirtysix"]
const chance14 = ["six", "eleven", "sixteen","twentyone", "twentysix", "thirtyone"]
const allChances = [chance1, chance2, chance3, chance4, chance5, chance6, chance7, chance8, chance9, chance10, chance11, chance12, chance13, chance14]
let user = 'user-one' // by default in the first the gamer one who begin first
let arrUserOne = [] // to push the items the user clicked
let arrUserTow = [] //the same to user tow
let userOneScoreCount = 0 // score count start from zero
let userTowScoreCount = 0 // the same for user tow

// new function for some changes and some reset
function userFunction(userElement, otherUserElement, userTurn) {
    userElement.classList.add("user-active")
    otherUserElement.classList.remove("user-active")
    user = userTurn
    arrUserOne = []
    arrUserTow = []
    setTimeout(function () {
        for (const item of elements) {
            item.style.transform = "scale(1)"  // Reset all elements sizes to the default.
        }
    }, 500);
    setTimeout(function () {
        for (const item of elements) {
            item.querySelector('img').setAttribute('src', "imgs/default .jpg")  // After .5s from that, reset all images to default too "Black image"
        }
    }, 1000);
}

// now make a function that execute the loop of the chance
function loopTheChances(param) {
    for (let i = 0; i < param.length; i++) {
        if(arrUserOne.includes(param[i])&&arrUserOne.includes(param[i+1])&&arrUserOne.includes(param[i+2])&&arrUserOne.includes(param[i+3])&&arrUserOne.includes(param[4])&&arrUserOne.includes(param[i+5])){
            document.querySelector(`#${param[i]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+1]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+2]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+3]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+4]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+5]}`).style.transform = "scale(1.1)"
            userOneScore.textContent = ++userOneScoreCount
            userFunction(userOne, userTow, "user-one") // pass the arguments
        } else if(arrUserTow.includes(param[i])&&arrUserTow.includes(param[i+1])&&arrUserTow.includes(param[i+2])&&arrUserTow.includes(param[i+3])&&arrUserTow.includes(param[4])&&arrUserTow.includes(param[i+5])){
            document.querySelector(`#${param[i]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+1]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+2]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+3]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+4]}`).style.transform = "scale(1.1)"
            document.querySelector(`#${param[i+5]}`).style.transform = "scale(1.1)"
            userTowScore.textContent = ++userTowScoreCount
            userFunction(userTow, userOne, "user-tow") // pass the arguments
        }
    }
}

for (const element of elements) {
    element.onclick = function () {
        if (user == "user-one") {
            element.querySelector('img').setAttribute('src', "imgs/x.jpg")
            userOne.classList.remove("user-active")
            userTow.style.transform = 'scale(1.1)'
            userOne.style.transform = 'scale(.9)'
            userTow.classList.add("user-active")
            user = "user-tow"
            arrUserOne.push(element.id)
        } else if (user == "user-tow") {
            element.querySelector('img').setAttribute('src', "imgs/o.jpg")
            userTow.classList.remove("user-active")
            userTow.style.transform = 'scale(.9)'
            userOne.style.transform = 'scale(1.1)'
            userOne.classList.add("user-active")
            user = "user-one"
            arrUserTow.push(element.id)
        }
        for (let i = 0; i < allChances.length; i++) {
            loopTheChances(allChances[i])
        }
    }
}
