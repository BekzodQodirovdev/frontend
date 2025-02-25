const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className="bg-transparent p-0 cursor-pointer"
                        aria-label={`${ratingValue} yulduz`}
                    >
                        <span
                            className={`text-3xl ${
                                ratingValue <= rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                            } transition-colors duration-300`}
                        >
                            ★
                        </span>
                    </button>
                );
            })}
            {rating > 0 && (
                <span className="text-gray-600 ml-2">{rating}/5</span>
            )}
        </div>
    );
};

export default StarRating;
