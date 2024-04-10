import react from 'react';
function Gal({data}){
    return (
    <div className='comp'>
        {data.map((image)=><div className='img' key={image.id}>
<img src={image.webformatURL}
height="200px" width="250px" alt="title"/>
<div className='desc'>
    <h5>{image.tags}</h5>
    <a href={image.largeImageURL} alt="title">view</a>
</div>
            </div>)}
    </div>
)
}
export default Gal;