"use strict";
var newCar = document.forms[0];
var newWheels = document.forms[1];
var displayInfo = document.getElementById('displayInfo');
var matricula = document.getElementById("plate");
var marca = document.getElementById("brand");
var color = document.getElementById("color");
var color2 = document.getElementById("color");
var car;
var cars = [];

function createCar(plate, brand, color) {
    var error = 0;

    if (!validPlate(matricula.value)) {
        showErrors(matricula, "errorMatricula", "La matrícula ha de ser de 4 xifres i 3 lletres seguides en majúscula. Exemple: 2134XYZ");
        error++;
    } else if (validPlate(matricula.value)) {
        isOK(matricula);
    }

    if (!validBrand(marca.value)) {
        showErrors(marca, "errorBrand", "Aquest camp és obligatori.");
        error++;
    } else if (validBrand(marca.value)) {
        isOK(marca);
    }

    if (!validColor(color2.value)) {
        showErrors(color2, "errorColor", "Aquest camp és obligatori.");
        error++;
    } else if (validColor(color2.value)) {
        isOK(color2);
    }

    if (error == 0) {
        car = new Car(plate, color, brand);
        newCar.className = "d-none";
        newWheels.className = "";
        matricula.className = "form-control";
    }
}

function createWheels(w1M, w1D, w2M, w2D, w3M, w3D, w4M, w4D) {
    //w per wheel, M per Marca, D per Diàmetre
    var error = 0;
    var wheels = [];
    var inputs;

    if (!validBrand(w1M)) {
        showErrors(document.getElementById("w1M"), "errorw1M", "Aquest camp és obligatori.");
        error++;
    } else if (validBrand(w1M)) {
        isOK(document.getElementById("w1M"));
    }

    if (!validBrand(w2M)) {
        showErrors(document.getElementById("w2M"), "errorw2M", "Aquest camp és obligatori.");
        error++;
    } else if (validBrand(w2M)) {
        isOK(document.getElementById("w2M"));
    }

    if (!validBrand(w3M)) {
        showErrors(document.getElementById("w3M"), "errorw3M", "Aquest camp és obligatori.");
        error++;
    } else if (validBrand(w3M)) {
        isOK(document.getElementById("w3M"));
    }

    if (!validBrand(w4M)) {
        showErrors(document.getElementById("w4M"), "errorw4M", "Aquest camp és obligatori.");
        error++;
    } else if (validBrand(w4M)) {
        isOK(document.getElementById("w4M"));
    }

    if (!validDiameter(w1D)) {
        showErrors(document.getElementById("w1D"), "errorw1D", "El valor del diàmetre ha de ser entre 0.4 i 2");
        error++;
    } else if (validDiameter(w1D)) {
        isOK(document.getElementById("w1D"));
    }

    if (!validDiameter(w2D)) {
        showErrors(document.getElementById("w2D"), "errorw2D", "El valor del diàmetre ha de ser entre 0.4 i 2");
        error++;
    } else if (validDiameter(w2D)) {
        isOK(document.getElementById("w2D"));
    }

    if (!validDiameter(w3D)) {
        showErrors(document.getElementById("w3D"), "errorw3D", "El valor del diàmetre ha de ser entre 0.4 i 2");
        error++;
    } else if (validDiameter(w3D)) {
        isOK(document.getElementById("w3D"));
    }

    if (!validDiameter(w4D)) {
        showErrors(document.getElementById("w4D"), "errorw4D", "El valor del diàmetre ha de ser entre 0.4 i 2");
        error++;
    } else if (validDiameter(w4D)) {
        isOK(document.getElementById("w4D"));
    }

    if (error == 0) {
        var wheel1 = new Wheel(w1D, w1M);
        wheels.push(wheel1);
        var wheel2 = new Wheel(w2D, w2M);
        wheels.push(wheel2);
        var wheel3 = new Wheel(w3D, w3M);
        wheels.push(wheel3);
        var wheel4 = new Wheel(w4D, w4M);
        wheels.push(wheel4);
        for (var i = 0; i < wheels.length; i++) {
            car.addWheel(wheels[i]);
        }
        cars.push(car);

        inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

        newCar.className = "";
        newWheels.className = "d-none";
        showCar(car);
    }
}

function showCar(car) {
    var showCarList = document.createElement('ul');

    var plate = document.createElement('li');
    plate.textContent = "Matrícula: " + car.plate;
    var brand = document.createElement('li');
    brand.textContent = "Marca: " + car.brand;
    var color = document.createElement('li');
    color.textContent = "Color: " + car.color;
    var wheels = document.createElement('span');
    wheels.textContent = "Detalls rodes:";
    car.wheels.forEach(function(wheel, index) {
        var index = index + 1;
        var li = document.createElement('li');
        li.textContent = "Marca de la roda " + index + ": " + wheel.brand;
        var li2 = document.createElement('li');
        li2.textContent = "Diàmetre de la roda " + index + ": " + wheel.diameter;
        wheels.appendChild(li);
        wheels.appendChild(li2);
    });

    showCarList.append(plate, brand, color, wheels),
        displayInfo.appendChild(showCarList);
}

function showErrors(input, error, message) {
    input.classList.add("is-invalid");
    var errorInput = document.getElementById(error);
    errorInput.textContent = message;
}

function isOK(input) {
    input.classList.remove("is-invalid");
}

function validDiameter(num) {
    if (num >= 0.4 && num <= 2) {
        return true;
    } else {
        return false;
    }
}

function validPlate(plate) {
    var regex = /(\d{4})([A-Z]{3})/;
    return regex.test(plate) ? true : false;
}

function validBrand(brand) {
    var regex = /./gm;
    return regex.test(brand) ? true : false;
}

function validColor(color) {
    var regex = /./gm;
    return regex.test(color) ? true : false;
}