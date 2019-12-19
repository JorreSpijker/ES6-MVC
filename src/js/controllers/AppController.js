import Class from "../models/Class";

import EventController from './EventsController';
import ClassController from "./{class}Controller";

import * as Storage from "./StorageController";
import * as classView from "../views/{class}View";

export default class AppController {
    constructor() {}


    loadControllers() {
        const ControlClass = new ClassController();
        const Events = new EventController(ControlTodo, ControlCategory, ControlArchive);
        Events.init();
    }

    init() {
        this.loadControllers();
    }
}