   class Conversion{
    constructor(m,p){
        this.monto=m;
        this.pais=p;
    }
    
    calcularConversion() {
    
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
        return `Monto a Convertir: ${this.monto} <br> Moneda: 
        ${monedaEx.nombre} <br> Cantidad de conversion:
        ${monedaEx.simbolo} ${total}`;
    }
}
document.getElementById('forma').addEventListener("submit", function(e) {
    e.preventDefault();
    const monto = parseFloat(document.getElementById('monto').value);
    const paisM = document.getElementById('moneda').value; 
    const objConver = new Conversion(monto, paisM); 
    document.getElementById('resumen').innerHTML = objConver.generarResumen(); 

});
