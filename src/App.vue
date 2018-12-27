<template>
  <div id="app">
     <div class="">
      <h3 class="white-text">Consulta de CNPJ </h3>
    <form>
      <div class="grey card">
        <div class="row center">
          <h5 class="blue-text left">Dados de Cadastro</h5>
        </div>
          
        <div class="row">
          <div class="col input-field s12 ">
            <input type="text" id="cnpj" v-model="empresa.cnpj" @blur="consultaCNPJ" v-on:keyup.enter="consultaCNPJ" v-on:keyup="regex"  autocomplete="off" placeholder="Digite apenas o número do CNPJ">
            <label for="cnpj">CNPJ</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="razaoSocial" v-model="empresa.nome" readonly  autocomplete="off" placeholder="Razção Social">
            <label  for="razaoSocial">Razão Social</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="fantasia" v-model="empresa.fantasia" readonly  autocomplete="off" placeholder="Nome Fantasia">
            <label  for="fantasia">Nome Fantasia</label>
          </div>
        </div>
        <div class="row">
          <div class="col input-field s12 ">
            <input type="text" id="dtAbertura" v-model="empresa.abertura" readonly  autocomplete="off" placeholder="Data de Abertura">
            <label for="dtAbertura">Data de Abertura</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="situacao" v-model="empresa.situacao" readonly  autocomplete="off" placeholder="Situação">
            <label  for="situacao">Situação</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="tipo" v-model="empresa.tipo" readonly  autocomplete="off" placeholder="Tipo de Empresa">
            <label  for="tipo">Tipo</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="natureza_juridica" v-model="empresa.natureza_juridica" readonly   autocomplete="off" placeholder="Natureza Jurídica">
            <label  for="natureza">Natureza</label>
          </div>
        </div>
      </div>
      <div class="grey card">
        <div class="row center">
          <h5 class="blue-text left">Dados de Contato</h5>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="logradouro" v-model="empresa.logradouro"  readonly  autocomplete="off" placeholder="Logradouro">
            <label  for="logradouro">Logradouro</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="numero" v-model="empresa.numero" readonly  autocomplete="off" placeholder="Número">
            <label  for="numero">Número</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="complemento" v-model="empresa.complemento"readonly  autocomplete="off" placeholder="Complemento">
            <label  for="complemento">Complemento</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="bairro" v-model="empresa.bairro" readonly  autocomplete="off" placeholder="Bairro">
            <label  for="bairro">Bairro</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="municipio" v-model="empresa.municipio" readonly  autocomplete="off" placeholder="Municipio">
            <label  for="municipio">Municipio</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="uf" v-model="empresa.uf" readonly  autocomplete="off" placeholder="UF">
            <label  for="uf">UF</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="cep" v-model="empresa.cep" readonly  autocomplete="off" placeholder="Código de Endereço Postal">
            <label  for="cep">CEP</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="telefone" v-model="empresa.telefone" readonly  autocomplete="off" placeholder="Telefone">
            <label  for="telefone">Telefone</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="email" id="email" v-model="empresa.email" readonly  autocomplete="off" placeholder="E-mail">
            <label  for="email">E-mail</label>
          </div>
        </div>
      </div>
      <div class="grey card" >
        <div class="row center">
          <h5 class="blue-text left">Atividade Principal</h5>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="apCode" v-model="empresa.atividade_principal[0].code"  autocomplete="off" placeholder="Código CNAE" readonly>
            <label for="apCode">CNAE</label>
          </div>
        </div>
        <div class="row" >
          <div class="col input-field s12 ">
            <input type="text" id="apText" v-model="empresa.atividade_principal[0].text"  autocomplete="off" placeholder="Descrição de Atividade Principal" readonly>
            <label  for="apText">Descrição</label>
          </div>
        </div>
      </div>
      <div class="grey card" v-if="empresa.atividades_secundarias.length > 0"> 
        <div class="row center">
          <h5 class="blue-text left">Atividades Secundárias</h5>
        </div>
        <div class="row" v-for="(empresa, index) in empresa.atividades_secundarias" v-bind:key="index">
          <div class="row" >
            <div class="col s12 ">
              <label class="left" for="">CNAE</label>
              <input type="text" id="asCode" v-model="empresa.code"  autocomplete="off" placeholder=" " readonly>
            </div>
          </div>
          <div class="row" >
            <div class="col s12 ">
              <label class="left" for="">Descrição</label>
              <input type="text" id="apText" v-model="empresa.text"  autocomplete="off" placeholder=" " readonly>
            </div>
          </div>
          </div>
      </div>
      <div class="grey card" v-if="empresa.qsa.length > 0">
        <div class="row center">
          <h5 class="blue-text left">Quadro Social</h5>
        </div>
         <div class="row" v-for="(socio, index) in empresa.qsa" v-bind:key=index>
          <div class="col s12 ">
            <label class="left" for="">Participação</label>
            <input type="text" id="socioQual" v-model="socio.qual"  autocomplete="off" placeholder=" " readonly>
          </div>
          <div class="col s12 ">
            <label class="left">Nome Sócio</label>
            <input type="text" v-model="socio.nome"  autocomplete="off" placeholder=" " readonly>
          </div>
        </div>
      </div>
     </form>
     <!-- <download-excel v-if="excel.length > 0"
    :data   = "excel"
    name    = "Empresa.xls">
    <i class="medium material-icons white-text " style="cursor:pointer">file_download</i>
    
  </download-excel> -->
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'app',
  
  data(){
    return {
      excel: [],
      empresa: {
        cnpj: '',
        nome: '',
        atividade_principal: [{
          code: '',
          text: ''
        }],
        atividades_secundarias: [],
        qsa: []
      }
    }
  },
  methods: {
    consultaCNPJ(){
      if (this.empresa.cnpj.length == '' ) return false
      if (this.empresa.cnpj.length != 14 ) {
        M.toast({html: "CNPJ deve conter 14 números", classes: "red white-text"})
        return false
      }
      $.ajax({
        type: "GET",
        url: "https://www.receitaws.com.br/v1/cnpj/"+ this.empresa.cnpj, 
        async: false,
        dataType: 'jsonp',
        success: data => {
          if(data.status == "ERROR"){
            M.toast({html: "CNPJ inválido"})
            return false
          }
          this.empresa = data
          this.excel.push(data)
        },
        error: (xhr, ajaxOptions, thrownError) => {
          console.log(xhr.message)
          M.toast({html: "Número de requisições por minuto (3) atingidas, aguarde alguns segundos e tente novamente", classes: "red white-text"})
          return false
        }
      });
    
    },
    regex(){
      let exp = /\D/g
      if(exp.test(this.empresa.cnpj)==true) {
        this.empresa.cnpj = this.empresa.cnpj.replace(exp, '')
      }
    }
  },
  updated(){
    this.regex()
  }
  
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media (min-width: 1025px) {
  .grey{
    width: 40%;
    margin: auto;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 10px;
  }
}
.grey{
 
    margin-bottom: 10px;
    padding: 7px;
    border-radius: 10px;
}

