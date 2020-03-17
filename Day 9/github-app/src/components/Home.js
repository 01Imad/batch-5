import React, { Component } from 'react';
import Axios from "axios";

//local imports
import Grid from "./Grid";

class Home extends Component {
    state = {
        selectedlang: "Java",
        data: []
    }
    componentDidMount() {
        //call https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories
        Axios.get('https://api.github.com/search/repositories?q=stars:>1+language:' + this.state.selectedlang + '&sort=stars&order=desc&type=Repositories')
            .then((res) => {
                this.setState({
                    data: res.data.items
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    selectLang = (l) => {
        this.setState({
            selectedlang: l ,
            // data: []
        }, () => {
            console.log(this.state)
            this.fetchApi(this.state.selectedlang);
        })
    }

    fetchApi = (l) => {
        Axios.get('https://api.github.com/search/repositories?q=stars:>1+language:' + l + '&sort=stars&order=desc&type=Repositories')
        .then((res) => {
            this.setState({
                data: res.data.items
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const { selectLang } = this
        const { data } = this.state;
        const lang = ["Java", "JavaScript", "Python", "All"]
        return (
            <div>
                <h1>GitHub App</h1>
                {lang.map((l, i) => {
                    return <span className="padding-10px"
                        onClick={() => selectLang(l)}
                        style={
                            {
                                color: l === this.state.selectedlang ?
                                    "red" :
                                    "black"
                            }
                        } key={i}
                    >{l}</span>
                })}
                <Grid data={data} />
            </div>
        )
    }
}

export default Home;