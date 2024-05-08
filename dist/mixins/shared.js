export default {
    data() {
        return {
            uploadHeaders: {
                Authorization: 'Bearer ' + sessionStorage.getItem('auth_token')
            }
        }
    },
    methods: {
        /**
         * Fetch and compress remote image
         * @param url {string}
         * @param w {number}
         * @param h {number}
         * @return {string}
         */
        thumbnail(url, w = 500, h = 500) {
            return import.meta.env.VITE_THUMBNAIL_PROXY ? `${this._embedUrl()}/thumbnail?url=${url}&w=${w}&h=${h}&fit=contain` : url
        },
        /**
         * Fetch remote subtitles
         * @param url {string}
         * @return {string}
         */
        subtitles(url) {
            return `${this._embedUrl()}/subtitles?url=${url}`
        },
        validate() {
            return this.$validator.validateAll()
                .then(result => result ? Promise.resolve() : Promise.reject())
        },
        getTags(tags_ids = []) {
            return this.tags.filter(({_id}) => tags_ids.includes(_id))
                .sort((a, b) => a.name.length - b.name.length)
        },
        _embedUrl() {
            return new URL(import.meta.env.VITE_EMBED_API_URL).origin
        },
        _embedUrlCode(){
            return import.meta.env.VITE_EMBED_URL
        },
        /**
         * @param prefix {string}
         * @return {string}
         */
        _apiUrl(prefix) {
            return `${import.meta.env.VITE_API_URL}/api/${prefix}`
        }
    }
}
