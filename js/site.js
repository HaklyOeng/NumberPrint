// get the start and end numbers from the page
function getValues() {
    // get the start number
    let startNumber = document.getElementById('startValue').value; //"0"
    // get the end number
    let endNumber = document.getElementById('endValue').value; //"100"

    //everything that come from html is a string
    // turn the values into actual numbers
    startNumber = parseInt(startNumber); //0
    endNumber = parseInt(endNumber); //100

    if(Number.isInteger(startNumber) && Number.isInteger(endNumber) && startNumber < endNumber) {
        //generate the range of number
        let generateNumbers = generateValues(startNumber, endNumber);
        displayValues(generateNumbers);
    } else {

        // uh oh! something is wrong
        Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter valid numbers nad ensure that your START number is less than your END number.'
            });

    }

    
}

// generate a list of all numbers between the start and end
function generateValues(start, end) {
    // create a variable that can hold a bunch of numbers
    let numbers = [];

    // put a number into that variable
    //add one to that number, then add that to the variable
    //keep adding one and putting it into the variable UNTIL we get to the end number

    for (let n = start; n <= end; n = n + 1) {
        //code goes here...
        numbers.push(n);
    }

    return numbers;

    //somehow tell displayValues to show thoes number???

}

// display each of those numbers on the page
function displayValues(numbers) {
    let html= '';
    // make a loop to get each number from the array
    for(let index = 0; index < numbers.length; index += 1) {
        //with each number, put it on the page
        let currentNumbers = numbers[index]

        let className = '';

        if (currentNumbers % 2 == 0) {
            className = 'even';
        } else{
            className = 'odd';
        }
        // <tr><d> n </td></tr>
        //html = html + '<tr><td class="even">' + currentNumbers + '</td></tr>';
        html += `<tr><td class="${className}">${currentNumbers}</td></tr>`;
    }

    let tbody = document.getElementById('results');
    
    tbody.innerHTML = html;
    
    

    

}