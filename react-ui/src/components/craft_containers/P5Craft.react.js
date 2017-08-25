import React from 'react';
import p5 from "p5";
import {Button} from 'semantic-ui-react'
import anime from 'animejs'
import $ from 'jquery'

//TODO Better back button
//TODO Preserve home scroll

class P5Craft extends React.PureComponent {
  componentDidMount() {
    var sketch = require('../../crafts/p5/' + this.props.params.title + '/Main');
    //noinspection JSPotentiallyInvalidConstructorUsage
    this.craft = new p5(sketch.default);
    anime({
      targets: '.craft',
      scale: [0.9, 1],
      easing: 'easeOutQuad',
      duration: 500,
    })
  }

  componentWillUnmount() {
    if (this.craft.interval) {
      clearInterval(this.craft.interval)
    }
    $('.incoming.year').remove();
    $('.ui.circle').remove();
    this.craft.remove()
  }

  handleClose = () => {
    $('.incoming.year').remove();
    $('.ui.circle').remove();

    this.props.router.push('/');
    // anime({
    //   targets: '.craft',
    //   scale: 0,
    //   easing: 'easeOutQuad',
    //   duration: 5000,
    // })
  };

  render() {
    return (
      <div className="craft">
        <Button floated="left" icon={"close"} circular className={"navbar"} onClick={this.handleClose}/>
        <div id='sketch'/>
      </div>
    );
  }
}

export default P5Craft;
