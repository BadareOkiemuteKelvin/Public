import React,{useEffect, useState} from "react"
import ProductSkeleton from "../Products/Skeletonloading/ProductSkeleton";


const EditUserList = ({dataX}) =>
{
    const userName = "Joy"//dataX.map((data)=>data.name)
    const userEmail = dataX.map((data)=>data.email)
    const userPassword = dataX.map((data)=>data.password)
    const userPhone = dataX.map((data)=>data.phone)
    const userAddress = dataX.map((data)=>data.address)
    const [name,setName] = useState(userName)
    const [email,setEmail] = useState(userEmail)
    const [password,setPassword] = useState(userPassword)
    const [phone,setPhone] = useState(userPhone)
    const [address,setAddress]=useState(userAddress)
 

      const handleSubmit=()=> {      
        const id = JSON.parse(localStorage.getItem("name"));
      const Update_User = async () => 
       {
         
         const requestOptions = {
           method: 'PUT',
           Accept:'application/json',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({"name":`${name}`,"id":`${id}`})
            };       
           fetch('https://expressapiz.herokuapp.com/users',requestOptions)
          
       }
       Update_User();     

      }
   return (
    <div >
       <p className="p-10 fs-3">Edit User</p>   
       <form>
        <div class="mb-3"> 
         <label class="form-label">User Monex</label>
         <input type="text" class="form-control"  placeholder={name} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="text" class="form-control"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input type="text" class="form-control"  value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div class="mb-3">
          <label class="form-label">Address</label>
          <input type="text" class="form-control"  value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

  </div>
   )
}


const EdithUser = () => 
{
    const userID = JSON.parse(localStorage.getItem("name"));
    const [user,setUsers] =useState([]);
    const [isLoading, setLoading] = useState(true);
    const [LMT, setLMT] = useState(10);
    const [SQL, setSQL] = useState(`SELECT * FROM users WHERE id = 120`);
    const [f,setF] = useState(1)
    const getUser = async () => 
    {
      
      const requestOptions = {
        method: 'POST',
        Accept:'application/json',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"LMT":`${LMT}`,"sql":`${SQL}`})
         };
  
       try 
       {    
        const response = await fetch('http://expressapiz.herokuapp.com/users',requestOptions)
        const fetchedUsers = await response.json();
        setUsers(fetchedUsers); 
        setLMT(10)   
          
      } 
      catch (error) {console.error(error);}finally {if(user.length>0){setLoading(false); setF(f+1) }}
    }
  
  useEffect(()=>{
    getUser();
  })   
    
   return(
    <div>           
        {isLoading?<ProductSkeleton />:<EditUserList dataX = {user} />}
    </div>
);

}

 
export default EdithUser;