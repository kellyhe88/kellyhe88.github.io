import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    margin: "0 0 0 0",
    // border: "1px white solid",
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // border: "1.5px white solid",
    padding: "0 0 0 0",
    margin: "0 auto 0 auto",
    // width: "auto",
    // height: "auto",
    alignItems: 'center',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  gridListTile: {
    border: `3px ${theme.palette.primary.dark} solid`,
    "&:hover": {
      transform: "scale(1.3)",
      zIndex: 1,
      width: "auto",
      border: `none`
    }
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function GridImages() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={0.6} rows={0.6} className={classes.gridListTile}>
            <img src={tile.img} alt={tile.title} />
            {/* <GridListTileBar classes={classes.titleFont}
              title={tile.title}
              titlePosition="bottom"
            /> */}
          </GridListTile>
        ))}
      </GridList>

    </div>
  );
}
