import moment from 'moment-timezone'

export default {
    methods: {
        toLocalDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
            return moment(date).format(format)
        },
        getCurrentDate(date) {
            return moment(date).format('YYYY-MM-DD')
        },
        getCurrentTime(date) {
            return moment(date).format('HH:mm')
        },
        convertFromUTC(type, string) {
            if (type === 'time') {
                const date = moment.utc(string, 'HH:mm')
                return date.clone().local().format('HH:mm')
            } else {
                const date = moment.utc(string, 'YYYY-MM-DD HH:mm A')
                return date.clone().local().format('YYYY-MM-DD HH:mm')
            }
        }
    }
}
