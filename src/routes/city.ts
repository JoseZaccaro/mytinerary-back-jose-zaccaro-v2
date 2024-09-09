import express from "express";
import { CITY_POST } from "@/controllers/city/post";
import { CITY_GET } from "@/controllers/city/get";
import { CITY_DELETE } from "@/controllers/city/delete";
import { CITY_PATCH } from "@/controllers/city/patch";

const citiesRouter = express.Router();
/**
    * @swagger
    * paths:
    *   /cities:
*     get:
*       summary: Find all cities
*       responses:
*         200: 
*           description: A successful response with all cities'
*       tags:
*           - City
*   /cities/{id}:
*     get:
*       summary: Find one city by id
*       parameters:
    *         - name: id
    *           in: path
    *           required: true
    *           description: id of the city
    *       responses:
    *         200: 
    *           description: A successful response with the city associated with the id'
    *       tags:
    *           - City
    * 
*/

citiesRouter.route('/')
    .get(CITY_GET.getAllCities)
    .post(CITY_POST.createCity)

citiesRouter.route('/:id')
    .get(CITY_GET.getOneCityById)
    .delete(CITY_DELETE.deleteCity)
    .patch(CITY_PATCH.updateCity)

export default citiesRouter