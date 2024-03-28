const express=require('express')


const planetsRouter=require('./planets/planets.router')
const LaunchesRouter=require('./launches/launches.router')

const api=express.Router()

api.use(planetsRouter)
api.use(LaunchesRouter)

module.exports=api