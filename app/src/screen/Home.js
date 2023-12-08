import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <section className="hero-section">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJhemlsfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1535139262971-c51845709a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="safest-countries-to-travel container">
        <h3 className="text-center text-uppercase pt-4">Safest Countries to travel in 2024</h3>
        <div className="row">
  <div className="col-lg-4 col-md col-sm-12">
    <div className="card mx-auto" style={{width: "100%"}}>
      <img src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D" classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Switzerland</h5>
        <p className="card-text">Switzerland, officially the Swiss Confederation, is a landlocked country in Central Europe. It's located at the meeting point of Western, Central, and Southern Europe.</p>
        <div className='d-grid'>
      </div>
    </div>
  </div>
  </div>
  <div className="col-lg-4 col-md col-sm-12">
    <div className="card mx-auto" style={{width: "100%"}}>
      <img src="https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FuYWRhfGVufDB8fDB8fHww" classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Canada</h5>
        <p className="card-text">Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline.</p>
        <div className='d-grid'>
      </div>
      </div>
    </div>
  </div>


  <div className="col-lg-4 col-md col-sm-12">
    <div className="card mx-auto" style={{width: "100%"}}>
      <img src="https://plus.unsplash.com/premium_photo-1661963290283-a1883fb9582a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm9yd2F5fGVufDB8fDB8fHww" classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Norway</h5>
        <p className="card-text">Norway is a Nordic country in northern Europe. It's the westernmost country in the Scandinavian Peninsula, sharing it with Sweden and Finland. Norway also includes the Arctic island of Jan Mayen and the Svalbard archipelago.</p>
        <div className='d-grid'>
      </div>
      </div>
    </div>
  </div>
</div>


       
      <section className='container-fluid bg-success bg-gradient mt-4 text-center' style={{ minHeight: '150px' }}> 
    <div className='d-flex flex-column justify-content-center align-items-center mx-auto'>
        <i className="fs-1 text-warning my-3 fa-solid fa-earth-americas"></i>
        <h3 className='text-white text-uppercase'>New Features Coming Soon</h3>
        <button className='fw-bold btn btn-warning my-2 text-uppercase'></button>
    </div>
</section>
<section>
      
</section>

            </section>
            <section className="country-of-the-month container">
        <h3 className="text-center text-uppercase py-5">Country of the Month- Peru</h3>
        <h4 className="text-center py-2">Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites. On Peru’s arid Pacific coast is Lima, the capital, with a preserved colonial center and important collections of pre-Columbian art.</h4>
        <div className="container overflow-hidden text-center">
  <div className="row gy-5">
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVydXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />

      </div>
    </div>
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1632913582790-d0ec5882095a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVydXxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="..." />

      </div>
    </div>
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1631231248242-f82e0a0e2ea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnV8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />

      </div>
    </div>
    <div className="col-6">
      <div className="p-3">
      <img src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnV8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />

      </div>
    </div>
  </div>
</div>
      </section>


    </div>
  );
}

export default Home;