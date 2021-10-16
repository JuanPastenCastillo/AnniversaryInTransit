const leapYear = []
for (let x = 2020;x < 2100;x++) {
 let isLeap = new Date(x, 1, 29).getMonth();
 if (isLeap == 1) {
  leapYear.push(x)
 }
}
// console.log('leapYear:', leapYear)

const theDays = {
 0: "Domingo",
 1: "Lunes",
 2: "Martes",
 3: "Miércoles",
 4: "Jueves",
 5: "Viernes",
 6: "Sábado"
}

const theMonths = {
 0: "Enero",
 1: "Febrero",
 2: "Marzo",
 3: "Abril",
 4: "Mayo",
 5: "Junio",
 6: "Julio",
 7: "Agosto",
 8: "Septiembre",
 9: "Octubre",
 10: "Noviembre",
 11: "Diciembre"
}

const myMotherIsEternalOriginal = new Date(2020, 9, 16, 4, 53)
// console.log('myMotherIsEternalOriginal:', myMotherIsEternalOriginal)

const anniversaryDateDOOM = document.querySelector(".anniversaryDate")
const anniversariesUntilNowDOOM = document.querySelector(".anniversariesUntilNow")
const showTimeDOOM = document.querySelector(".showTheTimeNow")

const seconsDOOM = document.body.querySelector("#seconsLeft")
const minutesDOOM = document.body.querySelector("#minutesLeft")
const hoursDOOM = document.body.querySelector("#hoursLeft")
const daysDOOM = document.body.querySelector("#daysLeft")

const dayAnniversaryThisYearDOOM = document.body.querySelector("#dayAnniversaryThisYear")
const dayAnniversaryNextYearDOOM = document.body.querySelector("#dayAnniversaryNextYear")

const buttonToggleDOOM = document.body.querySelector(".buttonToggle")
const allTheAnniversariesDOOM = document.body.querySelector(".allTheAnniversaries")


let seconsLeft = 0;
let minutesLeft = 0;
let hoursLeft = 0;
let daysLeft = 0;

// let dateInsideFunction = new Date(2023, 9, 15, 4, 52)
// console.log('dateInsideFunction:', dateInsideFunction)

