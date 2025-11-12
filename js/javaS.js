    //clase 
   class Conversion{
    constructor(m,p){
        this.monto=m;
        this.pais=p;
    }
    
    //metodo calcular conversion
    calcularConversion() {
        // La línea 'const Conver=nombreP[this.pais];' se ha eliminado o comentado,
        // ya que 'nombreP' no está definido y causaría un error 'ReferenceError'.
        
        // ¡CORRECCIÓN CLAVE! Cambiar 'const' por 'let' aquí:
        let nombreMoneda = "";
        let simbolo = "";
        let valor = 0; 

        if (this.pais === '1') {
            nombreMoneda = "Euros";
            valor=0.047;
            simbolo = "€";
        } 
        else if (this.pais === '2') {
            nombreMoneda = "Dólares";
            valor=0.055;
            simbolo = "$"; // USD
        } 
        else if (this.pais === '3') {
            nombreMoneda = "Wones Surcoreanos";
            valor=79.68;
            simbolo = "₩";
        }
        else {
            nombreMoneda = "Libras Esterlinas";
            simbolo = "£";
            valor=0.041;
        } 
        return {
            valorMon: valor, 
            nombre: nombreMoneda,
            simbolo: simbolo
        };
    }
    
    generarResumen(){
        const monedaEx = this.calcularConversion();
        const total = (monedaEx.valorMon * this.monto).toFixed(2);  
        // Se añade negritas (**...**) para mejorar la lectura del resultado
        return `Monto a Convertir: ${this.monto} <br> Moneda: 
        ${monedaEx.nombre} <br> Cantidad de conversion:
        ${monedaEx.simbolo} ${total}`;
    }
}
// Este bloque ya es correcto y no requiere cambios
document.getElementById('forma').addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtener datos
    const monto = parseFloat(document.getElementById('monto').value);
    const paisM = document.getElementById('moneda').value; 

    // Mejora: Validación de datos
    if (isNaN(monto) || monto <= 0) {
        document.getElementById('resumen').innerHTML = '<p style="color: red;">Error: Por favor, ingrese un monto válido mayor a cero.</p>';
        return; 
    }

    // Crear objeto
    const objConver = new Conversion(monto, paisM); 
    
    // Mostrar resumen (¡La corrección crítica de objPrestamo a objConver ya está hecha!)
    document.getElementById('resumen').innerHTML = objConver.generarResumen(); 
});