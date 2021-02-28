import { parseISO, format } from 'date-fns'

export default function DateFormat({ dateString, dateFormat = 'LLLL d, yyyy' }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, dateFormat)}</time>
}