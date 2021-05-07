import '../css/componentes.css';

export const saludar = (nombre) =>{ //export permite que se puede acceder desde afuera a lo que se esta refiriendo

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText=`Hola mundo soy yo de nuevo!!!!!, ${nombre}`;

    document.body.append(h1);
    
}