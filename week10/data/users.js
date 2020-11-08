const bcrypt = require("bcrypt");
var users = [
    {   
        "_id":"54759eb3c090d83494e2d804",
        "username":"masterdetective123",
        "hashedPassword": "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.",
        "firstName":"Sherlock",
        "lastName":"Holmes",
        "profession":"Detective",
        "bio":'Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a "consulting detective" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.'
    },
    {
        "_id":"5db0fa13df6cb71440edbca5",
        "username":"lemon",
        "hashedPassword": "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm",
        "firstName":"Elizabeth",
        "lastName":"Lemon",
        "profession":"Writer",
        "bio":'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.',
        
    },
    {
        "_id":"5db10d78546e4507b4078211",
        "username":"theboywholived",
        "hashedPassword": "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
        "firstName":"Harry",
        "lastName":"Potter",
        "profession":"Student",
        "bio":"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
    }
];

const checkusername= async(uname)=>{
    for(let i = 0; i < users.length ; i++){
        let curruser = users[i];
        if(curruser.username == uname){
            return curruser;
        }
}
return
}


const check=async(uname , pass)=>{
    for(let i = 0; i < users.length ; i++){
        let curruser = users[i];
        if(curruser.username == uname){
            try{
                var checkpass = await bcrypt.compare(pass, curruser.hashedPassword);
                
            }
            catch(e){
             return "Hashing not successful"
            }
            
            if(checkpass){
                return curruser;
            }
        }
    }
    return 
}

module.exports={check,checkusername}
