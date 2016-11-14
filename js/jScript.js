var iProgress = [0,0,0,0];
var timers = [0,0,0,0];

function progress(val,idx)
{

  if(iProgress[idx] >= val)
  {
    //clearInterval(timers[idx]);
    //return;
    iProgress[idx] = 0;
    for(var i = 0; i <val; i++)
    {
      document.getElementById('bar'+idx).children[i].style.backgroundColor = 'grey';
    }
  }


//console.log(iProgress[idx],val,idx);

  for(var i = 0; i <=iProgress[idx]; i++)
  {
    //console.log(iProgress[idx],val,idx,i);
    document.getElementById('bar'+idx).children[i].style.backgroundColor = 'green';
  }
  iProgress[idx]++;
  timers[idx] = setTimeout(progress, 900, val,idx);
}
