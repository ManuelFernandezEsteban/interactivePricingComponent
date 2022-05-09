const pgv = ['10 k', '50 k', '100 k', '500 k', '1 m'];
const prices = [8.00, 12.00, 16.00, 24.00, 36.00];
const pricesDiscount = [6.00, 9.00, 12.00, 18.00, 27.00];
let position = 0;

const price = document.getElementById('price');
const pageView = document.getElementById('pageView');
const discount = document.getElementById('checkbox-1');
const range = document.getElementById('range');

const ponerPrecio = (cadena) => {
    pageView.innerText = '';
    pageView.innerText = cadena;
    price.innerText = '';
    price.innerText = precio
}

const calcularPrecio = () => {
    
    if (discount.checked) {
        precio =pricesDiscount[position];
    }
    else{
        precio =prices[position];
    }
    return precio;
}
const manejador = ()=>{
    position = parseInt(range.value);    
    switch (range.value) {
        case '0':            
            ponerPrecio(pgv[position], calcularPrecio());
            break;
        case '1':
            ponerPrecio(pgv[position], calcularPrecio());
            break;
        case '2':
            ponerPrecio(pgv[position], calcularPrecio());
            break;
        case '3':
            ponerPrecio(pgv[position], calcularPrecio());
            break;
        case '4':
            ponerPrecio(pgv[position], calcularPrecio());
            break;

        default:
            break;
    }

}

const init = ()=>{
    position=2;
    ponerPrecio(pgv[position], calcularPrecio());
}

discount.addEventListener('change', () => {
    ponerPrecio(pgv[position], calcularPrecio());
})
range.addEventListener('change',manejador);
range.addEventListener('input', manejador);

