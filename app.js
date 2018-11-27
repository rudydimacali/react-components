/* ---------------------------------------
Creating & Rendering a React Component

// var GroceryList = () => (
//   <ul>
//     <li>Milk</li>
//     <li>Lactaid</li>
//   </ul>
// );
------------------------------------------
*/

/* ---------------------------------------
Creating and Rendering Nested React Components

// var GroceryList = (props) => (
//   <div>
//     <h2>My Grocery List</h2>
//     <ul>
//       <Milk />
//       <Lactaid />
//     </ul>
//   </div>
// );

// var Milk = () => (
//   <li>Milk</li>
// )

// var Lactaid = () => (
//   <li>Lactaid</li>
// )
------------------------------------------
*/

/* ---------------------------------------
Component Properties aka "Props"

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
      <ListItems items = {['Milk', 'Lactaid', 'Tums']}/>
  </div>
);

var ListItems = (props) => {
  var listToReturn = _.map(props.items, function(item, i) {
  return <GroceryListItem item = {item} key = {i}/>});
  return <ul>{listToReturn}</ul>;
};

var GroceryListItem = (props) => (
  <li>{props.item}</li>
)
------------------------------------------
*/

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <ListItems items={['Milk', 'Lactaid', 'Tums']} />
  </div>
);

var ListItems = (props) => {
  var listToReturn = _.map(props.items, function (item, i) {
    return <GroceryListItem item={item} key={i} />
  });
  return <ul>{listToReturn}</ul>;
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
      <li style={style} onMouseOver = {this.onListItemHover.bind(this)} onMouseOut = {this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }

}


ReactDOM.render((<GroceryList />), document.getElementById('app'));