function timeConversor(time) {
    const timeConversorError = {
        string: {
            objective: "You will convert a string into a number, when you put the time in the format HH:MM:SS and will receive the same time in seconds.",
            formatError: "It must be a string with 8 characters.",
            hours: "Those numbers can't be greater than 99.",
            minutes: "Those numbers can't be greater than 59.",
            seconds: "Those numbers can't be greater than 59."
        },
        number: {
            objective: "You will convert a number representing the time in seconds to a string in the format HH:MM:SS.",
            formatError: "It must be an integer number representing the time in seconds.",
            limit: "The number can't be greater than 215,999."
        }
    }

    if (typeof time === "string") {
        // Esta função converterá o tempo dado em string no formato "HH:MM:SS" e retornará um valor inteiro, que será correspondente ao tempo informado mas em segundos.

        if (time.length !== 8 || time[2] !== ":" || time[5] !== ":" || parseInt(time[3] + time[4]) > 59 || parseInt(time[6] + time[7]) > 59) { return timeConversorError.string }

        const fulltime = (parseInt(time[0] + time[1]) * 3600) + (parseInt(time[3] + time[4]) * 60) + parseInt(time[6] + time[7])

        return fulltime

    } else if (typeof time === "number") {
        // Esta função é uma resposta à função anterior deste mesmo módulo, onde pegamos um valor convertido para segundos e o transformamos no formato de tempo dado em "HH:MM:SS".

        if (time > 215999) { return timeConversorError.number }

        let hh = ""
        let mm = ""
        let ss = ""

        const hrs = parseInt((time / 3600) % 60)
        hrs < 10 ? hh = `0${hrs}` : hh = hrs;

        const min = parseInt((time / 60) % 60)
        min < 10 ? mm = `0${min}` : mm = min;

        const sec = parseInt(time - ((hrs * 3600) + (min * 60)))
        sec < 10 ? ss = `0${sec}` : ss = sec;

        return `${hh}:${mm}:${ss}`
    }
}

function timeValidator(time) {
    if (
        time[0].match(/\d+/) === null ||
        time[1].match(/\d+/) === null ||
        time[3].match(/\d+/) === null ||
        time[4].match(/\d+/) === null ||
        time[6].match(/\d+/) === null ||
        time[7].match(/\d+/) === null
    ) {
        return {
            timeValidatorError: "At format HH:SS:MM, use exclusive numbers to occupy the characters in HH, SS or MM"
        }
    }

    return time
}

export { timeConversor, timeValidator }