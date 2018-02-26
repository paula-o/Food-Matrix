import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class FocalRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      areaCode: '',
      prefix: '',
      lineNum: ''
    };
    this.sendNumber = this.sendNumber.bind(this);
    this.onAreaCodeEntry = this.onAreaCodeEntry.bind(this);
    this.onPrefixEntry = this.onPrefixEntry.bind(this);
    this.onLineNumEntry = this.onLineNumEntry.bind(this);
  }

  onAreaCodeEntry(e) {
    this.setState({
      areaCode: e.target.value
    })
    console.log(e.target.value);
  }

  onPrefixEntry(e) {
    this.setState({
      prefix: e.target.value
    })
    console.log(e.target.value);
  }

  onLineNumEntry(e) {
    this.setState({
      lineNum: e.target.value
    })
    console.log(e.target.value);
  }

  sendNumber() {
    console.log('sending phone number');
    var phoneNumber = '1' + this.state.areaCode + this.state.prefix + this.state.lineNum;
    var ingredientsMessage = 'Could you please make me ' + this.props.focalRecipe.title + '? ' + 'The ingredients needed are: ' + this.props.focalRecipe.ingredients.reduce((ingredients, ingredient) => ingredients + ', ' + ingredient);
    var component = this;
      $.ajax({
        method: 'POST',
        url: 'https://quiet-ravine-37270.herokuapp.com/sendText',
        data: JSON.stringify({
          number: component.state.phoneNumber,
          ingredients: ingredientsMessage
        }),
        contentType: 'application/json',
        success: (res) => {
          console.log('phone number sent!')
        },
        error: (err) => {
          console.log('phone number failed to send');
        }
    });
  }

  render() {
    return (
      <div>
        <h3>Focal Recipe</h3>
          <ul>
            <div>{this.props.focalRecipe.title} </div>
            <div> <img src={this.props.focalRecipe.image}alt="" /> </div>
          </ul>
        <div>
          <h5>Ingredients List</h5>
            {this.props.focalRecipe.extendedIngredients.map((ingredient) =>
              <ul key={ingredient}> {ingredient.originalString} </ul>
            )}
        </div>

        <form class="ui form">
          <div class="inline fields">
            <div class="field">
              <label>Phone Number</label>
              <div class="ui input">
                <input value={this.state.areaCode} onChange={this.onAreaCodeEntry} type="text" placeholder="(xxx)" />
              </div>
            </div>
            <div class="field">
              <div class="ui input">
                <input value={this.state.prefix} onChange={this.onPrefixEntry} type="text" placeholder="xxx" />
              </div>
            </div>
            <div class="field">
              <div class="ui input">
                <input value={this.state.lineNum} onChange={this.onLineNumEntry} type="text" placeholder="xxxx" />
              </div>
            </div>
          </div>
        </form>

        <button
          onClick={this.sendNumber}>
          Send
        </button>
        <button
          onClick={this.props.addFavorite}>
          Favorite
        </button>
      </div>
    );
  }
}

export default FocalRecipe;