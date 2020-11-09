const MY_EMAIL = "user@example.com";

$("#email-address").text(MY_EMAIL);
$("#email-address").attr("href", `mailto:${MY_EMAIL}`);

$(
    "#contactForm input,#contactForm textarea,#contactForm button"
).jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
        // additional error messages or events
    },
    submitSuccess: function ($form, event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM
        var subject = encodeURIComponent($("input#subject").val());
        var message = encodeURIComponent($("textarea#message").val());
        window.location = `mailto:${MY_EMAIL}?&subject=${subject}&body=${message}`
        $("#contactForm").trigger("reset");
    },
    filter: function () {
        return $(this).is(":visible");
    },
});

$('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});
