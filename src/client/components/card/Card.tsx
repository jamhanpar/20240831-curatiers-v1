import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Icon, { ICONTYPE } from '../icon/Icon.tsx';

interface ExpandMoreProps {
  expand: boolean;
  children: JSX.Element;
  onClick: () => void;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="relative" sx={{ maxWidth: 345 }}>
      <CardMedia
        className="round-2xl w-52 aspect-square"
        component="img"
        height="194"
        // image="/static/images/cards/paella.jpg"
        image="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="AirPods Max"
      />
      <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-neutral-100/40 w-full aspect-square">
        <CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton aria-label="settings">
              <Icon iconKey={ICONTYPE.VERTICAL_MORE} />
            </IconButton>
          }
          title="AirPods Max"
          // subheader="September 14, 2016"
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Icon iconKey={ICONTYPE.UNLIKE} />
          </IconButton>
          <IconButton aria-label="bookmark">
            <Icon iconKey={ICONTYPE.BOOKMARK} />
          </IconButton>
          <IconButton aria-label="share">
            <Icon iconKey={ICONTYPE.SHARE} />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Icon iconKey={ICONTYPE.EXPAND} />
          </ExpandMore>
        </CardActions>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A perfect balance of exhilarating high-fidelity audio and the
            effortless magic of AirPods
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
