import config from '../config'

const WinesApiService = {
    getAllRecords() {
        return fetch(`${config.API_ENDPOINT}/records`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
            return res.json()
            })
            
    },
}

export default WinesApiService