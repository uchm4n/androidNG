import {Injectable} from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {

    db:any;
    table:any;
    people;


    constructor() {

        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
                this.db = db;
                this.fetch();
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }



    public insert(){
        let firstname = 'Ucha';
        let lastname = "Chilach";
        this.db.execSQL("INSERT into people (firstname,lastname) Values(?,?)",[firstname,lastname]).then(id => {

        },
        err => {
            console.log("Insert Error: ", err)
        });
    }

    public fetch() {
        let rowsData;
        this.db.all('select * from people').then(rows => {
            this.people = rows;
        },err => {
            console.log("Error: ",err)
        });
        return rowsData;
    }

}