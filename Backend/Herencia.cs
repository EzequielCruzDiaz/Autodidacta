class Animal {

public void Atacar (){
    Console.WriteLine("el animal esta mordiendo");
}

public void Comer (){
    Console.WriteLine("El animal esta comiendo");
}
    
}

class Gato: Animal {

    public void Hablar ( ){
        Console.WriteLine("Miau!");
    }
}


class Program {
  
    static void Main () {

        var migato = new Gato();
        migato.Atacar();
        migato.Comer(); 
        migato.Hablar();       

    }
}


