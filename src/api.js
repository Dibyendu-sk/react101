import axios from "axios";
import accountConstants from "./constants/accountConstants";

const fetchAccountDtls=async (term)=>{
    const response=await axios.get(accountConstants.FETCH_ACCOUNT_DTLS_API,{
        params:{
            mobileNumber:term
        }
    });
    if (response.status===200) {
        console.log(response)
        return response.data;
    }
    else{
        console.log(response.status)
    }
}
export default fetchAccountDtls;