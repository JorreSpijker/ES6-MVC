import uniqid from 'uniqid';
import BaseModel from './BaseModel';

export default class Class extends BaseModel {
    constructor() {
        super();
        this.items = []
    }    
}