//Part1:Arrays
function sum(arr)
{
    let total=0;
    for(let i=0;i<arr.length;i++)
    {
        total+=arr[i];
    }
    return total;
}

function average(arr){
    return sum(arr)/arr.length;
}
function min(arr)
    {
        let min= arr[0];
        for(let i=1;i<arr.length;i++)
        {
            if(arr[i]<min)
            {
                min=arr[i];
            }
        }
        return min;
    }

function max(arr)
{
    let max=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;     
}
//Test Part 1
console.log("Sum: ", sum([1,2,3,4,5]));
console.log("Average: ", average([1,2,3,4,5]));
console.log("Min: ", min([1,2,3,4,5]));
console.log("Max: ", max([1,2,3,4,5]));

// Part2: Strings 

function capalize(str)
{
    return str[0].toUpperCase()+str.slice(1);
}
function reverse(str)
{
    return str.split("").reverse().join("");
}
function countVowels(str)
{
    let count=0;
    str=str.toLowerCase();
    for(let i=0; i<str.length;i++)
    {
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u')
        {
            count++;
        }
    }
    return count;
 
}

//Test Part 2
console.log("Capalized: ", capalize("hello"));
console.log("Reversed: ", reverse("hello"));
console.log("Vowel Count: ", countVowels("hello"));

// PArt 3: Objects

const student={ name: "Jyo Thi", age: 20, grades: [85,90,78],
    getAverage: function()
    {
        let sum=0;
        for(let i=0;i< this.grades.length;i++) 
            {
                sum+=this.grades[i];

            }       
            return sum/this.grades.length;
    },
    isHonorRoll : function()
    {
        return this.getAverage()>85;
    }

}
//Test Part 3
console.log("Student Average: ", student.getAverage());
console.log("Is Honor Roll: ", student.isHonorRoll());
