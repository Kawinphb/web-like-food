import StarIcon from "@mui/icons-material/Star";

function RenderStar({ rate }) {
  return (
    <>
      {Array.from(Array(rate), (e, i) => {
        return (
         <StarIcon key={i}/>
        )
      })}
    </>
  );
}

export default RenderStar;
