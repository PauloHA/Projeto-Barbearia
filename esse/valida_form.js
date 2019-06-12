function $(id){
	return document.getElementById(id);
}

//verifica se o campo foi preenchido
function validarPreenchimento(id){
	if($(id).value == ""){
		return false;
	}else{
		return true;
	}
}

//verifica se o e-mail está ou não válido
function validarEmail(id){
		//funcao indexOf para retornar a posição de um caractere
		if($(id).value.indexOf("@") < 1 || $(id).value.indexOf(".") == -1){
			return false;
		}else{
			return true;
		}
}

//verifica a quantidade mínima de caracteres de um campo
function validarValorMin(id, tamanho){
	if($(id).value.length < tamanho){
		return false;
	}else{
		return true;
	}
}


//verifica a quantidade máxima de caracteres de um campo
function validarValorMax(id, tamanho){
	if($(id).value.length > tamanho){
		return false;
	}else{
		return true;
	}
}

//verifica se o telefone é ou não válido
function validarTelefone(id){
	//formato (xx)9999-9999
	//utilização da função isNaN para verificar se é ou não um número
	//utilização da função substring para pegar somente um trecho da string do campo
	if(isNaN($(id).value.substring(1,3)) || isNaN($(id).value.substring(4,8)) || isNaN($(id).value.substring(9,13))){
		return false;
	//utilização da função charAt para verificar qual caractere está escrito em determinada posição
	}else if($(id).value.charAt(8)!="-"){
		return false;
	}else{
		return true;
	}
}


//função de validação do formulário
function validarForm(){
	//declaração das variáveis de texto, radios do estado civil e
	// de verificação se o estado foi ou não selecionado
	var mensagem = "";
	var estados = $("spEstados");
	var okEstado = false;	
	
	//verificação de preenchimento e de valores mínimos e máximos do nome
	if(!validarPreenchimento("txNome")){
		mensagem = "O valor do nome e requerido \n ";
	}else{
		if(!validarValorMin("txNome", 10)){
			mensagem += "O valor do nome deve ter no minimo 10 caracteres \n ";
		}else if(!validarValorMax("txNome", 80)){
			mensagem += "O valor do nome deve ter no maximo 80 caracteres \n ";
		}
	}
    //verificação de preenchimento e de valores mínimos e máximos do sobrenome
	if (!validarPreenchimento("txsobrenome")) {
	    mensagem = "O valor do nome e requerido \n ";
	} else {
	    if (!validarValorMin("txNome", 10)) {
	        mensagem += "O valor do nome deve ter no minimo 10 caracteres \n ";
	    } else if (!validarValorMax("txNome", 80)) {
	        mensagem += "O valor do nome deve ter no maximo 80 caracteres \n ";
	    }
	}
	
	//verificação de preenchimento e se o e-mail é válido
	if(!validarPreenchimento("txEmail")){
		mensagem += "O valor do e-mail e requerido \n ";
	}else{
		if(!validarEmail("txEmail")){
			mensagem += "O e-mail deve ser valido \n ";
		}
	}
	
	//verificação de preenchimento e se o telefone é válido
	if(!validarPreenchimento("txTelefone")){
		mensagem += "O valor do telefone e requerido \n ";
	}else{
		if(!validarTelefone("txTelefone")){
			mensagem += "O número do telefone deve ser valido \n ";
		}
	}	
	
	//verificação de selecionamento do estado
	if(!validarPreenchimento("cbEstado")){
		mensagem += "O valor do estado e requerido \n ";
	}
	
	//verficando se o radio de estado civil foi ou não marcado
	for(i=0;i < estados.getElementsByTagName("input").length;i++){	
		if(estados.getElementsByTagName("input")[i].checked == true){
			okEstado = true;
		}
	}
 	//adicionando mensagem caso não haja estado civil marcado
	if(!okEstado){
		mensagem += "O valor do estado civil e requerido \n ";
	}
	//se a mensagem for diferente de vazio mostrar alerta senão enviar o formulário
	if(mensagem != ""){
		window.alert(mensagem);
	}else{
		$("form").submit();	
	}
}

window.onload = function(){
	$("enviar").onclick = function(){
		validarForm();
	}
}
/* Máscaras ER */
function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(d{2})(d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(d)(d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('telefone').onkeypress = function () {
        mascara(this, mtel);
    }
}
/*Function Mascara data*/
function mascaraData(campo, e) {
    var kC = (document.all) ? event.keyCode : e.keyCode;
    var data = campo.value;

    if (kC != 8 && kC != 46) {
        if (data.length == 2) {
            campo.value = data += '/';
        }
        else if (data.length == 5) {
            campo.value = data += '/';
        }
        else
            campo.value = data;
    }
}
    //adiciona mascara de cep
    function MascaraCep(cep){
        if(mascaraInteiro(cep)==false){
            event.returnValue = false;
        } 
        return formataCampo(cep, '00.000-000', event);
    }