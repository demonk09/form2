import './App.css'
export default function App() {
  let a=[{"name":"mobile","price":25000,"rating":"3.4","model":"samsung","pic":"https://i.postimg.cc/Pr5PB7W0/image.jpg"},
{"name":"laptop","price":250000,"rating":"3.4","model":"HP","pic":"https://i.postimg.cc/QdSKB3X8/images11.jpg"},
{"name":"mic","price":2500,"rating":"3.4","model":"samsung","pic":"https://i.postimg.cc/t41tHJd0/image.jpg"},
{"name":"Pen","price":20,"rating":"3.4","model":"samsung","pic":"https://i.postimg.cc/2Scknjg5/image.jpg"},
{"name":"papper","price":500,"rating":"3.4","model":"samsung","pic":"https://i.postimg.cc/MH73VDK8/paper.jpg"}
]
  return (
    <div className="con" >
  
      {
        a.map((item)=>{
          return(
          
          <div className="card">
              <div className="pimg">
                  <img src={item.pic} alt=""/>
              </div>
              <h1>Name:{item.name}</h1>
              <p>Price:{item.price}</p>
              <p>Rating:{item.rating}</p>
              <p>Brand:{item.model}</p>
              <button>ADD TO CART</button>
          </div>
          )
        })

      }
    </div>
  )
}
