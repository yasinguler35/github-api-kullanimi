class Storage{
    
    static storageAllData(){
     let data;

     if (localStorage.getItem("searched")===null) {
         data=[];
     } else {
         data=JSON.parse(localStorage.getItem("searched"));
     }
     return data;

    }

    static addStorageSetData(username){
         let datauser=this.storageAllData();
         if (datauser.indexOf(username)===-1) {
             datauser.push(username);
         }
         localStorage.setItem("searched",JSON.stringify(datauser));
    }

    static clearStorageData(){
        localStorage.removeItem("searched");

    }




}