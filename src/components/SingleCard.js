import './SingleCard.css';

export default function SingleCard({ id, src }) {
  return (
    <div className="card" key={id}>
      <div>
        <img className="front" src={src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="card back" />
      </div>      
    </div>
  )
}
