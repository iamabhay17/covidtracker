import React,{useEffect , useState} from 'react'

const Covid = () => {

        
        const [data, setData] = useState([]);


        const getCovidData= async()=>
        {
            try {
                  const res = await fetch("https://data.covid19india.org/data.json");
                  const actualData = await res.json();

                  setData(actualData.statewise[0]);

                } catch (error) {
                console.log("error")
            }
        }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
          <h1 className="container" style={{textAlign:'center',paddingTop:'2rem'}}>Covid<span style={{color:'red'}}>Tracker</span></h1>
         


 <div className="card-group container my-4">
           <div className="card">
            
            <div className="card-body bg-warning " style={{border:'2px solid black'}}>
              <h4 className="card-title">Country</h4>
               <p className="card-text"><h1 style={{ color:'red' }}>INDIA</h1></p>
             </div>
           </div>

           <div className="card">
            
             <div className="card-body bg-warning " style={{border:'2px solid black'}}>

              <h4 className="card-title">Total Recovered</h4>
               <p className="card-text"><h1 style={{ color:'red' }}>{data.recovered}</h1></p>
             </div>
            </div>

           <div className="card">
            
             <div className="card-body bg-warning " style={{border:'2px solid black'}}>

              <h4 className="card-title">Total Confirmed</h4>
               <p className="card-text"><h1 style={{ color:'red' }}>{data.confirmed}</h1></p>
             </div>
           </div>
 </div>

 <div className="card-group container my-4">
           <div className="card">
            
             <div className="card-body bg-warning" style={{border:'2px solid black'}}>

              <h4 className="card-title">Total Death</h4>
               <p className="card-text"><h1 style={{ color:'red' }}>{data.deaths}</h1></p>
             </div>
           </div>

           <div className="card">
            
             <div className="card-body bg-warning" style={{border:'2px solid black'}}>

              <h4 className="card-title">Total Active</h4>
               <p className="card-text"><h1 style={{ color:'red' }}>{data.active}</h1></p>
             </div>
            </div>

           <div className="card">
            
             <div className="card-body bg-warning" style={{border:'2px solid black'}}>

              <h4 className="card-title">Last Updated</h4>
               <p className="card-text"><h1 style={{ color:'red' }}>{data.lastupdatedtime}</h1></p>
             </div>
           </div>
 </div>

 </>
)}

export default Covid
