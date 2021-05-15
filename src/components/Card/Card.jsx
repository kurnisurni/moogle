import { Badge } from "@material-ui/core";
import { img_300, unavailable } from '../../config/config';
import "./Card.css";
import InfoModal from '../InfoModal/InfoModal'

const Card = ({ 
    id,
    poster, 
    title, 
    date, 
    media_type, 
    vote_average 
}) => {

  return (
      <InfoModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className="title">{title}</b>
        <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className="subTitle">{date}</span>
        </span>
        </InfoModal>
  );
};

export default Card;