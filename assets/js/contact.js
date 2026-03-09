window.addEventListener("load",()=>{
    const validation = new JustValidate(".main__contact");
    let isValidate =false;

    validation
        .addField("#name",[
            {
                rule:"required",
                errorMessage:"El nombre es obligatorio"
            },
            {
                rule:"minLength",
                value:3,
                errorMessage:"El nombre es muy corto" 
            }
        ]).addField("#surname",[
            {
                rule:"required",
                errorMessage:"Los apellidos son obligatorios"
            },
            {
                rule:"minLength",
                value:8,
                errorMessage:"Los apellidos son muy cortos" 
            }
        ]).addField("#email",[
            {
                rule:"required",
                errorMessage:"El email es obligatorio"
            },
            {
                rule:"email",
                errorMessage:"El formato del email no es correcto" 
            }
        ]).addField("#gender",[
            {
                rule:"required",
                errorMessage:"El genero es obligatorio"
            },
          
        ]).addField("#date",[
            {
                rule:"required",
                errorMessage:"La fecha de nacimiento obligatorio"
            },
          
        ]).addField("#age",[
            {
                rule:"required",
                errorMessage:"La Edad es requerida"
            },  
             {
                rule:"integer",
                errorMessage:"Solo números"
            }        
        ]).onSuccess(()=>{
            isValidate=true;
            
        });


});