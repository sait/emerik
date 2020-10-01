const app = new Vue({
    el:'#app',
    data:{
        reporte:{
            correo:'',
            nombre:'',
            telefono:'',
            titulo:'',
            detalles:''
        }

    },
    methods:{
        agregarReporte(){
            this.reportes.push(this.reporte);
           this.reporte={};
           console.log("si manda")
        }
    }

})