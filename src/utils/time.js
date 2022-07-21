
export const epochTime = () => Math.floor(new Date().getTime() / 1000)

const formatNums = (num) => num < 10 ? `0${num}`: num

export const formatTime = (time) => {
    if(time === null) return "00:00:00"
    const seconds = time % 60
    const minutes = Math.floor(time/60)
    const hours = Math.floor(time/3600)
    return `${formatNums(hours)}:${formatNums(minutes)}:${formatNums(seconds)}`
}