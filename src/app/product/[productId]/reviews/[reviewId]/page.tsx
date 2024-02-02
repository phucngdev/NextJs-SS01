const ReviewId = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <>
      Review {params.reviewId} for {params.productId}{" "}
    </>
  );
};

export default ReviewId;
