// using System;

// namespace overwriting
// {
//     class Empleado 
//     {
//      public virtual string? Developer {get; set;}

//      public virtual void Mostrarinformacion() {
//         Console.WriteLine ($"El developer {Developer} esta codeando");
//     }
// }


// class Compañia:Empleado 
// {
//     public override void Mostrarinformacion()
//     {
//         Console.WriteLine($"El developer {Developer} esta descansando");
//     }
// }

// class Program {

//     public static void Main(string[]args) 
//     {
//         var empleado = new Empleado();
//         empleado.Developer = "Ezequiel";
//         empleado.Mostrarinformacion();

//         var Compañia = new Compañia(); 
//         Compañia.Developer = "Miguel";
//         Compañia.Mostrarinformacion();

//     }
    
// }

// }