let checkAnniversary = function () {
 // const startInside = Date.now()
 // console.log('startInside:', startInside)

 let dateInsideFunction = new Date()
 // let dateInsideFunction = new Date(2023, 9, 16, 4, 52, 59, 1000)
 // let dateInsideFunction = new Date(2023, 9, 16, 4, 52, 59, 1000)
 // let dateInsideFunction = new Date(2041, 9, 16, 4, 52, 59, 1001)
 // let dateInsideFunction = new Date(2023, 11, 31, 23, 59, 59, 1000)
 // let dateInsideFunction = new Date(2023, 11, 31, 23, 59, 59, 1000)
 

 let seconsFormated = dateInsideFunction.getSeconds() > 9 ? dateInsideFunction.getSeconds() : `0${dateInsideFunction.getSeconds()}`

 let minutesFormated = dateInsideFunction.getMinutes() > 9 ? dateInsideFunction.getMinutes() : `0${dateInsideFunction.getMinutes()}`

 let hoursFormated = dateInsideFunction.getHours() > 9 ? dateInsideFunction.getHours() : `0${dateInsideFunction.getHours()}`

 let dayFormated = dateInsideFunction.getDate() > 9 ? dateInsideFunction.getDate() : `0${dateInsideFunction.getDate()}`

 let monthFormated = dateInsideFunction.getMonth() > 9 ? dateInsideFunction.getMonth() : `0${dateInsideFunction.getMonth()}`

 showTimeDOOM.textContent = `Fecha actual: ${dateInsideFunction.getFullYear()}/${monthFormated}/${dayFormated} - ${theDays[dateInsideFunction.getDay()]} ${hoursFormated}:${minutesFormated}:${seconsFormated}`


 let myMotherIsEternalCopy = new Date(myMotherIsEternalOriginal.getTime())
 myMotherIsEternalCopy.setFullYear(dateInsideFunction.getFullYear())
 // console.log('myMotherIsEternalCopy:', myMotherIsEternalCopy)

 dayAnniversaryThisYearDOOM.textContent = `Este año, el aniversario es en el día: ${theDays[myMotherIsEternalCopy.getDay()]}`

 let myMotherIsEternalCopyNextYear = new Date(myMotherIsEternalOriginal.getTime())
 myMotherIsEternalCopyNextYear.setFullYear(dateInsideFunction.getFullYear() + 1)
 //('myMotherIsEternalCopyNextYear:', myMotherIsEternalCopyNextYear)

 dayAnniversaryNextYearDOOM.textContent = `El siguiente año, el aniversario es en el día: ${theDays[myMotherIsEternalCopyNextYear.getDay()]}`




 let milliseconsUntilNextAnniversary = myMotherIsEternalCopy - dateInsideFunction
 // console.log('milliseconsUntilNextAnniversary:', milliseconsUntilNextAnniversary)

 let anniversariesUntilNowGlobal = ""
 if (milliseconsUntilNextAnniversary <= 0) {
  anniversariesUntilNowGlobal = dateInsideFunction.getFullYear() - myMotherIsEternalOriginal.getFullYear()
 } else if (milliseconsUntilNextAnniversary > 0) {
  anniversariesUntilNowGlobal = (dateInsideFunction.getFullYear() - 1) - myMotherIsEternalOriginal.getFullYear()
 }
 
 anniversariesUntilNowDOOM.textContent = `Cantidad de aniversarios hasta hoy: ${anniversariesUntilNowGlobal}`
 // console.log('anniversariesUntilNowDOOM.textContent:', anniversariesUntilNowDOOM.textContent)
 

 // console.log('anniversariesUntilNowGlobal:', anniversariesUntilNowGlobal)





 let timeUntilNowLessEternalMotherOriginal = dateInsideFunction - myMotherIsEternalOriginal
 // console.log('timeUntilNowLessEternalMotherOriginal:', timeUntilNowLessEternalMotherOriginal)

 let milliseconsToCheck = myMotherIsEternalCopyNextYear - dateInsideFunction
 //('milliseconsToCheck:', milliseconsToCheck)

 let isLeapYear;
 for (const x of leapYear) {
  if (x === dateInsideFunction.getFullYear()) {
   isLeapYear = true
   console.log(('isLeapYear:', isLeapYear))

   // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31557600000)
   // console.log(('anniversariesUntilNow:', anniversariesUntilNow))
   // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`
   // console.log('timeUntilNowLessEternalMotherOriginal / 31557600000:', timeUntilNowLessEternalMotherOriginal / 31557600000) 
  }
 }

 if (isLeapYear && milliseconsUntilNextAnniversary >= 0) {
  //('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31622400000)
  // console.log(('anniversariesUntilNow:', anniversariesUntilNow))
  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`

  seconsLeft = 31622400 - Math.floor(31622400 - (milliseconsUntilNextAnniversary / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutos`
   //('minutesLeft:', minutesLeft)
  }

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} horas`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} días`
   //('daysLeft:', daysLeft)
  }

 } else if (isLeapYear && milliseconsUntilNextAnniversary < 0) {
  isLeapYear = true
  //('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31536000000)
  // console.log(('anniversariesUntilNow:', anniversariesUntilNow))
  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`


  seconsLeft = 31536000 - Math.floor(31536000 - (milliseconsToCheck / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutos`
   //('minutesLeft:', minutesLeft)
  }
  //('minutesLeft:', minutesLeft)

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} horas`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} días`
   //('daysLeft:', daysLeft)
  }
 }

 if (isLeapYear === undefined && milliseconsUntilNextAnniversary >= 0) {
  isLeapYear = false
  console.log('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31536000000)

  console.log('timeUntilNowLessEternalMotherOriginal:', timeUntilNowLessEternalMotherOriginal)

  // console.log('anniversariesUntilNow:', anniversariesUntilNow)

  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`

  console.log('timeUntilNowLessEternalMotherOriginal / 31536000000:', timeUntilNowLessEternalMotherOriginal / 31536000000)

  console.log('milliseconsUntilNextAnniversary:', milliseconsUntilNextAnniversary)

  seconsLeft = 31536000 - Math.floor(31536000 - (milliseconsUntilNextAnniversary / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutos`
   //('minutesLeft:', minutesLeft)
  }
  //('minutesLeft:', minutesLeft)

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} horas`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} días`
   //('daysLeft:', daysLeft)
  }

 } else if (isLeapYear === undefined && milliseconsUntilNextAnniversary < 0) {
  isLeapYear = false
  //('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31536000000)
  //('anniversariesUntilNow:', anniversariesUntilNow)
  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`

  seconsLeft = 31536000 - Math.floor(31536000 - (milliseconsToCheck / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutos`
   //('minutesLeft:', minutesLeft)
  }
  //('minutesLeft:', minutesLeft)

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} horas`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} días`
   //('daysLeft:', daysLeft)
  }
 }


 if (seconsLeft >= 10) {
  seconsDOOM.textContent = `${seconsLeft} segundos`
  //('seconsLeft:', seconsLeft)
 } else {
  seconsDOOM.textContent = `0${seconsLeft} segundos`
  //('seconsLeft:', seconsLeft)
 }

 if (minutesLeft >= 10) {
  minutesDOOM.textContent = `${minutesLeft} minutos`
  //('minutesLeft:', minutesLeft)
 } else {
  minutesDOOM.textContent = `0${minutesLeft} minutos`
  //('minutesLeft:', minutesLeft)
 }


 if (hoursLeft >= 10) {
  hoursDOOM.textContent = `${hoursLeft} horas`
  //('hoursLeft:', hoursLeft)
 } else {
  hoursDOOM.textContent = `0${hoursLeft} horas`
  //('hoursLeft:', hoursLeft)
 }

 if (daysLeft >= 10) {
  daysDOOM.textContent = `${daysLeft} días`
  //('daysLeft:', daysLeft)
 } else {
  daysDOOM.textContent = `0${daysLeft} días`
  //('daysLeft:', daysLeft)
 }




 // const millisInside = Date.now() - startInside;
 // console.log(`INSIDE millisecons taken ${millisInside}`)
 // console.log(`END ROUND ■■■■■■■■■■■■■■■■■■■■■■■■■`)

}

checkAnniversary()
const howManyAnniversariesSetInterval = setInterval(checkAnniversary, 1000)

let yearAndDayOfAnniversaries = []
let anniversariesDays = new Date(myMotherIsEternalOriginal.getTime())
anniversariesDays.setFullYear(anniversariesDays.getFullYear()+1)

for (let x = 2021;x <= 2100;x++) {
 yearAndDayOfAnniversaries.push([anniversariesDays.getFullYear(), theDays[anniversariesDays.getDay()]])
 anniversariesDays.setFullYear(x + 1)
}
//(yearAndDayOfAnniversaries);

for (const x of yearAndDayOfAnniversaries) {
 let newParagraph = document.createElement("p")

 newParagraph.textContent = `Para el año ${x[0]} el aniversario es en el día ${x[1]}`
 allTheAnniversariesDOOM.appendChild(newParagraph)
}

buttonToggleDOOM.addEventListener("click", function () {
 if (allTheAnniversariesDOOM.style.display === "block") {
  allTheAnniversariesDOOM.style.display = "none";
 } else {
  allTheAnniversariesDOOM.style.display = "block";
 }
})

