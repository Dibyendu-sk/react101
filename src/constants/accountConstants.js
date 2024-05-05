const  ENV="localhost"
const PORT="2023"
const BASE_API="http://"+ENV+":"+PORT+"/api/microservice101/account-service"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    CREATE_ACCOUNT_DTLS_API:BASE_API+"/create",
    FETCH_ACCOUNT_DTLS_API :BASE_API+"/fetch",
    UPDATE_ACCOUNT_DTLS_API :BASE_API+"/update",
    DELETE_ACCOUNT_DTLS_API :BASE_API+"/delete",
}