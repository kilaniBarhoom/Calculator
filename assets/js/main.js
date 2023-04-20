let equation = document.getElementById('equation')
let result = document.getElementById('result')



let eqCalc = ""

const calculator = document.querySelector('.buttons');

calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('numbers')) {
    if(result.innerHTML !== '')
    equation.innerHTML = result.innerHTML = eqCalc = ""
    equation.innerHTML += event.target.innerHTML
    eqCalc+=event.target.innerHTML;

  } else if (event.target.classList.contains('calculations')) {

    equation.innerHTML += event.target.innerHTML
    eqCalc+=event.target.innerHTML;
    
  } else if (event.target.id === 'equal') {

    try{
        result.style.color = '#fff'
        
        result.innerHTML = Number(eval(eqCalc).toFixed(9))
    } catch (error) {
        result.innerHTML = "Invalid Equation";
        result.style.color = 'red'
    }

  } else if (event.target.id === 'clear'){

  equation.innerHTML = result.innerHTML = eqCalc = ""

}
});
