import React, { Component } from "react";
import { View, StyleSheet, FlatList,Image } from "react-native";
import { Card ,ListItem} from "react-native-elements";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";
export default class RecommendedMoviesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs ${minutes} mins`;
  }

  getData = () => {
    const url = "http://localhost:5000/recommended-movies";
    axios
      .get(url)
      .then(async response => {
        this.setState({ data: response.data.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItems = ({ item, index }) => {
    return (
      <ListItem 
      key={index}  

      
        bottomDivider>
        <Image style={{height : 50,width : 50}} source={{ uri: item.poster_link }}/>
      <ListItem.Content>
          <ListItem.Title style= {{color: 'black',fontWeight:"bold"}}> {item.title}</ListItem.Title>
          <ListItem.Subtitle style={{color : 'green'}}>{item.release_date}</ListItem.Subtitle>
                    

          
      </ListItem.Content>
   
        </ListItem>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    color: "#fff",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(25),
    marginTop: RFValue(65)
  },
  subtitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(15)
  },
  cardContainer: {
    flex: 1,
    borderRadius: RFValue(10),
    justifyContent: "center",
    height: RFValue(110),
    marginBottom: RFValue(20)
  }
});