import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridListSimple: {
    width: 500,
    height: 450
  },
  gridListComplex: {
    width: 500,
    height: 450
  }
};

class SampleList extends Component {
  noResults() {
    return (
      <div>
        <h2>Sorry your search returned no results... Try another search</h2>
      </div>
    );
  }

  simpleGridCard(data) {
    return (
      <div>
          <div style={styles.root}>
            <GridList
              cellHeight={300}
              style={styles.gridListSimple}
            >
              <Subheader>December</Subheader>
              {data.map((tile) => (
                <GridTile
                  key={tile.show.id}
                  title={tile.show.name}
                  subtitle={<span>by <b>{tile.show.type}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  { !tile.show.image ? <h1>No Image</h1> : <img src={tile.show.image.original} /> }
            </GridTile>
              ))}
            </GridList>
          </div>
      </div>
    );
  }

  complexGridCard(data) {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          style={styles.gridListComplex}
        >
          <Subheader>Search results: </Subheader>
          {data.map((tile) => (
            <GridTile
              key={tile.show.id}
              title={tile.show.name}
              subtitle={<span>by <b>{tile.show.type}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={ (tile.score > 17.0 ) ? 2 : 1}
              rows={ (tile.score > 17.0 ) ? 2 : 1}
            >
              { !tile.show.image ? <h1 id="no_image"> No Image </h1> : <img src={tile.show.image.original} />
              }
            </GridTile>
          ))}
        </GridList>
      </div>
    );  
  }

  render() {
    const data = this.props.showsList;
    return (
      <div style={styles.root}>
        <GridList 
          cols={2}
          cellHeight={500}
          padding={1}
          style={styles.gridListSimpleComplex}
        >
        { (this.props.showsList) ? (<h3>{this.complexGridCard(data)}</h3>) : this.noResults()}
        </GridList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showsList: state.shows.newShows
  };
}

export default connect(mapStateToProps)(SampleList);
