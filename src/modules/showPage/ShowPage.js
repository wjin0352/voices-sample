import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ShowPage extends Component {
  render() {
    const data = this.props.showsList.find(card => String(card.show.id) == this.props.match.params.id );
    console.log('data: ', data);

    const htmlTagRe = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    let html = data.show.summary;
    let plainText = html.replace(htmlTagRe, '');
    return (
      <Card>
        <CardHeader
          title={data.show.name}
          subtitle={data.show.network.name}
        />
        <CardMedia
          overlay={<CardTitle title={data.show.name} subtitle={`runtime: ${data.show.runtime}`} />}
        >
          <img src={data.show.image.original} />
        </CardMedia>
        <CardTitle title={data.show.network.name} subtitle={data.show.premiered} />
        <CardText>
          { plainText ? plainText : "No Summary..." }
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
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
