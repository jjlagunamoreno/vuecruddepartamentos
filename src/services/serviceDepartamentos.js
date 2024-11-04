import Global from "@/Global";
import axios from "axios";
import { Promise } from "core-js";

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve) {
            let departamentos = [];
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;
            axios.get(url).then(response => {
                console.log("servicio...")
                departamentos = response.data;
                resolve(departamentos);
            })
        })
    }

    insertarDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;
            axios.post(url, departamento).then(response => {
                console.log("insertando...");
                resolve(response);
            })
        })
    }

    findDepartamento(id) {
        return new Promise(function (resolve) {
            let request = "api/departamentos/" + id;
            let url = Global.urlApiDepartamentos + request;
            let departamento = {};
            axios.get(url).then(response => {
                console.log("find...")
                departamento = response.data;
                resolve(departamento);
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;

            axios.put(url, departamento).then(response => {
                console.log("update...")
                
                resolve(response);
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve) {
            let request = "api/departamentos/" + id;
            let url = Global.urlApiDepartamentos + request;
            axios.delete(url).then(response => {
                console.log("Delete");
                resolve(response);
            })
        })
    }
}