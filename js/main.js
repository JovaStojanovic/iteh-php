$("#btnDodaj").submit(function () {
    $("#myModal").modal("toggle");
    return false;
  });

  $("#btnDodajInstrument").submit(function () {
    $("#modalInstrument").modal("toggle");
    return false;
  });


  $("#btnIzmeni").submit(function () {
    $("#izmeniModal").modal("toggle");
    return false;
  });
  

  $('#dodajForm').submit(function(){
    event.preventDefault();
    console.log("Dodaj je pokrenuto");
    const $form = $(this);
    const $inputs = $form.find('input, select, button, textarea');
    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    request = $.ajax({
        url: 'handler/add.php',
        type:'post',
        data: serijalizacija
});

    request.done(function(response, textStatus, jqXHR){
        if(response==="Success"){
            alert("Muzicar je dodat");
            console.log("Uspesno dodavanje");
            location.reload(true);
        } else {
            console.log("Muzicar nije dodat"+response);
        }
        console.log(response);
    });

    request.fail(function(jqXHR, textStatus, error){
        console.error("Sledeca greska se desila" + textStatus, error);
    });
});

$('#dodajInstrument').submit(function(){
    event.preventDefault();
    console.log("Dodaj instrument je pokrenuto");
    const $form = $(this);
    const $inputs = $form.find('input, select, button, textarea');
    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    request = $.ajax({
        url: 'handler/addInstrument.php',
        type:'post',
        data: serijalizacija
});

    request.done(function(response, textStatus, jqXHR){
        if(response==="Success"){
            alert("Instrument je dodat");
            console.log("Uspesno dodavanje");
            location.reload(true);
        } else {
            console.log("Instrument nije dodat"+response);
        }
        console.log(response);
    });

    request.fail(function(jqXHR, textStatus, error){
        console.error("Sledeca greska se desila" + textStatus, error);
    });
});
$("#btn-izbrisi").click(function () {
    const checked = $("input[type=radio]:checked");
    request = $.ajax({
      url: "handler/delete.php",
      type: "post",
      data: { id: checked.val() },
    });
    request.done(function (response, textStatus, jqXHR) {
      if (response === "Success") {
        checked.closest("tr").remove();
        console.log("Muzicar je obrisan ");
        alert("Muzicar je obrisan");
      } else {
        console.log("Muzicar nije obrisan " + response);
        alert("Muzicar nije obrisan");
      }
    });
  });

  $("#btnIzmeni").click(function () {
    const checked = $("input[type=radio]:checked");
    console.log(checked.val());
    request = $.ajax({
      url: "handler/get.php",
      type: "post",
      data: { id: checked.val() },
      dataType: "json",
    });
  
    request.done(function (response, textStatus, jqXHR) {
      console.log("Popunjena");
      $("#ime").val(response[0]["ime"]);
  
      $("#prezime").val(response[0]["prezime"].trim());
      $("#instrument").val(response[0]["instrument"]);
      $("#id").val(checked.val());
  
      console.log(response);
    });
  
    request.fail(function (jqXHR, textStatus, errorThrown) {
      console.error("The following error occurred: " + textStatus, errorThrown);
    });
  });
  
  $("#izmeniForm").submit(function () {
    event.preventDefault();
    console.log("Izmena");
    const $form = $(this);
    const $inputs = $form.find('input, select, button, textarea');
    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    request = $.ajax({
        url: 'handler/update.php',
        type:'post',
        data: serijalizacija
});
  
    request.done(function (response, textStatus, jqXHR) {
      if (response === "Success") {
        alert("Muzicar je dodat");
        location.reload(true);
        console.log("Muzicar je izmenjen");
      } else console.log("Muzicar nije izmenjen " + response);
      console.log(response);
    });
  
    request.fail(function (jqXHR, textStatus, errorThrown) {
      console.error("The following error occurred: " + textStatus, errorThrown);
    });
  });

  