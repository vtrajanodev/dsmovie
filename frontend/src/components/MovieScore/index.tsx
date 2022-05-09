import { MovieStars } from 'components/MovieStars'
import './styles.css'

export const MovieScore = () => {

  const score = 4.5;
  const count = 13;

  return (
    <div className="mr-3">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  ) 
}
