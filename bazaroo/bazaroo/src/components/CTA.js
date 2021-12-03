import './CTA.css';

function CTA() {
  return (
    <div className='cta_container'>

        <div className='cta_content'>
           <h1>Cum funcționează ?</h1>
           <div className='cta_category'>
               <div className='cta_profesie'>
                   <p>Știi prea multe si vrei să predai?<br/>Înscrie-te ca profesor.</p>
                   <button>Predau</button>
               </div>
               <div className='cta_profesie'>
                   <p>Știi prea puține si vrei să înveți?<br/>Înscrie-te ca student.</p>
                   <button>Învăț</button>
               </div>
           </div>
        </div>

    </div>
      
  );
}



export default CTA;

