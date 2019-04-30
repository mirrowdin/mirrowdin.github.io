var turn = 0; //Turn number
//HERO VARS
var hhp = 4800; // hero hp
var hmp = 490; //hero mp

//BOSS VARS
var bhp = 60000;// enmy hp
var eA = 0;//eA as in enemy attack

function music()
{
    document.getElementById('song').play(); //music for battle
}

function normalAttack()
{
    document.getElementById("stage").src="img/norm.PNG";
    bhp = bhp - 1431; //enemyhp
    document.herHP.bossHP.value = bhp;//enemyhpbar
    hmp = hmp - 0;
    document.hisBars.heroMP.value = hmp;
    return setTimeout(move, 1000);
}
function waterGatling()
{
    if(document.hisBars.heroMP.value <= 0 && turn > 0)
    {
        alert("You are out of MP");
    }
    else
    {
        document.getElementById("stage").src = "img/water.PNG";
        hmp = hmp - 35;
        document.hisBars.heroMP.value = hmp;
        bhp = bhp - 1967; //enemyhp
        document.herHP.bossHP.value = bhp;//enemyhpbar
        return setTimeout(move, 1000);
    }
}
function firboltPhx()
{
    if(document.hisBars.heroMP.value <= 0 && turn > 0)
    {
        alert("You are out of MP");
    }
    else
    {
        document.getElementById("stage").src = "img/fire.PNG";
        hmp = hmp - 45;
        document.hisBars.heroMP.value = hmp;
        bhp = bhp - 3427; //enemyhp
        document.herHP.bossHP.value = bhp;//enemyhpbar
        return setTimeout(move, 1000);
    }
}
function windPrison()
{
    if(document.hisBars.heroMP.value <= 0 && turn > 0)
    {
        alert("You are out of MP");
    }
    else
    {
        document.getElementById("stage").src = "img/wind.PNG";
        hmp = hmp - 60;
        document.hisBars.heroMP.value = hmp;
        bhp = bhp - 4523; //enemyhp
        document.herHP.bossHP.value = bhp;//enemyhpbar
        return setTimeout(move, 1000);
    }
}
function brightAegis()
{
    if(document.hisBars.heroMP.value <= 0 && turn > 0)
    {
        alert("You are out of MP");
    }
    else
    {
        bhp = bhp - 0; //enemyhp
        document.herHP.bossHP.value = bhp;//enemyhpbar
        hhp = hhp - 0;
        document.hisBars.heroHP.value = hhp;
        document.getElementById("stage").src = "img/bright.PNG";
        hmp = hmp - 60;
        document.hisBars.heroMP.value = hmp;
        return setTimeout(cancel, 1000);
    }

}
function cancel() //alternative function for the function "brighAegis()"
{
    if(document.herHP.bossHP.value <= 0)
    {
        document.getElementById("stage").src="img/youwin.PNG";
    }
    else
    {
        if(document.hisBars.heroHP.value <=0)
        {
            document.getElementById("stage").src="img/gameover.PNG";
        }
        else
        {
            setTimeout(blank, 1000);
            turn += 1;
            return document.time.counter.value = turn;
        }
    }
}
function nature()
{
    if(document.hisBars.heroMP.value <= 0 && turn > 0)
    {
        alert("You are out of MP");
    }
    else
    {
        bhp = bhp - 0; //enemyhp
        document.herHP.bossHP.value = bhp;//enemyhpbar
        document.getElementById("stage").src = "img/nature.PNG";
        hmp = hmp - 25;
        document.hisBars.heroMP.value = hmp;
        hhp = hhp + 1400;
        document.hisBars.heroHP.value = hhp;
        return setTimeout(move, 1000);
    }

}
function onyxDrain()
{
    document.getElementById("stage").src="img/onyx.PNG";
    hhp = hhp + 654;
    document.hisBars.heroHP.value = hhp;
    bhp = bhp - 654; //enemyhp
    document.herHP.bossHP.value = bhp;//enemyhpbar
    hmp = hmp - 0;
    document.hisBars.heroMP.value = hmp;
    return setTimeout(move, 1000);
}
function limit() //Limit breaker
{
    if(turn%5 == 0 && turn !== 0)
    {
        document.getElementById("stage").src="img/arcane.PNG";
        bhp = bhp - 22000; //enemyhp
        document.herHP.bossHP.value = bhp;//enemyhpbar
        return setTimeout(move, 1000);
    }
    else
    {
        alert("Limit overdrive is not ready");
    }
}
function move() //How each turn should play out
{
    if(document.herHP.bossHP.value <= 0)
    {
        document.getElementById("stage").src="img/youwin.PNG";
        setTimeout(refresh , 2000);
    }
    else
    {
            eA = Math.floor(Math.random() * 5);
            enemyAttack();
        if(document.hisBars.heroHP.value <=0)
        {
            document.getElementById("stage").src="img/gameover.PNG";
            setTimeout(refresh , 2000);
        }
        else
        {
            setTimeout(blank, 1000);
            turn += 1;
            return document.time.counter.value = turn;
        }
    }

}
function blank()
{
    document.getElementById("stage").src="img/start.PNG" //for simplicity sake to change back to default picture
}
function refresh()
{
    document.location.reload();
}
function enemyAttack() //enemy attacks
{
    if(eA == 0)
    {
        document.getElementById("stage").src="img/star.PNG";
        hhp = hhp - 1800;
        document.hisBars.heroHP.value = hhp; //hero hp bar
        // "starfall"

    }
    else if (eA == 1)
    {
        document.getElementById("stage").src="img/moon.PNG";
        hhp = hhp - 1100;
        document.hisBars.heroHP.value = hhp;
        //"moonbeam"
    }
    else if (eA == 2)
    {
        document.getElementById("stage").src="img/flare.PNG";
        hhp = hhp - 753;
        document.hisBars.heroHP.value = hhp;
        //"Solar Flare"
    }
    else if (eA == 3)
    {
        document.getElementById("stage").src="img/solar.PNG";
        hhp = hhp - 800;
        document.hisBars.heroHP.value = hhp;
        //"Solar Beam"
    }
    else if (eA == 4)
    {
        document.getElementById("stage").src="img/heal.PNG";
        bhp = bhp + 1000;
        document.herHP.bossHP.value = bhp;
        //"Water Rejuvenation"
    }
}