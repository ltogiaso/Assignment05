const $ = (id) => document.getElementById(id)
let form = $('emp-form')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    let children = e.target.children

    for (let i = 0; i < children.length; i++){

        let grandChildren = children[i].children
        let stringToPrint= ''

        for (let j = 0; j < grandChildren.length; j++){

            if (grandChildren[j].tagName == 'LABEL')
                stringToPrint += grandChildren[j].innerText + ': '
            else if (grandChildren[j].tagName == 'INPUT')
                stringToPrint += grandChildren[j].value
            else if (grandChildren[j].tagName == 'SELECT')
                stringToPrint += grandChildren[j].options[grandChildren[j].selectedIndex].text
        }

        console.log(stringToPrint)
    }
})

//NOTE : Although I achieved the end result of the image from the example, 
// I feel as if I did not fully utilize event object, nor have I utilized 
// event propogation and delegation correctly. I would like to come back to
// this at another time and go over this during office hours.