import React, {Component} from "react";
import {Input} from "antd";
// similar to fetch, its a promise based XHR library to make http requests
import axios from "axios";
import { connect } from 'react-redux'
import {handleNewBlog} from "../actions/blogAction";

const { TextArea } = Input;

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: ""
        }

    }
   onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
   onSubmit = e => {
    //    prevent default must be run to avoid making a default request to /?title=""?description=""
       e.preventDefault()
        console.log(e)
        axios.post('/api/blogs', {
            title: this.state.title,
            description: this.state.description
        })
        .then((response) => {
            console.log(response)
            // call the function passed by the parent to take a local copy of the blog
            this.props.handleNewBlog(response.data)
        })
        .catch(err =>  console.log(err))
        // make a post request to the server
    }

    render(){
        return(
            <div>
                <form>
                    <Input 
                        placeholder="input with clear icon" 
                        allowClear 
                        name="title"
                        onChange={this.onChange} />
                    <br />
                    <br />
                    <TextArea 
                        placeholder="textarea with clear icon" 
                        allowClear 
                        name="description"
                        onChange={this.onChange} />
                    <Input
                        placeholder="input with clear icon"
                        onClick={this.onSubmit} 
                        type="submit"
                        value="Add Blog"
                    />
                </form>
            </div>
        )
    }
}

// subscribe to the redux state update
const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

// trigger an update to the redux state
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleNewBlog: blog => dispatch(handleNewBlog(blog))
//     }
// }

// or

const mapDispatchToProps = dispatch => ({
        handleNewBlog: blog => dispatch(handleNewBlog(blog))
})

// const doSomething = () => ({
//    something
// })
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
