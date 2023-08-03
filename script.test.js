/** @jest-environment jsdom */

const { validarCPF } = require("./script")


test ("validar cpf", function(){
    var valida2 = validarCPF("17947002002");
    expect (valida2).toBe(true);

} )

test ("validar cpf", function () {
    var valida = validarCPF("01234567891");
    expect(cpf).toBe(false);
})