<template>
    <div id="Pago">
        <b-row>
            <b-col cols="12" md="6" lg="8">
                <h1 class="text-white mt-5 ml-5"> 
                <strong>SELECCIONA UN MÉTODO DE PAGO</strong></h1> 
                <form>
                    <b-row>
                        <b-col class="mt-5" id="formulario"><br>
                         <h2 class="text-black" id="personal">
                             <strong>Información Personal</strong></h2><br><br>
                            <b-row>
                                <b-col cols="12" md="1" lg="1" id="inputs">
                                </b-col>
                                <b-col cols="12" md="5" lg="5" id="inputs">
                                    <h4><label for="Nombre"><strong>Nombre:</strong></label></h4>
                                    <b-form-input type="text"  v-model="datos.nombre"
                                    id="Nombre" :state="comprobarnombre" size="lg"
                                    placeholder="Ingrese su Nombre" required></b-form-input><br><br>
                                    <h4><label for="Direccion"><strong>Dirección:</strong></label></h4>
                                    <b-form-input type="text" v-model="datos.direccion"
                                    id="Direccion" :state="comprobaradress" size="lg"
                                    placeholder="Ingrese su Direccion" required></b-form-input><br><br>
                                    <h4><label for="Ciudad"><strong>Ciudad:</strong></label></h4>
                                    <b-form-input type="text" v-model="datos.ciudad"
                                    id="Ciudad" :state="comprobarciudad" size="lg"
                                    placeholder="Ingrese su Ciudad" required></b-form-input><br><br>
                                   <h4><label for="Estado"><strong>Estado:</strong></label></h4>
                                    <b-form-input type="text" v-model="datos.estado"
                                    id="Estado" :state="comprobarestado" size="lg"
                                    placeholder="Ingrese su Estado" required></b-form-input><br><br>
                                    <h4><label for="CP"><strong>Código Postal:</strong></label></h4>
                                    <b-form-input type="text" v-model="datos.cp"
                                    id="CP" :state="comprobarcp" size="lg"
                                    placeholder="Ingrese su Código Postal" required></b-form-input>
                                    <br><br><br><br><br><br><br><br><br><br><br>   
                                </b-col>
                                <b-col cols="12" md="1" lg="1">
                                </b-col>
                                <b-col cols="12" md="4" lg="4" id="inputs2">
                                    <h4><label for="Tarjeta"><strong>Número de Tarjeta:</strong></label></h4>
                                    <b-form-input type="number" v-model="datos.tarjeta"
                                    id="Tarjeta" :state="comprobartarjeta" size="lg"
                                    placeholder="Ingrese el Número de su Tarjeta" required></b-form-input><br><br>
                                    <b-row>
                                        <b-col cols="12" md="4" lg="4">
                                            <h4><label for="Mes"><strong>Mes:</strong></label></h4>
                                            <b-form-input type="number" v-model="datos.mes"
                                            id="Mes" :state="comprobarmes" size="lg"
                                            placeholder="Mes" required></b-form-input>
                                        </b-col>
                                        <b-col cols="12" md="4" lg="4">
                                            <h4><label for="Año"><strong>Año:</strong></label></h4>
                                            <b-form-input type="number" v-model="datos.año"
                                            id="Año" :state="comprobaraño" size="lg"
                                            placeholder="Año" required></b-form-input>
                                        </b-col>
                                        <b-col cols="12" md="4" lg="4">
                                            <h4><label for="CVV"><strong>CVV:</strong></label></h4>
                                            <b-form-input type="number" v-model="datos.cvv"
                                            id="CVV" :state="comprobarcvv" size="lg"
                                            placeholder="CVV" required></b-form-input>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-col>   
                    </b-row>
                </form>
            </b-col>

            <b-col cols="12" md="6" lg="4">
                <h3 class="text-white mt-5 ml-5">Resumen del Pedido</h3>
                <div id="resumen">
                    <img src="../assets/A.jpg" alt="Hamburguesa" class="mt-5">
                    <div id="resumen2">
                        <b-row class="text-white mt-5">
                        <b-col cols="3" md="3" lg="3">
                            <h5> Hamburguesa:</h5><br>
                            <h5> Refresco:</h5>
                        </b-col>
                        <b-col  cols="6" md="6" lg="6"></b-col>
                        <b-col cols="3" md="3" lg="3">
                            <h5> $150.00</h5><br>
                            <h5>$50.00</h5>
                        </b-col>
                        </b-row>
                        <hr>
                        <b-row class="text-white mt-5">
                        <b-col cols="3" md="3" lg="3">
                            <h5> Subtotal:</h5><br>
                            <h5> IVA:</h5>
                        </b-col>
                        <b-col  cols="6" md="6" lg="6"></b-col>
                        <b-col cols="3" md="3" lg="3">
                            <h5> $200.00</h5><br>
                            <h5>$32.00</h5>
                        </b-col>
                        </b-row>
                        <hr>
                        <b-row class="text-white mt-5">
                        <b-col cols="3" md="3" lg="3">
                            <h5> TOTAL:</h5>
                        </b-col>
                        <b-col  cols="6" md="6" lg="6"></b-col>
                        <b-col cols="3" md="3" lg="3">
                            <h5> $232.00</h5>
                        </b-col>
                        </b-row>
                    </div>
                </div>
                <br>
                <b-row>
                    <b-col cols="3" md="3" lg="3">
                    </b-col>
                    <b-col  cols="6" md="6" lg="6">
                        <b-button variant="primary" type="submit"  @click="procesarPago"> Pagar</b-button>
                    </b-col>
                    <b-col cols="3" md="3" lg="3">
                    </b-col>
                </b-row>
            </b-col>
            
        </b-row>

        

        
            
    </div>
