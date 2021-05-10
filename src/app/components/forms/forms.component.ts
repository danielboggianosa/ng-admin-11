import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {
  @Input() pageTitle="Forms";
  @Input() cardDescription="";
  @Input() cardTitle="Forms Example";

  // INICIO DEL FORMULARIO
  // DECLARE EACH ONE OF THE INPUT FIELDS YOU WILL BE RECEIVING FROM THE FORM
  /*
  La propiedad "myForm" es tanto la declaración de todos los campos como de los valores que se recibirán del formulario.
  Esta es la variable que se pasará a ser validada y que guardará todos los valores recibidos.
  También se pueden declarar los valores iniciales o por defecto en esta variable cambiando el valor null por el deseado
  */
  @Input() myForm={
    nombre: null,
    apellido: null,
    correo: null,
    telefono: null,
    edad: null,
    country: null,
    tipoDocumento: null,
    colores: {
      rojo: null,
      azul: null,
      verde: null
    },
    descripcion: null,
    nacimiento: null,
    archivo: null
  };
  //
  /*
  EXPLICACIÓN DE LA VARIABLE myFormFields
  
    id          => es un identificador único para cada campo en el formulario
    tag         => corresponde a la etiqueta HTML del campo, puede ser cualquier etiqueta de formulario válida en HTML5
    name        => nombre del campo que también servirá como identificacdor en el formulario
    type        => tipo de input según sea el caso
    placeholder => es el mensaje que se muestra tanto en el campo como en la etiqueta LABEL
    required    => true si el campo es obligatorio y false si es opcional
    disabled    => indicador del campo si está habilitado o no,
    options     => si el campo es un tipo select o cualquier otro de opciones, estas se especifican dentro de este array
    options.id    => identificador único del campo
    options.value => valor por defecto del campo
    options.text => etiqueta del campo o texto a mostrar en la opción
  */
  @Input() myFormFields=[
    {id: 1, tag:'input', name:'nombre', type:'text', placeholder:'Nombre', label:'Nombre', required:true, disabled:false, options:[]},
    // {id: 2, tag:'input', name:'apellido', type:'text', placeholder:'Apellidos', label:'Apellidos', required:true, disabled:false, options:[]},
    {id: 4, tag:'input', name:'telefono', type:'tel', placeholder:'Teléfono', label:'Teléfono', required:true, disabled:false, options:[]},
    {id: 3, tag:'input', name:'correo', type:'email', placeholder:'Correo', label:'Correo', required:true, disabled:false, options:[]},
    {id: 22, tag:'input', name:'password', type:'password', placeholder:'Password', label:'Password', required:true, disabled:false, options:[]},
    {id: 5, tag:'input', name:'edad', type:'number', placeholder:'Edad', label:'Edad', required:true, disabled:false, options:[]},
    {id: 6, tag:'select', name:'country', type:'text', placeholder:'Country', label:'Country', required:true, disabled:false, options:[
      {id: 7, value:'peru', text:'Perú'},
      {id: 8, value:'chile', text:'Chile'},
      {id: 9, value:'argentina', text:'Argentina'},
    ]},
    {id:10, tag:'input', type:'radio', name:'tipoDocumento', placeholder:'Tipo de Documento', label:'Tipo de Documento', required:true, disabled:false, options:[
      {id:11, value:'DNI', text:'DNI'},
      {id:12, value:'PASAPORTE', text:'PASAPORTE'},
      {id:13, value:'OTRO', text:'OTRO'},
    ]},
    {id:14, tag:'input', type:'checkbox', name:'colores', placeholder:'Colores Favoritos', label:'Colores Favoritos', required:true, disabled:false, options:[
      {id:15, value:'rojo', text:'Rojo'},
      {id:16, value:'azul', text:'Azul'},
      {id:17, value:'verde', text:'Verde'},
    ]},
    {id: 19, tag:'input', name:'nacimiento', type:'date', placeholder:'Fecha de Nacimiento', label:'Fecha de Nacimiento', required:true, disabled:false, options:[]},
    {id: 20, tag:'input', name:'archivo', type:'file', placeholder:'Subir Archivo', label:'Subir Archivo', required:true, disabled:false, options:[]},
    {id: 21, tag:'input', name:'tiempo', type:'time', placeholder:'Tiempo', label:'Tiempo', required:true, disabled:false, options:[]},
    {id: 18, tag:'textarea', name:'descripcion', type:'text', placeholder:'Descripción', label:'Descripción', required:true, disabled:false, options:[]},
  ];
  @ViewChild('Formulario',{static:false}) Formulario;
  error:Array<string>=[];
  @Output() onSubmit = new EventEmitter<any>();
  @Output() onInputChange = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() buttonText = 'Enviar Datos'
  @Input() btnColor:string = 'primary'
  @Input() cancelBtn:boolean = false

  // fin de propiedades del formulario

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }

  // EMITE EL NOMBRE DEL CAMPO QUE HA CAMBIADO
  inputChange(e){    
    for(let i=0; i<this.myFormFields.length; i++){
      if(e == this.myFormFields[i].name && (this.myFormFields[i].type == 'file' || this.myFormFields[i].type == 'image')){
        this.myFormFields[i].placeholder = this.myForm[e].split('\\')[2]
        break;
      }
    }
    this.onInputChange.emit(e)
    // el valor correspondiente a este campo se obtiene con la siguiete variable => "this.myForm[a]"
  }

  /* INICIO DE FUNCIONES DEL FORMULARIO */
  submitAction(){
    this.myForm;

    // VALIDACIÓN
    if(this.validateFormFields(this.myForm, this.myFormFields)){
      /* AQUÍ DEBE IR EL LLAMADO AL SERVICIO QUE GUARDA LA INFORMACIÓN DEL FORMULARIO
      ...
       */
      this.onSubmit.emit(this.myForm)
      //RESETEAR EL FORMULARIO PARA NUEVOS DATOS
      this.Formulario.nativeElement.reset();
    }
    
  }

  // ESTA FUNCION SE ENCARGA DE VALIDAR QUE TODOS LOS VALORES RECIBIDO ESTÉN CONFORME LO DECLARADO
  validateFormFields(myForm, myFormFields){
    // console.log(myForm.correo)

    let valid:boolean = true
    this.error=[];

    myFormFields.forEach(e => {
      if(myForm[e.name]==null && e.required){
        this.error[e.id]="El campo "+e.placeholder+" no puede estar vacío";
        valid = false;
      }
      if(e.type == 'email'){
        valid = this.validateEmail(myForm[e.name]);
        if(!valid) this.error[e.id] = "Este no es un correo válido"
      }
    });
    return valid;

  }
  // Función para validar el formato del email
  validateEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
  }
  /**
   * AQUIÍ SE PUEDEN AÑADIR MÁS FUNCIONES DE VALIDACIÓN
   */

  /* FIN DE FUNCIONES DEL FORMULARIO */

}
