import * as React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default class ReadStory extends React.Component{
    constructor(){
        super();
        this.state = {
            allStories:[]
        }
    }retrieveStories=()=>{
        var allStories = []
        var Stories = db.collection('Stories').get().then((Snapshot)=>{
Snapshot.forEach(doc => {
    allStories.push(doc.data())
});
this.setState({allStories})
        })
    }
    render(){
        return(
            <Text>Welcom to ReadStory screen</Text>
        )
    }   
    
}