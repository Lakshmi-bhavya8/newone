// const apikey="900398b9547f4ed2a346ba1116ccd21f";
// const apiUrl="https://api.discogs.com";
// async function fetchsong(statistics){
//   try{
//     const fullUrl = `${apiUrl}?key=${apikey}&q=${encodeURIComponent(statistics)}`;
//     const response=await fetch(fullUrl);
//     if(!response.ok){
//       throw new Error(`Error:${response.status} ${response.statusText}`);
//     }
//     const data=await response.json();
//     console.log("musicdata:",data);
//     return data;
//   }catch(error){
//     console.log( "failed to fetch music data:",error);
//   }
// }

// fetchsong("song");


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Music app</h1>
    <input type="text" id="city" placeholder="Enter song ">
    <button id="fetchMusic">Get song</button>
    <div id="MusicData"></div>
<script>
    const apikey="7f5194083bf24ab08b5555585376b180";
    const apiUrl="https://api.discogs.com";
    async function fetchMusic(statistics){
    try{
        const fullUrl = ${apiUrl}?key=${apikey}&q=${encodeURIComponent(statistics)};
        const response=  await fetch(fullUrl);
        if(!response.ok){
        throw new Error(Error:${response.status} ${response.statusText});
        }
        const data=await response.json();
        console.log(data);
        document.getElementById("MusicData").innerHTML=`
        <h5>${statistics.releases}</h5>
        <h5>${statistics.artists}</h5>
        <h5>${statistics.labels}</h5>
        
        `;
   }catch(error){
    console.error("failed to fetch music data:",error);
   }
}
document.getElementById('fetchMusic').addEventListener('click',()=>{
    const city=document.getElementById('statistics').value;
    fetchMusic(statistics);
});

</script>


</body>
</html>