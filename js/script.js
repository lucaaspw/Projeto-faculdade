$(document).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});
AOS.init();
$(document).ready(function () {

    aplicarMascaras();

});


$(document).scroll(function () {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});
AOS.init();

$(document).on("onfocus", "input[name='email']", function () {
    emailMask(this);
});

function aplicarMascaras() {
//$(".moneyMask").maskMoney({ showSymbol: false, symbol: "", decimal: ",", thousands: "." });
$(".celMask").inputmask({ mask: ["(99) 9999-9999", "(99) 99999-9999",], keepStatic: true, reverse: true, removeMaskOnSubmit: true });
$(".numerodecimal").inputmask('Regex', { regex: "[0-9]+(\,[0-9][0-9]?)?" });
$(".pesodecimal").inputmask('Regex', { regex: "[0-9]+(\,[1-9][0-9]?)?" });
$(".apenasnumeros").inputmask('Regex', { regex: "[0-9]+" });
$("input.cep").inputmask("99999-999");
$(".cep_esp").inputmask("9 9 9 9 9 - 9 9 9");

}