.card{
  background-color: #fff !important;
  /*box-shadow: 1px 1px 5px;*/
}
.row{
  width: 100%;
}
body{
  background: #2196F3}
 input:focus{
  border-bottom: 1px solid #2196F3 !important; 
  -webkit-box-shadow: 0 1px 0 0 #2196F3 !important; 
  box-shadow: 0 1px 0 0 #2196F3 !important; 
}
input:not([type]):focus:not([readonly])+label, input[type=text]:not(.browser-default):focus:not([readonly])+label, input[type=password]:not(.browser-default):focus:not([readonly])+label, input[type=email]:not(.browser-default):focus:not([readonly])+label, input[type=url]:not(.browser-default):focus:not([readonly])+label, input[type=time]:not(.browser-default):focus:not([readonly])+label, input[type=date]:not(.browser-default):focus:not([readonly])+label, input[type=datetime]:not(.browser-default):focus:not([readonly])+label, input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label, input[type=tel]:not(.browser-default):focus:not([readonly])+label, input[type=number]:not(.browser-default):focus:not([readonly])+label, input[type=search]:not(.browser-default):focus:not([readonly])+label, textarea.materialize-textarea:focus:not([readonly])+label {
  color:  #2196F3 !important; 
}

i{

  vertical-align: middle;
  text-align: center;
  position: relative;
  top: 4px;
}
</style>

