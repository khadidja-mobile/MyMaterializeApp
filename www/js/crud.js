// Crud = Create, read, update, delete
var app = new function () {

    this.el = document.getElementById('contries');
    //this.countries = [];

    this.countries = ['France', 'Germnay', 'England', 'Russie', 'Madagascar'];

    // Compte le nombre d'élément du tableau
    this.count = function (data) {

        var el = document.getElementById('counter');
        var name = 'country';
        console.log(data);
        if (data == 1) {
            el.innerHTML = data + " country ";
        }

        else if (data > 1) {
            el.innerHTML = data + " countries";
        }

        else {
            el.innerHTML = 'No country';
        }
    }

    // Afficher les pays
    this.fetchAll = function () {
        var data = '';
        this.count(this.countries.length);
        if (this.countries.length > 0) {
            for (var i = 0; i < this.countries.length; i++) {
                data += '<tr>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td><button class="btn light-blue waves-effect waves-light" onclick="app.edit(' + i + ')">Edit <i class="material-icons">edit</i></button></td>';
                data += '<td><button class="btn red darken-4 waves-effect waves-light" onclick="app.delete(' + i + ')">Delete <i class="material-icons">delete</i></button></td>';
                data += '</tr>';
            }

            return this.el.innerHTML = data;
        } else {
            return this.el.innerHTML = "Insérer un nouveau pays";
        }
    }

    // Ajouter un élément au tableau
    this.add = function () {
        var el = document.getElementById('add-name');
        var country = el.value;

        if (country) {
            this.countries.push(country.trim());
            el.value = '';
            this.fetchAll();
        }
    }

    // Mise à jour d'un élément
    this.edit = function (item) {
        var el = document.getElementById('edit-name');
        // Affiche l'élement récupéré selon l'indice récupéré en paramètre
        el.value = this.countries[item];
        document.getElementById('spoiler').style.display = 'block';

        // On change de contexte
        self = this;

        document.getElementById('saveEdit').onsubmit = function () {
            // Récupérer la valeur
            var country = el.value;

            if (country) {
                // Mettre à jour la valeur
                self.countries.splice(item, 1, country.trim());

                // Afficher la liste
                self.fetchAll();
                // Cacher les champs de mise à jour
                closeInput();
            }
        }
    }

    // Supprimer un élément du tableau
    this.delete = function (item) {
        var el = this.countries[item];
        console.log(el);

        //this.countries.forEach(function(item, index, array) {
        // if(el == item){
        this.countries.splice(item, 1);
        //}
        // console.log(item, index);
        //});

        //document.getElementById('saveDelete').onsubmit = function() {  
        /*this.countries.forEach(function(item) {
            if(el == this.countries[item]){
                item = '';
            }
        });*/

        /*for (var i = 0; i < this.countries.length; i++){
            if(el == this.countries[i]){
                this.countries[i].replaceWith('');
            }
        }*/
        // this.countries.splice(item, 1, country);
        // Afficher la liste
        this.fetchAll();
    }
}

app.fetchAll();
//app.add();

function closeInput() {
    document.getElementById('spoiler').style.display = 'none';
}