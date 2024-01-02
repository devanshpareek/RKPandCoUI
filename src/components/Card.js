import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import myImg from "../Images/myImg.jpg";

export default function MediaControlCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ display: "flex", margin: "1rem" }}>
      <CardMedia
        component="img"
        sx={{ width: 151, height: 200, borderRadius: 40 }}
        image={myImg}
        alt="Live from space album cover"
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", textAlign: "justify" }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            <b>{props.props.name}</b>
          </Typography>
          <Typography component="div" variant="h7">
            <b> {props.props.degrees}</b>
          </Typography>
          <Typography component="div">
            {expanded
              ? props.props.updatedContent
              : props.props.updatedContent.slice(0, 250)}
            <p onClick={() => setExpanded(!expanded)}>
              <b>{expanded ? "...show less" : " ...read more"}</b>
            </p>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
