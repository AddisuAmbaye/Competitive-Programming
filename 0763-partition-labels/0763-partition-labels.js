/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) 
{
        var len = S.length, groups = Array(26).fill({start:len+1, end:0}), result =[];
        const aStart = 'a'.charCodeAt(0);
        
        if(S == '')
                return [];
        
        for(let i=0; i<len; i++)
        {
                let ind = S.charCodeAt(i)-aStart;
                groups[ind] = {start:Math.min(groups[ind].start,i), end:i};
        }
        groups.sort((a,b)=>a.start-b.start);
    
        let curr = groups[0];
        for(let i=1; i<groups.length; i++)
        {
                if(groups[i].start > len)
                        break;
                if(groups[i].start <= curr.end)
                        curr.end = Math.max(curr.end, groups[i].end);
                else
                {
                        result.push(1+curr.end-curr.start);
                        curr = groups[i];
                }
        }
        result.push(1+curr.end-curr.start);
        
        return result;
};