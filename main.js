var images=[
    "https://i.postimg.cc/MKdhy06Z/family.jpg",
    "https://i.postimg.cc/L6HcYQM0/grand-father.png",
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg",
    "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"

];
var names=[
    "family book",
    "hukam chand daga",
    "akash bhansali",
    "yashvi kumat",
    "shradha daga ",
    "shanti daga "
];
var i=0;
function change(){
    document.getElementById("family1").src=images[i];
    document.getElementById("family2").innerHTML= names[i];
i++;
if(i>5)
{
    i=0;
}
}

