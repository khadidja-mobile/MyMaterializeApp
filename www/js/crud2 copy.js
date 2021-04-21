var personManager = {

    showPersonList: function() { 

        // Fonction ajax() utilisée pour envoyer des requetes HTTP
        $.ajax({
            url: "https://server-rest-api.herokuapp.com/personnes/", // La ressource ciblée
            contentType: "application/json",
            type: "GET",  // Le type de requête HTTP
            cache: false, // n'enregistre pas temporairement des copies
            dataType: 'json', // type données reçues
            success: function (data){
                console.log(data);
                $('#personList li').remove();
                $.each(data, function (index, personne) {
                    $('<li>').html('<h5>' + personne.id + ' : ' + personne.nom + ' ' + personne.prenom + '</h5> ')
                             .attr('value', personne.id)
                             .appendTo($('#personList'))
                             .append("<button class=\"btn waves-effect waves-light light-blue\" onclick=\"personManager.showPersonDetails(\'" + personne.id + "\');\"> Edit</button>");
                });

            $('#personListPanel').show( "slow" );
            },
            error: function(response) {
                console.log(response);
            }          
        });

        
    },

    showPersonDetails: function(id) { 
        if (id == null) return;
        $('#personListPanel').hide();
        $.ajax({
            url: "https://server-rest-api.herokuapp.com/personnes/"+id, 
            contentType: "application/json",
            type: "GET", 
            cache: false, 
            dataType: 'json', 
            success: function (personne) {
                console.log(personne);
                $('#personDetailsPanel').show();
                $('#id').attr('value', personne.id);
                $('#nom').attr('value', personne.nom).focus();
                $('#prenom').attr('value', personne.prenom);
            }        
        });
    },

    backtoSearch: function(){
        $('#personDetailsPanel').hide();
        $('#personSearchPanel').show();
        $('#personList').focus();
    },

    collectFieldsValue: function(){
        return {
            id: $('#id').val(),
            nom: $('#nom').val(),
            prenom: $('#prenom').val(),
        };
    },

    refreshSearch: function(){
        this.backtoSearch();
        this.showPersonList();
    },

    newPerson: function(){
        $('#personSearchPanel').hide();
        $('#personDetailsPanel').show();
        $('#id').attr('value', null);
        $('#nom').attr('value', 'New Person').focus().select();
        $('#prenom').attr('value', 'New Person');

    },

    savePerson: function() {

        if(!confirm('Save ?')) return;

        var requestType = $('#id').val() != '' ? 'PUT' : 'POST';

        $.ajax({
            url: "https://server-rest-api.herokuapp.com/personnes/" + $('#id').val(), 
            type: requestType, 
            data: personManager.collectFieldsValue(),
            cache: false, 
            dataType: 'json', 
            success: function (result) {
               if(result.error) {
                   alert(result.error[0].message);
               } else {
                   if(requestType == 'POST'){
                       alert('ID de la nouvelle entrée : ' + result.id);
                    personManager.refreshSearch;
                   }
               }
            }        
        });

    },

    deletePerson: function () {
        if (!confirm('Delete?')) return;
        $.ajax({
            url: 'https://server-rest-api.herokuapp.com/personnes/' + $('#id').val(),
            dataType: 'json',
            type: 'DELETE',
            success: function (result) {
                if (result.errors)
                    alert(result.errors[0].message);
                else
                    personManager.refreshSearch;
            }
        });
    },

    // deletePerson : function(id) {
    //     if(!confirm('Delete ?')) return;
    //     $.ajax({
    //         url: "https://server-rest-api.herokuapp.com/personnes/" + $('#id').val(), 
    //         type: 'DELETE', 
    //         //data: ,
    //         cache: false, 
    //         dataType: 'json', 
    //         success: function (personne) {
    //             console.log(personne);
    //             $('#personDetailsPanel').hide();
    //             $('#id').attr('value', '');
    //             $('#nom').attr('value','');
    //             $('#prenom').attr('value', '');
    //             personManager.savePerson;
    //         }           
    //     });

    //  },
}

$(document).ready(function() {

    $('#personListPanel, #personDetailsPanel').hide();

    $('#findButton').click(function(e) {
        e.preventDefault();
        personManager.showPersonList();
    });

    $('#saveButton').click(function(e) {
        e.preventDefault();
        personManager.savePerson();
    })

    // $('#showDetailsButton').click(function(e) {
    //      e.preventDefault();
    //      personManager.showPersonDetails($('#personList').val());
    // });

    $('#backtoSearchButton').click(function(e) {
        e.preventDefault();
        personManager.backtoSearch();
    });

    $('#newButton').click(function (e) {
        e.preventDefault();
        personManager.newPerson();
    });
    

    // $('#newButton').click(function(e) {
    //     e.preventDefault();
    //     personManager.newPerson();
    //     //personManager.showPersonList();
    //     //$('#personListPanel').show('slow');
        
    //     // console.log('Le collect new Person : ' + personManager.newPerson());
    //     // personManager.collectFieldsValue();
    //     // console.log('collect Fieldsvalue : ' + personManager.collectFieldsValue());
    //     // personManager.backtoSearch();
        
    //     //personManager.savePerson()
    //     //console.log('Le savePerson: ' + personManager.savePerson());
    // });

    $('#saveButton').click(function(e) {
        e.preventDefault();
        personManager.savePerson();
    });

    $('#deleteButton').click(function(e) {
        e.preventDefault();
        personManager.deletePerson();
    });

    

});






// On reprend le même id que dans le précédent chapitre

// $("#getPersonnes").click(function(){
     
//     $.ajax({
//        url : 'https://server-rest-api.herokuapp.com/personnes',
//        type : 'GET',
//        dataType : 'json',
//        success : function(code_html, statut){
//            $(code_html).appendTo("#commentaires"); // On passe code_html à jQuery() qui va nous créer l'arbre DOM !
//        },

//        error : function(resultat, statut, erreur){
         
//        },

//        complete : function(resultat, statut){

//        }

//     });
   
// });
