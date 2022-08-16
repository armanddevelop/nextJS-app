import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="container-loading">
      <CircularProgress />
      <style jsx>{`
        .container-loading {
          margin: 25px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Loading;
