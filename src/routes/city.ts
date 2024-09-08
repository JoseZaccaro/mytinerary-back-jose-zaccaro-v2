import express from "express";
import { CITY_POST } from "@/controllers/city/post";
import { CITY_GET } from "@/controllers/city/get";
import { CITY_DELETE } from "@/controllers/city/delete";
import { CITY_PATCH } from "@/controllers/city/patch";

const citiesRouter = express.Router();

citiesRouter.route('/')
    .get(CITY_GET.getAllCities)
    .post(CITY_POST.createCity)

citiesRouter.route('/:id')
    .get(CITY_GET.getOneCityById)
    .delete(CITY_DELETE.deleteCity)
    .patch(CITY_PATCH.updateCity)

export default citiesRouter