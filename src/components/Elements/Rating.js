
export const Rating = ({rating}) => {
    let ratingArray = Array(5).fill(false);
    for (let idx=0; idx<rating; idx++) {
        ratingArray[idx] = true;
    }

  return (
    ratingArray.map((rating, idx) => (
        rating ? <i key={idx} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i> : <i key={idx}className="text-lg bi bi-star text-yellow-500 mr-1"></i>
    ))
  )
}
