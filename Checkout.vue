<template>
    <div id="Checkout">
        <b-row>
            <b-col cols="12" md="6" lg="8">
                <h1 class="text-white mt-5 ml-5"> 
                <strong>SELECCIONA UN MÉTODO DE PAGO</strong></h1>
                <form>
                <b-row>
                    <b-col lg="1" id="radioboton" class="mt-5"></b-col>
                    <b-col class="mt-5"
                     id="radioboton"><br><br><br><br>
                    <div id="tarjeta" >
                        <b-form-radio v-model="radio" name="metodos" 
                         size="lg" value="Opcion1"  class="mt-5 ml-3"><h2 class="mt-3">
                        <strong> Tarjeta de Débito / Crédito </strong></h2></b-form-radio>
                    </div><br><br><br><br>
                    <div id="paypal">
                         <b-form-radio v-model="radio" name="metodos" 
                         size="lg" value="Opcion2"  class="mt-5 ml-3"><h2 class="mt-3">
                         <strong> Paypal </strong></h2></b-form-radio>
                    </div><br><br><br><br>
                    <div id="oxxo">
                         <b-form-radio v-model="radio" name="metodos" 
                         size="lg" value="Opcion3"  class="mt-5 ml-3"><h2 class="mt-3">
                        <strong>Oxxo </strong></h2></b-form-radio>
                    </div><br><br><br><br>
                    <div id="amazon">
                         <b-form-radio v-model="radio" name="metodos" 
                         size="lg" value="Opcion4"  class="mt-5 ml-3"><h2 class="mt-3">
                        <strong> Amazon Pay </strong></h2></b-form-radio>
                    </div><br><br><br><br>
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
                        <b-button variant="primary" type="submit"  @click="cambiarPag"> Ir al Pago</b-button>
                    </b-col>
                    <b-col cols="3" md="3" lg="3">
                    </b-col>
                </b-row>
            </b-col>
            
        </b-row>

        

        
            
    </div>
</template>

<style>
    #Checkout{
        text-align: left;
        background-color: black;
        width: 100%;
    }
    #radioboton{
        background-color: gray;

    }
    #tarjeta,#paypal,#oxxo,#amazon{
        background-color: lightgray;
        border-radius: 50px;
        height: 90px;
    }
    #Opcion1{
        size: 100px;
    }
    hr{
        border-color:white;
        width: 100%;
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
    name:'Checkout',
    data:{
        radio: null,
        opcion:[]
    },
    methods:{
        cambiarPag: function(){
            if (this.radio == "Opcion1" ){
                window.location="/pago";
            } else if(this.radio == "Opcion2"){
                console.log("Has seleccionado la opción 2");
            } else if(this.radio == "Opcion3"){
                console.log("Has seleccionado la opción 3");
            } else if(this.radio == "Opcion4"){
                console.log("Has seleccionado la opción 4");
            } else{
                alert("Selecciona un Método de Pago");
            }
        }
        
    },
    computed:{

    }
}
</script>