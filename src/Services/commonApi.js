import axios from 'axios';

export const commonAPI = async (httpMethod,url,reqBody,reqHeader)=>{
    let reqConfig={
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"multipart/form-data"}
    }
    return await axios(reqConfig).then(
        result=>{return result}
    ).catch(err=>{return err})
}