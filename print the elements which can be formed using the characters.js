let array=["Rat" , "mat" , "bat" , "chat" , "cat" , "tab" , "fab" , "batt"];
let characters_array=['t' , 'a' , 'b' , 'c'];
let duplicate_array=[];

for(let index=0 ; index < array.length ; index++)
{
    let element=array[index];
    let flag=0;
    let duplicate_array = characters_array.slice();
    
    for(let index1=0 ; index1 < element.length ; index1++)
    {
        let check = element[index1];
        let flag1 = 0;
        
        for(let index3=0 ; index3 < duplicate_array.length ; index3++)
        {
            if(duplicate_array[index3] === check)
            {
                duplicate_array[index3] = ' ';
                flag1 = 1;
                break;
            }
        }
        
        if(flag1 === 0)
        {
            flag = 1;
            break;
        }
    }
    
    if(flag === 0)
    {
        print(element);
    }
}