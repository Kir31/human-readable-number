module.exports = function toReadable(number) {
    const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let ten1
    let ten2
    let num1
    let num2
    let numStr = (number + '')
    let i = 0

    function checkSingle() {
        for (i = 0; i < single.length; i++) {
            if (i === +numStr[0]) {
                return single[i];
            }
        }
    }

    function checkTeen() {
        for (i = 0; i < teen.length; i++) {

            if (i === +numStr[1] && +numStr[1] >= 0) {
                return teen[i];
            }
        }
    }

    function checkTens() {
        for (i = 0; i < tens.length; i++) {

            if (i === +numStr[0] && i === +numStr[1]) {
                ten1 = tens[i]
                ten2 = ' ' + single[i]
            } else
            if (i === +numStr[0]) {
                ten1 = tens[i];
            } else if (i === +numStr[1] && +numStr[1] > 0) {
                ten2 = ' ' + single[i]
            } else if (+numStr[1] === 0) {
                ten2 = ''
            }
        }
        return `${ten1}${ten2}`
    }


    if (number < 10) {
        return checkSingle();

    } else if (number > 9 && number < 20) {
        return checkTeen()

    } else if (number > 19 && number < 100) {
        return checkTens()

    } else if (number > 99 && number < 1000) {
        if (+numStr[0] > 0 && +numStr[0] <= 9) {
            num1 = `${checkSingle()} hundred`
        };
        if (+numStr[1] === 0 && +numStr[2] > 0) {
         numStr = (number + '').slice(2);
         num2 = ` ${checkSingle()}`
        } else if (+numStr[1] === 0 && +numStr[2] === 0)  {
           num2 = '';
        } else if (+numStr[1] === 1) {
            numStr = (number + '').slice(1);
            num2 = ` ${checkTeen()}`
        } else if (+numStr[1] > 1) {
            numStr = (number + '').slice(1);
            num2 = ` ${checkTens()}`
        }
        return num1 + num2
    }
}

