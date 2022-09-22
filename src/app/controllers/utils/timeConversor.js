export default function timeConversor(time) {
    if (typeof time === "string") {
        // Esta função converterá o tempo dado em string no formato "HH:MM:SS" e retornará um valor inteiro, que será correspondente ao tempo informado mas em segundos.

        if (!(time.length === 8 && time[2] === ":" && time[5] === ":")) {
            return {
                timeConversor: {
                    formatError: "It must be a string with 8 chracters.",
                    indication: "Format: HH:MM:SS"
                }
            }
        }

        const fulltime = (parseInt(time[0] + time[1]) * 3600) + (parseInt(time[3] + time[4]) * 60) + parseInt(time[6] + time[7])

        return fulltime
    } else if (typeof time === "number") {
        // Esta função é uma resposta à função anterior deste mesmo módulo, onde pegamos um valor convertido para segundos e o transformamos no formato de tempo dado em "HH:MM:SS".

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
    } else {
        return {
            message: "value not accepted.",
            indication: "inform a value in the format 'HH:MM:SS' or INTEGER."
        }
    }
}