</template>

<style>
    #Pago{
        text-align: left;
        background-color: black;
        width: 100%;
    }
    hr{
        border-color:white;
        width: 100%;
    }
    #inputs{
        width: 80%;
    }
    #inputs2{
        width: 80%;
    }
    #formulario{
        background-color: gray
    }
    #personal{
        margin-left: 50px;
    }
    #resumen{
        margin-top: 50px;
        align-content: center;
    }
    #resumen2{
        margin-top: 200px;
    }

</style>

<script>
export default {
    name:'Pago',
    data(){
        return{
            datos:{
                nombre: '',
                direccion: '',
                ciudad: '',
                estado: '',
                cp:'',
                tarjeta:'',
                mes: '',
                año: '',
                cvv: ''
            },
            pagos:[]

    }},
    methods:{
        procesarPago: function(){
            this.pagos.push({
                pago: this.datos,
                datos:{
                nombre: '',
                direccion: '',
                ciudad: '',
                estado: '',
                cp:'',
                tarjeta:'',
                mes: '',
                año: '',
                cvv: ''
                }
            });
            JSON.stringify(this.pagos)
            console.log(this.pagos )
            window.location="/Exito";
        }
    },
    computed:{
        comprobarnombre(){
            return this.datos.nombre.length > 6 ? true : false
        },
        comprobaradress(){
            return this.datos.direccion.length > 6 ? true : false
        },
        comprobarciudad(){
            return this.datos.ciudad.length > 6 ? true : false
        },
        comprobarestado(){
            return this.datos.estado.length > 5 ? true : false
        },
        comprobarcp(){
            return this.datos.cp.length < 5 ? false : true
        },
        comprobartarjeta(){
            return this.datos.tarjeta.length == 16  ? true : false
        },
        comprobarmes(){
            return this.datos.mes.length == 2  ? true : false
        },
        comprobaraño(){
            return this.datos.año.length == 2  ? true : false
        },
        comprobarcvv(){
            return this.datos.cvv.length == 3  ? true : false
        }
    }

}
</script>