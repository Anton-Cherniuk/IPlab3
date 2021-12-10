let session = new Array(
    {
        'name': 'JS',
        'score': 10,
        'check': false
    },
    {
        'name': 'HTML',
        'score': 30,
        'check': false
    },
    {
        'name': 'Python',
        'score': 50,
        'check': false
    },
    {
        'name': 'DataBases',
        'score': 60,
        'check': false
    },
    {
        'name': 'C#',
        'score': 100,
        'check': false
    }
);

function print(){
    for(let i=0; i<session.length; i++)
        console.log(session[i]);
}

//1
function printByCheck(){
    console.log("1 Завдання");
    for(let i=0; i<session.length; i++){
        if(session[i].check)
            console.log(session[i]);
    }
    for(let i=0; i<session.length; i++){
        if(!session[i].check)
            console.log(session[i]);
    }
}

//2
function addName(name){
    console.log("2 Завдання");
    let points=10;
    let check=false;
    for(let i=0; i<session.length; i++){
        if(session[i].name == name){
            session[i].score+=points;
            if(session[i].score >= 60)
                session[i].check = true;
        }     
        else
            check=true;
    }

    if(check)
        session.push(
            {
                'name': name,
                'score': points,
                'check': true
            }
        );

    for(let i=0; i<session.length; i++)
        if(session[i].score >= 60)
            session[i].check = true;
        else    
            session[i].check = false;
}

//3
function countAvarage(){
    console.log("3 Завдання");
    let S=0;
    for(let i=0; i<session.length; i++)
        S+=session[i].score;
    console.log(S/session.length);
}

//4
function countNoScore(){
    console.log("4 Завдання");
    let S=0;
    for(let i=0; i<session.length; i++)
        if(!session[i].score)
            S+=1;
    console.log(S);
}

//5
function findMaxScore(){
    console.log("5 Завдання");
    let max=session[0].score;
    let name=''
    for(let i=0; i<session.length; i++)
        if(max < session[i].score){
            max = session[i].score;
            name = session[i].name;
        }
            
    console.log(name, max);
}

function betterScore(scr){
    console.log("6 Завдання");
    for(let i=0; i<session.length; i++)
        if(scr < session[i].score)
            console.log(session[i]);
}

printByCheck();
addName('test');
print();
countAvarage();
findMaxScore();
betterScore(20);