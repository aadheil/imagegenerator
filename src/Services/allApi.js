import { BASEURL, BASEURLTWO } from "./baseUrl";
import { commonAPI } from "./commonApi";
const KEY = '37231613-7796f928c9b2a3dfce79b91dd'


export const getproducts = async(userinput)=>{
    return await commonAPI("GET",`${BASEURL}&q=${userinput}`,"","")
 }


export const callpythonnapi = async()=>{
    return await commonAPI("GET",`${BASEURLTWO}`,"","")
 }