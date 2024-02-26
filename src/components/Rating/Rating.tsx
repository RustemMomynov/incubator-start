import { FC } from "react";

interface RatingComponentProps {
  value: 0 | 1 | 2 | 3 | 4 | 5;
}

const RatingComponent: FC<RatingComponentProps> = (value) => {
  let ratingArray = [];

  return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
    </div>
  );
};

interface StarComponentProps {
  selected: boolean;
}

const Star: FC<StarComponentProps> = ({ selected }) => {
  let selectedColor = selected ? "purple" : "white";

  return (
    <span style={{ color: selectedColor }} className="star">
      <b>*</b>
    </span>
  );
};

export default RatingComponent;
