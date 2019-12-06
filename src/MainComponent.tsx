import React, {Component} from 'react';
import Search from "./Search";
import axios from "axios";
import User from './UserInfo';
import {Table} from "react-bootstrap"

export interface MainComponentState {
    searchValue: string;
    counter: number;
    list: User[];
}

export interface User{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    ipAddress: string
}

class MainComponent extends Component<{}, MainComponentState> {
    state: MainComponentState = {
        searchValue: "",
        counter: 0,
        list: []
    };

    componentDidMount(){
        this.loadList();
    }

    loadList = async() => {
        const a = await axios.get<User[]>("http://localhost:3000");
        this.setState({
            list: a.data
        });
    }

    onChangeSearch = (value: string) => {
        this.setState({
            searchValue: value
        })
    };

    increaseValue = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decreaseValue = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        const { counter, searchValue } = this.state;

        return (
            <div>
                <Search value={searchValue} onChangeHandler={this.onChangeSearch} />
                <div>
                    Значение из поиска: {searchValue}
                </div>
                <hr />
                <div>
                    Hello from React (MainComponent.tsx)
                </div>
                <hr />
                <div>
                    <button onClick={this.increaseValue}>+1</button>
                    <button onClick={this.decreaseValue}>-1</button>
                    <div>
                        Значение: {this.state.counter}
                    </div>
                </div>
                <hr />
                <div>
                    Вывод списка:
                    <Table striped bordered hover>
                    {this.state.list.map((element, index) => 
                    
                        <User user={element} key={element.id} />
                    )}
                    </Table>
                </div>
            </div>
        );
    }
}

export default MainComponent;
