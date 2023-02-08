let date=new Date();
let day=date.getDay();
if(day==0 || day==6)
{
    console.log("Weekend");
}
else
{
    console.log("Week Days");
}
let hours=date.getHours();
if(hours<=1 && hours<12)
{
    console.log(hours+"AM");
}
else
{
    console.log(hours+"PM");
}
let day_list=["Sunday","Monday","Tuesday","wednesday","Thusday","Friday","Saturday"]

day_list.forEach((value,index)=>
{
    if(day==index)
    {
        console.log(value);
    }
})