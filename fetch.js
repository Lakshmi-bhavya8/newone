// const params=new URLSearchParams({query: 'aramaru', type: 1});
// fetch(`https://nekos.best/api/v2/search?${params}`)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))
const postdata={
    title:"Bhavana and Bhavya and Chandralekha",
    body:"This is BBC travel group",
    userId:1
};
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"POST",
    header:{
        "content-type":"application/json",
    },
    body:JSON.stringify(postdata)
}
)
.then(response => response.json())
.then(data => console.log("data", postdata))
