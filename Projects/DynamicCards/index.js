//dummy data

// const posts=[
//     {
//         title: "This is title 1",
//         body: "this is body1"
//     },
//     {
//         title: "This is title 2",
//         body: "this is body2"
//     },
//     {
//         title: "This is title 3",
//         body: "this is body3"
//     },
//     {
//         title: "This is title 4",
//         body: "this is body4"
//     },
//     {
//         title: "This is title 5",
//         body: "this is body5"
//     },
//     {
//         title: "This is title 6",
//         body: "this is body6"
//     },
//     {
//         title: "This is title 7",
//         body: "this is body7"
//     },
//     {
//         title: "This is title 8",
//         body: "this is body8"
//     }
// ];

//fetch data
const fetchData=async(config)=>{
    try{
        const res=await axios(config);
    return res.data;
   }catch(err){
    throw err("data is not fetched");
   }
    
}

//fetchData("https://jsonplaceholder.typicode.com/posts");

{/* <div class="post">
            <h4 class="post-title">post title 1</h4>
            <p class="post-body">post description 1</p>
        </div>  */}

//selection
const postsElement=document.querySelector('.posts');

const loadAllData=async()=>{
    const posts=await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
             <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
};

loadAllData();

    