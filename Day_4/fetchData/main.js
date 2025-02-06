function getInfo() {
    return new Promise((res) => {
      //const time = Math.floor(Math.random() * 200);
      const user = {
        name: ['Gauri','Nikta','Aditi','Vidya','Ishwari']
      };
    
    if(user.name[0]===''){
        console.log("Sorry, Something went wrong ):");
    }
    else{
      setTimeout(() => {
        console.log(user.name);
        res();
      }, 2000);
    }
    });
  }
  
  async function fetchedData() {
   await getInfo();
  }
  
  fetchedData();
