class Github{
   constructor(url){
       this.url="https://api.github.com/users/";
   }
   
   async GithubgetData(user){
    const userData=await fetch(this.url+user);
    const resposData=await fetch(this.url+user+"/repos");

    const userDataJson=await userData.json();
    const resposDataJson=await resposData.json();

    return {
        users:userDataJson,
        repos:resposDataJson
    };

      
   }

}