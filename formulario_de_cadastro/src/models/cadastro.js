function validarCpf(cpf) {
    if(cpf.length !== 11) {
      return { valido:false, texto: "O CPF deve ter 11 dígitos"}
    } else {
      return {valido: true, texto: ""}
    }
}


function validarSenha(senha) {
    if(senha.length < 4 || senha.length > 72) {
      return { valido:false, texto: "A senha é inválida. Digite de 4 a 72 caracteres."}
    } else {
      return {valido: true, texto: ""}
    }
}

export { validarCpf, validarSenha }