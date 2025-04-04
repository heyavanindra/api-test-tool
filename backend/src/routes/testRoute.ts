import axios, { AxiosError, AxiosResponse } from "axios"
import express, { Request, Response } from "express"
import testResultsModel from "../models"
const testRoutes = express.Router()
async function testApi(api:string) {
   
}
testRoutes.post('/', async (req:Request,res:Response)=>{
    const {api} = req.body
    const startingTime = Date.now()
    try {
        const response = await  axios.get(api)
        const responsetime = Date.now() - startingTime
        const responseStatus = response.status

        const testResults = new testResultsModel({
            endPoint:api,
            statusCode:responseStatus,
            passed:responseStatus === 200,
            responseTime:responsetime

        })

      await  testResults.save()
      res.json({
        endPoint: api,
        statusCode: responseStatus,
        passed: responseStatus === 200,
        responseTime: responsetime,
    }) ;
        
    } catch (error) {
        const axiosError = error as AxiosError
        res.json({
        message:axiosError
        }).status(axiosError.status || 401)
        
    }
   
  
})
export default testRoutes