    function calcularDescuento(categoria, precioUnitario) {
        let descuento = 0;
        if (categoria === "ropa") {
            descuento = precioUnitario * 0.05; // 5% de descuento para ropa
        } else if (categoria === "electrónica") {
            descuento = precioUnitario * 0.10; // 10% de descuento para electrónica
        }
        return descuento;
    }
    function calcularPrecioTotal() {
        const categoria = document.getElementById("categoria").value;
        let cantidad = parseInt(document.getElementById("cantidad").value);
        let precioUnitario = parseFloat(document.getElementById("precio").value);
        // Validación básica
        if (isNaN(cantidad) || cantidad <= 0 || isNaN(precioUnitario) || precioUnitario <= 0) {
            alert("Por favor ingrese valores válidos.");
            return;
        }
        let descuentoTotal = 0;
        let precioFinalTotal = 0;
        for (let i = 0; i < cantidad; i++) {
            let descuento = calcularDescuento(categoria, precioUnitario);
            let precioFinal = precioUnitario - descuento;
            descuentoTotal += descuento;
            precioFinalTotal += precioFinal;
        }
        // Mostrar resultados en los elementos HTML
        document.getElementById("resultadoDescuento").innerText = `Descuento Total: ${descuentoTotal.toFixed(2)} pesos.`;
        document.getElementById("resultadoPrecio").innerText = `Precio Final Total: ${precioFinalTotal.toFixed(2)} pesos.`;
    }