import "./ourHeros.css"; 
const OurHeros = () => {

 const imgJson = [
   {"name": "John", "company": "TechGuru", "image": "https://i.ibb.co/qsyjwph/m-4.png"},
   {"name": "Alice", "company": "ABC Corp", "image": "https://i.ibb.co/NWVshCT/f-5.png"},
   {"name": "Bob", "company": "XYZ Inc", "image": "https://i.ibb.co/hFXTJmQ/f-4.png"},
   {"name": "Mickel", "company": "Tech Enterprises", "image": "https://i.ibb.co/dcJqFVn/m-5.png"},
    {"name": "Eve", "company": "Tech Solutions", "image": "https://i.ibb.co/myWrYYq/f-2.png"},
    {"name": "Emma", "company": "Coding World", "image": "https://i.ibb.co/ZTQ5gjY/f-3.png"},
    {"name": "Michael", "company": "Software Co", "image": "https://i.ibb.co/ws6dS81/m-3.png"},
    {"name": "Sophia", "company": "Designers Inc", "image": "https://i.ibb.co/m81NmBh/f-1.png"},
    {"name": "William", "company": "Data Corp", "image": "https://i.ibb.co/Qjd8qHb/m-2.png"},
    {"name": "Olin", "company": "Tech Innovations", "image": "https://i.ibb.co/yPLstdc/m-1.png"}
  ]
  


  return (
    <div className="flex flex-col items-center my-myMargin">
      <h1 className="text-4xl font-semibold my-titleMargin">Our Heros</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {
          imgJson.map((data,id)=>(
            <div key={id} >
              <div className="hexagon">
                <img src={data.image} alt="Hexagon Image" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-medium">{data.name}</p>
                <p>{data.company}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default OurHeros;
