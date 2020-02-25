var students_names:string[]; 
   class School{
    school_name:string="Hogwarts";
    students_names=new Array("Harry Potter", "Ginny Weasley", "Hermione Granger", "Crabbe")
    
    }
    function start()
{
        var messagesElement = document.getElementById('messages');
        messagesElement!.innerText = 'Harry Potter, Ginny Weasley, Hermione Granger, Crabbe';
        
    }
    document.getElementById('start')!.addEventListener('click', start);
        

    
  




