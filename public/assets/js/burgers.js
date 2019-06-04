$(function() {
    $(".change-devoured").on("click", function(event) {
        
        const id = $(this).data('id');
        const newState = $(this).data('newState');
        const devouredState = {
            devoured: newState
        };

        $.ajax('/api/burgers' + id, {
            type: 'PUT',
            data: devouredState
        }).then(
            function() {
                console.log('changed devoured to', newState);

                location.reload();
            }
        )
    });

    $("#submitBtn").on("click", function(event) {
        event.preventDefault();
        console.log("submitBtn clicked");

        const newBurger = {
            burger_name: $("#newBurger").val().trim()
        };
        console.log('newBurger: ' + newBurger.burger_name);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
            console.log("made a new burger");
            location.reload();
            }
        );
    });
});