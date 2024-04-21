document.addEventListener("DOMContentLoaded", function()
    {
        var calcularButton = document.getElementById("calculo");
        var capitalInput = document.getElementById("capital");

        function CalGanancia(){
            var capital = parseFloat(capitalInput.value);
            if (capitalInput.value.trim() === "" || isNaN(capital)) 
            {
                alert("Debes ingresar un número válido");
                return; 
            }
            var tasaI = 0.02;
            var interes = capital * tasaI;
            var total = capital + interes;
            document.getElementById("GananciaFinal").innerHTML = "Su capital inicial fue de $" + capital.toFixed(2) + " generando un interés de $" + interes.toFixed(2) + ". Después de un mes, usted tendría un total de $" + total.toFixed(2);
        }

        calcularButton.addEventListener("click", CalGanancia);

        capitalInput.addEventListener("keypress", function(event)
        {
            if (event.key === "Enter") {
                event.preventDefault(); 
                CalGanancia();
            }   
        });
    });
