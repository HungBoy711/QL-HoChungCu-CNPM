$('#editModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);

    var ID = button.data('id');
    var InvoiceID = button.data('invoiceid');
    var ApartID = button.data('apartid');
    var CurentDateTerm = button.data('curentdateterm');
    var NextPaymentTerm = button.data('nextpaymentterm');
    var ApartmentFee = button.data('apartmentfee');
    var ElectricityFee = button.data('electricityfee');
    var WaterFee = button.data('waterfee');

    var modal = $(this);
    modal.find('#ID').val(ID);
    modal.find('#InvoiceID').val(InvoiceID);
    modal.find('#ApartID').val(ApartID);
    modal.find('#CurentDateTerm').val(CurentDateTerm);
    modal.find('#NextPaymentTerm').val(NextPaymentTerm);
    modal.find('#ApartmentFee').val(ApartmentFee);
    modal.find('#ElectricityFee').val(ElectricityFee);
    modal.find('#WaterFee').val(WaterFee);
});

$('#deleteModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ID = button.data('id');
    var ApartID = button.data('apartid');

    var modal = $(this);
    modal.find('#ID').val(ID);
    modal.find('#ApartID').val(ApartID);
});
