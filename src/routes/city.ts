import express from "express";
import { CITY_POST } from "@/controllers/city/post";
import { CITY_GET } from "@/controllers/city/get";
import { CITY_DELETE } from "@/controllers/city/delete";
import { CITY_PATCH } from "@/controllers/city/patch";

const citiesRouter = express.Router();

citiesRouter.get('/:id', CITY_GET.getOneCityById)
citiesRouter.get('/', CITY_GET.getAllCities)
citiesRouter.post('/', CITY_POST.createCity)
citiesRouter.delete('/:id', CITY_DELETE.deleteCity)
citiesRouter.patch('/:id', CITY_PATCH.updateCity)

export default citiesRouter