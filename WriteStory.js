import * as React from 'react';
import {StyleSheet,View,Text,KeyboardAvoidingView,TextInput,Button} from 'react-native';
import {Header }from 'react-native-elements';

export default class WriteStory extends React.Component{
    constructor(){
        super();
        this.state = {
            story:'',
            title:'',
            author:''
        }

    }
    render(){
        return(
        <View>

            <KeyboardAvoidingView>
            <Header 
            backgroundColor = 'yellow'
            centerComponent = {{text:'WriteStory',style:{fontSize:25}}}
            
            />
            <TextInput
            style={{
                width:100,
                height:50,
                border:'solid'
            }}
            placeholder = "Title of the story"
            onChangeText = {(text)=>{this.setState({
                title:text
            })}}
            />

            <TextInput
            style={{
                width:100,
                height:50,
                border:'solid'
            }}
            placeholder = "Author of the story"
            onChangeText = {(text)=>{this.setState({
                author:text
            })}}
            />
<TextInput
style={{
    width:100,
    height:50,
    border:'solid',

}}
multiline={true}
numberOfLines={8}
placeholder = "Story"
onChangeText = {(text)=>{this.setState({
    story:text
})}}
/>
<Button title="SAVE">

</Button>
</KeyboardAvoidingView>
            </View>
        )
    }   
    
}