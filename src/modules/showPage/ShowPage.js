import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  card: {
    width: "50%",
    margin: "5em auto"
  },
  header: {

  },
  media: {
    width: 500,
    height: 450
  },
  title: {

  },
  text: {

  }
}

class ShowPage extends Component {
  render() {
    const data = this.props.showsList.find(card => String(card.show.id) == this.props.match.params.id );
    console.log('data: ', data);

    const htmlTagRe = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    let html = data.show.summary;
    let plainText = html.replace(htmlTagRe, '');
    return (
      <Card className="showCard">
        <CardHeader
          title={data.show.name}
          subtitle={data.show.language}
        />
        <CardMedia
          overlay={<CardTitle title={data.show.name} subtitle={`runtime: ${data.show.runtime}`} />}
        >
          <img src={data.show.image.original} />
        </CardMedia>
        <CardTitle title={data.show.language} subtitle={data.show.premiered} />
        <CardText>
          { plainText ? plainText : "No Summary..." }
        </CardText>
        <CardActions>
          <FlatButton label="Go Back" onClick={() => history.goBack()}/>
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    showsList: state.shows.newShows
  };
}

export default connect(mapStateToProps)(ShowPage);
